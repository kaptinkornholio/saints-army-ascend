
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Star, Shield, Sword, Coins, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhitePaper: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const titleVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const sections = [
    {
      title: "Executive Summary",
      icon: <FileText className="w-6 h-6" />,
      content: "Saints Army represents a revolutionary dual-faction NFT ecosystem built on the Solana blockchain, combining gaming mechanics, community governance, and decentralized finance. Our project introduces the Crowned Phantom genesis collection, followed by the Light and Dark Saints factions, creating an immersive digital universe where holders shape the destiny of their chosen faction."
    },
    {
      title: "Vision & Mission",
      icon: <Star className="w-6 h-6" />,
      content: "To create the most engaged and empowered NFT community in the Solana ecosystem, where digital ownership meets real utility and collective governance shapes the future of decentralized communities."
    },
    {
      title: "Light Saints Faction",
      icon: <Shield className="w-6 h-6" />,
      content: "Embodying order, protection, and celestial power. Light Saints focus on community building, defensive strategies, and sustainable growth with healing mechanics and community buffs."
    },
    {
      title: "Dark Saints Faction", 
      icon: <Sword className="w-6 h-6" />,
      content: "Representing chaos, rebellion, and infernal might. Dark Saints emphasize aggressive expansion, competitive advantages, and disruptive innovation with offensive bonuses and damage mechanics."
    },
    {
      title: "$HOLYFLAME Token",
      icon: <Coins className="w-6 h-6" />,
      content: "The primary currency and governance token with 1,000,000,000 total supply. Used for governance voting, staking rewards, breeding mechanics, marketplace features, and competitions."
    },
    {
      title: "DAO Governance",
      icon: <Users className="w-6 h-6" />,
      content: "Decentralized governance where Crowned Phantom holders get 3x voting power, Light/Dark Saints get 2x, and $HOLYFLAME stakers get 1x per 1000 tokens. Community controls ecosystem decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* GitHub Background Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT30.png)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-saints-dark/90 to-saints-dark z-10"></div>

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
            variants={titleVariants}
            className="mb-12"
          >
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue animate-pulse"
              style={{
                textShadow: "0 0 30px rgba(255,215,0,0.9), 0 0 60px rgba(178,0,255,0.7), 0 0 90px rgba(0,123,255,0.5)",
                fontWeight: "900"
              }}
            >
              SAINTS ARMY
            </h1>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-saints-gold mb-4"
              style={{
                textShadow: "0 0 20px rgba(255,215,0,0.8)"
              }}
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,215,0,0.8)",
                  "0 0 40px rgba(255,215,0,1)",
                  "0 0 20px rgba(255,215,0,0.8)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Crowned Phantom
            </motion.h2>
            <p 
              className="text-xl font-bold text-white/90"
              style={{
                textShadow: "0 0 15px rgba(255,255,255,0.6)"
              }}
            >
              Official Whitepaper v1.0
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
          >
            <motion.div
              className="cosmic-card p-6 rounded-xl bg-gradient-to-br from-saints-gold/20 to-saints-purple/20 border border-saints-gold/40"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,215,0,0.6)" }}
            >
              <Zap className="w-12 h-12 text-saints-gold mx-auto mb-4 animate-bounce-subtle" />
              <h3 className="text-2xl font-black text-saints-gold mb-2">888</h3>
              <p className="text-white font-semibold">Crowned Phantom Genesis NFTs</p>
            </motion.div>

            <motion.div
              className="cosmic-card p-6 rounded-xl bg-gradient-to-br from-saints-purple/20 to-saints-blue/20 border border-saints-purple/40"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(178,0,255,0.6)" }}
            >
              <Coins className="w-12 h-12 text-saints-purple mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-black text-saints-purple mb-2">1B</h3>
              <p className="text-white font-semibold">$HOLYFLAME Token Supply</p>
            </motion.div>

            <motion.div
              className="cosmic-card p-6 rounded-xl bg-gradient-to-br from-saints-blue/20 to-saints-gold/20 border border-saints-blue/40"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,123,255,0.6)" }}
            >
              <Users className="w-12 h-12 text-saints-blue mx-auto mb-4 animate-float" />
              <h3 className="text-2xl font-black text-saints-blue mb-2">2</h3>
              <p className="text-white font-semibold">Factions: Light & Dark Saints</p>
            </motion.div>
          </motion.div>

          {/* Main Sections */}
          <motion.div 
            className="grid gap-8 text-left"
            variants={containerVariants}
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="cosmic-card p-8 rounded-2xl bg-gradient-to-r from-black/80 via-saints-purple/10 to-black/80 border border-saints-gold/30 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 50px rgba(255,215,0,0.4)",
                  borderColor: "rgba(255,215,0,0.6)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-saints-purple/5 via-saints-gold/5 to-saints-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-3 rounded-full bg-saints-gold/20 text-saints-gold mr-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {section.icon}
                    </motion.div>
                    <h3 
                      className="text-3xl font-black text-white group-hover:text-saints-gold transition-colors"
                      style={{
                        textShadow: "0 0 20px rgba(255,215,0,0.7)"
                      }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-lg text-white/90 leading-relaxed font-medium"
                    style={{
                      textShadow: "0 0 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    {section.content}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-saints-gold/50 transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            className="mt-16 cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-dark/90 to-saints-purple/20 border border-saints-blue/40"
            variants={itemVariants}
          >
            <h3 
              className="text-4xl font-black text-saints-blue mb-8 text-center"
              style={{
                textShadow: "0 0 25px rgba(0,123,255,0.8)"
              }}
            >
              Technology Stack
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Solana Blockchain", desc: "High throughput, low fees" },
                { name: "Rust Smart Contracts", desc: "NFT minting & governance" },
                { name: "IPFS Storage", desc: "Decentralized metadata" },
                { name: "Magic Eden", desc: "Primary marketplace" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-saints-dark/60 border border-saints-gold/30 text-center"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,215,0,0.7)" }}
                >
                  <h4 className="font-bold text-saints-gold mb-2">{tech.name}</h4>
                  <p className="text-white/80 text-sm">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
              style={{
                textShadow: "0 0 30px rgba(255,215,0,0.8)"
              }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Join the Saints Army. Embrace your destiny. 👑⚡
            </motion.h3>
            
            <p 
              className="text-xl font-bold text-saints-gold animate-pulse mb-8"
              style={{
                textShadow: "0 0 20px rgba(255,215,0,0.9)"
              }}
            >
              The flame burns eternal through unity, governance, and shared prosperity.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={containerVariants}
            >
              <motion.button
                className="cosmic-button btn-primary px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Full Whitepaper
              </motion.button>
              
              <motion.button
                className="cosmic-button bg-saints-purple hover:bg-saints-purple/80 px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhitePaper;
