
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Member {
  id: number;
  name: string;
  handle: string;
  xLink?: string;
}

const WhiteList: React.FC = () => {
  const navigate = useNavigate();

  const members: Member[] = [
    { id: 1, name: "SAINT😉😎", handle: "@SAINTINFOTECH11", xLink: "https://twitter.com/SAINTINFOTECH11" },
    { id: 2, name: "0xMaximus", handle: "@Maximus795443", xLink: "https://twitter.com/Maximus795443" },
    { id: 3, name: "Maxton", handle: "@Maxton312", xLink: "https://twitter.com/Maxton312" },
    { id: 4, name: "MR WEB", handle: "@MR_WEB1", xLink: "https://twitter.com/MR_WEB1" },
    { id: 5, name: "Just LOL 🧡🆓", handle: "@Ariboi2324", xLink: "https://twitter.com/Ariboi2324" },
    { id: 6, name: "KingPin_SJ", handle: "@Kingpin_SJ", xLink: "https://twitter.com/Kingpin_SJ" },
    { id: 7, name: "OCTOWEST", handle: "@OCTOWEST", xLink: "https://twitter.com/OCTOWEST" },
    { id: 8, name: "DC", handle: "@CpixelyD", xLink: "https://twitter.com/CpixelyD" },
    { id: 9, name: "Møøn Bêrry", handle: "@MnBrry29415", xLink: "https://twitter.com/MnBrry29415" },
    { id: 10, name: "Ambient Sounds for Mental Wealth", handle: "@AmbientSound", xLink: "https://twitter.com/AmbientSound" },
    { id: 11, name: "Møøn Bêrry", handle: "@MnBrry29415", xLink: "https://twitter.com/MnBrry29415" },
    { id: 12, name: "TRAILBLAZER", handle: "@DCorneliuson", xLink: "https://twitter.com/DCorneliuson" },
    { id: 13, name: "100 put TBD", handle: "@TBD", xLink: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-16 sm:pt-20 pb-6 sm:pb-10 relative overflow-hidden">
      {/* GitHub Image Background Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT25.png)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-saints-dark/80 to-saints-dark z-10"></div>

      <div className="container mx-auto px-3 sm:px-4 relative z-20">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-saints-gold hover:bg-saints-purple/20 text-sm absolute top-4 left-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.div 
          className="max-w-4xl mx-auto text-center pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue animate-pulse"
            variants={titleVariants}
            style={{
              textShadow: "0 0 20px rgba(255,215,0,0.8), 0 0 40px rgba(178,0,255,0.6), 0 0 60px rgba(0,123,255,0.4)",
              fontWeight: "900"
            }}
          >
            WHITE LIST
          </motion.h1>

          <motion.p 
            className="text-white/80 mb-12 text-lg font-semibold"
            variants={itemVariants}
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.5)"
            }}
          >
            Exclusive members of the Saints Army NFT community
          </motion.p>

          <motion.div 
            className="grid gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {members.map((member) => (
              <motion.div
                key={member.id}
                className="cosmic-card p-4 sm:p-6 rounded-xl bg-gradient-to-r from-black/80 via-saints-purple/10 to-black/80 border border-saints-gold/30 group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 30px rgba(255,215,0,0.6)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-saints-purple/5 via-saints-gold/5 to-saints-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left flex-1">
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-saints-gold transition-colors"
                      style={{
                        textShadow: "0 0 15px rgba(255,215,0,0.7)",
                        fontWeight: "800"
                      }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-saints-purple font-semibold text-lg group-hover:text-saints-blue transition-colors"
                      style={{
                        textShadow: "0 0 10px rgba(178,0,255,0.6)"
                      }}
                    >
                      {member.handle}
                    </p>
                  </div>
                  
                  {member.xLink && member.xLink !== "#" && (
                    <motion.a
                      href={member.xLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 p-3 rounded-full bg-saints-gold/20 hover:bg-saints-gold/40 transition-colors group-hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ExternalLink className="w-5 h-5 text-saints-gold" />
                    </motion.a>
                  )}
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-saints-gold/50 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p 
              className="text-saints-gold font-bold text-lg animate-pulse"
              style={{
                textShadow: "0 0 15px rgba(255,215,0,0.8)"
              }}
            >
              Total Members: {members.length}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhiteList;
