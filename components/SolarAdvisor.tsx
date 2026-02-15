
import React, { useState, useRef, useEffect } from 'react';
import { getSolarAdvice } from '../services/gemini';
import { Message } from '../types';
import logo from '../assets/logo.svg';

const SolarAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Mabuhay! I am your S&S Solar Assistant. Ready to see how much you can save with a smart microinverter system?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getSolarAdvice(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  const LogoIcon = () => (
    <img src={logo} alt="S&S Solar" className="w-full h-full object-contain" />
  );

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-[32px] shadow-[0_20px_100px_rgba(0,0,0,0.2)] w-80 md:w-[400px] h-[600px] flex flex-col mb-6 overflow-hidden border border-gray-100 animate-scale-up">
          {/* Chat Header */}
          <div className="bg-blue-950 text-white p-6 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex items-center relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center p-2 border border-white/20">
                <LogoIcon />
              </div>
              <div className="ml-4">
                <h4 className="font-black text-base leading-none mb-1">Smart Solar Advisor</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest">Always Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors bg-white/10 p-2 rounded-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-900 text-white shadow-lg rounded-br-none' : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/50 text-gray-400 p-4 rounded-3xl text-xs flex items-center space-x-2 italic shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0s]"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <span>Analyzing solar parameters...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white border-t border-gray-100 flex gap-3 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How much can I save monthly?"
              className="flex-1 bg-gray-100 border-none rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-900/10 transition-all placeholder:text-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-yellow-500 text-blue-950 p-3.5 rounded-2xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/20 disabled:opacity-50 disabled:grayscale"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-950 text-white w-20 h-20 rounded-[30px] flex items-center justify-center shadow-2xl hover:scale-105 hover:rotate-2 transition-all group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 mb-1">
              <LogoIcon />
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-yellow-400">Solar AI</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default SolarAdvisor;
