
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutZeok: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-saints-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-saints-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5 cosmic-card p-4 animate-float">
              <div className="relative aspect-square overflow-hidden rounded-lg glow-border">
                <img 
                  src="https://github.com/kaptinkornholio/saints-army-ascend/blob/main/Virtual%20reality%20with%20space%20elements%20Neon%20Instagram%20Post%20(2).png" 
                  alt="Zeok - General of the SAINT NEOS ARMY"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saints-dark to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <span className="font-orbitron text-saints-gold text-lg">ZEOK</span>
                  <p className="text-white/80 text-sm">GENERAL OF SAINTS ARMY NFT</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h2 className="cosmic-title text-3xl md:text-4xl mb-6">About Zeok</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  I'm Zeok, General of the SAINTS ARMY NFT. The core theme of our NFT project is divine unity and 
                  digital freedom through the SAINTS ARMY NFT concept. We're building a blessed ecosystem where the 
                  #ONEARMY movement stands for God-given rights of free speech and the sacred exchange of ideas without
                   censorship or persecution.
                </p>
                <p>
                  SAINTS ARMY NFT represents a divine unity of digital warriors committed to freedom of expression 
                  and community empowerment through blockchain technology.
                </p>
                <p>
                  "In unity we find strength. In freedom we find purpose. In the blockchain we find eternity."
                  — GENERAL ZEOK
                </p>
                <p>                                   
                  Unlike mercenary projects that enter the NFT space seeking only profit, the SAINTS ARMY NFT 
                  serves a spiritual calling. Each transaction on the blockchain—free from the taxation of worldly
                  systems—represents another step toward complete digital liberation and higher enlightenment.

Join us in the divine mission
                </p>
                <div className="pt-6">
                  <Button 
                    className="btn-secondary"
                    onClick={() => window.open("https://discord.gg/7DJX9266", "_blank")}
                  >
                    Join #OneArmy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZeok;
