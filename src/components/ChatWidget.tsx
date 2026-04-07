import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle } from 'lucide-react';
import { CHATBOT_CONFIG, validateWebhookConfig } from '../config/chatbot';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatWidgetProps {
  pageContext?: string;
  initialMessage?: string;
  exampleQuestions?: string[];
}

const ChatWidget = ({
  pageContext,
  initialMessage,
  exampleQuestions,
}: ChatWidgetProps = {}) => {
  const resolvedInitialMessage = initialMessage ?? CHATBOT_CONFIG.initialMessage;
  const resolvedQuestions = exampleQuestions ?? CHATBOT_CONFIG.exampleQuestions;

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: resolvedInitialMessage, sender: 'bot', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { validateWebhookConfig(); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messagesEndRef.current) {
        const container = messagesEndRef.current.closest('.overflow-y-auto');
        if (container) container.scrollTop = container.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const sendMessageToWebhook = async (messageText: string, userMessage: Message) => {
    try {
      const sessionId = sessionStorage.getItem('chatbot-session') || 'session-' + Date.now();
      if (!sessionStorage.getItem('chatbot-session')) sessionStorage.setItem('chatbot-session', sessionId);

      const params = new URLSearchParams({
        message: messageText,
        timestamp: userMessage.timestamp.toISOString(),
        userId: 'web-user-' + Date.now(),
        sessionId,
        thread: sessionStorage.getItem('chatbot-thread') || '',
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        pageContext: pageContext || '',
      });

      const response = await fetch(`${CHATBOT_CONFIG.webhookUrl}?${params.toString()}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const responseText = await response.text();
      if (!responseText || !responseText.trim()) {
        throw new Error('El webhook respondió con cuerpo vacío. Verifica el nodo "Respond to Webhook" en n8n.');
      }
      const data = JSON.parse(responseText);

      setMessages(prev => prev.filter(m => m.id !== 'typing'));
      if (data.thread) sessionStorage.setItem('chatbot-thread', data.thread);

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: data.output || CHATBOT_CONFIG.errorMessages.generic,
        sender: 'bot',
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => prev.filter(m => m.id !== 'typing'));
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: CHATBOT_CONFIG.errorMessages.connection,
        sender: 'bot',
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (text?: string) => {
    const msg = (text ?? inputText).trim();
    if (!msg || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: msg, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setMessages(prev => [...prev, { id: 'typing', text: '...', sender: 'bot', timestamp: new Date(), isTyping: true }]);
    await sendMessageToWebhook(msg, userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col h-[520px] lg:h-[560px]"
      style={{
        background: '#111120',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 flex items-center gap-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(0,191,165,0.1)', border: '1px solid rgba(0,191,165,0.2)' }}>
          <Bot className="w-4.5 h-4.5 text-[#00bfa5]" style={{ width: '18px', height: '18px' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-poppins font-semibold text-sm leading-tight">{CHATBOT_CONFIG.botName}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00bfa5]" />
            </span>
            <span className="text-[#00bfa5] text-xs font-lato" style={{ opacity: 0.75 }}>En línea ahora</span>
          </div>
        </div>
        <span className="font-lato text-xs font-semibold tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '2px' }}>IA</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5"
        style={{
          background: '#06080d',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.06) transparent',
        }}
      >
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: message.sender === 'user'
                    ? 'linear-gradient(135deg, #1d70a2, #00bfa5)'
                    : 'rgba(0,191,165,0.1)',
                  border: message.sender === 'user'
                    ? 'none'
                    : '1px solid rgba(0,191,165,0.2)',
                }}
              >
                {message.sender === 'user'
                  ? <User className="w-3 h-3 text-white" />
                  : <Bot className="w-3 h-3 text-[#00bfa5]" />}
              </div>
              <div
                className={`px-3.5 py-2.5 text-sm leading-relaxed ${message.isTyping ? 'animate-pulse' : ''} ${
                  message.sender === 'user' ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
                }`}
                style={message.sender === 'user' ? {
                  background: 'rgba(29,112,162,0.25)',
                  border: '1px solid rgba(29,112,162,0.35)',
                  color: 'rgba(255,255,255,0.9)',
                } : {
                  background: 'rgba(0,191,165,0.07)',
                  border: '1px solid rgba(0,191,165,0.18)',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {message.isTyping ? (
                  <div className="flex gap-1 items-center h-4">
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'rgba(0,191,165,0.5)' }} />
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'rgba(0,191,165,0.5)', animationDelay: '0.1s' }} />
                    <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'rgba(0,191,165,0.5)', animationDelay: '0.2s' }} />
                  </div>
                ) : (
                  <>
                    <p className="whitespace-pre-wrap font-lato">{message.text}</p>
                    <p className="text-xs mt-1 font-lato" style={{ color: 'rgba(255,255,255,0.25)' }}>
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

      {/* Quick questions */}
      <div className="px-4 pt-2.5 pb-2 flex-shrink-0"
        style={{ background: '#0d0d1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: 'none' }}>
          {resolvedQuestions.slice(0, 3).map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              disabled={isLoading}
              className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full transition-all duration-200 flex-shrink-0 disabled:opacity-30 font-lato"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(0,191,165,0.1)';
                e.currentTarget.style.borderColor = 'rgba(0,191,165,0.3)';
                e.currentTarget.style.color = '#00bfa5';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2.5 flex-shrink-0"
        style={{ background: '#0d0d1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta..."
              disabled={isLoading}
              className="w-full pl-4 pr-10 py-2.5 text-sm rounded-xl font-lato outline-none transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.8)',
              }}
              onFocus={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(0,191,165,0.35)';
              }}
              onBlur={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            />
            <MessageCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
              style={{ color: 'rgba(255,255,255,0.15)' }} />
          </div>
          <button
            onClick={() => sendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.03] active:scale-95"
            style={{
              background: inputText.trim() && !isLoading
                ? 'linear-gradient(90deg, #1d70a2, #00bfa5)'
                : 'rgba(255,255,255,0.06)',
              opacity: !inputText.trim() || isLoading ? 0.35 : 1,
              cursor: !inputText.trim() || isLoading ? 'not-allowed' : 'pointer',
            }}
          >
            {isLoading
              ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              : <Send className="w-4 h-4 text-white" />}
          </button>
        </div>
        <p className="text-center text-xs mt-2 font-lato" style={{ color: 'rgba(255,255,255,0.2)' }}>
          {isLoading ? 'Escribiendo...' : 'Presiona Enter para enviar'}
        </p>
      </div>
    </div>
  );
};

export default ChatWidget;
