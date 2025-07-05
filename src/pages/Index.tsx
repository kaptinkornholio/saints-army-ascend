
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
import { Moon, Sun } from 'lucide-react';

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
      
      {/* GitHub Image Background Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTSBACK4.png)"
        }}
      />
      
      {/* Social Media Sidebar */}
      <SocialMediaBar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Replace text title with image logo */}
            <div className="mb-6 flex justify-center">
              <img 
                src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTS (22).png"
                alt="SAINTS ARMY NFT Logo" 
                className="max-w-full h-auto max-h-64 md:max-h-80 lg:max-h-96 object-contain filter drop-shadow-2xl"
              />
            </div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the SAINTS ARMY NFT, where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own the divine.
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

          {/* Collection Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
          >
            {/* Dark Saints Collection */}
            <motion.div
              className="cosmic-card p-6 lg:p-8 rounded-xl bg-gradient-to-br from-black/80 to-saints-purple/10 border border-saints-purple/30 group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(178,0,255,0.5)" }}
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
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-saints-purple/20 group-hover:bg-saints-purple/30 transition-colors">
                    <Moon className="w-12 h-12 text-saints-purple" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">Dark Saints</h2>
                <p className="text-white/70 mb-6">
                  Masters of shadow, void, and the mysteries of the unknown. These Saints harness the power of darkness and chaos.
                </p>
                <span className="text-saints-purple font-semibold">50 Unique Saints →</span>
              </div>
            </motion.div>

            {/* Light Saints Collection */}
            <motion.div
              className="cosmic-card p-6 lg:p-8 rounded-xl bg-gradient-to-br from-black/80 to-saints-gold/10 border border-saints-gold/30 group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,215,0,0.5)" }}
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
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-saints-gold/20 group-hover:bg-saints-gold/30 transition-colors">
                    <Sun className="w-12 h-12 text-saints-gold" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">Light Saints</h2>
                <p className="text-white/70 mb-6">
                  Guardians of light, creation, and divine wisdom. These Saints channel the power of illumination and order.
                </p>
                <span className="text-saints-gold font-semibold">50 Unique Saints →</span>
              </div>
            </motion.div>
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
    </div>
  );
};

export default Index;
