import React, { useMemo } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const GraduationCapsAnimation = () => {
  // Criar os chapéus apenas UMA VEZ
  const caps = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      left: `${10 + Math.random() * 80}%`,
      fontSize: `${Math.random() * 20 + 30}px`,
      offsetX: `${Math.random() * 4 - 2}`,
      offsetXEnd: `${Math.random() * 4 - 2}`,
      delay: `${Math.random() * 1}s`,
      duration: `${4 + Math.random() * 15}s`,
    }));
  }, []); // 🔥 <— só roda no primeiro render

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {caps.map((cap, index) => (
        <div
          key={index}
          className="graduation-cap-throw"
          style={{
            left: cap.left,
            fontSize: cap.fontSize,
            '--offset-x': cap.offsetX,
            '--offset-x-end': cap.offsetXEnd,
            animationDelay: cap.delay,
            animationDuration: cap.duration,
          }}
        >
          <FaGraduationCap />
        </div>
      ))}
    </div>
  );
};

export default GraduationCapsAnimation;
