
import React from 'react';
import { motion } from 'framer-motion';
import { NFTDetailModal, NFTDetails } from '@/components/NFTDetailModal';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Collection: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = React.useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  
  // Enhanced collection of NFTs
  const nftCollection: NFTDetails[] = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_fd7a394d-2163-42ea-8442-d9319d7dc32a.png",
      title: "SAINT WARRIOR",
      description: "A divine protector with celestial powers, born from the stars to defend the sacred realms. Infused with cosmic energy, this Saint commands respect across dimensions.",
      traits: [
        { trait_type: "Class", value: "Warrior" },
        { trait_type: "Rarity", value: "Legendary" },
        { trait_type: "Power", value: "Cosmic Shield" },
        { trait_type: "Element", value: "Celestial" }
      ]
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_84bfd672-a697-4e9b-aec0-92bf4f75ac4b.png",
      title: "GALACTIC SAINT",
      description: "Traversing the cosmos, this Saint harnesses galactic energy to open portals between worlds. Their vision sees beyond the veil of reality.",
      traits: [
        { trait_type: "Class", value: "Mystic" },
        { trait_type: "Rarity", value: "Epic" },
        { trait_type: "Power", value: "Portal Creation" },
        { trait_type: "Element", value: "Void" }
      ]
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_640a9d23-dc16-480d-9029-f17ea3097702.png",
      title: "DIVINE TACTICIAN",
      description: "Strategic mastermind of the Saints Army, capable of predicting enemy movements across space and time. His tactical brilliance has never led to defeat.",
      traits: [
        { trait_type: "Class", value: "Strategist" },
        { trait_type: "Rarity", value: "Mythic" },
        { trait_type: "Power", value: "Foresight" },
        { trait_type: "Element", value: "Time" }
      ]
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_b07b4f49-eff1-4f00-9a72-9ab9ddaf8791.png",
      title: "ETHEREAL SAINT",
      description: "Born of pure ethereal energy, this Saint exists between dimensions. Their touch can heal allies or devastate enemies, making them a pivotal force in cosmic conflicts.",
      traits: [
        { trait_type: "Class", value: "Healer" },
        { trait_type: "Rarity", value: "Divine" },
        { trait_type: "Power", value: "Energy Manipulation" },
        { trait_type: "Element", value: "Ether" }
      ]
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_a8477262-d89e-4f3f-8486-0a33716f9efb.png",
      title: "CELESTIAL GUARDIAN",
      description: "Guardian of the sacred celestial gates, this Saint ensures only the worthy may pass. Ancient wisdom flows through their veins, guiding their judgment.",
      traits: [
        { trait_type: "Class", value: "Guardian" },
        { trait_type: "Rarity", value: "Immortal" },
        { trait_type: "Power", value: "Judgement" },
        { trait_type: "Element", value: "Light" }
      ]
    },
    {
      id: 6,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_01bd3426-feb2-464e-94bc-c27bf8da8c1f.png",
      title: "QUANTUM SAINT",
      description: "Existing in multiple realities simultaneously, this Saint can manipulate the quantum field to alter probability and outcome. A strategic advantage in any conflict.",
      traits: [
        { trait_type: "Class", value: "Reality Bender" },
        { trait_type: "Rarity", value: "Quantum" },
        { trait_type: "Power", value: "Probability Shift" },
        { trait_type: "Element", value: "Quantum" }
      ]
    },
    {
      id: 7,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_6ebbf499-83a2-4658-a8f3-380b5b8ef234.png",
      title: "COSMIC COMMANDER",
      description: "Leading the Saints Army through countless victories, this commander's tactical genius is matched only by their unbreakable spirit and loyalty to the divine cause.",
      traits: [
        { trait_type: "Class", value: "Commander" },
        { trait_type: "Rarity", value: "Supreme" },
        { trait_type: "Power", value: "Inspiration Aura" },
        { trait_type: "Element", value: "Will" }
      ]
    },
    {
      id: 8,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_018782c6-d907-4711-829f-284d56744886.png",
      title: "TEMPORAL SAINT",
      description: "Master of the timestream, capable of glimpsing both past and future. Their guidance has prevented countless catastrophes across the timeline.",
      traits: [
        { trait_type: "Class", value: "Chronomancer" },
        { trait_type: "Rarity", value: "Timeless" },
        { trait_type: "Power", value: "Temporal Vision" },
        { trait_type: "Element", value: "Chronos" }
      ]
    },
  ];

  const handleNFTClick = (nft: NFTDetails) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Animation variants
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-20 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-saints-dark"></div>
        
        {/* Background effect elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 2 === 0 ? 'from-saints-gold/10 to-saints-purple/5' : 'from-saints-purple/10 to-saints-blue/5'
            }`}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(80px)',
              opacity: 0.4,
              animation: `float ${Math.random() * 8 + 15}s infinite alternate ease-in-out`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header with back button */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Button 
              onClick={() => navigate('/')} 
              variant="ghost" 
              className="mb-4 text-saints-gold hover:bg-saints-purple/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-3xl md:text-5xl font-orbitron font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue">
              SAINTS ARMY <span className="text-white">Collection</span>
            </h1>
            <p className="text-white/70 mt-2 max-w-2xl">
              Explore the complete collection of divine NFTs from the SAINTS ARMY. Each piece represents a unique member with special traits and abilities.
            </p>
          </div>

          <div className="px-4 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
            <p className="text-saints-gold font-orbitron">Total NFTs: {nftCollection.length}</p>
          </div>
        </div>

        {/* Filter and sort options could be added here in the future */}
        
        {/* NFT Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nftCollection.map((nft) => (
            <motion.div
              key={nft.id}
              variants={itemVariants}
              className="cosmic-card p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(178,0,255,0.5)] bg-gradient-to-br from-black/80 to-saints-purple/10"
              onClick={() => handleNFTClick(nft)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-xl blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={nft.image} 
                      alt={nft.title}
                      className="w-full aspect-square object-cover"
                    />
                  </motion.div>
                </div>
                
                <h3 className="font-orbitron font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue mb-1">
                  {nft.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 my-3">
                  {nft.traits.slice(0, 2).map((trait, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-saints-purple/20 text-white/80 rounded-full px-2 py-1 border border-saints-purple/30"
                    >
                      {trait.value}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3 pt-2 border-t border-saints-purple/20">
                  <button
                    className="w-full py-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 text-sm font-orbitron hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* NFT Detail Modal */}
      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </div>
  );
};

export default Collection;
