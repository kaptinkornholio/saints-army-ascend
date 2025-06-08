
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import InteractiveBackground from '@/components/InteractiveBackground';
import NFTShowcase from '@/components/NFTShowcase';
import DropCountdown from '@/components/DropCountdown';
import AboutZeok from '@/components/AboutZeok';
import JoinCommunity from '@/components/JoinCommunity';
import CTAFooter from '@/components/CTAFooter';
import SocialMediaBar from '@/components/SocialMediaBar';
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useComingSoonModal();

  const handleJoinDiscord = () => {
    openModal("Join Our Discord", "Connect with the SAINTS ARMY community on Discord for exclusive updates, discussions, and more!");
  };

  // Set target date for NFT drop (example: 30 days from now)
  const dropDate = new Date();
  dropDate.setDate(dropDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-saints-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <InteractiveBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 cosmic-title">
              SAINTS ARMY
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ascend to digital divinity with the ultimate NFT collection. 100 unique Saints, each wielding cosmic powers and bearing the mark of eternal glory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => navigate('/collection/selector')}
              className="relative group px-8 py-4 bg-gradient-to-r from-saints-purple via-saints-blue to-saints-gold rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(178,0,255,0.6)] overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT20.png)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-saints-purple/60 to-saints-blue/60"></div>
              <span className="relative z-10">Explore Collections</span>
            </button>
            
            <button
              onClick={handleJoinDiscord}
              className="px-8 py-4 border-2 border-saints-gold text-saints-gold rounded-lg font-semibold hover:bg-saints-gold hover:text-saints-dark transition-all duration-300 hover:scale-105"
            >
              Join Community
            </button>
          </motion.div>

          {/* Dark and Light Saints Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
          >
            {/* Dark Saints */}
            <div 
              className="relative group cursor-pointer p-6 rounded-xl bg-gradient-to-br from-black/60 to-saints-purple/20 border border-saints-purple/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(178,0,255,0.5)]"
              onClick={() => navigate('/collection/dark')}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-40 transition-opacity"
                style={{
                  backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT15.png)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-saints-purple/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-saints-purple">Dark Saints</h3>
                <p className="text-white/70 mb-4">
                  Masters of shadow, void, and the mysteries of the unknown. These Saints harness the power of darkness and chaos.
                </p>
                <span className="text-saints-purple font-semibold">50 Unique Saints →</span>
              </div>
            </div>

            {/* Light Saints */}
            <div 
              className="relative group cursor-pointer p-6 rounded-xl bg-gradient-to-br from-black/60 to-saints-gold/20 border border-saints-gold/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]"
              onClick={() => navigate('/collection/light')}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 group-hover:opacity-40 transition-opacity"
                style={{
                  backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT35.png)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-saints-gold/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-saints-gold">Light Saints</h3>
                <p className="text-white/70 mb-4">
                  Guardians of light, creation, and divine wisdom. These Saints channel the power of illumination and order.
                </p>
                <span className="text-saints-gold font-semibold">50 Unique Saints →</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NFT Showcase */}
      <NFTShowcase />

      {/* Drop Countdown */}
      <DropCountdown targetDate={dropDate} />

      {/* About Zeok */}
      <AboutZeok />

      {/* Join Community */}
      <JoinCommunity />

      {/* CTA Footer */}
      <CTAFooter />

      {/* Social Media Bar */}
      <SocialMediaBar />
    </div>
  );
};

export default Index;
