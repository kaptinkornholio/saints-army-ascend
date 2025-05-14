
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialMediaBar: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={22} />, url: "https://twitter.com", color: "#1DA1F2" },
    { icon: <Facebook size={22} />, url: "https://facebook.com", color: "#4267B2" },
    { icon: <Instagram size={22} />, url: "https://instagram.com", color: "#E1306C" },
    { icon: <Linkedin size={22} />, url: "https://linkedin.com", color: "#0077B5" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <motion.div 
      className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
    >
      {socialLinks.map((socialLink, index) => (
        <motion.a
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-saints-dark border border-saints-purple/50 hover:border-saints-gold transition-all duration-300"
          variants={itemVariants}
          whileHover="hover"
          style={{ boxShadow: `0 0 15px rgba(178, 0, 255, 0.3)` }}
        >
          <motion.div 
            className="text-saints-gold"
            initial={{ rotate: 0 }}
            whileHover={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: 1.2,
              transition: { 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop" 
              }
            }}
          >
            {socialLink.icon}
          </motion.div>

          {/* Tooltip */}
          <motion.span
            className="absolute left-full ml-4 px-3 py-1 min-w-max rounded-md bg-saints-dark border border-saints-purple/50 text-white text-sm font-orbitron pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Follow us on {socialLink.url.split('https://')[1].split('.com')[0]}
          </motion.span>
          
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-saints-gold opacity-0"
            whileHover={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.4, 1],
              transition: { 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop" 
              }
            }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialMediaBar;
