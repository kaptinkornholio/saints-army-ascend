
import React from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutZeok: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-saints-blue/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-saints-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5 cosmic-card p-4 animate-float group hover:transform hover:scale-105 transition-all duration-500">
              <div className="relative aspect-square overflow-hidden rounded-lg glow-border group-hover:shadow-[0_0_30px_rgba(178,0,255,0.6)]">
                <img 
                  src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINT1.png" 
                  alt="Zeok - General of the SAINT NEOS ARMY"
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saints-dark to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                  <span className="font-orbitron text-saints-gold text-lg">ZEOK</span>
                  <p className="text-white/80 text-sm">GENERAL OF SAINTS ARMY</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h2 className="cosmic-title text-3xl md:text-4xl mb-6 animate-glow">ABOUT SAINTS ARMY</h2>
              <div className="space-y-4 text-white/80">
                <p className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                  I'm <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="text-saints-gold font-bold cursor-pointer underline decoration-wavy decoration-saints-purple/50 underline-offset-4">Zeok</span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-60 bg-gradient-to-br from-saints-dark/90 to-saints-purple/20 backdrop-blur-lg border border-saints-purple/30">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-saints-purple/50">ZK</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-saints-gold">General Zeok</h4>
                          <p className="text-xs text-white/70">Visionary Leader of SAINTS ARMY</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>, General of the SAINTS ARMY NFT. The core theme of our NFT project is divine unity and 
                  digital freedom through the SAINTS ARMY concept.
                </p>
                <p className="animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                  We're building a blessed ecosystem where the 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-saints-gold to-saints-purple font-bold"> #SAINTSARMY </span>
                  movement stands for God-given rights of free speech and the sacred exchange of ideas without
                   censorship or persecution.
                </p>
                <p className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                  SAINTS ARMY NFT represents a divine unity of digital warriors committed to freedom of expression 
                  and community empowerment through blockchain technology.
                </p>
                <p className="animate-fade-in opacity-0 font-orbitron text-saints-gold italic border-l-4 border-saints-purple pl-4" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                  "In unity we find strength. In freedom we find purpose. In the blockchain we find eternity."
                  <br/>— GENERAL ZEOK
                </p>
                <p className="animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>                                   
                  Unlike mercenary projects that enter the NFT space seeking only profit, the SAINTS ARMY NFT 
                  serves a spiritual calling. Each transaction on the blockchain—free from the taxation of worldly
                  systems—represents another step toward complete digital liberation and higher enlightenment.
                  <br/><br/>
                  <span className="text-saints-gold font-orbitron">Join us in the divine mission</span>
                </p>
                <div className="pt-6 animate-fade-in opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
                  <Button 
                    className="btn-secondary relative group overflow-hidden"
                    onClick={() => window.open("https://x.com/i/communities/1922307515930575219", "_blank")}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    Join SAINTS ARMY 
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saints-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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
