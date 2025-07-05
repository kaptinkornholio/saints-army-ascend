
import React from 'react';
import { Button } from "@/components/ui/button";
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";
import { Users } from 'lucide-react';

const CTAFooter: React.FC = () => {
  const { ComingSoonButton } = useComingSoonModal();
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background overlay with SAINTSBACK1.png image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTback2.png)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-saints-dark/80 via-saints-dark/60 to-saints-dark/90"></div>
      </div>
      
      {/* Starry background effect */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-saints-dark to-black/50"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Community Counter */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-saints-purple/20 border border-saints-purple/30 rounded-full backdrop-blur-sm">
              <Users className="h-5 w-5 text-saints-gold" />
              <span className="text-saints-gold font-bold text-lg">54 Community Members</span>
            </div>
          </div>

          <h2 className="cosmic-title text-3xl md:text-5xl mb-6 animate-glow">
            Ready to own divine art and join a revolution?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            JOIN SAINTS ARMY NFT and become a Saint today!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ComingSoonButton 
              className="btn-primary md:text-lg"
            >
              BUY NOW
            </ComingSoonButton>
            <ComingSoonButton 
              className="btn-secondary md:text-lg"
              onClick={() => {}}
            >
              ROADMAP
            </ComingSoonButton>
          </div>
          
          {/* Get Notified button that redirects to Twitter */}
          <div className="mt-8">
            <a 
              href="https://x.com/Zeok_CLG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block btn-primary md:text-lg bg-saints-blue hover:bg-saints-blue/90"
            >
              GET NOTIFIED
            </a>
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="text-white/50 mb-4">&copy; 2025 SAINTS ARMY NFT. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com/Zeok_CLG" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saints-gold transition-colors">
                Twitter
              </a>
              <a href="https://www.instagram.com/saintsonearmynft/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saints-gold transition-colors">
                Instagram
              </a>
              <a href="https://t.me/+z3TgYl4QAaUxNDk0" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-saints-gold transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
