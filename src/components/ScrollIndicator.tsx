import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  return (
    <button 
      onClick={() => scrollToSection(targetId)}
      className="w-full py-8 flex items-center justify-center cursor-pointer group"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
          <ChevronDown className="text-primary group-hover:text-white animate-bounce" size={16} />
        </div>
      </div>
    </button>
  );
}