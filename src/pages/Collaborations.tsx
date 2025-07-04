
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Users, Sparkles, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Collaborations: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const balloonVariants = {
    floating: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const collaborators = [
    {
      name: "Ming",
      handle: "@Merciless365",
      xLink: "https://x.com/Merciless365",
      color: "from-saints-gold to-saints-purple"
    },
    {
      name: "Skyes744 🍓",
      handle: "@Skyes744",
      xLink: "https://x.com/Skyes744",
      color: "from-saints-purple to-saints-blue"
    },
    {
      name: "NutzNFT",
      handle: "@NutzBaseNFT",
      xLink: "https://x.com/NutzBaseNFT",
      color: "from-saints-blue to-saints-gold"
    },
    {
      name: "StonedRabbits 🐰",
      handle: "@StonedRabbitts",
      xLink: "https://x.com/StonedRabbitts",
      color: "from-saints-gold to-saints-purple"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* GitHub Background Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png)",
          filter: 'brightness(0.2) sepia(30%) saturate(150%) hue-rotate(280deg)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-saints-dark/70 to-black/90 z-10"></div>

      {/* Floating Party Balloons */}
      <div className="fixed inset-0 z-15 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
            }}
            variants={balloonVariants}
            animate="floating"
            transition={{ delay: i * 0.5 }}
          >
            {['🎈', '🎉', '✨', '🎊'][i % 4]}
          </motion.div>
        ))}
      </div>

      {/* Confetti Animation */}
      <div className="fixed inset-0 z-15 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#FFD700', '#B200FF', '#007BFF'][i % 3],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-saints-gold hover:bg-saints-purple/20 absolute top-4 left-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.div 
          className="max-w-6xl mx-auto text-center pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
              style={{
                textShadow: "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7), 0 0 120px rgba(0,123,255,0.5)",
                fontWeight: "900"
              }}
              animate={{ 
                textShadow: [
                  "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7), 0 0 120px rgba(0,123,255,0.5)",
                  "0 0 60px rgba(178,0,255,0.9), 0 0 100px rgba(0,123,255,0.7), 0 0 140px rgba(255,215,0,0.5)",
                  "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7), 0 0 120px rgba(0,123,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🤝 COLLABORATIONS 🤝
            </motion.h1>
            
            <motion.div
              className="flex justify-center items-center gap-4 mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Users className="w-12 h-12 text-saints-gold animate-pulse" />
              <Sparkles className="w-10 h-10 text-saints-purple animate-spin" style={{ animationDuration: '3s' }} />
              <Heart className="w-12 h-12 text-saints-blue animate-bounce" />
            </motion.div>
            
            <p 
              className="text-2xl font-bold text-saints-gold animate-pulse"
              style={{
                textShadow: "0 0 25px rgba(255,215,0,0.8)"
              }}
            >
              United We Rise, Together We Conquer! 👑⚡
            </p>
          </motion.div>

          {/* Collaborators Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={index}
                className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-black/80 to-saints-purple/20 border-2 border-saints-gold/40 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 0 50px rgba(255,215,0,0.6)",
                  borderColor: "rgba(255,215,0,0.8)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${collaborator.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Sparkle Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-saints-gold rounded-full"
                      style={{
                        left: `${20 + (i % 3) * 30}%`,
                        top: `${20 + Math.floor(i / 3) * 40}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-saints-gold to-saints-purple rounded-full flex items-center justify-center text-4xl font-black animate-pulse">
                      🤝
                    </div>
                  </motion.div>
                  
                  <h3 
                    className="text-3xl font-black text-white mb-2 group-hover:text-saints-gold transition-colors"
                    style={{
                      textShadow: "0 0 20px rgba(255,215,0,0.7)"
                    }}
                  >
                    {collaborator.name}
                  </h3>
                  
                  <p className="text-lg text-saints-purple font-bold mb-6">
                    {collaborator.handle}
                  </p>
                  
                  <motion.a
                    href={collaborator.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cosmic-button btn-primary px-6 py-3 text-lg font-bold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit on X
                  </motion.a>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-saints-gold/60 transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-dark/90 to-saints-purple/20 border-2 border-saints-blue/40 mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 
              className="text-4xl font-black text-saints-blue mb-8 text-center"
              style={{
                textShadow: "0 0 25px rgba(0,123,255,0.8)"
              }}
            >
              🌟 Partnership Power 🌟
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🚀", title: "Cross-Promotion", desc: "Amplified reach across communities" },
                { icon: "🎁", title: "Exclusive Benefits", desc: "Special perks for all holders" },
                { icon: "🤝", title: "Collaborative Events", desc: "Joint activities and competitions" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-saints-dark/60 border border-saints-gold/30 text-center"
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,215,0,0.7)" }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                >
                  <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-saints-gold mb-2 text-xl">{benefit.title}</h4>
                  <p className="text-white/80">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
              style={{
                textShadow: "0 0 30px rgba(255,215,0,0.8)"
              }}
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 30px rgba(255,215,0,0.8)",
                  "0 0 50px rgba(178,0,255,0.9)",
                  "0 0 30px rgba(255,215,0,0.8)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Want to Collaborate? 🤝✨
            </motion.h3>
            
            <p 
              className="text-xl font-bold text-saints-gold mb-8"
              style={{
                textShadow: "0 0 20px rgba(255,215,0,0.9)"
              }}
            >
              Join our ever-growing alliance of digital warriors! 👑⚡
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={containerVariants}
            >
              <motion.button
                className="cosmic-button btn-primary px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(255,215,0,0.5)",
                    "0 0 40px rgba(255,215,0,0.8)",
                    "0 0 20px rgba(255,215,0,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀 Partner With Us
              </motion.button>
              
              <motion.button
                className="cosmic-button bg-saints-purple hover:bg-saints-purple/80 px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Join Discord
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collaborations;
