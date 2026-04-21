import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'System initialized. Awaiting queries regarding Operator Palero.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const responseText = await generateResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', content: responseText || 'No data returned.' }]);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 glass text-tokyo-blue p-4 rounded-full shadow-lg shadow-tokyo-blue/20 hover:scale-105 transition-transform z-50 border border-tokyo-blue/30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] glass rounded-lg shadow-2xl z-50 flex flex-col font-mono text-sm overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="glass p-3 border-b border-white/5 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-tokyo-red"></div>
          <div className="w-3 h-3 rounded-full bg-tokyo-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-tokyo-green"></div>
          <span className="ml-2 text-tokyo-comment">gemini_terminal_v2.5</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-tokyo-fg hover:text-tokyo-red">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      {/* Output */}
      <div className="flex-1 p-4 overflow-y-auto bg-tokyo-bg_dark/30" ref={scrollRef}>
        {messages.map((m, idx) => (
          <div key={idx} className={`mb-3 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded ${m.role === 'user' ? 'bg-tokyo-comment text-white' : 'text-tokyo-blue'}`}>
              {m.role === 'model' && <span className="mr-2 text-tokyo-green">➜</span>}
              {m.content}
            </span>
          </div>
        ))}
        {loading && (
           <div className="text-left">
             <span className="text-tokyo-purple animate-pulse">Processing Intel...</span>
           </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 glass border-t border-white/5 flex gap-2">
        <span className="text-tokyo-green py-2">❯</span>
        <input 
          autoFocus
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-tokyo-fg focus:outline-none py-2"
          placeholder="Query intelligence..."
        />
      </form>
    </div>
  );
};

export default Terminal;