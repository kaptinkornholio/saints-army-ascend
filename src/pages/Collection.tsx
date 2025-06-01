
import React from 'react';
import { motion } from 'framer-motion';
import NFTDetailModal from '@/components/NFTDetailModal';
import { NFTDetails } from '@/components/NFTDetailModal';
import NFTCard from '@/components/NFTCard';
import { nftCollection } from '@/data/nftData';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

const Collection: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = React.useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  const { openModal } = useComingSoonModal();

  const handleNFTClick = (nft: NFTDetails) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMagicEdenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal("Magic Eden Coming Soon", "The SAINTS ARMY NFT collection will be available on Magic Eden soon. Stay tuned for the official launch!");
  };

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
    <div className="min-h-screen bg-saints-dark text-white pt-20 pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-saints-dark"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <Button 
              onClick={() => navigate('/')} 
              variant="ghost" 
              className="mb-3 text-saints-gold hover:bg-saints-purple/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue">
              SAINTS ARMY Collection
            </h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base">
              Explore the complete collection of 83 divine NFTs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Community Counter */}
            <div className="flex items-center gap-2 px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
              <Users className="h-4 w-4 text-saints-gold" />
              <span className="text-saints-gold font-semibold text-sm">55 Members</span>
            </div>

            <div className="px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
              <p className="text-saints-gold font-semibold text-sm">Total: {nftCollection.length}</p>
            </div>
          </div>
        </div>

        {/* Magic Eden Coming Soon Button */}
        <div className="mb-6 text-center">
          <button
            onClick={handleMagicEdenClick}
            className="inline-flex items-center gap-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 px-4 py-2 hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
          >
            <img src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Magic-Eden-Logo.jpg" alt="Magic Eden" className="w-5 h-5 rounded-full" />
            <span className="font-semibold">Available on Magic Eden Soon</span>
          </button>
        </div>

        {/* NFT Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nftCollection.map((nft) => (
            <NFTCard key={nft.id} nft={nft} onClick={handleNFTClick} />
          ))}
        </motion.div>
      </div>
      
      {/* NFT Detail Modal */}
      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </div>
  );
};

export default Collection;
