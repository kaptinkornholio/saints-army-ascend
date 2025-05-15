
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NFTRotator from './NFTRotator';
import NFTDetailModal from './NFTDetailModal';
import { NFTDetails } from './NFTDetailModal';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NFTShowcase: React.FC = () => {
  // Enhanced NFT data with descriptions and traits
  const showcaseNFTs: NFTDetails[] = [
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
    }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedNFT, setSelectedNFT] = useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const handleViewDetails = (nft: NFTDetails, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleViewCollection = () => {
    navigate('/collection');
  };

  return (
    <section className="py-10 md:py-20 relative overflow-hidden" data-scroll-section>
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 2 === 0 ? 'from-saints-gold/10 to-saints-purple/5' : 'from-saints-purple/10 to-saints-blue/5'
            }`}
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(70px)',
              opacity: 0.5,
              animation: `float ${Math.random() * 5 + 10}s infinite alternate ease-in-out`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="cosmic-title text-3xl md:text-5xl mb-8 md:mb-12 text-center"
          data-scroll
          data-scroll-speed="1"
        >
          Featured NFTs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {showcaseNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              variants={item}
              className="cosmic-card p-4 md:p-6 rounded-xl relative overflow-hidden group"
              onMouseEnter={() => setHoveredId(nft.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-scroll
              data-scroll-speed={nft.id % 2 === 0 ? "0.3" : "0.5"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-xl blur-sm transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Use the 3D NFT rotator for enhanced visuals */}
                <div className="mb-4 md:mb-6">
                  <NFTRotator image={nft.image} title={nft.title} />
                </div>

                <h3 className="font-orbitron font-extrabold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue text-center mb-2 md:mb-3 relative">
                  {nft.title}
                  <span className="block h-0.5 w-0 bg-gradient-to-r from-saints-purple via-saints-gold to-saints-blue group-hover:w-full transition-all duration-700 mt-2 mx-auto"></span>
                </h3>

                <div className="mt-2 md:mt-3 flex justify-center">
                  <span className="text-xs bg-saints-purple/40 text-white rounded-full px-3 py-1.5 border border-saints-purple/20 backdrop-blur-sm shadow-[0_0_10px_rgba(178,0,255,0.4)] transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(178,0,255,0.6)]">
                   COMING SOON
                  </span>
                </div>

                <div className={`mt-3 md:mt-5 pt-3 md:pt-4 border-t border-saints-purple/20 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0'} transition-all duration-500`}>
                  <button
                    onClick={(e) => handleViewDetails(nft, e)}
                    className="w-full py-2 flex justify-center items-center gap-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 text-xs md:text-sm font-orbitron hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
                  >
                    <Info size={16} />
                    View Details
                  </button>
                </div>
              </div>

              <div
                className="absolute top-2 right-2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saints-purple to-saints-blue rounded-full opacity-0 group-hover:opacity-100 filter blur-xl transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)'
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleViewCollection}
            className="inline-block relative overflow-hidden group"
          >
            <span className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-saints-purple to-saints-blue text-white font-orbitron font-bold py-3 md:py-4 px-8 md:px-10 rounded-md transition-all duration-300 border border-saints-purple/30 hover:shadow-[0_0_20px_rgba(178,0,255,0.6)]">
              View Full Collection
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-saints-gold to-saints-blue opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-saints-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            <span className="absolute top-0 right-0 w-full h-1 bg-saints-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </button>
        </motion.div>
      </div>

      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </section>
  );
};

export default NFTShowcase;
