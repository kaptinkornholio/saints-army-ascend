
import React from 'react';
import { motion } from 'framer-motion';
import { NFTDetails } from '@/components/NFTDetailModal';

interface NFTCardProps {
  nft: NFTDetails;
  onClick: (nft: NFTDetails) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onClick }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="cosmic-card p-4 lg:p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(178,0,255,0.5)] bg-gradient-to-br from-black/80 to-saints-purple/10 cursor-pointer"
      onClick={() => onClick(nft)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-xl blur-sm transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-3 lg:mb-4 rounded-lg overflow-hidden">
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
        
        <h3 className="font-bold text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue mb-2 text-center">
          {nft.title}
        </h3>
        
        <div className="flex flex-wrap gap-1 lg:gap-2 mb-3 justify-center">
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
            className="w-full py-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 text-xs lg:text-sm font-semibold hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTCard;
