
import React from 'react';
import NFTDetailModal from '@/components/NFTDetailModal';
import { NFTDetails } from '@/components/NFTDetailModal';
import CollectionHeader from '@/components/CollectionHeader';
import NFTGrid from '@/components/NFTGrid';
import { nftCollection } from '@/data/nftData';

const Collection: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = React.useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleNFTClick = (nft: NFTDetails) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-16 sm:pt-20 pb-6 sm:pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-saints-dark"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4">
        <CollectionHeader totalNFTs={nftCollection.length} />
        <NFTGrid nftCollection={nftCollection} onNFTClick={handleNFTClick} />
      </div>
      
      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </div>
  );
};

export default Collection;
