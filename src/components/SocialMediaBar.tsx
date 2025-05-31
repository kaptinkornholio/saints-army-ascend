
import React from 'react';

interface SocialMediaBarProps {
  position?: 'side' | 'bottom';
}

const SocialMediaBar: React.FC<SocialMediaBarProps> = ({ position = 'side' }) => {
  // Component disabled - no longer rendering social media sidebar
  return null;
};

export default SocialMediaBar;
