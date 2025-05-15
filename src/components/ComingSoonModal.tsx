
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gradient-to-br from-saints-dark to-black border border-saints-purple/30 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl bg-clip-text text-transparent bg-gradient-to-r from-saints-gold to-saints-purple text-center">
            Minting Coming Soon
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center py-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 rounded-full bg-saints-purple/20 text-saints-gold"
          >
            <Clock size={48} className="animate-pulse" />
          </motion.div>
          
          <DialogDescription className="text-white text-center mb-4">
            We're preparing something special for you. The SAINTS ARMY NFT minting will be available soon.
          </DialogDescription>
          
          <p className="text-saints-gold text-center text-sm">
            Join our community to be the first to know when minting goes live!
          </p>
          
          <motion.div 
            className="mt-6 space-y-2 w-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-3">
              {['Discord', 'Twitter', 'Telegram'].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="text-center py-2 bg-saints-purple/20 hover:bg-saints-purple/40 text-white rounded border border-saints-purple/30 transition-all duration-300 text-sm font-orbitron"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;
export { ComingSoonModal };
