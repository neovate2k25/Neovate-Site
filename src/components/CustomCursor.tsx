import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-yellow-400/30 animate-pulse"></div>
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-yellow-400/20 animate-ping"></div>
        </div>
      </div>
    </>
  );
}
