import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { CHATBOT_CONFIG, validateWebhookConfig } from "@/config/chatbot";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
}

/* ── quick chips — 3 layers → 3 agents ── */
const quickQuestions = [
  "¿Pueden auditar mi CRM actual?",
  "¿Pueden montar una integración HubSpot + WhatsApp?",
  "¿Pueden operar mi pipeline esta semana?",
];

export const ChatConciergeV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: CHATBOT_CONFIG.initialMessage,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    validateWebhookConfig();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messagesEndRef.current) {
        const container = messagesEndRef.current.closest(".overflow-y-auto");
        if (container) container.scrollTop = container.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const sendMessageToWebhook = async (messageText: string, userMessage: Message) => {
    try {
      const sessionId =
        sessionStorage.getItem("chatbot-session") || "session-" + Date.now();
      if (!sessionStorage.getItem("chatbot-session"))
        sessionStorage.setItem("chatbot-session", sessionId);

      const params = new URLSearchParams({
        message: messageText,
        timestamp: userMessage.timestamp.toISOString(),
        userId: "web-user-" + Date.now(),
        sessionId,
        thread: sessionStorage.getItem("chatbot-thread") || "",
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        pageContext: "v2-homepage",
      });

      const response = await fetch(
        `${CHATBOT_CONFIG.webhookUrl}?${params.toString()}`,
        { method: "GET", headers: { Accept: "application/json" } }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const responseText = await response.text();
      if (!responseText?.trim()) throw new Error("Respuesta vacía del webhook.");
      const data = JSON.parse(responseText);

      setMessages((prev) => prev.filter((m) => m.id !== "typing"));
      if (data.thread) sessionStorage.setItem("chatbot-thread", data.thread);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: data.output || CHATBOT_CONFIG.errorMessages.generic,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== "typing"));
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: CHATBOT_CONFIG.errorMessages.connection,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (text?: string) => {
    const msg = (text ?? inputText).trim();
    if (!msg || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: msg,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      { id: "typing", text: "...", sender: "bot", timestamp: new Date(), isTyping: true },
    ]);
    await sendMessageToWebhook(msg, userMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });

  return (
    <Section surface="navy-dark" size="default" className="overflow-hidden">
      {/* Aurora orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,191,165,0.09) 0%, transparent 65%)",
          animation: "v2-aurora-1 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(29,112,162,0.12) 0%, transparent 65%)",
          animation: "v2-aurora-2 22s ease-in-out infinite",
        }}
      />

      <Container>
        <div ref={ref}>
          {/* Section header */}
          <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
            <Eyebrow variant="teal">Agente Concierge — Capa Consultoría</Eyebrow>
            <h2
              className="font-poppins font-bold text-white mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Habla con Alex.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  Coordina tu cuenta antes de que lo pidas.
                </em>
              </Underlined>
            </h2>
            <p className="font-lato text-[17px] text-white/55 max-w-[520px] mx-auto mt-4 leading-relaxed">
              Alex es el agente IA que recibe tus mensajes en Slack o WhatsApp, decide qué
              especialista del equipo lo opera, y te devuelve el trabajo hecho. Sin tickets,
              sin portales que aprender.
            </p>
          </div>

          {/* Main layout — chat + side panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            {/* Chat widget */}
            <div
              className="v2-reveal v2-d1 rounded-2xl overflow-hidden flex flex-col"
              style={{
                height: "520px",
                background: "rgba(10,35,66,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.40)",
              }}
            >
              {/* Chat header */}
              <div
                className="px-5 py-3.5 flex items-center gap-3 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,191,165,0.12)",
                    border: "1px solid rgba(0,191,165,0.22)",
                  }}
                >
                  <Bot style={{ width: "18px", height: "18px" }} className="text-v2-accent-teal" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-poppins font-semibold text-sm leading-tight">
                    {CHATBOT_CONFIG.botName}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-accent-teal opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-v2-accent-teal" />
                    </span>
                    <span
                      className="text-v2-accent-teal text-xs font-lato"
                      style={{ opacity: 0.75 }}
                    >
                      En línea ahora
                    </span>
                  </div>
                </div>
                <span
                  className="font-lato text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "2px" }}
                >
                  IA
                </span>
              </div>

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-3.5"
                style={{
                  background: "rgba(4,10,22,0.6)",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.06) transparent",
                }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-end gap-2 max-w-[85%] ${
                        message.sender === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            message.sender === "user"
                              ? "linear-gradient(135deg, #1d70a2, #00bfa5)"
                              : "rgba(0,191,165,0.10)",
                          border:
                            message.sender === "user"
                              ? "none"
                              : "1px solid rgba(0,191,165,0.22)",
                        }}
                      >
                        {message.sender === "user" ? (
                          <User className="w-3 h-3 text-white" />
                        ) : (
                          <Bot className="w-3 h-3 text-v2-accent-teal" />
                        )}
                      </div>

                      <div
                        className={`px-3.5 py-2.5 text-sm leading-relaxed ${
                          message.isTyping ? "animate-pulse" : ""
                        } ${
                          message.sender === "user"
                            ? "rounded-2xl rounded-br-sm"
                            : "rounded-2xl rounded-bl-sm"
                        }`}
                        style={
                          message.sender === "user"
                            ? {
                                background: "rgba(29,112,162,0.28)",
                                border: "1px solid rgba(29,112,162,0.38)",
                                color: "rgba(255,255,255,0.9)",
                              }
                            : {
                                background: "rgba(0,191,165,0.07)",
                                border: "1px solid rgba(0,191,165,0.18)",
                                color: "rgba(255,255,255,0.85)",
                              }
                        }
                      >
                        {message.isTyping ? (
                          <div className="flex gap-1 items-center h-4">
                            <div
                              className="w-1.5 h-1.5 rounded-full animate-bounce"
                              style={{ background: "rgba(0,191,165,0.5)" }}
                            />
                            <div
                              className="w-1.5 h-1.5 rounded-full animate-bounce"
                              style={{
                                background: "rgba(0,191,165,0.5)",
                                animationDelay: "0.1s",
                              }}
                            />
                            <div
                              className="w-1.5 h-1.5 rounded-full animate-bounce"
                              style={{
                                background: "rgba(0,191,165,0.5)",
                                animationDelay: "0.2s",
                              }}
                            />
                          </div>
                        ) : (
                          <>
                            <p className="whitespace-pre-wrap font-lato">{message.text}</p>
                            <p
                              className="text-xs mt-1 font-lato"
                              style={{ color: "rgba(255,255,255,0.25)" }}
                            >
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
              <div
                className="px-4 pt-2.5 pb-2 flex-shrink-0"
                style={{
                  background: "rgba(6,12,28,0.7)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="flex gap-2 overflow-x-auto pb-0.5"
                  style={{ scrollbarWidth: "none" }}
                >
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      disabled={isLoading}
                      className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full flex-shrink-0 disabled:opacity-30 font-lato transition-[background,border-color,color] duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0,191,165,0.10)";
                        e.currentTarget.style.borderColor = "rgba(0,191,165,0.30)";
                        e.currentTarget.style.color = "#00bfa5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div
                className="px-4 pb-4 pt-2.5 flex-shrink-0"
                style={{
                  background: "rgba(6,12,28,0.7)",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Escribe tu pregunta..."
                      disabled={isLoading}
                      className="w-full pl-4 pr-10 py-2.5 text-sm rounded-xl font-lato outline-none transition-[background,border-color] duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.8)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.borderColor = "rgba(0,191,165,0.35)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      }}
                    />
                    <MessageCircle
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
                      style={{ color: "rgba(255,255,255,0.15)" }}
                    />
                  </div>
                  <button
                    onClick={() => sendMessage()}
                    disabled={!inputText.trim() || isLoading}
                    className="px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-[opacity,transform] duration-200 hover:scale-[1.03] active:scale-95"
                    style={{
                      background:
                        inputText.trim() && !isLoading
                          ? "linear-gradient(90deg, #1d70a2, #00bfa5)"
                          : "rgba(255,255,255,0.06)",
                      opacity: !inputText.trim() || isLoading ? 0.35 : 1,
                      cursor:
                        !inputText.trim() || isLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
                <p
                  className="text-center text-xs mt-2 font-lato"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {isLoading ? "Escribiendo..." : "Presiona Enter para enviar"}
                </p>
              </div>
            </div>

            {/* Side panel — value propositions */}
            <div className="v2-reveal v2-d2 flex flex-col gap-5">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal mb-3">
                  Qué puedes preguntarle
                </p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "¿Pueden auditar mi CRM actual?",
                    "¿Pueden montar una integración HubSpot + WhatsApp?",
                    "¿Pueden operar mi pipeline esta semana?",
                    "¿Cómo funciona el Diagnóstico Sixteam?",
                    "¿Cómo se diferencia Sixteam.pro de una agencia?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-v2-accent-teal/60 font-lato text-[13px] mt-0.5">
                        →
                      </span>
                      <button
                        onClick={() => sendMessage(q)}
                        disabled={isLoading}
                        className="font-lato text-[13px] text-white/60 hover:text-white text-left transition-colors duration-200 disabled:opacity-30"
                      >
                        {q}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(0,191,165,0.07)",
                  border: "1px solid rgba(0,191,165,0.18)",
                }}
              >
                <p className="font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal mb-3">
                  ¿Listo para arrancar?
                </p>
                <p className="font-lato text-[14px] text-white/70 leading-relaxed mb-4">
                  El Diagnóstico Sixteam es una auditoría de 2 semanas: auditamos tu operación,
                  mapeamos el stack y entregamos un plan ejecutable. $2,500 USD.
                </p>
                <Link to="/v2/radar">
                  <ButtonV2
                    variant="outline"
                    size="sm"
                    className="!text-white !border-white/25 !bg-white/5 hover:!bg-white/10 hover:!border-white/40 w-full justify-center"
                  >
                    Solicitar Diagnóstico — $2,500
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ChatConciergeV2;
