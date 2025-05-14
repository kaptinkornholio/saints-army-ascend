
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface DynamicHeaderProps {
  isScrolled: boolean;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ isScrolled }) => {
  // Animation variants for header elements
  const logoVariants = {
    normal: { scale: 1 },
    scrolled: { scale: 0.8 }
  };

  const navVariants = {
    normal: { y: 0, opacity: 1 },
    scrolled: { y: 0, opacity: 1 }
  };

  const socialVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const socialItemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-saints-dark/90 shadow-lg shadow-saints-purple/20 py-2' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.div 
            className="flex items-center space-x-2"
            variants={logoVariants}
            animate={isScrolled ? 'scrolled' : 'normal'}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`relative overflow-hidden rounded-full ring-2 ring-saints-gold ring-offset-2 ring-offset-saints-dark animate-pulse-glow ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}>
              <img 
                src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/223.png" 
                alt="Saints Army Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-orbitron font-extrabold text-white tracking-wider text-shadow-glow ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>SAINTS ARMY NFT</span>
          </motion.div>
          
          {/* Navigation links */}
          <motion.div 
            className={`hidden md:flex space-x-6 items-center transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
            variants={navVariants}
            animate={isScrolled ? 'scrolled' : 'normal'}
          >
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
          </motion.div>
          
          {/* Social media icons (visible only when scrolled) */}
          {isScrolled && (
            <motion.div 
              className="hidden lg:flex items-center space-x-3"
              variants={socialVariants}
              initial="initial"
              animate="animate"
            >
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Facebook size={16} className="text-saints-gold" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Twitter size={16} className="text-saints-gold" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                variants={socialItemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Instagram size={16} className="text-saints-gold" />
              </motion.a>
            </motion.div>
          )}
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default DynamicHeader;
