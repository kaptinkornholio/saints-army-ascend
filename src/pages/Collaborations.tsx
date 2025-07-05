
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Users, Zap, Crown } from 'lucide-react';
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

  const collaborators = [
    {
      name: "Ming",
      handle: "@Merciless365",
      xLink: "https://x.com/Merciless365",
      bgImage: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT15.png"
    },
    {
      name: "Skyes744 🍓",
      handle: "@Skyes744",
      xLink: "https://x.com/Skyes744",
      bgImage: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT25.png"
    },
    {
      name: "NutzNFT",
      handle: "@NutzBaseNFT",
      xLink: "https://x.com/NutzBaseNFT",
      bgImage: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT35.png"
    },
    {
      name: "StonedRabbits 🐰",
      handle: "@StonedRabbitts",
      xLink: "https://x.com/StonedRabbitts",
      bgImage: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT45.png"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* Background with cyberpunk overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTSBACK4.png)",
          filter: 'brightness(0.15) contrast(1.2)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-saints-dark/80 to-black/95 z-10"></div>

      {/* Cyberpunk grid overlay */}
      <div className="fixed inset-0 z-15 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(178,0,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(178,0,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-15 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-saints-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
          {/* Title with background image */}
          <motion.div
            variants={itemVariants}
            className="mb-12 relative"
          >
            <div 
              className="absolute inset-0 rounded-2xl bg-cover bg-center opacity-20"
              style={{
                backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png)",
              }}
            />
            <div className="relative z-10 p-8">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue font-mono"
                style={{
                  textShadow: "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7)",
                  fontWeight: "900"
                }}
                animate={{ 
                  textShadow: [
                    "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7)",
                    "0 0 60px rgba(178,0,255,0.9), 0 0 100px rgba(0,123,255,0.7)",
                    "0 0 40px rgba(255,215,0,0.9), 0 0 80px rgba(178,0,255,0.7)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &gt; COLLABORATIONS_
              </motion.h1>
              
              <motion.div
                className="flex justify-center items-center gap-6 mb-6"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 text-saints-gold animate-pulse" />
                <Crown className="w-14 h-14 text-saints-purple" style={{ filter: 'drop-shadow(0 0 10px rgba(178,0,255,0.8))' }} />
                <Users className="w-12 h-12 text-saints-blue animate-pulse" />
              </motion.div>
              
              <p 
                className="text-2xl font-bold text-saints-gold font-mono"
                style={{
                  textShadow: "0 0 25px rgba(255,215,0,0.8)"
                }}
              >
                ALLIED_FORCES.EXE
              </p>
            </div>
          </motion.div>

          {/* Collaborators Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl bg-gradient-to-br from-black/90 to-saints-purple/30 border-2 border-saints-gold/60 group overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,215,0,1)",
                  boxShadow: "0 0 50px rgba(255,215,0,0.6)"
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  minHeight: '300px'
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${collaborator.bgImage})`,
                    filter: 'brightness(0.4) contrast(1.2)'
                  }}
                />
                
                {/* Cyberpunk overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-saints-purple/20 via-transparent to-saints-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-saints-gold/80 group-hover:animate-pulse"></div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <motion.div
                    className="mb-6"
                    animate={{ 
                      rotateY: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-saints-gold to-saints-purple rounded-lg flex items-center justify-center text-4xl font-black border-2 border-saints-gold/50"
                         style={{
                           boxShadow: "0 0 30px rgba(255,215,0,0.5)",
                           filter: 'drop-shadow(0 0 10px rgba(178,0,255,0.8))'
                         }}>
                      &gt;
                    </div>
                  </motion.div>
                  
                  <h3 
                    className="text-3xl font-black text-white mb-2 group-hover:text-saints-gold transition-colors font-mono"
                    style={{
                      textShadow: "0 0 20px rgba(255,215,0,0.7)"
                    }}
                  >
                    {collaborator.name}
                  </h3>
                  
                  <p className="text-lg text-saints-purple font-bold mb-6 font-mono">
                    {collaborator.handle}
                  </p>
                  
                  <motion.a
                    href={collaborator.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 cosmic-button btn-primary px-6 py-3 text-lg font-bold font-mono border-2 border-saints-gold/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(178,0,255,0.1))',
                      boxShadow: "0 0 20px rgba(255,215,0,0.3)"
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    ACCESS_X.NET
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partnership Protocol */}
          <motion.div
            className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-dark/90 to-saints-purple/20 border-2 border-saints-blue/60 mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 
              className="text-4xl font-black text-saints-blue mb-8 text-center font-mono"
              style={{
                textShadow: "0 0 25px rgba(0,123,255,0.8)"
              }}
            >
              &gt; ALLIANCE_PROTOCOL.SYS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "NETWORK_BOOST", desc: "Cross-platform signal amplification" },
                { icon: "🎯", title: "ELITE_ACCESS", desc: "Exclusive holder privileges activated" },
                { icon: "🛡️", title: "JOINT_OPS", desc: "Synchronized tactical missions" }
              ].map((protocol, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-saints-dark/60 border border-saints-gold/30 text-center font-mono"
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: "rgba(255,215,0,0.7)",
                    boxShadow: "0 0 30px rgba(255,215,0,0.3)"
                  }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                >
                  <div className="text-4xl mb-4" style={{ filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.8))' }}>
                    {protocol.icon}
                  </div>
                  <h4 className="font-bold text-saints-gold mb-2 text-xl">{protocol.title}</h4>
                  <p className="text-white/80 text-sm">{protocol.desc}</p>
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
              className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue font-mono"
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
              &gt; INITIATE_ALLIANCE.EXE?
            </motion.h3>
            
            <p 
              className="text-xl font-bold text-saints-gold mb-8 font-mono"
              style={{
                textShadow: "0 0 20px rgba(255,215,0,0.9)"
              }}
            >
              JOIN_THE_DIGITAL_REVOLUTION.BAT
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={containerVariants}
            >
              <motion.a
                href="https://x.com/Zeok_CLG"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button btn-primary px-8 py-4 text-lg font-bold font-mono border-2 border-saints-gold/50"
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
                style={{
                  background: 'linear-gradient(45deg, rgba(255,215,0,0.2), rgba(178,0,255,0.1))'
                }}
              >
                &gt; PARTNER_WITH_US.EXE
              </motion.a>
              
              <motion.a
                href="https://t.me/+z3TgYl4QAaUxNDk0"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button bg-saints-purple hover:bg-saints-purple/80 px-8 py-4 text-lg font-bold font-mono border-2 border-saints-purple/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(45deg, rgba(178,0,255,0.2), rgba(0,123,255,0.1))'
                }}
              >
                /JOIN_TELEGRAM.TG
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collaborations;
