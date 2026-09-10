import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 How can I help you build or setup your AI assistant today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: userText,
      time: timeNow
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = "Thanks for reaching out! I'm your AI assistant.";
      const query = userText.toLowerCase();
      if (query.includes('price') || query.includes('cost')) {
        botResponseText = "Our plans start with a free trial! Check out our Pricing page.";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '16px',
      zIndex: 2147483647,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    triggerBtn: {
      position: 'relative',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
      outline: 'none'
    },
    onlineDot: {
      position: 'absolute',
      top: '2px',
      right: '2px',
      width: '12px',
      height: '12px',
      backgroundColor: '#22c55e',
      border: '2px solid #ffffff',
      borderRadius: '50%'
    },
    popup: {
      width: 'calc(100vw - 32px)',
      maxWidth: '340px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      border: '1px solid #e2e8f0',
      marginBottom: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    avatar: {
      position: 'relative',
      width: '34px',
      height: '34px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    body: {
      padding: '14px',
      backgroundColor: '#f8fafc',
      height: '240px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    bubbleUser: {
      alignSelf: 'flex-end',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      padding: '8px 12px',
      borderRadius: '12px 12px 2px 12px',
      fontSize: '13px',
      maxWidth: '80%',
      wordBreak: 'break-word'
    },
    bubbleBot: {
      alignSelf: 'flex-start',
      backgroundColor: '#ffffff',
      color: '#1e293b',
      padding: '8px 12px',
      borderRadius: '12px 12px 12px 2px',
      fontSize: '13px',
      border: '1px solid #e2e8f0',
      maxWidth: '80%',
      wordBreak: 'break-word'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0'
    },
    input: {
      flex: 1,
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '8px 12px',
      fontSize: '13px',
      outline: 'none'
    },
    sendBtn: {
      width: '34px',
      height: '34px',
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  const chatUI = (
    <div style={styles.container}>
      {isOpen && (
        <div style={styles.popup}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerInfo}>
              <div style={styles.avatar}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                <span style={styles.onlineDot}></span>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>AI Assistant</h4>
                <p style={{ margin: 0, fontSize: '11px', opacity: 0.85 }}>Online | Instant Replies</p>
              </div>
            </div>
            <button 
              onClick={toggleChat} 
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '18px' }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={styles.body}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                style={msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div style={styles.bubbleBot}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <form onSubmit={handleSend} style={styles.footer}>
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.sendBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button onClick={toggleChat} style={styles.triggerBtn}>
        {isOpen ? (
          '✕'
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span style={styles.onlineDot}></span>
          </>
        )}
      </button>
    </div>
  );

  return ReactDOM.createPortal(chatUI, document.body);
};

export default FloatingChat;