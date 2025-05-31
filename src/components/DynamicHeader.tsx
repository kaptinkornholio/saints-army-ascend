import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';
import ComingSoonModal from './ComingSoonModal';

interface DynamicHeaderProps {
  isScrolled: boolean;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "Minting Coming Soon",
    description: "We're preparing something special for you. The SAINTS ARMY NFT minting will be available soon."
  });
  const isMobile = useIsMobile();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

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

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const handleMintNow = () => {
    setModalConfig({
      title: "Minting Coming Soon",
      description: "We're preparing something special for you. The SAINTS ARMY NFT minting will be available soon."
    });
    setComingSoonOpen(true);
  };

  const handleRoadmap = () => {
    setModalConfig({
      title: "Roadmap Coming Soon",
      description: "Our detailed roadmap will be available soon. Stay tuned for our exciting journey ahead!"
    });
    setComingSoonOpen(true);
  };

  // Function to close mobile menu when clicking a link
  const handleMobileMenuItemClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled || mobileMenuOpen
          ? 'bg-saints-dark/90 shadow-lg shadow-saints-purple/20 py-2' 
          : 'bg-transparent py-2 md:py-6'
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
              isScrolled ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10 md:w-12 md:h-12'
            }`}>
              <img 
                src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/1744696908578.png" 
                alt="Saints Army Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-poppins font-bold text-white tracking-wider text-shadow-glow ${
              isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
            }`}>
              {isMobile ? "SAINTS" : "SAINTS ARMY NFT"}
            </span>
          </motion.div>
          
          {/* Desktop Navigation links */}
          <motion.div 
            className={`hidden md:flex space-x-6 items-center transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
            variants={navVariants}
            animate={isScrolled ? 'scrolled' : 'normal'}
          >
            {["About", "Join"].map((item, index) => (
              <motion.a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold"
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0 0 8px rgba(255,215,0,0.7), 0 0 12px rgba(178,0,255,0.5)" 
                }}
                onClick={handleMobileMenuItemClick}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Roadmap link with coming soon modal */}
            <motion.a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleRoadmap();
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
              <Button 
                className="cosmic-button btn-primary"
                onClick={handleMintNow}
              >
                MINT NOW
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Social media icons (visible only when scrolled on desktop) */}
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
            <Button 
              variant="ghost" 
              className="text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-saints-gold" />
                ) : (
                  <Menu size={24} className="text-saints-gold" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-saints-dark/95 backdrop-blur-md border-t border-saints-purple/20 py-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {["About", "Join"].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="font-poppins text-lg py-2 border-b border-saints-purple/20 text-white hover:text-saints-gold flex items-center justify-between"
                    onClick={handleMobileMenuItemClick}
                    variants={mobileMenuItemVariants}
                  >
                    <span>{item}</span>
                    <span className="text-saints-gold">&rarr;</span>
                  </motion.a>
                ))}
                
                {/* Roadmap mobile link */}
                <motion.a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoadmap();
                    setMobileMenuOpen(false);
                  }}
                  className="font-poppins text-lg py-2 border-b border-saints-purple/20 text-white hover:text-saints-gold flex items-center justify-between"
                  variants={mobileMenuItemVariants}
                >
                  <span>Roadmap</span>
                  <span className="text-saints-gold">&rarr;</span>
                </motion.a>
                
                <motion.div
                  className="pt-2"
                  variants={mobileMenuItemVariants}
                >
                  <Button 
                    className="cosmic-button btn-primary w-full"
                    onClick={() => {
                      handleMintNow();
                      setMobileMenuOpen(false);
                    }}
                  >
                    MINT NOW
                  </Button>
                </motion.div>
                
                {/* Social icons in mobile menu */}
                <motion.div 
                  className="flex justify-center space-x-4 pt-2"
                  variants={mobileMenuItemVariants}
                >
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                  >
                    <Facebook size={20} className="text-saints-gold" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                  >
                    <Twitter size={20} className="text-saints-gold" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-2 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40 transition-colors"
                  >
                    <Instagram size={20} className="text-saints-gold" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={comingSoonOpen} 
        onClose={() => setComingSoonOpen(false)} 
        title={modalConfig.title}
        description={modalConfig.description}
      />
    </motion.nav>
  );
};

export default DynamicHeader;
