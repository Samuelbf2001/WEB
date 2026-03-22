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
      const data = await response.json();

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
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[520px] lg:h-[560px]">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a2342] to-[#1d70a2] px-5 py-4 flex items-center gap-3 flex-shrink-0">
        <div className="w-10 h-10 bg-[#00bfa5]/20 border border-[#00bfa5]/40 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-[#00bfa5]" />
        </div>
        <div>
          <p className="text-white font-poppins font-semibold text-sm">{CHATBOT_CONFIG.botName}</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#00bfa5] rounded-full animate-pulse" />
            <span className="text-[#00bfa5] text-xs">En línea ahora</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.sender === 'user' ? 'bg-[#1d70a2]' : 'bg-[#0a2342]'
              }`}>
                {message.sender === 'user'
                  ? <User className="w-3.5 h-3.5 text-white" />
                  : <Bot className="w-3.5 h-3.5 text-[#00bfa5]" />}
              </div>
              <div className={`px-4 py-2.5 rounded-2xl text-sm ${
                message.sender === 'user'
                  ? 'bg-[#1d70a2] text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
              } ${message.isTyping ? 'animate-pulse' : ''}`}>
                {message.isTyping ? (
                  <div className="flex gap-1 items-center h-4">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                ) : (
                  <>
                    <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-60 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
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
      <div className="px-4 pt-3 pb-2 bg-white border-t border-gray-100 flex-shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {resolvedQuestions.slice(0, 3).map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              disabled={isLoading}
              className="whitespace-nowrap text-xs px-3 py-1.5 bg-gray-50 hover:bg-[#e6f7f5] text-gray-600 hover:text-[#00897b] border border-gray-200 hover:border-[#00bfa5]/40 rounded-full transition-colors flex-shrink-0 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2 bg-white flex-shrink-0">
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
              className="w-full pl-4 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1d70a2]/30 focus:border-[#1d70a2] bg-gray-50"
            />
            <MessageCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          </div>
          <button
            onClick={() => sendMessage()}
            disabled={!inputText.trim() || isLoading}
            className="px-4 py-2.5 bg-[#0a2342] hover:bg-[#1d70a2] text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
          >
            {isLoading
              ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              : <Send className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          {isLoading ? 'Escribiendo...' : 'Presiona Enter para enviar'}
        </p>
      </div>
    </div>
  );
};

export default ChatWidget;
