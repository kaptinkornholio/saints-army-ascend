
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Shield, Sword, Trophy, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface MissionData {
  id: number;
  title: string;
  description: string;
  rewards: string;
  progress: number;
  status: 'locked' | 'available' | 'completed';
  icon: React.ReactNode;
}

interface SideOpData {
  id: string;
  title: string;
  description: string;
  rewards: string;
  status: 'locked' | 'available' | 'completed';
}

const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMission, setSelectedMission] = useState<MissionData | null>(null);
  const [selectedSideOp, setSideOpSideOp] = useState<SideOpData | null>(null);
  const [stats, setStats] = useState({
    nftsMinted: 1,
    missionsComplete: 0,
    sideOps: 0,
    totalRewards: 0.3
  });

  const missions: MissionData[] = [
    {
      id: 1,
      title: "Genesis Launch",
      description: "Launch the initial SAINTS ARMY NFT collection with divine artwork and establish the foundation of our Web3 fortress.",
      rewards: "5 SOL + Exclusive Founder's Badge",
      progress: 85,
      status: 'available',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Community Fortress",
      description: "Build a strong community of digital warriors through Discord, Twitter, and exclusive holder benefits.",
      rewards: "3 SOL + Community Role",
      progress: 60,
      status: 'available',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Battle Royale",
      description: "Host epic NFT battles, tournaments, and competitions to determine the strongest SAINTS in our army.",
      rewards: "10 SOL + Champion NFT",
      progress: 0,
      status: 'locked',
      icon: <Sword className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Divine Marketplace",
      description: "Launch our own marketplace for trading SAINTS ARMY NFTs with zero fees for holders.",
      rewards: "15 SOL + Marketplace Access",
      progress: 0,
      status: 'locked',
      icon: <Trophy className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Metaverse Conquest",
      description: "Establish SAINTS ARMY presence in the metaverse with virtual lands and immersive experiences.",
      rewards: "25 SOL + Metaverse Land",
      progress: 0,
      status: 'locked',
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const sideOps: SideOpData[] = [
    { id: '1a', title: 'Twitter Raid', description: 'Organize coordinated Twitter engagement campaigns', rewards: '1 SOL', status: 'available' },
    { id: '1b', title: 'Discord Growth', description: 'Achieve 1000 Discord members milestone', rewards: '0.5 SOL', status: 'available' },
    { id: '2a', title: 'Art Contest', description: 'Community art creation contest with voting', rewards: '2 SOL', status: 'locked' },
    { id: '2b', title: 'Meme War', description: 'Best SAINTS ARMY meme competition', rewards: '1 SOL', status: 'locked' },
    { id: '3a', title: 'Partnership', description: 'Secure strategic partnerships with other projects', rewards: '3 SOL', status: 'locked' },
    { id: '3b', title: 'Influencer', description: 'Get major crypto influencer endorsement', rewards: '2 SOL', status: 'locked' },
    { id: '4a', title: 'Charity Drive', description: 'Organize community charity initiative', rewards: '1.5 SOL', status: 'locked' },
    { id: '4b', title: 'Gaming Guild', description: 'Form SAINTS ARMY gaming guild', rewards: '2 SOL', status: 'locked' },
    { id: '5a', title: 'DAO Launch', description: 'Establish decentralized governance', rewards: '5 SOL', status: 'locked' },
    { id: '5b', title: 'Token Launch', description: 'Launch utility token for ecosystem', rewards: '10 SOL', status: 'locked' }
  ];

  useEffect(() => {
    // Simulate real-time stats updates
    const interval = setInterval(() => {
      setStats(prev => ({
        nftsMinted: Math.min(prev.nftsMinted + Math.random() > 0.7 ? 1 : 0, 80),
        missionsComplete: missions.filter(m => m.status === 'completed').length,
        sideOps: sideOps.filter(s => s.status === 'completed').length,
        totalRewards: prev.totalRewards + (Math.random() > 0.9 ? 0.1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageUrl = "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/OIP%20(20).jpeg";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
          filter: 'brightness(0.3) sepia(20%) saturate(150%) hue-rotate(25deg)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-saints-dark/80 via-saints-purple/20 to-saints-dark/90" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-saints-purple/10 to-saints-dark/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-saints-gold rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

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
            <motion.h1 
              className="text-4xl md:text-5xl font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue text-center"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,215,0,0.5)",
                  "0 0 30px rgba(178,0,255,0.7)",
                  "0 0 20px rgba(255,215,0,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚔️ SAINTS ARMY SIEGE ⚔️
            </motion.h1>
            <div className="text-saints-gold text-right">
              <p className="text-sm">Protectors of Web3</p>
              <p className="text-xs opacity-80">Solana NFT Campaign</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Stats Container */}
      <motion.div 
        className="fixed top-24 right-4 z-20 bg-gradient-to-br from-saints-dark/90 to-saints-purple/30 backdrop-blur-md border-2 border-saints-gold/30 rounded-xl p-4 shadow-2xl"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-saints-gold font-bold text-lg mb-3 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Campaign Stats
        </h3>
        <div className="space-y-2 text-white text-sm">
          <p>📦 NFTs Minted: <span className="text-saints-gold font-bold">{stats.nftsMinted}/80</span></p>
          <p>⚔️ Missions: <span className="text-saints-gold font-bold">{stats.missionsComplete}/5</span></p>
          <p>🎯 Side Ops: <span className="text-saints-gold font-bold">{stats.sideOps}/10</span></p>
          <p>💰 Rewards: <span className="text-saints-gold font-bold">{stats.totalRewards.toFixed(1)}</span> SOL</p>
        </div>
      </motion.div>

      {/* Main Content - Fortress Layout */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
        <div className="relative w-full h-full max-w-5xl mx-auto">
          
          {/* Mission Points - Distributed around the fortress */}
          <motion.div
            className="absolute mission-point cursor-pointer bg-gradient-to-br from-saints-gold to-saints-purple"
            style={{
              top: '20%',
              left: '45%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B4513'
            }}
            onClick={() => setSelectedMission(missions[0])}
            whileHover={{ scale: 1.15, boxShadow: "0 0 35px rgba(255,215,0,0.9)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-8 h-8" />
            <span className="text-xs font-bold mt-1">M1</span>
          </motion.div>

          <motion.div
            className="absolute mission-point cursor-pointer bg-gradient-to-br from-saints-gold to-saints-purple"
            style={{
              top: '35%',
              left: '25%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B4513'
            }}
            onClick={() => setSelectedMission(missions[1])}
            whileHover={{ scale: 1.15, boxShadow: "0 0 35px rgba(255,215,0,0.9)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Shield className="w-8 h-8" />
            <span className="text-xs font-bold mt-1">M2</span>
          </motion.div>

          <motion.div
            className="absolute mission-point cursor-pointer bg-gray-600 opacity-50"
            style={{
              top: '50%',
              left: '65%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B4513'
            }}
            onClick={() => setSelectedMission(missions[2])}
            whileHover={{ scale: 1.15, boxShadow: "0 0 35px rgba(255,215,0,0.9)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Sword className="w-8 h-8" />
            <span className="text-xs font-bold mt-1">M3</span>
          </motion.div>

          <motion.div
            className="absolute mission-point cursor-pointer bg-gray-600 opacity-50"
            style={{
              top: '65%',
              left: '20%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B4513'
            }}
            onClick={() => setSelectedMission(missions[3])}
            whileHover={{ scale: 1.15, boxShadow: "0 0 35px rgba(255,215,0,0.9)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Trophy className="w-8 h-8" />
            <span className="text-xs font-bold mt-1">M4</span>
          </motion.div>

          <motion.div
            className="absolute mission-point cursor-pointer bg-gray-600 opacity-50"
            style={{
              top: '80%',
              left: '50%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #8B4513',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B4513'
            }}
            onClick={() => setSelectedMission(missions[4])}
            whileHover={{ scale: 1.15, boxShadow: "0 0 35px rgba(255,215,0,0.9)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Zap className="w-8 h-8" />
            <span className="text-xs font-bold mt-1">M5</span>
          </motion.div>

          {/* Side Operations - Scattered around missions */}
          {sideOps.map((sideOp, index) => {
            const positions = [
              { top: '25%', left: '60%' },
              { top: '30%', left: '10%' },
              { top: '40%', left: '75%' },
              { top: '45%', left: '5%' },
              { top: '55%', left: '80%' },
              { top: '60%', left: '40%' },
              { top: '70%', left: '75%' },
              { top: '75%', left: '5%' },
              { top: '85%', left: '70%' },
              { top: '90%', left: '25%' }
            ];
            
            return (
              <motion.div
                key={sideOp.id}
                className={`absolute side-op cursor-pointer ${
                  sideOp.status === 'completed' ? 'bg-green-400' : 
                  sideOp.status === 'available' ? 'bg-gradient-to-br from-saints-blue to-saints-purple' : 
                  'bg-gray-500 opacity-50'
                }`}
                style={{
                  top: positions[index]?.top || '50%',
                  left: positions[index]?.left || '50%',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '3px solid #8B4513',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8B4513'
                }}
                onClick={() => setSideOpSideOp(sideOp)}
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(210,105,30,0.8)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold">{sideOp.id.toUpperCase()}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mission Modal */}
      <AnimatePresence>
        {selectedMission && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMission(null)}
          >
            <motion.div 
              className="bg-gradient-to-br from-saints-dark to-saints-purple/20 border-2 border-saints-gold/30 rounded-xl p-6 max-w-md w-full mx-4 backdrop-blur-md"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-saints-gold">{selectedMission.title}</h3>
                <button 
                  onClick={() => setSelectedMission(null)}
                  className="text-saints-gold hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-white/80 mb-4">{selectedMission.description}</p>
              <div className="bg-saints-gold/20 p-3 rounded-lg mb-4">
                <h4 className="text-saints-gold font-bold mb-2">Rewards</h4>
                <p className="text-white">{selectedMission.rewards}</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-white/70 mb-1">
                  <span>Progress</span>
                  <span>{selectedMission.progress}%</span>
                </div>
                <div className="w-full h-3 bg-saints-dark/50 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-saints-gold to-saints-purple rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedMission.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Op Modal */}
      <AnimatePresence>
        {selectedSideOp && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSideOpSideOp(null)}
          >
            <motion.div 
              className="bg-gradient-to-br from-saints-dark to-saints-blue/20 border-2 border-saints-purple/30 rounded-xl p-6 max-w-md w-full mx-4 backdrop-blur-md"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-saints-purple">Side Op: {selectedSideOp.title}</h3>
                <button 
                  onClick={() => setSideOpSideOp(null)}
                  className="text-saints-purple hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-white/80 mb-4">{selectedSideOp.description}</p>
              <div className="bg-saints-purple/20 p-3 rounded-lg">
                <h4 className="text-saints-purple font-bold mb-2">Rewards</h4>
                <p className="text-white">{selectedSideOp.rewards}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Roadmap;
