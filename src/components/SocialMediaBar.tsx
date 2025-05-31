
import React from 'react';

interface SocialMediaBarProps {
  position?: 'side' | 'bottom';
}

const SocialMediaBar: React.FC<SocialMediaBarProps> = ({ position = 'side' }) => {
  // Component completely disabled - no social media sidebar
  return null;
};

export default SocialMediaBar;
