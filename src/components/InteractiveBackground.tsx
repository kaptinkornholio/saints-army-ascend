import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create interactive elements
    const container = containerRef.current;
    const elements: HTMLDivElement[] = [];
    
    // Reduce the number of elements on mobile for better performance
    const numElements = isMobile ? 4 : 15;
    
    for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.className = 'absolute rounded-full shadow-lg';
      
      // Smaller elements on mobile
      const maxSize = isMobile ? 80 : 200;
      const minSize = isMobile ? 20 : 50;
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      
      // Randomize position
      const maxX = window.innerWidth - size;
      const maxY = container.clientHeight - size;
      const x = Math.floor(Math.random() * maxX);
      // Keep elements more visible on mobile by limiting the Y position
      const y = isMobile 
        ? Math.floor(Math.random() * (window.innerHeight * 0.8)) 
        : Math.floor(Math.random() * maxY);
      
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      
      // Apply gradient and blur
      const hue1 = Math.floor(Math.random() * 60) + 240; // Blues to purples
      const hue2 = Math.floor(Math.random() * 60) + 40;  // Golds
      element.style.background = `radial-gradient(circle, hsla(${hue1}, 100%, 70%, 0.03), hsla(${hue2}, 100%, 60%, 0.08))`;
      element.style.filter = `blur(${Math.random() * 40 + 10}px)`;
      element.style.transform = `rotate(${Math.random() * 360}deg)`;
      element.style.opacity = isMobile ? `${Math.random() * 0.05 + 0.02}` : `${Math.random() * 0.07 + 0.03}`;
      element.style.zIndex = '-1';
      
      // Add to container
      container.appendChild(element);
      elements.push(element);
      
      // Slower animations on mobile for better performance
      const duration = isMobile ? 
        Math.random() * 25 + 20 : // Slower on mobile
        Math.random() * 15 + 10;  // Normal on desktop
      
      element.style.transition = `transform ${duration}s ease-in-out, filter ${duration / 2}s ease-in-out`;
      
      // Less frequent animation updates on mobile
      const interval = setInterval(() => {
        const newX = Math.floor(Math.random() * maxX);
        const newY = isMobile 
          ? Math.floor(Math.random() * (window.innerHeight * 0.8)) 
          : Math.floor(Math.random() * maxY);
        element.style.transform = `translate(${newX - x}px, ${newY - y}px) rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.8})`;
        element.style.filter = `blur(${Math.random() * 40 + 10}px)`;
      }, duration * 1000);
      
      // Store the interval ID for cleanup
      (element as any).__intervalId = interval;
    }
    
    // Mouse move effect, disabled on mobile
    const handleMouseMove = isMobile ? undefined : (e: MouseEvent) => {
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
    
    if (!isMobile && handleMouseMove) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (!isMobile && handleMouseMove) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
      
      elements.forEach(element => {
        // Clear the animation interval
        clearInterval((element as any).__intervalId);
        
        if (container && container.contains(element)) {
          container.removeChild(element);
        }
      });
    };
  }, [isMobile]);
  
  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none">
      {/* Container for dynamically generated elements */}
    </div>
  );
};

export default InteractiveBackground;
