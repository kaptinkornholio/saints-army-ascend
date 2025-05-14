
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface NFTRotatorProps {
  image: string;
  title: string;
}

const NFTRotator: React.FC<NFTRotatorProps> = ({ image, title }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        rotateY: [0, 8, 0, -8, 0],
        transition: { duration: 6, ease: "easeInOut" }
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [controls]);

  // Handle mouse move effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-xs mx-auto transform transition-transform duration-300"
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative overflow-hidden rounded-xl glow-border transition-all duration-300 
                    hover:shadow-[0_0_25px_rgba(178,0,255,0.6)] bg-gradient-to-br from-black/80 to-saints-purple/20">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-saints-dark to-transparent opacity-50"></div>
        </div>
        
        <div className="p-4 text-center">
          <h3 className="font-orbitron font-bold text-lg text-saints-gold mb-2">{title}</h3>
          <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 via-transparent to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {/* Holographic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -translate-x-full hover:translate-x-full"></div>
      </div>
    </motion.div>
  );
};

export default NFTRotator;
