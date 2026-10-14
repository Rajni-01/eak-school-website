import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', text: 'Hello! Welcome to EAK International School. How can I help you with admissions today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userText = message;
    setChatLog(prev => [...prev, { sender: 'user', text: userText }]);
    setMessage('');

    setTimeout(() => {
      setChatLog(prev => [...prev, { sender: 'bot', text: 'Thank you for your query! Our admissions team will connect with you shortly, or you can fill out our Admissions Enquiry form.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-semibold transition transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden md:inline text-sm">Ask Admissions</span>
        </button>
      ) : (
        <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">EAK Admissions Assistant</h3>
              <p className="text-teal-400 text-xs">Typically replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-slate-50 text-sm">
            {chatLog.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${chat.sender === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'}`}>
                  {chat.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question..."
              className="flex-grow px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-600"
            />
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-xl">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}