
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import OptimizedNFTCard from '@/components/OptimizedNFTCard';
import { NFTDetails } from '@/components/NFTDetailModal';

interface OptimizedNFTGridProps {
  nftCollection: NFTDetails[];
  onNFTClick: (nft: NFTDetails) => void;
}

const OptimizedNFTGrid: React.FC<OptimizedNFTGridProps> = ({ nftCollection, onNFTClick }) => {
  // Memoize the container variants to prevent recreation on every render
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Reduced stagger for better performance
        duration: 0.3
      }
    }
  }), []);

  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {nftCollection.map((nft, index) => (
        <OptimizedNFTCard 
          key={nft.id} 
          nft={nft} 
          onClick={onNFTClick}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default OptimizedNFTGrid;
