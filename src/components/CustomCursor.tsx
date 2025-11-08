import { useEffect, useState } from 'react';

export default function SimpleCustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Main dot with glow effect - Yellow by default, White on hover */}
          <div className={`
            w-2 h-2 rounded-full transition-all duration-300 relative
            ${isPointer 
              ? 'bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
              : 'bg-yellow-400 scale-100 shadow-[0_0_10px_rgba(250,204,21,0.5)]'
            }
            ${isClicking ? 'scale-75' : ''}
          `}>
            {/* Inner pulse effect - Yellow for default state, White for pointer state */}
            {!isPointer && (
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-60"></div>
            )}
            {isPointer && (
              <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-60"></div>
            )}
          </div>
          
          {/* Glow orb - Yellow by default, White on hover */}
          <div className={`
            absolute inset-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500
            ${isPointer 
              ? 'w-8 h-8 bg-white/40 scale-100 blur-sm' 
              : 'w-6 h-6 bg-yellow-400/20 scale-100 blur-sm'
            }
            ${isClicking ? 'scale-75 bg-white/60' : ''}
          `}></div>
          
          {/* Outer ring with trail effect - Yellow by default, White on hover */}
          <div className={`
            absolute inset-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-700
            ${isPointer 
              ? 'w-12 h-12 border-white/30 scale-100' 
              : 'w-8 h-8 border-yellow-400/20 scale-100'
            }
            ${isClicking ? 'scale-125 border-white/50' : ''}
          `}></div>
          
          {/* Particle trail effect - White for pointer state */}
          {isPointer && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 20 - 10}px`,
                    top: `${Math.random() * 20 - 10}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                    opacity: 0.6 + Math.random() * 0.4,
                  }}
                />
              ))}
            </>
          )}
          
          {/* Click ripple effect - White for pointer state */}
          {isClicking && (
            <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
              <div className={`absolute w-16 h-16 border-2 rounded-full animate-ping opacity-20
                ${isPointer ? 'border-white' : 'border-yellow-400'}`}>
              </div>
              <div className={`absolute w-20 h-20 border rounded-full animate-ping opacity-10
                ${isPointer ? 'border-white' : 'border-yellow-300'}`} 
                   style={{animationDelay: '0.1s'}}>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          /* Hide on touch devices */
          @media (pointer: coarse) {
            .fixed {
              display: none !important;
            }
          }
          
          /* Custom animations */
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
          }
          
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
}