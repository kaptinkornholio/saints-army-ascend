
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

interface CollectionHeaderProps {
  totalNFTs: number;
  collectionName?: string;
  collectionDescription?: string;
  backPath?: string;
}

const CollectionHeader: React.FC<CollectionHeaderProps> = ({ 
  totalNFTs, 
  collectionName = "SAINTS ARMY Collection",
  collectionDescription = "Explore the complete collection of divine NFTs",
  backPath = "/"
}) => {
  const navigate = useNavigate();
  const { openModal } = useComingSoonModal();

  const handleMagicEdenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal("Magic Eden Coming Soon", "The SAINTS ARMY NFT collection will be available on Magic Eden soon. Stay tuned for the official launch!");
  };

  return (
    <>
      {/* Header */}
      <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <Button 
            onClick={() => navigate(backPath)} 
            variant="ghost" 
            className="mb-3 text-saints-gold hover:bg-saints-purple/20 text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue">
            {collectionName}
          </h1>
          <p className="text-white/70 mt-2 text-xs sm:text-sm">
            {collectionDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Community Counter */}
          <div className="flex items-center gap-2 px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
            <Users className="h-4 w-4 text-saints-gold" />
            <span className="text-saints-gold font-semibold text-xs sm:text-sm">54 Members</span>
          </div>

          <div className="px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
            <p className="text-saints-gold font-semibold text-xs sm:text-sm">Total: {totalNFTs}</p>
          </div>
        </div>
      </div>

      {/* Magic Eden Coming Soon Button */}
      <div className="mb-4 lg:mb-6 text-center">
        <button
          onClick={handleMagicEdenClick}
          className="inline-flex items-center gap-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 px-3 lg:px-4 py-2 hover:shadow-[0_0_15px_rgba(178,0,255,0.5)] text-xs sm:text-sm"
        >
          <img src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/magicedenlogo.png" alt="Magic Eden" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" />
          <span className="font-semibold">Available on Magic Eden Soon</span>
        </button>
      </div>
    </>
  );
};

export default CollectionHeader;
