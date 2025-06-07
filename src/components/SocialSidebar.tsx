
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const SocialSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const socialLinks = [
    {
      name: '@Zeok_CLG',
      url: 'https://twitter.com/Zeok_CLG',
      icon: (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: '@Maximus795443',
      url: 'https://twitter.com/Maximus795443',
      icon: (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: '@SAINTINFOTECH11',
      url: 'https://twitter.com/SAINTINFOTECH11',
      icon: (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/7DJX9266',
      icon: (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      )
    },
    {
      name: '@saintsonearmynft',
      url: 'https://www.instagram.com/saintsonearmynft/',
      icon: (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Animated Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 left-0 z-50 bg-gradient-to-r from-saints-purple/90 to-saints-blue/90 backdrop-blur-sm text-white p-4 rounded-r-xl shadow-2xl hover:shadow-saints-purple/50 transition-all duration-300"
        style={{ transform: 'translateY(-50%)' }}
        whileHover={{ 
          x: 8,
          scale: 1.05,
          boxShadow: "0 0 25px rgba(178, 0, 255, 0.6)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: isOpen 
            ? "0 0 30px rgba(178, 0, 255, 0.8)" 
            : "0 0 15px rgba(178, 0, 255, 0.4)"
        }}
      >
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.2 : 1
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-saints-gold/30 rounded-full blur-sm"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>

      {/* Enhanced Sidebar with Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 }
            }}
            className="fixed top-0 left-0 h-full z-40 overflow-hidden"
            style={{ width: isMobile ? '320px' : '380px' }}
          >
            {/* Background Image Overlay - Ready for GitHub Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-saints-dark/95 via-saints-purple/20 to-saints-blue/20">
              {/* Placeholder for background image from GitHub */}
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/YOUR_IMAGE.jpg")',
                  filter: 'blur(1px)'
                }}
              />
              {/* Animated overlay patterns */}
              <div className="absolute inset-0 bg-gradient-to-br from-saints-purple/30 via-transparent to-saints-gold/20 animate-aurora" />
              <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-saints-gold via-saints-purple to-saints-blue"
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative h-full p-8 flex flex-col">
              {/* Animated Header */}
              <motion.div 
                className="mb-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.h3 
                  className="font-heading text-saints-gold text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold to-saints-purple"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255, 215, 0, 0.5)",
                      "0 0 20px rgba(255, 215, 0, 0.8)",
                      "0 0 10px rgba(255, 215, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Connect With Us
                </motion.h3>
                <motion.p 
                  className="text-white/70 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Join the <span className="text-saints-purple font-semibold">#SAINTSARMY</span> Movement
                </motion.p>
              </motion.div>

              {/* Enhanced Social Links */}
              <div className="space-y-3 flex-1">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-saints-purple/20 hover:to-saints-blue/20 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-saints-gold/30"
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ 
                      delay: index * 0.15 + 0.3,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      rotateY: 2,
                      boxShadow: "0 10px 30px rgba(178, 0, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-saints-gold/10 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <motion.div 
                      className="text-saints-purple group-hover:text-saints-gold transition-colors duration-300 relative z-10"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.2
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.div>
                    
                    <motion.span 
                      className="text-white group-hover:text-saints-gold transition-colors duration-300 font-medium relative z-10"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-saints-purple/20 to-saints-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(178, 0, 255, 0.3)"
                      }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Animated Footer */}
              <motion.div 
                className="mt-8 pt-6 border-t border-saints-purple/30 relative"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.p 
                  className="text-white/50 text-xs text-center font-medium"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Divine art that evolves with <span className="text-saints-gold">#SAINTSARMY</span>
                </motion.p>
                
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-saints-gold rounded-full"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: '20%'
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            transition={{ duration: 0.3 }}
          >
            {/* Animated overlay pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-saints-purple/10 to-saints-blue/10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialSidebar;
