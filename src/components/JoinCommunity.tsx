
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const JoinCommunity: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this to saintsarmynft@gmail.com
    // For now, we'll just show a success toast
    toast({
      title: "Subscription successful!",
      description: "You've joined the SAINTS ARMY NFT newsletter",
    });
    
    setEmail('');
  };

  return (
    <section id="join" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-saints-dark/0 via-saints-dark to-saints-dark/0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saints-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-saints-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="cosmic-card max-w-4xl mx-auto p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="cosmic-title text-3xl md:text-4xl mb-4">Join the #OneArmy Movement</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Struggling to find NFTs with meaning? Most lack soul and community. 
              SAINTS ARMY NFT is divine art that evolves with #OneArmy—mint yours and join the revolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-orbitron text-saints-gold text-xl mb-4">Stay Updated</h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for exclusive updates on NFT drops, community events, and special announcements.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-saints-purple/30 text-white placeholder:text-white/50"
                />
                <Button type="submit" className="w-full btn-secondary">
                  Subscribe
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="font-orbitron text-saints-gold text-xl mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://twitter.com/Zeok_CLG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cosmic-card p-4 text-center hover:bg-saints-blue/20 transition-colors"
                >
                  <div className="mb-2">
                    <svg className="w-6 h-6 mx-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">@Zeok_CLG</span>
                </a>
                <a 
                  href="https://twitter.com/Sbmgeng_army" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cosmic-card p-4 text-center hover:bg-saints-blue/20 transition-colors"
                >
                  <div className="mb-2">
                    <svg className="w-6 h-6 mx-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">@Sbmgeng_army</span>
                </a>
                <a 
                  href="https://twitter.com/debigspin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cosmic-card p-4 text-center hover:bg-saints-blue/20 transition-colors"
                >
                  <div className="mb-2">
                    <svg className="w-6 h-6 mx-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">@debigspin</span>
                </a>
                <a 
                  href="https://discord.gg/7DJX9266" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cosmic-card p-4 text-center hover:bg-saints-purple/20 transition-colors"
                >
                  <div className="mb-2">
                    <svg className="w-6 h-6 mx-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">Discord</span>
                </a>
                <a 
                  href="https://www.instagram.com/saintsonearmynft/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cosmic-card p-4 text-center hover:bg-saints-purple/20 transition-colors col-span-2"
                >
                  <div className="mb-2">
                    <svg className="w-6 h-6 mx-auto fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">@saintsonearmynft</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
