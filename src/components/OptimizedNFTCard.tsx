
import React, { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { NFTDetails } from '@/components/NFTDetailModal';

interface OptimizedNFTCardProps {
  nft: NFTDetails;
  onClick: (nft: NFTDetails) => void;
  index: number;
}

const OptimizedNFTCard: React.FC<OptimizedNFTCardProps> = memo(({ nft, onClick, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = useCallback(() => {
    onClick(nft);
  }, [nft, onClick]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    console.log(`Failed to load image: ${nft.image}`);
    setImageError(true);
    setImageLoaded(true);
  }, [nft.image]);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: index * 0.02 // Stagger animation based on index
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="cosmic-card p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(178,0,255,0.5)] bg-gradient-to-br from-black/80 to-saints-purple/10 cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-lg lg:rounded-xl blur-sm transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-2 lg:mb-3 rounded-md lg:rounded-lg overflow-hidden bg-saints-purple/10">
          {!imageLoaded && (
            <div className="w-full aspect-square bg-saints-purple/20 animate-pulse flex items-center justify-center">
              <span className="text-saints-gold text-xs">Loading...</span>
            </div>
          )}
          <motion.div
            whileHover={{ scale: imageLoaded ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className={imageLoaded ? 'block' : 'hidden'}
          >
            <img 
              src={imageError ? '/placeholder.svg' : nft.image} 
              alt={nft.title}
              className="w-full aspect-square object-cover"
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          </motion.div>
        </div>
        
        <h3 className="font-bold text-xs sm:text-sm lg:text-base bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue mb-1 lg:mb-2 text-center leading-tight">
          {nft.title}
        </h3>
        
        <div className="flex flex-wrap gap-1 mb-2 lg:mb-3 justify-center">
          {nft.traits.slice(0, 2).map((trait, idx) => (
            <span 
              key={idx}
              className="text-xs bg-saints-purple/20 text-white/80 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1 border border-saints-purple/30"
            >
              {trait.value}
            </span>
          ))}
        </div>
        
        <div className="mt-2 pt-1 lg:pt-2 border-t border-saints-purple/20">
          <button
            className="w-full py-1.5 lg:py-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-md lg:rounded-lg border border-saints-purple/30 transition-all duration-300 text-xs font-semibold hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
});

OptimizedNFTCard.displayName = 'OptimizedNFTCard';

export default OptimizedNFTCard;
