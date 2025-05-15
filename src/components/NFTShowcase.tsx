
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NFTRotator from './NFTRotator';

const NFTShowcase: React.FC = () => {
  const showcaseNFTs = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_fd7a394d-2163-42ea-8442-d9319d7dc32a.png",
      title: "SAINT NEOS ARMY CUSTOM PFP"
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com//kaptinkornholio/saints-army-ascend/main/kaptinkornholio/saints-army-ascend/main/707.png",
      title: "SAINT NEOS ARMY SERIES"
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Virtual%20reality%20with%20space%20elements%20Neon%20Instagram%20Post.png",
      title: "ONE ARMY SERIES"
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Untitled%20design%20(3).png",
      title: "SAINT NEOS ARMY SERIES"
    }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 relative overflow-hidden" data-scroll-section>
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${
              i % 2 === 0 ? 'from-saints-gold/10 to-saints-purple/5' : 'from-saints-purple/10 to-saints-blue/5'
            }`}
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(70px)',
              opacity: 0.5,
              animation: `float ${Math.random() * 5 + 10}s infinite alternate ease-in-out`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="cosmic-title text-3xl md:text-5xl mb-12 text-center"
          data-scroll
          data-scroll-speed="1"
        >
          Featured NFTs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {showcaseNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              variants={item}
              className="cosmic-card p-6 rounded-xl relative overflow-hidden group"
              onMouseEnter={() => setHoveredId(nft.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-scroll
              data-scroll-speed={nft.id % 2 === 0 ? "0.3" : "0.5"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-xl blur-sm transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Use the 3D NFT rotator for enhanced visuals */}
                <div className="mb-6">
                  <NFTRotator image={nft.image} title={nft.title} />
                </div>

                <h3 className="font-orbitron font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue text-center mb-3 relative">
                  {nft.title}
                  <span className="block h-0.5 w-0 bg-gradient-to-r from-saints-purple via-saints-gold to-saints-blue group-hover:w-full transition-all duration-700 mt-2 mx-auto"></span>
                </h3>

                <div className="mt-3 flex justify-center">
                  <span className="text-xs bg-saints-purple/40 text-white rounded-full px-4 py-1.5 border border-saints-purple/20 backdrop-blur-sm shadow-[0_0_10px_rgba(178,0,255,0.4)] transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(178,0,255,0.6)]">
                    SAINTS ARMY COLLECTION
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-saints-purple/20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    onClick={() => window.open("https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22", "_blank")}
                    className="w-full py-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 text-sm font-orbitron hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div
                className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-saints-purple to-saints-blue rounded-full opacity-0 group-hover:opacity-100 filter blur-xl transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)'
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative overflow-hidden group"
          >
            <span className="relative z-10 inline-block bg-gradient-to-r from-saints-purple to-saints-blue text-white font-orbitron font-bold py-4 px-10 rounded-md transition-all duration-300 border border-saints-purple/30 hover:shadow-[0_0_20px_rgba(178,0,255,0.6)]">
              View Full Collection
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-saints-gold to-saints-blue opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-saints-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            <span className="absolute top-0 right-0 w-full h-1 bg-saints-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTShowcase;
