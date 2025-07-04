
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const toggleMissions = (phaseId: string) => {
    setActivePhase(activePhase === phaseId ? null : phaseId);
  };

  const backgroundImageUrl = "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/OIP%20(20).jpeg";

  const phases = [
    {
      id: 'phase1',
      title: 'PHASE 1: GENESIS AWAKENING ⚡',
      objective: 'Forge the Saints Army foundation',
      missions: [
        'Mission 1A: Mint 888 Crowned Phantom NFTs on Solana',
        'Mission 1B: Launch on Magic Eden marketplace',
        'Mission 1C: Establish Telegram community hub',
        'Mission 1D: Deploy holder rewards system'
      ]
    },
    {
      id: 'phase2',
      title: 'PHASE 2: SANCTUARY CONSTRUCTION 🛡️',
      objective: 'Establish our digital fortress',
      missions: [
        'Mission 2A: Build Discord server infrastructure',
        'Mission 2B: Create holder verification system',
        'Mission 2C: Launch Saints Army sanctuary channels',
        'Mission 2D: Initialize weekly alpha calls'
      ]
    },
    {
      id: 'phase3',
      title: 'PHASE 3: COMMUNITY FORTIFICATION 🏰',
      objective: 'Strengthen the brotherhood',
      missions: [
        'Mission 3A: Deploy community rewards program',
        'Mission 3B: Create holder leaderboards',
        'Mission 3C: Launch referral system',
        'Mission 3D: Establish Saints Army ambassadors'
      ]
    },
    {
      id: 'phase4',
      title: 'PHASE 4: DUAL NATURE REVELATION 🌟⚫',
      objective: 'Prepare the dual army',
      missions: [
        'Mission 4A: Design Light Saints collection',
        'Mission 4B: Design Dark Saints collection',
        'Mission 4C: Determine final supply numbers',
        'Mission 4D: Create collection lore and backstory'
      ]
    },
    {
      id: 'phase5',
      title: 'PHASE 5: FACTION WARS ⚔️',
      objective: 'Divide and conquer through unity',
      missions: [
        'Mission 5A: Launch Light and Dark Saints mint',
        'Mission 5B: Create faction-based Discord channels',
        'Mission 5C: Deploy breeding/fusion mechanics',
        'Mission 5D: Launch Light vs Dark competitions'
      ]
    },
    {
      id: 'phase6',
      title: 'PHASE 6: TRADING COMMAND 📊',
      objective: 'Arm the Saints with divine intelligence',
      missions: [
        'Mission 6A: Integrate premium trading tools',
        'Mission 6B: Launch governance voting system',
        'Mission 6C: Deploy automated alerts',
        'Mission 6D: Create holder analytics dashboard'
      ]
    },
    {
      id: 'phase7',
      title: 'PHASE 7: DIVINE COMMERCE 🛍️',
      objective: 'Spread the Saints Army identity',
      missions: [
        'Mission 7A: Launch merchandise store',
        'Mission 7B: Create holder-exclusive items',
        'Mission 7C: Deploy merchandise coordination system',
        'Mission 7D: Establish Saints Army branding'
      ]
    },
    {
      id: 'phase8',
      title: 'PHASE 8: TOKEN GENESIS 🔥',
      objective: 'Ignite the eternal flame',
      missions: [
        'Mission 8A: Deploy $HOLYFLAME token contract',
        'Mission 8B: Launch staking mechanisms',
        'Mission 8C: Create token utility framework',
        'Mission 8D: Establish monthly airdrop system'
      ]
    },
    {
      id: 'phase9',
      title: 'PHASE 9: GOVERNANCE ASCENSION 👑',
      objective: 'Achieve divine democracy',
      missions: [
        'Mission 9A: Launch DAO voting system',
        'Mission 9B: Create proposal submission process',
        'Mission 9C: Deploy treasury management',
        'Mission 9D: Establish Saints Army council'
      ]
    },
    {
      id: 'phase10',
      title: 'PHASE 10: ETERNAL LEGACY ⚡',
      objective: 'Achieve immortality through unity',
      missions: [
        'Mission 10A: Cross-platform integration complete',
        'Mission 10B: Saints Army ecosystem fully operational',
        'Mission 10C: Community self-governance achieved',
        'Mission 10D: Legacy preservation protocols active'
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          filter: 'brightness(0.2) sepia(20%) saturate(150%) hue-rotate(25deg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-saints-dark/60 to-black/90" />
      
      {/* Header */}
      <motion.header 
        className="relative z-10 bg-gradient-to-r from-saints-dark/90 to-saints-purple/40 backdrop-blur-md border-b-2 border-saints-gold/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-saints-gold hover:text-white flex items-center gap-2 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 p-8 min-h-screen font-mono">
        <div className="container mx-auto relative">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
            style={{
              textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff",
              fontWeight: '900'
            }}
            animate={{ 
              textShadow: [
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff",
                "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #ff00ff",
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥 CROWNED PHANTOM BATTLE PLAN ROADMAP 🔥
          </motion.h1>
          
          <div className="relative flex flex-col items-center">
            {/* Animated Path Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full z-0">
              <motion.div
                className="w-full h-full rounded"
                style={{
                  background: `repeating-linear-gradient(
                    to bottom,
                    #ff00ff 0%,
                    #ff00ff 20%,
                    #00ffff 20%,
                    #00ffff 40%
                  )`
                }}
                animate={{
                  backgroundPosition: ['0 0', '0 40px']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-full -z-10 rounded blur-lg"
                style={{ background: 'rgba(0, 255, 255, 0.3)' }}
              />
            </div>

            {/* Phase Nodes */}
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative z-10 w-full max-w-md mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="p-6 rounded-lg cursor-pointer border-2 border-saints-purple bg-black/90 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px #00ffff",
                    borderColor: "#00ffff"
                  }}
                  onClick={() => toggleMissions(phase.id)}
                  style={{
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}
                >
                  <h2 
                    className="text-2xl font-bold mb-4 text-white"
                    style={{
                      textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff",
                      fontWeight: '900'
                    }}
                  >
                    {phase.title}
                  </h2>
                  <p className="text-sm text-gray-300 font-bold">
                    Objective: {phase.objective}
                  </p>
                  
                  <AnimatePresence>
                    {activePhase === phase.id && (
                      <motion.div
                        className="mt-4 p-4 bg-black/95 border border-saints-blue rounded-lg ml-5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul className="list-disc list-inside text-sm space-y-2">
                          {phase.missions.map((mission, missionIndex) => (
                            <motion.li
                              key={missionIndex}
                              className="text-saints-gold font-bold"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: missionIndex * 0.1 }}
                            >
                              {mission}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-center mt-12 text-lg font-bold"
            style={{
              textShadow: "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff"
            }}
            animate={{ 
              textShadow: [
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff",
                "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #ff00ff",
                "0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #00ffff"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Join the Saints Army. Embrace your destiny. 👑⚡
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
