
import React, { useEffect } from 'react';
import AboutZeok from '@/components/AboutZeok';
import NFTShowcase from '@/components/NFTShowcase';
import CTAFooter from '@/components/CTAFooter';
import DropCountdown from '@/components/DropCountdown'; 
import SmoothScroll, { ParallaxSection } from '@/components/SmoothScroll';
import SocialSidebar from '@/components/SocialSidebar';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useComingSoonModal } from '@/hooks/use-coming-soon-modal';

const Index = () => {
  const isMobile = useIsMobile();
  const { ComingSoonModal } = useComingSoonModal();
  
  useEffect(() => {
    // Update the document title
    document.title = "SAINTS ARMY NFT | Unleash Divine Art with #SAINTSARMY";
    
    // Add viewport meta tag for better mobile support
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join SAINTS ARMY NFT where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own divine art.');
    }
    
    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', 'SAINTS ARMY NFT | Unleash Divine Art with #OneArmy');
    }
    
    if (ogDesc) {
      ogDesc.setAttribute('content', 'Join SAINTS ARMY NFT where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own divine art.');
    }
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Animation variants for section transitions
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Set drop date to 30 days from now
  const dropDate = new Date();
  dropDate.setDate(dropDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-saints-dark text-white overflow-hidden">
      <SmoothScroll>
        {/* Fixed position elements */}
        <div className="fixed top-0 left-0 w-full h-full -z-20 bg-gradient-to-b from-black to-saints-dark"></div>
        
        {/* Social Sidebar */}
        <SocialSidebar />
        
        {/* Main content with proper spacing for DynamicHeader */}
        <div className="pt-20 md:pt-24">
          {/* Hero section to replace removed Header */}
          <section className="relative w-full overflow-hidden py-12 md:py-20 min-h-screen">
            {/* Background overlay with SAINT1.png image */}
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{
                  backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-saints-dark/80 via-saints-dark/60 to-saints-dark/90"></div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-saints-purple/40 to-saints-blue/30 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-saints-gold/30 to-saints-purple/30 rounded-full filter blur-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-1/4 w-2 h-2 bg-saints-gold rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-saints-blue rounded-full"></div>
              </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-20">
              <div className="max-w-3xl mx-auto text-center" data-scroll data-scroll-speed="0.3">
                {/* Logo image */}
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTSLOGO3.png"
                    alt="SAINTS ARMY NFT Logo" 
                    className="max-w-full h-auto max-h-64 md:max-h-80 lg:max-h-96 object-contain filter drop-shadow-2xl"
                  />
                </div>
                
                <p className="cosmic-subtitle text-lg md:text-xl mb-12 font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
                  Discover the SAINTS ARMY NFT, where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own the divine.
                </p>
              </div>
            </div>
          </section>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ParallaxSection speed={isMobile ? 0 : 0.2}>
              <AboutZeok />
            </ParallaxSection>
          </motion.div>
          
          {/* Add countdown timer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ParallaxSection speed={isMobile ? 0 : 0.3}>
              <div className="max-w-6xl mx-auto px-4 py-8 md:py-20">
                <DropCountdown targetDate={dropDate} />
              </div>
            </ParallaxSection>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ParallaxSection speed={isMobile ? 0 : 0.4}>
              <NFTShowcase />
            </ParallaxSection>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <CTAFooter />
          </motion.div>
        </div>
      </SmoothScroll>
      
      {/* Global Coming Soon Modal */}
      <ComingSoonModal />
    </div>
  );
};

export default Index;
