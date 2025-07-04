import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { useState } from "react";

const Header: React.FC = () => {
  const { ComingSoonButton } = useComingSoonModal();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleAboutClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home and then scroll
      navigate('/#about');
    }
  };

  const handleJoinClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to join section
      const joinSection = document.getElementById('join');
      if (joinSection) {
        joinSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home and then scroll
      navigate('/#join');
    }
  };
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-saints-dark/90 backdrop-blur-sm border-b border-saints-purple/20">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-full ring-2 ring-saints-gold ring-offset-2 ring-offset-saints-dark">
              <img 
                src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png"
                alt="Saints Army Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-poppins text-xl md:text-2xl font-bold text-white tracking-wider text-shadow-glow">
              {window.innerWidth < 768 ? "SAINTS" : "SAINTS ARMY NFT"}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Home/Back button - show when not on home page */}
            {location.pathname !== '/' && (
              <button
                onClick={() => navigate('/')}
                className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
            )}
            
            <button 
              onClick={handleAboutClick}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            
            <button
              onClick={() => navigate('/collection/selector')}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
            >
              Collections
            </button>

            <button
              onClick={() => navigate('/whitelist')}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
              style={{
                textShadow: "0 0 10px rgba(255,215,0,0.8)"
              }}
            >
              White List
            </button>

            <button
              onClick={() => navigate('/whitepaper')}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
              style={{
                textShadow: "0 0 10px rgba(255,215,0,0.8)"
              }}
            >
              White Paper
            </button>
            
            <button 
              onClick={handleJoinClick}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
            >
              Join
            </button>
            
            <button
              onClick={() => navigate('/roadmap')}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
            >
              Roadmap
            </button>

            <button
              onClick={() => navigate('/collaborations')}
              className="neon-link font-poppins text-lg font-semibold tracking-wider text-white hover:text-saints-gold transition-colors border-b-2 border-transparent hover:border-saints-gold bg-transparent border-none cursor-pointer"
              style={{
                textShadow: "0 0 10px rgba(255,215,0,0.8)"
              }}
            >
              Collaborations
            </button>
            
            <ComingSoonButton className="cosmic-button btn-primary">
              MINT NOW
            </ComingSoonButton>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-saints-dark/95 backdrop-blur-md border-t border-saints-purple/20 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {/* Home/Back button for mobile - show when not on home page */}
              {location.pathname !== '/' && (
                <button
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
              )}
              
              <button
                onClick={() => {
                  handleAboutClick();
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
              >
                About
              </button>
              
              <button
                onClick={() => {
                  navigate('/collection/selector');
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
              >
                Collections
              </button>

              <button
                onClick={() => {
                  navigate('/whitelist');
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
                style={{
                  textShadow: "0 0 10px rgba(255,215,0,0.8)"
                }}
              >
                White List
              </button>

              <button
                onClick={() => {
                  navigate('/whitepaper');
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
                style={{
                  textShadow: "0 0 10px rgba(255,215,0,0.8)"
                }}
              >
                White Paper
              </button>
              
              <button
                onClick={() => {
                  handleJoinClick();
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
              >
                Join
              </button>
              
              <button
                onClick={() => {
                  navigate('/roadmap');
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
              >
                Roadmap
              </button>

              <button
                onClick={() => {
                  navigate('/collaborations');
                  setMobileMenuOpen(false);
                }}
                className="font-semibold text-lg py-2 text-white hover:text-saints-gold bg-transparent border-none text-left"
                style={{
                  textShadow: "0 0 10px rgba(255,215,0,0.8)"
                }}
              >
                Collaborations
              </button>
              
              <ComingSoonButton 
                className="cosmic-button btn-primary w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                MINT NOW
              </ComingSoonButton>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
