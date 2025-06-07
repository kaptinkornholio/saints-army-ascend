
import React, { useEffect } from 'react';
import Header from '@/components/Header';
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
        
        {/* Content sections with parallax */}
        <Header />
        
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
      </SmoothScroll>
      
      {/* Global Coming Soon Modal */}
      <ComingSoonModal />
    </div>
  );
};

export default Index;
