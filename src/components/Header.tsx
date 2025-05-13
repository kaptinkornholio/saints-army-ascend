
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden py-8">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-saints-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-saints-blue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saints-gold to-saints-purple flex items-center justify-center">
              <span className="font-orbitron text-xl font-bold text-white">S</span>
            </div>
            <span className="font-orbitron text-xl font-bold text-white">SAINTS ARMY NFT</span>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="font-orbitron text-white hover:text-saints-gold transition-colors">About</a>
            <a href="#join" className="font-orbitron text-white hover:text-saints-gold transition-colors">Join</a>
            <a href="COMING SOON" className="font-orbitron text-white hover:text-saints-gold transition-colors">Roadmap</a>
            <Button 
              className="btn-primary"
              onClick={() => window.open("https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22", "_blank")}
            >
              Buy Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </nav>
        
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="cosmic-title text-4xl md:text-6xl mb-6 animate-glow">
            Join : SAINTS ARMY NFT: Unleash Divine Art with #OneArmy
          </h1>
          <p className="cosmic-subtitle text-lg md:text-xl mb-8 text-white/80">
            Discover the : SAINTS ARMY NFT, where ethereal masterpieces evolve with our community. Become a Saint, shape the future, and own the divine.
          </p>
          <Button 
            className="btn-primary text-lg px-8 py-4 animate-pulse-glow"
            onClick={() => window.open("https://magiceden.io/marketplace/saint_neos_army?status=%22magic_eden%22", "_blank")}
          >
            BUY OR TRADE : SAINTS ARMY NFT NOW
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
