
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
                  src="https://pbs.twimg.com/media/GJBC4UMXkAAcPuH?format=jpg&name=medium" 
                  alt="Zeok - General of the SAINT NEOS ARMY"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saints-dark to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <span className="font-orbitron text-saints-gold text-lg">Zeok</span>
                  <p className="text-white/80 text-sm">General of SAINT NEOS ARMY</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h2 className="cosmic-title text-3xl md:text-4xl mb-6">About Zeok</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  I'm Zeok, General of the SAINT NEOS ARMY. My mission? To forge a digital universe where art transcends, 
                  community thrives, and every Saint shapes our legacy.
                </p>
                <p>
                  As a visionary in NFTs, web development, and AI-driven creativity, I'm passionate about building 
                  a community that co-creates dynamic NFTs and champions free speech.
                </p>
                <p>
                  The Zeok NFT collection is our battleground—join #OneArmy and create with us.
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
