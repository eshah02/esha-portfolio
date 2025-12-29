"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm Eshah's assistant. How can I help you today?" }
  ]);
    const [isLoading, setIsLoading] = useState(false); 
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true); 

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I'm having trouble connecting to the AI." }]);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 bg-[var(--bg-card)] border border-[var(--border-alpha)] rounded-2xl shadow-2xl mb-4 overflow-hidden flex flex-col h-[500px] backdrop-blur-md">
          <div className="bg-primary p-4 flex justify-between items-center">
            <span className="text-white font-black uppercase text-xs tracking-widest">Eshah AI</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90  focus:outline-none">
              <X size={20}/>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === "user" ? "bg-primary text-white rounded-br-none shadow-md" : "bg-[var(--bg-main)] text-[var(--text-main)] border border-[var(--border-alpha)] rounded-bl-none"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[var(--bg-main)] p-3 rounded-2xl border border-[var(--border-alpha)]">
                  <Loader2 className="animate-spin text-primary" size={18} />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-[var(--border-alpha)] 
          flex gap-2 bg-[var(--bg-card)]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Eshah..."
              className="flex-1 bg-[var(--bg-main)] border border-[var(--border-alpha)] 
              rounded-lg px-4 py-2 text-sm outline-none focus:border-primary text-[var(--text-main)]"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-primary text-white p-2 rounded-lg hover:opacity-80 
              transition-opacity disabled:opacity-50"
            >
              <Send size={18}/>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg 
        hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        {isOpen ? <X size={24}/> : <MessageSquare size={24}/>}
      </button>
    </div>
  );
}