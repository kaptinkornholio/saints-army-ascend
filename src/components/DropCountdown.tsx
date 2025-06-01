
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

interface DropCountdownProps {
  targetDate: Date;
}

const DropCountdown: React.FC<DropCountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(prevTime => {
        // Check if seconds changed to trigger animation
        if (prevTime.seconds !== newTimeLeft.seconds) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 500);
        }
        return newTimeLeft;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full py-8 px-4">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-audiowide text-transparent bg-clip-text bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue mb-2">
          NFT Drop Countdown
        </h2>
        <p className="text-lg text-white/80 font-rajdhani">
          Be ready to mint the exclusive SAINTS ARMY collection
        </p>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={itemVariants}
            animate={isAnimating && item.label === "Seconds" ? "pulse" : ""}
          >
            <motion.div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-saints-dark/80 to-saints-purple/20 backdrop-blur-md border border-saints-purple/30 flex items-center justify-center relative overflow-hidden"
              variants={item.label === "Seconds" ? pulseVariants : {}}
              animate={isAnimating && item.label === "Seconds" ? "pulse" : ""}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 opacity-40 bg-saints-gold blur-xl rounded-full scale-50 animate-pulse-glow"></div>
              
              {/* Number value */}
              <motion.span 
                className="text-4xl md:text-5xl font-orbitron font-bold text-white z-10"
                animate={isAnimating && item.label === "Seconds" ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {item.value < 10 ? `0${item.value}` : item.value}
              </motion.span>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-saints-gold/30 rounded-xl"></div>
              <motion.div 
                className="absolute inset-0 border-2 border-saints-gold rounded-xl opacity-0"
                animate={isAnimating ? { opacity: [0, 1, 0] } : {}}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
            
            <motion.p 
              className="text-center text-white/80 font-orbitron mt-2"
              animate={isAnimating && item.label === "Seconds" ? { opacity: [0.5, 1, 0.5] } : {}}
              transition={{ duration: 0.5 }}
            >
              {item.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* CTA Button */}
      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="btn-primary px-8 py-4 text-lg font-bold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(255,215,0,0.8)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Notified
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DropCountdown;
