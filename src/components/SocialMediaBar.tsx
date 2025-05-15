
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SocialMediaBarProps {
  position?: 'side' | 'bottom';
}

const SocialMediaBar: React.FC<SocialMediaBarProps> = ({ position = 'side' }) => {
  const isMobile = useIsMobile();
  const actualPosition = position === 'side' && !isMobile ? 'side' : 'bottom';
  
  // Shared icon styling
  const iconClasses = "w-5 h-5 text-white/80 hover:text-saints-gold transition-colors duration-300";
  
  // Animation variants for social icons
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }
    }
  };
  
  const socialLinks = [
    { Icon: Facebook, url: 'https://facebook.com', color: '#1877F2' },
    { Icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2' },
    { Icon: Instagram, url: 'https://instagram.com', color: '#E4405F' },
    { Icon: Github, url: 'https://github.com', color: '#181717' },
    { Icon: Linkedin, url: 'https://linkedin.com', color: '#0A66C2' }
  ];

  // Conditional styling based on position
  const barStyle = actualPosition === 'side' 
    ? "fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40"
    : "fixed bottom-0 left-0 right-0 flex justify-center gap-6 py-3 px-4 backdrop-blur-md bg-saints-dark/90 border-t border-saints-purple/20 z-40";

  return (
    <motion.div 
      className={barStyle}
      initial="hidden"
      animate="show"
      variants={container}
    >
      {socialLinks.map(({ Icon, url, color }, index) => (
        <motion.a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 }
          }}
          className={`${actualPosition === 'side' 
            ? 'p-2.5 rounded-full bg-saints-purple/20 hover:bg-saints-purple/40' 
            : 'p-2 hover:text-saints-gold'} 
            transition-all duration-300`}
        >
          <Icon 
            className={iconClasses} 
            style={{ transition: 'color 0.3s, transform 0.3s' }}
          />
        </motion.a>
      ))}
      
      {/* Only show separator on side position */}
      {actualPosition === 'side' && (
        <motion.div 
          className="mt-2 w-px h-20 bg-gradient-to-b from-saints-purple/0 via-saints-purple/30 to-saints-gold/50 mx-auto"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        />
      )}
    </motion.div>
  );
};

export default SocialMediaBar;
