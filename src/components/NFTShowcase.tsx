
import React from 'react';

const NFTShowcase: React.FC = () => {
  // Real NFT images from GitHub repository using raw URLs
  const showcaseNFTs = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/223.png",
      title: "Divine Guardian"
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/707.png",
      title: "Celestial Protector"
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Virtual%20reality%20with%20space%20elements%20Neon%20Instagram%20Post.png",
      title: "Ethereal Saint"
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Untitled%20design%20(3).png",
      title: "Holy Defender"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="cosmic-title text-3xl md:text-4xl mb-8 text-center">Featured NFTs</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseNFTs.map((nft) => (
            <div 
              key={nft.id} 
              className="cosmic-card p-4 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4 glow-border">
                <img 
                  src={nft.image} 
                  alt={nft.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-orbitron font-bold text-lg text-saints-gold text-center">{nft.title}</h3>
              <div className="mt-3 flex justify-center">
                <span className="text-xs bg-saints-purple/30 text-white rounded-full px-3 py-1">
                  #OneArmy Collection
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-saints-purple to-saints-blue text-white font-orbitron font-bold py-3 px-8 rounded-md hover:opacity-90 transition-all duration-300"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFTShowcase;