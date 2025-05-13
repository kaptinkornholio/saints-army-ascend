
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden py-8">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-saints-purple/30 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-saints-blue/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-white rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping-slow"></div>
          <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-white rounded-full animate-ping-slow"></div>
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
                src="/223.png" 
                alt="Saints Army Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-orbitron text-2xl font-extrabold text-white tracking-wider text-shadow-glow">SAINTS ARMY NFT</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {["About", "Join", "Roadmap"].map((item, index) => (
              <motion.a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="neon-link font-orbitron text-lg font-bold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold"
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0 0 8px rgba(255,215,0,0.7), 0 0 12px rgba(178,0,255,0.5)" 
                }}
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="cosmic-button btn-primary"
                onClick={() => window.open("https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22", "_blank")}
              >
                Buy Now
              </Button>
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
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="cosmic-title text-4xl md:text-6xl lg:text-7xl mb-6 font-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join : SAINTS ARMY NFT: Unleash Divine Art with #OneArmy
          </motion.h1>
          
          <motion.p 
            className="cosmic-subtitle text-lg md:text-xl mb-12 font-bold tracking-wide text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the : SAINTS ARMY NFT, where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own the divine.
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
              <Button 
                className="btn-primary text-lg px-8 py-6 glow-border flex items-center gap-3 w-full sm:w-auto"
                onClick={() => window.open("https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22", "_blank")}
              >
                <img src="/Magic-Eden-Logo.jpg" alt="Magic Eden" className="w-7 h-7 rounded-full" />
                <span className="font-extrabold">BUY OR TRADE : SAINTS ARMY NFT NOW</span>
              </Button>
            </motion.div>
            
            <motion.div
              className="mx-auto sm:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="btn-secondary text-lg px-8 py-6 glow-border flex items-center gap-3 w-full sm:w-auto"
                onClick={() => window.open("https://one-army-battle-map.lovable.app/", "_blank")}
              >
                <span className="font-extrabold">VIEW ROADMAP</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
