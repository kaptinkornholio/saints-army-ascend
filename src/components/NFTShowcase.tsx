
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NFTRotator from './NFTRotator';
import NFTDetailModal from './NFTDetailModal';
import { NFTDetails } from './NFTDetailModal';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useComingSoonModal } from '@/hooks/use-coming-soon-modal';

const NFTShowcase: React.FC = () => {
  // Featured single NFT - showcasing the best one with local image
  const featuredNFT: NFTDetails = {
    id: 1,
    image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png",
    title: "VOID PIONEER",
    description: "First to venture into the cosmic void, this Saint charted the pathways between dimensions. Their pioneering spirit opened routes that connect distant galaxies, making interstellar travel possible for the Saints Army.",
    traits: [
      { trait_type: "Class", value: "Pioneer" },
      { trait_type: "Rarity", value: "Genesis" },
      { trait_type: "Power", value: "Dimensional Mapping" },
      { trait_type: "Element", value: "Void" }
    ]
  };

  const [selectedNFT, setSelectedNFT] = useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { openModal } = useComingSoonModal();

  const handleViewDetails = (nft: NFTDetails, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleViewCollection = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/collection');
  };

  return (
    <section className="py-16 md:py-32 relative overflow-hidden" data-scroll-section>
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-saints-gold/20 to-saints-purple/10' : 
              i % 3 === 1 ? 'from-saints-purple/20 to-saints-blue/10' :
              'from-saints-blue/15 to-saints-gold/5'
            }`}
            style={{
              width: `${Math.random() * 400 + 300}px`,
              height: `${Math.random() * 400 + 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(80px)',
              opacity: 0.6,
              animation: `float ${Math.random() * 8 + 12}s infinite alternate ease-in-out`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="cosmic-title text-4xl md:text-6xl lg:text-7xl mb-12 md:mb-20 text-center"
          data-scroll
          data-scroll-speed="1"
        >
          Featured NFT
        </motion.h2>

        {/* Single featured NFT with enhanced presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="cosmic-card p-8 md:p-12 rounded-2xl relative overflow-hidden group cursor-pointer"
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            data-scroll
            data-scroll-speed="0.4"
          >
            {/* Enhanced glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/10 via-saints-purple/5 to-saints-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-saints-purple via-saints-gold to-saints-blue opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-700"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-saints-purple via-saints-gold to-saints-blue opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                 style={{ padding: '2px' }}>
              <div className="w-full h-full bg-saints-dark rounded-2xl"></div>
            </div>

            <div className="relative z-10">
              {/* Enhanced NFT display */}
              <div className="mb-8 md:mb-10">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <NFTRotator image={featuredNFT.image} title={featuredNFT.title} />
                </motion.div>
              </div>

              <motion.h3 
                className="font-orbitron font-extrabold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue text-center mb-4 md:mb-6 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {featuredNFT.title}
                <motion.span 
                  className="block h-1 w-0 bg-gradient-to-r from-saints-purple via-saints-gold to-saints-blue group-hover:w-full transition-all duration-1000 mt-3 mx-auto rounded-full"
                  whileHover={{ boxShadow: "0 0 20px rgba(178, 0, 255, 0.8)" }}
                ></motion.span>
              </motion.h3>

              {/* Enhanced description */}
              <motion.p 
                className="text-white/80 text-center text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {featuredNFT.description}
              </motion.p>

              <div className="text-center mb-6 md:mb-8">
                <motion.span 
                  className="text-sm md:text-base font-montserrat bg-saints-purple/50 text-white rounded-full px-6 py-3 border border-saints-purple/30 backdrop-blur-sm shadow-[0_0_15px_rgba(178,0,255,0.5)]"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 25px rgba(178,0,255,0.8)",
                    backgroundColor: "rgba(178, 0, 255, 0.7)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  COMING SOON
                </motion.span>
              </div>

              {/* Enhanced action button */}
              <div className="text-center">
                <motion.button
                  onClick={(e) => handleViewDetails(featuredNFT, e)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-saints-purple/40 to-saints-blue/40 hover:from-saints-purple/60 hover:to-saints-blue/60 text-white rounded-xl border border-saints-purple/40 transition-all duration-500 text-base md:text-lg font-orbitron px-8 py-4 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(178,0,255,0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Info size={20} />
                  View Details
                </motion.button>
              </div>
            </div>

            {/* Enhanced floating orbs */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${
                  i % 2 === 0 ? 'from-saints-purple to-saints-blue' : 'from-saints-gold to-saints-purple'
                } rounded-full opacity-0 group-hover:opacity-100 filter blur-sm`}
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleViewCollection}
            className="inline-block relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-saints-purple to-saints-blue text-white font-orbitron font-bold py-4 md:py-5 px-10 md:px-14 rounded-xl transition-all duration-500 border border-saints-purple/40 text-lg md:text-xl backdrop-blur-sm">
              Explore Full Collection
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-saints-gold to-saints-blue opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-saints-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-xl"
              whileHover={{ boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" }}
            ></motion.span>
            <motion.span 
              className="absolute top-0 right-0 w-full h-1 bg-saints-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-t-xl"
              whileHover={{ boxShadow: "0 0 20px rgba(0, 196, 255, 0.8)" }}
            ></motion.span>
          </motion.button>
        </motion.div>
      </div>

      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </section>
  );
};

export default NFTShowcase;
