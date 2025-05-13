
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import AboutZeok from '@/components/AboutZeok';
import NFTShowcase from '@/components/NFTShowcase';
import JoinCommunity from '@/components/JoinCommunity';
import CTAFooter from '@/components/CTAFooter';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "SAINTS ARMY NFT | Unleash Divine Art with #OneArmy";
    
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
  }, []);

  return (
    <div className="min-h-screen bg-saints-dark text-white overflow-hidden">
      <Header />
      <AboutZeok />
      <NFTShowcase />
      <JoinCommunity />
      <CTAFooter />
    </div>
  );
};

export default Index;
