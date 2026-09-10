import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Sparkles, Send, Maximize2, X, MoreHorizontal } from 'lucide-react';

const fullConversation = [
  {
    id: 1,
    sender: 'user',
    text: 'Hello! Let me quickly check your subscription status for you.',
  },
  {
    id: 2,
    sender: 'ai',
    text: 'Your payment was successful! Please refresh your browser or log in again to sync your new permissions.',
  },
  {
    id: 3,
    sender: 'user',
    text: 'That worked perfectly, thank you so much!',
  },
  {
    id: 4,
    sender: 'ai',
    text: 'You are welcome! Is there anything else I can assist you with today?',
  
  },
];

const AiFeatureShowcase = () => {
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTypingDots, setIsTypingDots] = useState(false);
  const chatBodyRef = useRef(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const runChatLoop = async () => {
      while (isMounted) {
        setMessages([]);
        setIsTypingDots(false);
        await new Promise((r) => setTimeout(r, 600));

        for (let i = 0; i < fullConversation.length; i++) {
          if (!isMounted) break;

          const current = fullConversation[i];
          if (current.sender === 'ai') {
            setIsTypingDots(true);
            scrollToBottom();
            await new Promise((r) => setTimeout(r, 800));
            if (!isMounted) break;
            setIsTypingDots(false);
          }
          setMessages((prev) => [
            ...prev,
            { ...current, text: '', isComplete: false },
          ]);
          for (let c = 1; c <= current.text.length; c++) {
            if (!isMounted) break;

            const nextText = current.text.slice(0, c);
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === current.id ? { ...msg, text: nextText } : msg
              )
            );

            scrollToBottom();
            await new Promise((r) => setTimeout(r, 25));
          }
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === current.id ? { ...msg, isComplete: true } : msg
            )
          );
          await new Promise((r) => setTimeout(r, 1200));
        }
        await new Promise((r) => setTimeout(r, 4000));
      }
    };

    runChatLoop();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="ai-feature-section">
      <div className="container ai-feature-grid">
        
        {/* Left Side: Dynamic Chat Preview Showcase */}
        <div className="chat-preview-card">
          <div className="chat-window shadow-glow">
            
            {/* Header */}
            <div className="chat-header">
              <div className="agent-pill">
                <div className="agent-avatar">
                  <Bot size={14} color="#ffffff" />
                </div>
                <span>AI Support Agent</span>
                <span className="online-status"></span>
              </div>

              <div className="chat-controls">
                <button className="icon-btn"><Maximize2 size={14} /></button>
                <button className="icon-btn"><MoreHorizontal size={14} /></button>
                <button className="icon-btn"><X size={14} /></button>
              </div>
            </div>

            {/* Chat Body with Ref for Smooth Scroll */}
            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((msg) => {
                if (msg.sender === 'user') {
                  return (
                    <div key={msg.id} className="message-row user-row">
                      <div className="user-avatar">
                        <User size={14} color="#ffffff" />
                      </div>
                      <div className="bubble user-bubble">
                        {msg.text}
                        {!msg.isComplete && <span className="typing-cursor">|</span>}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={msg.id} className="message-row ai-row">
                    <div className="ai-icon-badge">
                      <Bot size={16} color="#ffffff" />
                    </div>
                    <div className="ai-bubble-container">
                      <div className="bubble ai-bubble">
                        {msg.text}
                        {!msg.isComplete && <span className="typing-cursor">|</span>}
                      </div>
                      {msg.isComplete && (
                        <div className="ai-badge">
                          <Sparkles size={12} color="#a855f7" />
                          <span>Answered by AI</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing dots */}
              {isTypingDots && (
                <div className="message-row ai-row">
                  <div className="ai-icon-badge">
                    <Bot size={16} color="#ffffff" />
                  </div>
                  <div className="bubble ai-bubble typing-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Input */}
            <div className="chat-footer">
              <input 
                type="text" 
                placeholder="Write a message..." 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button className="send-btn">
                <Send size={14} color="#ffffff" />
              </button>
            </div>

          </div>
        </div>

        {/* Right Side Content */}
        <div className="feature-content">
          <div className="pill-tag">
            <Sparkles size={12} />
            <span>AI AUTOMATION</span>
          </div>

          <h2>
            Deliver on-point answers <br />
            <span>with AI automation</span>
          </h2>

          <p>
            Answer customer questions 24/7. Your customer service chatbot learns from 
            your website, help center, and product docs, so every response matches your business.
          </p>

          <div className="cta-group">
            <button className="btn-primary-glow">
              Sign up free
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiFeatureShowcase;