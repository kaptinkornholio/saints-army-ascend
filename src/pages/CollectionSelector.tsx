
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Moon, Sun } from 'lucide-react';

const CollectionSelector: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-16 sm:pt-20 pb-6 sm:pb-10 flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-saints-dark"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-6 text-saints-gold hover:bg-saints-purple/20 text-sm absolute top-4 left-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
            variants={itemVariants}
          >
            Choose Your Saints Collection
          </motion.h1>

          <motion.p 
            className="text-white/70 mb-12 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore the divine realms of light and shadow. Each collection contains 50 unique Saints with their own powers and destinies.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {/* Dark Saints Collection */}
            <motion.div
              className="cosmic-card p-6 lg:p-8 rounded-xl bg-gradient-to-br from-black/80 to-saints-purple/10 border border-saints-purple/30 group cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(178,0,255,0.5)" }}
              onClick={() => navigate('/collection/dark')}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-saints-purple/20 group-hover:bg-saints-purple/30 transition-colors">
                  <Moon className="w-12 h-12 text-saints-purple" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Dark Saints</h2>
              <p className="text-white/70 mb-6">
                Masters of shadow, void, and the mysteries of the unknown. These Saints harness the power of darkness and chaos.
              </p>
              <Button className="w-full bg-saints-purple/30 hover:bg-saints-purple/50 text-white border border-saints-purple/50">
                Enter Dark Realm
              </Button>
            </motion.div>

            {/* Light Saints Collection */}
            <motion.div
              className="cosmic-card p-6 lg:p-8 rounded-xl bg-gradient-to-br from-black/80 to-saints-gold/10 border border-saints-gold/30 group cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,215,0,0.5)" }}
              onClick={() => navigate('/collection/light')}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-saints-gold/20 group-hover:bg-saints-gold/30 transition-colors">
                  <Sun className="w-12 h-12 text-saints-gold" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Light Saints</h2>
              <p className="text-white/70 mb-6">
                Guardians of light, creation, and divine wisdom. These Saints channel the power of illumination and order.
              </p>
              <Button className="w-full bg-saints-gold/30 hover:bg-saints-gold/50 text-white border border-saints-gold/50">
                Enter Light Realm
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionSelector;
