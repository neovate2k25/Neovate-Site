import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      if (clickX < 50 && clickY < 50) {
        setPosition({ x: clickX, y: clickY });
        setIsVisible(true);

        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGa77OWcTBAKUKrj8LRhGwU5kdj0ynkqBSJzw+7djj4JFFux7OmnUhEJSKXl9bJdGAU0iM/x2IU0Bxtmvev');
        audio.volume = 0.3;
        audio.play().catch(() => {});

        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none animate-fade-in-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <Zap className="w-24 h-24 text-yellow-400" fill="currentColor" />
        </div>
        <Zap className="w-24 h-24 text-yellow-400 animate-spin-slow" fill="currentColor" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-yellow-400 font-bold text-2xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-pulse">
            Innovating the New!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
