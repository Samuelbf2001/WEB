import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle } from 'lucide-react';
import { CHATBOT_CONFIG, validateWebhookConfig, type WebhookRequest, type WebhookResponse } from '../config/chatbot';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatSectionProps {
  pageContext?: string;
  initialMessage?: string;
  exampleQuestions?: string[];
  sectionClassName?: string;
}

const ChatSection = ({
  pageContext,
  initialMessage,
  exampleQuestions,
  sectionClassName,
}: ChatSectionProps = {}) => {
  const resolvedInitialMessage = initialMessage ?? CHATBOT_CONFIG.initialMessage;
  const resolvedQuestions = exampleQuestions ?? CHATBOT_CONFIG.exampleQuestions;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: resolvedInitialMessage,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Validar configuración al cargar el componente
  useEffect(() => {
    validateWebhookConfig();
  }, []);

  const scrollToBottom = () => {
    // Solo hacer scroll si el elemento existe y está dentro del viewport del chat
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Delay para asegurar que el DOM se haya actualizado
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  // Función principal para enviar mensaje desde el input
  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    // Primer mensaje del usuario = inicio de conversación (lead potencial)
    const isFirstUserMessage = !messages.some(m => m.sender === 'user');
    if (isFirstUserMessage) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'chat_start',
        form_name: 'chat_asistente_ia',
        lead_type: 'chat',
        page: window.location.pathname,
      });
    }

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Mensaje de "escribiendo..."
    const typingMessage: Message = {
      id: 'typing',
      text: 'Escribiendo...',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    // Enviar al webhook
    await sendMessageToWebhook(userMessage.text, userMessage);
  };

  // Función auxiliar para enviar mensaje al webhook
  const sendMessageToWebhook = async (messageText: string, userMessage: Message) => {
    try {
      // Datos para enviar al webhook
      const webhookData: WebhookRequest = {
        message: userMessage.text,
        timestamp: userMessage.timestamp.toISOString(),
        userId: 'web-user-' + Date.now(),
        sessionId: sessionStorage.getItem('chatbot-session') || 'session-' + Date.now(),
        thread: sessionStorage.getItem('chatbot-thread') || undefined,
        userContext: {
          page: window.location.pathname,
          userAgent: navigator.userAgent,
          referrer: document.referrer
        }
      };

      // Guardar session ID
      if (!sessionStorage.getItem('chatbot-session')) {
        sessionStorage.setItem('chatbot-session', webhookData.sessionId!);
      }

      // Construir URL con parámetros para método GET
      const params = new URLSearchParams({
        message: webhookData.message,
        timestamp: webhookData.timestamp,
        userId: webhookData.userId,
        sessionId: webhookData.sessionId || '',
        thread: webhookData.thread || '',
        page: webhookData.userContext?.page || '',
        userAgent: webhookData.userContext?.userAgent || '',
        referrer: webhookData.userContext?.referrer || '',
        pageContext: pageContext || ''
      });
      
      // Petición al webhook con método GET
      const response = await fetch(`${CHATBOT_CONFIG.webhookUrl}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: WebhookResponse = await response.json();
      
      // Remover mensaje de "escribiendo..."
      setMessages(prev => prev.filter(msg => msg.id !== 'typing'));

      // Guardar el thread ID para futuras conversaciones
      if (data.thread) {
        sessionStorage.setItem('chatbot-thread', data.thread);
      }

      // Añadir respuesta del bot
      const botMessage: Message = {
        id: Date.now().toString(),
        text: data.output || CHATBOT_CONFIG.errorMessages.generic,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      // Bot respondió exitosamente → lead enganchado
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'chat_lead',
        form_name: 'chat_asistente_ia',
        lead_type: 'chat',
        page: window.location.pathname,
      });

    } catch (error) {
      console.error('Error al enviar mensaje al webhook:', error);
      
      // Remover mensaje de "escribiendo..."
      setMessages(prev => prev.filter(msg => msg.id !== 'typing'));

      // Mensaje de error amigable
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: CHATBOT_CONFIG.errorMessages.connection,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <section className={`relative pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 overflow-hidden ${sectionClassName ?? 'bg-[#0a2342]'}`}>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-[#1d70a2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#00bfa5]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#00bfa5]/30 rounded-full mb-4">
            <Bot className="w-4 h-4 text-[#00bfa5]" />
            <span className="text-[#00bfa5] font-semibold text-xs tracking-wide uppercase">Asistente IA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 font-poppins">
            Conversa con nuestro
            <br />
            <span className="text-[#00bfa5]">Asistente de IA</span>
          </h2>

          <p className="text-base sm:text-lg text-[#e0e0e0] max-w-3xl mx-auto px-4">
            Obtén respuestas inmediatas sobre automatización, RevOps, CRM y todas nuestras soluciones.
            Nuestro asistente está aquí para ayudarte a encontrar la solución perfecta para tu negocio.
          </p>
        </div>

        {/* Contenedor del Chat */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0d2d54] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">

            {/* Header del Chat */}
            <div className="bg-gradient-to-r from-[#1d70a2] to-[#0a2342] border-b border-white/10 p-4 sm:p-6 text-white">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00bfa5]/20 border border-[#00bfa5]/40 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#00bfa5]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base sm:text-lg font-poppins">{CHATBOT_CONFIG.botName}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-pulse"></div>
                    <p className="text-[#e0e0e0]/70 text-xs sm:text-sm">Especialista en RevOps y Automatización</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Área de Mensajes */}
            <div className="h-80 sm:h-96 lg:h-[500px] p-3 sm:p-6 overflow-y-auto bg-[#0a2342]/50">
              <div className="space-y-4 sm:space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-3 max-w-xs sm:max-w-md lg:max-w-lg ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>

                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        message.sender === 'user'
                          ? 'bg-[#00bfa5] text-white'
                          : 'bg-[#1d70a2]/40 border border-[#1d70a2]/60 text-[#00bfa5]'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>

                      {/* Mensaje */}
                      <div className={`px-4 py-3 rounded-2xl text-sm sm:text-base ${
                        message.sender === 'user'
                          ? 'bg-[#00bfa5] text-white rounded-br-md'
                          : 'bg-[#0d2d54] text-[#e0e0e0] rounded-bl-md shadow-sm border border-white/10'
                      } ${message.isTyping ? 'animate-pulse' : ''}`}>

                        {/* Indicador de escritura */}
                        {message.isTyping ? (
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                            <p className={`text-xs mt-2 opacity-60 ${
                              message.sender === 'user' ? 'text-white' : 'text-[#e0e0e0]'
                            }`}>
                              {formatTime(message.timestamp)}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 sm:p-6 bg-[#0d2d54] border-t border-white/10">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu pregunta..."
                    className="w-full pl-3 pr-10 sm:pl-4 sm:pr-12 py-2 sm:py-3 bg-[#0a2342] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00bfa5] focus:border-transparent text-sm sm:text-base text-white placeholder-white/40"
                    disabled={isLoading}
                  />
                  <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white/30" />
                  </div>
                </div>

                <button
                  onClick={sendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="px-3 sm:px-6 py-2 sm:py-3 bg-[#00bfa5] hover:bg-[#00a08a] text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 font-semibold flex items-center space-x-1 sm:space-x-2"
                  title="Enviar mensaje"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Enviar</span>
                </button>
              </div>

              {/* Indicador de estado */}
              <div className="mt-2 sm:mt-3 text-xs text-white/40 text-center">
                {isLoading ? (
                  <span className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#00bfa5] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs">El asistente está escribiendo...</span>
                  </span>
                ) : (
                  <span className="text-xs">Presiona Enter para enviar</span>
                )}
              </div>
            </div>
          </div>

          {/* Sugerencias rápidas */}
          <div className="mt-6 sm:mt-8 text-center px-4 sm:px-0">
            <p className="text-[#e0e0e0]/60 mb-3 sm:mb-4 font-medium text-sm sm:text-base">Preguntas frecuentes:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {resolvedQuestions.slice(0, 4).map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputText(question);
                    // Enviar automáticamente después de un pequeño delay
                    setTimeout(() => {
                      if (question.trim() && !isLoading) {
                        const userMessage = {
                          id: Date.now().toString(),
                          text: question.trim(),
                          sender: 'user' as const,
                          timestamp: new Date()
                        };
                        setMessages(prev => [...prev, userMessage]);
                        setInputText('');
                        setIsLoading(true);

                        // Mensaje de "escribiendo..."
                        const typingMessage = {
                          id: 'typing',
                          text: 'Escribiendo...',
                          sender: 'bot' as const,
                          timestamp: new Date(),
                          isTyping: true
                        };
                        setMessages(prev => [...prev, typingMessage]);

                        // Enviar al webhook
                        sendMessageToWebhook(question.trim(), userMessage);
                      }
                    }, 100);
                  }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 text-[#e0e0e0] rounded-full border border-white/10 hover:border-[#00bfa5]/60 hover:text-[#00bfa5] hover:bg-white/10 transition-colors text-xs sm:text-sm"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection; 