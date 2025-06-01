
import React from 'react';
import { motion } from 'framer-motion';
import NFTCard from '@/components/NFTCard';
import { NFTDetails } from '@/components/NFTDetailModal';

interface NFTGridProps {
  nftCollection: NFTDetails[];
  onNFTClick: (nft: NFTDetails) => void;
}

const NFTGrid: React.FC<NFTGridProps> = ({ nftCollection, onNFTClick }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {nftCollection.map((nft) => (
        <NFTCard key={nft.id} nft={nft} onClick={onNFTClick} />
      ))}
    </motion.div>
  );
};

export default NFTGrid;
