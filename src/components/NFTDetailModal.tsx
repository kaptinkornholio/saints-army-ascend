
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';

export interface NFTTraits {
  trait_type: string;
  value: string;
}

export interface NFTDetails {
  id: number;
  image: string;
  title: string;
  description: string;
  traits: NFTTraits[];
}

interface NFTDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: NFTDetails | null;
}

const NFTDetailModal: React.FC<NFTDetailModalProps> = ({ isOpen, onClose, nft }) => {
  if (!nft) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gradient-to-br from-saints-dark to-black border border-saints-purple/30 max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl bg-clip-text text-transparent bg-gradient-to-r from-saints-gold to-saints-purple">
            {nft.title}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            SAINTS ARMY NFT Collection
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={nft.image} 
                alt={nft.title} 
                className="w-full h-full object-cover rounded-xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white/90 font-orbitron mb-2">Description</h3>
              <p className="text-white/70">{nft.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white/90 font-orbitron mb-2">Traits</h3>
              <div className="grid grid-cols-2 gap-2">
                {nft.traits.map((trait, index) => (
                  <div 
                    key={index} 
                    className="bg-saints-purple/20 border border-saints-purple/30 rounded-lg p-3"
                  >
                    <span className="text-saints-gold text-sm block">{trait.trait_type}</span>
                    <span className="text-white font-medium">{trait.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-2 mt-2 border-t border-saints-purple/20">
              <a 
                href="https://magiceden.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-saints-gold hover:text-saints-blue transition-colors text-sm inline-flex items-center"
              >
                View on Magic Eden
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NFTDetailModal;
export { NFTDetailModal };
