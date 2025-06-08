
import React, { Suspense, lazy } from 'react';
import NFTDetailModal from '@/components/NFTDetailModal';
import { NFTDetails } from '@/components/NFTDetailModal';
import CollectionHeader from '@/components/CollectionHeader';
import NFTGridSkeleton from '@/components/NFTGridSkeleton';
import { lightSaintsCollection } from '@/data/lightSaintsData';

const OptimizedNFTGrid = lazy(() => import('@/components/OptimizedNFTGrid'));

const LightSaints: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = React.useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleNFTClick = React.useCallback((nft: NFTDetails) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-16 sm:pt-20 pb-6 sm:pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-saints-gold/20 to-saints-dark"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4">
        <CollectionHeader 
          totalNFTs={lightSaintsCollection.length} 
          collectionName="Light Saints"
          collectionDescription="Guardians of light, creation, and divine wisdom"
          backPath="/collection"
        />
        
        <Suspense fallback={<NFTGridSkeleton count={24} />}>
          <OptimizedNFTGrid nftCollection={lightSaintsCollection} onNFTClick={handleNFTClick} />
        </Suspense>
      </div>
      
      {selectedNFT && (
        <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
      )}
    </div>
  );
};

export default LightSaints;
