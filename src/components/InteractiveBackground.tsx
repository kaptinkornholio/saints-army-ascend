
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create interactive elements
    const container = containerRef.current;
    const elements: HTMLDivElement[] = [];
    const numElements = 15;
    
    for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.className = 'absolute rounded-full shadow-lg';
      
      // Randomize size between 50px and 200px
      const size = Math.floor(Math.random() * 150) + 50;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      
      // Randomize position
      const maxX = window.innerWidth - size;
      const maxY = Math.max(document.body.scrollHeight, window.innerHeight) - size;
      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      
      // Apply gradient and blur
      const hue1 = Math.floor(Math.random() * 60) + 240; // Blues to purples
      const hue2 = Math.floor(Math.random() * 60) + 40;  // Golds
      element.style.background = `radial-gradient(circle, hsla(${hue1}, 100%, 70%, 0.03), hsla(${hue2}, 100%, 60%, 0.08))`;
      element.style.filter = `blur(${Math.random() * 40 + 10}px)`;
      element.style.transform = `rotate(${Math.random() * 360}deg)`;
      element.style.opacity = `${Math.random() * 0.07 + 0.03}`;
      element.style.zIndex = '-1';
      
      // Add to container
      container.appendChild(element);
      elements.push(element);
      
      // Add animation
      const duration = Math.random() * 15 + 10;
      element.style.transition = `transform ${duration}s ease-in-out, filter ${duration / 2}s ease-in-out`;
      
      setInterval(() => {
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        element.style.transform = `translate(${newX - x}px, ${newY - y}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.8})`;
        element.style.filter = `blur(${Math.random() * 40 + 10}px)`;
      }, duration * 1000);
    }
    
    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      elements.forEach((element, i) => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;
        
        const deltaX = clientX - elementX;
        const deltaY = clientY - elementY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // Only affect elements close to the cursor
        const maxDistance = 400;
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = deltaX * strength * 0.1;
          const moveY = deltaY * strength * 0.1;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.2})`;
          element.style.filter = `blur(${Math.random() * 20 + 5}px)`;
          element.style.opacity = `${(Math.random() * 0.05 + 0.05) + strength * 0.1}`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elements.forEach(element => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      });
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Container for dynamically generated elements */}
    </div>
  );
};

export default InteractiveBackground;
