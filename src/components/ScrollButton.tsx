import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 300);
      setIsAtBottom(scrollTop > docHeight - 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.9)] hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="font-bold" />
        </button>
      )}

      {!isAtBottom && (
        <button
          onClick={scrollToBottom}
          className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.9)] hover:scale-110 animate-fade-in"
          aria-label="Scroll to bottom"
        >
          <ChevronDown size={24} className="font-bold" />
        </button>
      )}

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
