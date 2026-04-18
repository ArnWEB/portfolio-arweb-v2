import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const LANGFLOW_URL = 'https://langflow-dev.mangobeach-b9acefb4.westus2.azurecontainerapps.io/api/v1/run/chat';
const API_KEY = 'sk-i8v-wY4VFB8bNsmOKLFzAGqabn7QMbfcRj0wJax3g98';

const generateSessionId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const DEFAULT_RESPONSES = [
  "I'm Arnab's AI assistant. He's an AI engineer specializing in LLM fine-tuning and RAG systems.",
  "Arnab has experience building AI pipelines with Neo4j, QLoRA, and Azure services.",
  "He recently worked on enterprise compliance AI solutions and document processing pipelines.",
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hi! I'm Arnab's AI assistant. Ask me anything about his work or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(LANGFLOW_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY
        },
        body: JSON.stringify({
          output_type: 'chat',
          input_type: 'chat',
          session_id: generateSessionId(),
          tweaks: {
            "ChatInput-3S93U": {
              input_value: input.trim()
            }
          }
        })
      });

      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      const assistantResponse = data?.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
                          data?.outputs?.[0]?.outputs?.[0]?.artifacts?.message ||
                          DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)];

      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-a',
        role: 'assistant',
        content: assistantResponse
      }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-a',
        role: 'assistant',
        content: DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 kinetic-gradient w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="text-white" size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[90vw] max-w-sm md:max-w-md bg-surface rounded-xl shadow-2xl border border-outline-variant/30 overflow-hidden">
      <div className="kinetic-gradient px-4 py-3 flex items-center justify-between">
        <span className="text-white text-sm font-bold uppercase tracking-wider">AI Assistant</span>
        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
          <X size={18} />
        </button>
      </div>
      
      <div className="h-72 md:h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-surface-container text-on-surface'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-surface-container px-3 py-2 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-outline-variant/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about Arnab..."
            className="flex-1 px-3 py-2 text-sm bg-surface-container border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}