import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import avatarImage from "@assets/generated_images/minimalist_ai_avatar_line_art.png";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  options?: string[];
};

export function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      text: "Welcome to Barefoot Luxury. I'm your advisor. Are you looking for a personal retreat, an investment property, or a mix of both?",
      options: ["Personal Retreat", "Investment Only", "Mix of Both"]
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg: Message = { id: Date.now().toString(), role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate AI Response (Mock Logic)
    setTimeout(() => {
      let responseText = "Excellent choice. Tell me, what is your ideal budget range?";
      let options = ["$500k - $700k", "$700k - $1M", "$1M+"];

      if (text.toLowerCase().includes("budget") || text.includes("$")) {
        responseText = "Noted. And do you prefer deep jungle privacy or being closer to the beach/restaurants?";
        options = ["Deep Jungle Privacy", "Close to Action", "Balance of Both"];
      } else if (text.toLowerCase().includes("jungle") || text.toLowerCase().includes("beach")) {
        responseText = "I have a few concepts that match that vision perfectly. Would you like to schedule a virtual tour to see the floorplans and renders?";
        options = ["Schedule Virtual Tour", "View Renders First", "Ask a Question"];
      }

      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: "assistant", 
        text: responseText,
        options 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-white text-primary p-4 rounded-full shadow-2xl border border-accent/20 hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <div className="relative">
          <img src={avatarImage} alt="AI" className="w-8 h-8 opacity-80" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white p-1 border border-accent/30 overflow-hidden">
                  <img src={avatarImage} alt="AI Advisor" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary">Barefoot Advisor</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Online Now</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-primary/10 rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white border border-border/50 text-foreground rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Quick Options */}
              {messages[messages.length - 1].role === "assistant" && messages[messages.length - 1].options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {messages[messages.length - 1].options!.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSend(opt)}
                      className="text-xs border border-accent/40 text-primary bg-accent/5 hover:bg-accent hover:text-white px-3 py-1.5 rounded-full transition-all duration-300"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-white/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="bg-transparent border-primary/10 focus-visible:ring-accent rounded-full px-4"
                />
                <Button type="submit" size="icon" className="rounded-full bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
