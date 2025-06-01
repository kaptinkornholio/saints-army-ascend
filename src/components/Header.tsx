import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

const Header: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ComingSoonButton, openModal } = useComingSoonModal();
  
  // Enhanced digital matrix background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -height;
    }
    
    // Enhanced matrix characters with more variety
    const matrix = "01SAINTS0ARMY1NFT0DIVINE01ART0ZEOK#@$%^&*()!".split("");
    
    // Array of colors for variety
    const colors = [
      '#00c4ff', // Primary blue
      '#b200ff', // Primary purple
      '#ffd700', // Gold
      '#00ff66', // Green accent
      '#ff00cc'  // Pink accent
    ];
    
    // Get a random color from colors array
    const getRandomColor = () => {
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    function draw() {
      // Semi-transparent black background to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      
      for (let i = 0; i < drops.length; i++) {
        // Use a mix of colors for more visual interest
        ctx.fillStyle = drops[i] % 10 === 0 ? getRandomColor() : '#00c4ff'; 
        ctx.font = `${fontSize}px monospace`;
        
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Add glowing effect to some characters
        if (Math.random() > 0.99) {
          ctx.shadowColor = getRandomColor();
          ctx.shadowBlur = 10;
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          ctx.shadowBlur = 0;
        }
        
        // Randomly reset some drops to the top
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 35);
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const newColumns = Math.floor(width / fontSize);
      
      // Reset drops array to match new width
      while (drops.length < newColumns) {
        drops.push(Math.random() * -height);
      }
      drops.length = newColumns;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <header className="relative w-full overflow-hidden py-8">
      {/* Enhanced Matrix digital background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
      />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-saints-purple/40 to-saints-blue/30 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-saints-gold/30 to-saints-purple/30 rounded-full filter blur-3xl animate-pulse-glow delay-1000"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-saints-gold rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping-slow"></div>
          <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-saints-blue rounded-full animate-ping-slow"></div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 relative overflow-hidden rounded-full ring-2 ring-saints-gold ring-offset-2 ring-offset-saints-dark animate-pulse-glow">
              <img 
                src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png"
                alt="Saints Army Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-poppins text-2xl font-bold text-white tracking-wider text-shadow-glow">SAINTS ARMY NFT</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {["About", "Join"].map((item, index) => (
              <motion.a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold"
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0 0 8px rgba(255,215,0,0.7), 0 0 12px rgba(178,0,255,0.5)" 
                }}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Roadmap link with coming soon modal */}
            <motion.a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("Roadmap Coming Soon", "Our detailed roadmap will be available soon. Stay tuned for our exciting journey ahead!");
              }}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold"
              whileHover={{ 
                scale: 1.1, 
                textShadow: "0 0 8px rgba(255,215,0,0.7), 0 0 12px rgba(178,0,255,0.5)" 
              }}
            >
              Roadmap
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ComingSoonButton className="cosmic-button btn-primary">
                MINT NOW
              </ComingSoonButton>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </nav>
        
        <div className="max-w-3xl mx-auto text-center mb-16" data-scroll data-scroll-speed="0.3">
          <motion.h1 
            className="cosmic-title text-4xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SAINTS ARMY NFT: Unleash Divine Art 
          </motion.h1>
          
          <motion.p 
            className="cosmic-subtitle text-lg md:text-xl mb-12 font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the SAINTS ARMY NFT, where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own the divine.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="mx-auto sm:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ComingSoonButton 
                className="btn-primary text-lg px-8 py-6 shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] flex items-center gap-3 w-full sm:w-auto"
              >
                <img src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/magicedenlogo.png" alt="Magic Eden" className="w-7 h-7 rounded-full" />
                <span className="font-bold">MINT COMING SOON</span>
              </ComingSoonButton>
            </motion.div>
            
            <motion.div
              className="mx-auto sm:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ComingSoonButton 
                className="btn-secondary text-lg px-8 py-6 shadow-[0_0_15px_rgba(178,0,255,0.4)] hover:shadow-[0_0_25px_rgba(178,0,255,0.6)] flex items-center gap-3 w-full sm:w-auto"
                onClick={() => openModal("Roadmap Coming Soon", "Our detailed roadmap will be available soon. Stay tuned for our exciting journey ahead!")}
              >
                <span className="font-bold">VIEW ROADMAP</span>
              </ComingSoonButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
