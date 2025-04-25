// components/MouseMoveEffect.tsx
import { useEffect } from 'react';

const MouseMoveEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      const box = document.querySelector('.box') as HTMLElement;
      if (box) {
        box.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
      }
    };

    // Attach mousemove event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Box that moves based on mouse position */}
      <div className="box w-24 h-24 bg-blue-500 rounded-lg absolute transition-transform duration-200 ease-out"></div>
    </div>
  );
};

export default MouseMoveEffect;
