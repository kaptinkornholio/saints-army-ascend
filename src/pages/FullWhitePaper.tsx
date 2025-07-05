
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, Sword, Coins, Users, Zap, Star, Crown, Target, Code, Lock, Trophy, Calendar, AlertTriangle, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const FullWhitePaper: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen text-white pt-16 sm:pt-20 pb-10 relative overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/OIP%20(20).jpeg)",
          filter: 'brightness(0.2) sepia(20%) saturate(150%) hue-rotate(25deg)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-saints-dark/70 to-black/95 z-10"></div>

      <div className="container mx-auto px-4 relative z-20 max-w-5xl">
        <Button 
          onClick={() => navigate('/whitepaper')} 
          variant="ghost" 
          className="mb-6 text-saints-gold hover:bg-saints-purple/20 fixed top-20 left-4 z-30"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Summary
        </Button>

        <motion.div 
          className="pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 
              className="text-4xl sm:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
              style={{
                textShadow: "0 0 30px rgba(255,215,0,0.9), 0 0 60px rgba(178,0,255,0.7)",
                fontWeight: "900"
              }}
            >
              SAINTS ARMY NFT
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-saints-gold mb-2">
              Complete Whitepaper
            </h2>
            <p className="text-lg text-white/80">Version 1.0 | Updated 2025</p>
          </motion.div>

          {/* Executive Summary */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-dark/90 to-saints-purple/20 border border-saints-gold/40">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-saints-gold mr-4" />
                <h2 className="text-3xl font-black text-saints-gold">Executive Summary</h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                Saints Army represents a revolutionary dual-faction NFT ecosystem built on the Solana blockchain, combining gaming mechanics, community governance, and decentralized finance. Our project introduces the Crowned Phantom genesis collection, followed by the Light and Dark Saints factions, creating an immersive digital universe where holders shape the destiny of their chosen faction.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                At the heart of our ecosystem lies the $HOLYFLAME token, powering governance, staking rewards, and inter-faction competitions. Saints Army transcends traditional NFT projects by creating a self-sustaining digital economy where community members become active participants in building and governing their digital kingdom.
              </p>
            </div>
          </motion.section>

          {/* Table of Contents */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-purple/20 to-saints-blue/20 border border-saints-purple/40">
              <h2 className="text-3xl font-black text-saints-purple mb-6">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                {[
                  "Vision & Mission", "The Saints Army Universe", "Technology Stack", "Collections Overview",
                  "Tokenomics", "Governance Model", "Community Features", "Roadmap",
                  "Team & Partners", "Risk Factors", "Legal Disclaimer"
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-saints-gold/10 rounded">
                    <Crown className="w-4 h-4 text-saints-gold mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-blue/20 to-saints-gold/20 border border-saints-blue/40">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-saints-blue mr-4" />
                <h2 className="text-3xl font-black text-saints-blue">Vision & Mission</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-3">Vision</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    To create the most engaged and empowered NFT community in the Solana ecosystem, where digital ownership meets real utility and collective governance shapes the future of decentralized communities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-3">Mission</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Saints Army builds bridges between traditional gaming, decentralized finance, and digital collectibles, creating sustainable value for holders through innovative mechanics, community-driven governance, and cross-platform integration.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-3">Core Values</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start"><Shield className="w-5 h-5 text-saints-purple mr-3 mt-0.5" />Unity Through Diversity: Embracing both Light and Dark factions</li>
                    <li className="flex items-start"><Users className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />Community First: All decisions benefit the collective</li>
                    <li className="flex items-start"><Target className="w-5 h-5 text-saints-blue mr-3 mt-0.5" />Transparency: Open development and clear communication</li>
                    <li className="flex items-start"><Zap className="w-5 h-5 text-saints-purple mr-3 mt-0.5" />Innovation: Pushing boundaries in NFT utility</li>
                    <li className="flex items-start"><Trophy className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />Sustainability: Building for long-term ecosystem health</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* The Saints Army Universe */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-purple/20 to-saints-dark/80 border border-saints-purple/40">
              <div className="flex items-center mb-6">
                <Crown className="w-8 h-8 text-saints-purple mr-4" />
                <h2 className="text-3xl font-black text-saints-purple">The Saints Army Universe</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-4">Genesis: The Crowned Phantom</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    The Saints Army universe begins with the Crowned Phantom collection - 888 unique NFTs representing the founding members of our digital kingdom. These genesis holders become the architects of our ecosystem, wielding governance power and exclusive benefits throughout all phases of development.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-4">The Great Divide: Light vs Dark Saints</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    Following the genesis mint, the universe expands into two distinct factions:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-gradient-to-br from-saints-blue/20 to-saints-gold/10 rounded-xl border border-saints-blue/30">
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-saints-blue mr-3" />
                        <h4 className="text-xl font-bold text-saints-blue">Light Saints</h4>
                      </div>
                      <p className="text-white/90">
                        Embodying order, protection, and celestial power. Light Saints focus on community building, defensive strategies, and sustainable growth.
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-saints-purple/20 to-red-900/20 rounded-xl border border-saints-purple/30">
                      <div className="flex items-center mb-3">
                        <Sword className="w-6 h-6 text-saints-purple mr-3" />
                        <h4 className="text-xl font-bold text-saints-purple">Dark Saints</h4>
                      </div>
                      <p className="text-white/90">
                        Representing chaos, rebellion, and infernal might. Dark Saints emphasize aggressive expansion, competitive advantages, and disruptive innovation.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-saints-gold mb-3">Faction Dynamics</h4>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start"><Trophy className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />Competition: Regular battles and challenges between factions</li>
                      <li className="flex items-start"><Users className="w-5 h-5 text-saints-blue mr-3 mt-0.5" />Collaboration: Cross-faction events requiring unity</li>
                      <li className="flex items-start"><Zap className="w-5 h-5 text-saints-purple mr-3 mt-0.5" />Evolution: Breeding and fusion mechanics for trait development</li>
                      <li className="flex items-start"><Shield className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />Governance: Faction-specific voting on ecosystem decisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-gold/20 to-saints-blue/20 border border-saints-gold/40">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-saints-gold mr-4" />
                <h2 className="text-3xl font-black text-saints-gold">Technology Stack</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-saints-blue mb-4">Blockchain Infrastructure</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />
                      <div>
                        <strong>Primary Chain:</strong> Solana (high throughput, low fees)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Code className="w-5 h-5 text-saints-purple mr-3 mt-0.5" />
                      <div>
                        <strong>Smart Contracts:</strong> Rust-based programs for NFT minting, staking, and governance
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lock className="w-5 h-5 text-saints-blue mr-3 mt-0.5" />
                      <div>
                        <strong>Metadata Storage:</strong> IPFS for decentralized asset storage
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />
                      <div>
                        <strong>Wallet Integration:</strong> Phantom, Solflare, and other Solana wallets
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-blue mb-4">Platform Integrations</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />
                      <div>
                        <strong>Marketplace:</strong> Magic Eden primary listing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-saints-purple mr-3 mt-0.5" />
                      <div>
                        <strong>Community:</strong> Discord and Telegram integration
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-saints-blue mr-3 mt-0.5" />
                      <div>
                        <strong>Analytics:</strong> Custom dashboard for holder insights
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />
                      <div>
                        <strong>Trading Tools:</strong> Advanced market analysis and alerts
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <Separator className="my-6 bg-saints-gold/30" />

              <div>
                <h3 className="text-2xl font-bold text-saints-purple mb-4">Security Measures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Lock, text: "Smart Contract Audits: Third-party security reviews" },
                    { icon: Shield, text: "Multi-signature Treasury: Secure fund management" },
                    { icon: Users, text: "Decentralized Governance: Community-controlled decisions" },
                    { icon: Target, text: "Regular Security Updates: Continuous monitoring and improvements" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-3 bg-saints-dark/40 rounded-lg">
                      <item.icon className="w-5 h-5 text-saints-gold mr-3 mt-0.5" />
                      <span className="text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Collections Overview */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-purple/20 to-saints-gold/20 border border-saints-purple/40">
              <div className="flex items-center mb-6">
                <Crown className="w-8 h-8 text-saints-purple mr-4" />
                <h2 className="text-3xl font-black text-saints-purple">Collections Overview</h2>
              </div>
              
              <div className="space-y-8">
                {/* Crowned Phantom */}
                <div className="p-6 bg-gradient-to-br from-saints-gold/20 to-saints-dark/40 rounded-xl border border-saints-gold/30">
                  <h3 className="text-2xl font-bold text-saints-gold mb-4 flex items-center">
                    <Crown className="w-6 h-6 mr-3" />
                    Crowned Phantom (Genesis)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Supply:</strong> 888 NFTs</li>
                        <li><strong>Blockchain:</strong> Solana</li>
                        <li><strong>Utility:</strong> Maximum governance power, exclusive access, premium rewards</li>
                        <li><strong>Rarity Tiers:</strong> Common, Uncommon, Rare, Epic, Legendary</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Special Features:</strong> Animated traits, exclusive Discord access, monthly $HOLYFLAME airdrops</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Light Saints */}
                <div className="p-6 bg-gradient-to-br from-saints-blue/20 to-saints-dark/40 rounded-xl border border-saints-blue/30">
                  <h3 className="text-2xl font-bold text-saints-blue mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Light Saints Collection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Supply:</strong> TBD (Community vote)</li>
                        <li><strong>Faction:</strong> Order and Protection</li>
                        <li><strong>Abilities:</strong> Defensive bonuses, healing mechanics, community buffs</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Breeding:</strong> Compatible with other Light Saints</li>
                        <li><strong>Governance:</strong> Light faction voting rights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dark Saints */}
                <div className="p-6 bg-gradient-to-br from-saints-purple/20 to-saints-dark/40 rounded-xl border border-saints-purple/30">
                  <h3 className="text-2xl font-bold text-saints-purple mb-4 flex items-center">
                    <Sword className="w-6 h-6 mr-3" />
                    Dark Saints Collection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Supply:</strong> TBD (Community vote)</li>
                        <li><strong>Faction:</strong> Chaos and Power</li>
                        <li><strong>Abilities:</strong> Offensive bonuses, damage mechanics, competitive advantages</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li><strong>Breeding:</strong> Compatible with other Dark Saints</li>
                        <li><strong>Governance:</strong> Dark faction voting rights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fusion Mechanics */}
                <div className="p-6 bg-gradient-to-br from-saints-gold/10 to-saints-purple/10 rounded-xl border border-saints-gold/20">
                  <h3 className="text-2xl font-bold text-saints-gold mb-4 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    Fusion Mechanics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-saints-gold mr-2 mt-1" />
                        Cross-Breeding: Limited Light + Dark fusion possibilities
                      </li>
                      <li className="flex items-start">
                        <Zap className="w-4 h-4 text-saints-purple mr-2 mt-1" />
                        Trait Evolution: Upgrade existing NFTs through staking
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Calendar className="w-4 h-4 text-saints-blue mr-2 mt-1" />
                        Seasonal Events: Special breeding opportunities
                      </li>
                      <li className="flex items-start">
                        <Trophy className="w-4 h-4 text-saints-gold mr-2 mt-1" />
                        Rarity Increases: Fusion creates higher tier NFTs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tokenomics */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-gold/20 to-saints-purple/20 border border-saints-gold/40">
              <div className="flex items-center mb-6">
                <Coins className="w-8 h-8 text-saints-gold mr-4" />
                <h2 className="text-3xl font-black text-saints-gold">Tokenomics</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-saints-purple mb-4">$HOLYFLAME Token</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    The $HOLYFLAME token serves as the primary currency and governance token of the Saints Army ecosystem.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-blue mb-4">Token Distribution</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Community Rewards</span>
                        <span className="text-saints-gold font-bold">40% (400M)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Staking Rewards</span>
                        <span className="text-saints-purple font-bold">25% (250M)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Development Fund</span>
                        <span className="text-saints-blue font-bold">15% (150M)</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Marketing & Partnerships</span>
                        <span className="text-saints-gold font-bold">10% (100M)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Team & Advisors</span>
                        <span className="text-saints-purple font-bold">7% (70M)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">Reserve Fund</span>
                        <span className="text-saints-blue font-bold">3% (30M)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 p-4 bg-saints-gold/20 rounded-xl">
                    <h4 className="text-xl font-bold text-saints-gold">Total Supply: 1,000,000,000 $HOLYFLAME tokens</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-saints-purple mb-4">Token Utility</h3>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start"><Shield className="w-4 h-4 text-saints-gold mr-2 mt-1" />Governance: Vote on ecosystem decisions</li>
                      <li className="flex items-start"><Coins className="w-4 h-4 text-saints-purple mr-2 mt-1" />Staking: Earn rewards for long-term holding</li>
                      <li className="flex items-start"><Zap className="w-4 h-4 text-saints-blue mr-2 mt-1" />Breeding: Required for fusion mechanics</li>
                      <li className="flex items-start"><Trophy className="w-4 h-4 text-saints-gold mr-2 mt-1" />Marketplace: Premium trading features</li>
                      <li className="flex items-start"><Target className="w-4 h-4 text-saints-purple mr-2 mt-1" />Competitions: Entry fees and prize pools</li>
                      <li className="flex items-start"><Crown className="w-4 h-4 text-saints-blue mr-2 mt-1" />Merchandise: Exclusive store access</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-saints-blue mb-4">Earning Mechanisms</h3>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start"><Coins className="w-4 h-4 text-saints-gold mr-2 mt-1" />NFT Staking: Daily $HOLYFLAME rewards</li>
                      <li className="flex items-start"><Trophy className="w-4 h-4 text-saints-purple mr-2 mt-1" />Faction Competitions: Winner prizes</li>
                      <li className="flex items-start"><Users className="w-4 h-4 text-saints-blue mr-2 mt-1" />Community Participation: Activity rewards</li>
                      <li className="flex items-start"><Shield className="w-4 h-4 text-saints-gold mr-2 mt-1" />Governance Voting: Participation incentives</li>
                      <li className="flex items-start"><Target className="w-4 h-4 text-saints-purple mr-2 mt-1" />Referral Program: Bonus tokens for new members</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Governance Model */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-blue/20 to-saints-dark/80 border border-saints-blue/40">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-saints-blue mr-4" />
                <h2 className="text-3xl font-black text-saints-blue">Governance Model</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-saints-gold mb-4">Decentralized Autonomous Organization (DAO)</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Saints Army operates as a DAO where holders collectively make decisions about the ecosystem's future.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-purple mb-4">Voting Power</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-saints-gold/20 rounded">
                        <span className="text-white/90">Crowned Phantom Holders</span>
                        <span className="text-saints-gold font-bold">3x voting power</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-saints-blue/20 rounded">
                        <span className="text-white/90">Light Saints Holders</span>
                        <span className="text-saints-blue font-bold">2x voting power</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-saints-purple/20 rounded">
                        <span className="text-white/90">Dark Saints Holders</span>
                        <span className="text-saints-purple font-bold">2x voting power</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-saints-dark/40 rounded">
                        <span className="text-white/90">$HOLYFLAME Stakers</span>
                        <span className="text-white font-bold">1x per 1000 tokens</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-saints-gold mb-4">Governance Proposals</h3>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start"><Zap className="w-4 h-4 text-saints-gold mr-2 mt-1" />Ecosystem Changes: New features, partnerships, integrations</li>
                      <li className="flex items-start"><Coins className="w-4 h-4 text-saints-purple mr-2 mt-1" />Treasury Management: Fund allocation and spending</li>
                      <li className="flex items-start"><Crown className="w-4 h-4 text-saints-blue mr-2 mt-1" />Collection Parameters: Supply, pricing, traits</li>
                      <li className="flex items-start"><Users className="w-4 h-4 text-saints-gold mr-2 mt-1" />Community Initiatives: Events, competitions, rewards</li>
                      <li className="flex items-start"><Target className="w-4 h-4 text-saints-purple mr-2 mt-1" />Strategic Decisions: Long-term planning and direction</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-saints-purple mb-4">Voting Process</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-saints-dark/40 rounded flex items-center">
                        <div className="w-8 h-8 bg-saints-gold rounded-full flex items-center justify-center text-black font-bold mr-3">1</div>
                        <span className="text-white/90">Proposal Submission: Community members submit ideas</span>
                      </div>
                      <div className="p-3 bg-saints-dark/40 rounded flex items-center">
                        <div className="w-8 h-8 bg-saints-purple rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                        <span className="text-white/90">Discussion Period: 7-day community debate</span>
                      </div>
                      <div className="p-3 bg-saints-dark/40 rounded flex items-center">
                        <div className="w-8 h-8 bg-saints-blue rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                        <span className="text-white/90">Voting Phase: 5-day voting window</span>
                      </div>
                      <div className="p-3 bg-saints-dark/40 rounded flex items-center">
                        <div className="w-8 h-8 bg-saints-gold rounded-full flex items-center justify-center text-black font-bold mr-3">4</div>
                        <span className="text-white/90">Implementation: Approved proposals executed</span>
                      </div>
                      <div className="p-3 bg-saints-dark/40 rounded flex items-center">
                        <div className="w-8 h-8 bg-saints-purple rounded-full flex items-center justify-center text-white font-bold mr-3">5</div>
                        <span className="text-white/90">Review: Post-implementation analysis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-saints-blue mb-4">Saints Army Council</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    A 9-member elected council provides guidance and ensures governance efficiency:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-saints-gold/20 rounded-xl text-center">
                      <Crown className="w-8 h-8 text-saints-gold mx-auto mb-2" />
                      <h4 className="font-bold text-saints-gold">3 Crowned Phantom Representatives</h4>
                    </div>
                    <div className="p-4 bg-saints-blue/20 rounded-xl text-center">
                      <Shield className="w-8 h-8 text-saints-blue mx-auto mb-2" />
                      <h4 className="font-bold text-saints-blue">3 Light Saints Representatives</h4>
                    </div>
                    <div className="p-4 bg-saints-purple/20 rounded-xl text-center">
                      <Sword className="w-8 h-8 text-saints-purple mx-auto mb-2" />
                      <h4 className="font-bold text-saints-purple">3 Dark Saints Representatives</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Community Features - Condensed */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-6 rounded-2xl bg-gradient-to-br from-saints-purple/20 to-saints-gold/20 border border-saints-purple/40">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-saints-purple mr-3" />
                <h2 className="text-2xl font-black text-saints-purple">Community Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h3 className="text-lg font-bold text-saints-gold mb-2">Digital Fortress (Discord)</h3>
                  <ul className="space-y-1 text-white/80">
                    <li>• Faction-specific channels</li>
                    <li>• Holder verification</li>
                    <li>• Weekly alpha calls</li>
                    <li>• Community events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-saints-blue mb-2">Sanctuary Hub (Telegram)</h3>
                  <ul className="space-y-1 text-white/80">
                    <li>• Real-time updates</li>
                    <li>• Community chat</li>
                    <li>• Price alerts</li>
                    <li>• Support channel</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-saints-purple mb-2">Rewards & Tools</h3>
                  <ul className="space-y-1 text-white/80">
                    <li>• Daily login bonuses</li>
                    <li>• Market analytics</li>
                    <li>• Trading tools</li>
                    <li>• Ambassador program</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Roadmap - Enhanced */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-gold/20 to-saints-blue/20 border border-saints-gold/40">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-saints-gold mr-4" />
                <h2 className="text-3xl font-black text-saints-gold">Roadmap</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Genesis Awakening (Q1 2025)",
                    status: "✅ Complete",
                    color: "saints-gold",
                    items: ["Mint 888 Crowned Phantom NFTs", "Launch on Magic Eden marketplace", "Establish Telegram community hub", "Deploy holder rewards system"]
                  },
                  {
                    phase: "Phase 2: Sanctuary Construction (Q1 2025)",
                    status: "🔄 In Progress",
                    color: "saints-purple",
                    items: ["Build Discord server infrastructure", "Create holder verification system", "Launch Saints Army sanctuary channels", "Initialize weekly alpha calls"]
                  },
                  {
                    phase: "Phase 3: Community Fortification (Q2 2025)",
                    status: "📋 Planned",
                    color: "saints-blue",
                    items: ["Deploy community rewards program", "Create holder leaderboards", "Launch referral system", "Establish Saints Army ambassadors"]
                  },
                  {
                    phase: "Phase 4: Dual Nature Revelation (Q2 2025)",
                    status: "📋 Planned",
                    color: "saints-gold",
                    items: ["Design Light Saints collection", "Design Dark Saints collection", "Determine final supply numbers", "Create collection lore and backstory"]
                  },
                  {
                    phase: "Phase 5: Faction Wars (Q3 2025)",
                    status: "📋 Planned",
                    color: "saints-purple",
                    items: ["Launch Light and Dark Saints mint", "Create faction-based Discord channels", "Deploy breeding/fusion mechanics", "Launch Light vs Dark competitions"]
                  }
                ].map((phase, index) => (
                  <div key={index} className={`p-6 bg-gradient-to-r from-${phase.color}/20 to-saints-dark/60 rounded-xl border border-${phase.color}/30`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-xl font-bold text-${phase.color}`}>{phase.phase}</h3>
                      <span className="text-sm font-semibold text-white/80">{phase.status}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-white/90 text-sm">
                          <div className={`w-2 h-2 bg-${phase.color} rounded-full mr-3`}></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Risk Factors */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-saints-dark/80 border border-red-500/40">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-3xl font-black text-red-400">Risk Factors</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-saints-gold mb-3">Market Risks</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Cryptocurrency Volatility: Token and NFT prices may fluctuate</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Regulatory Changes: Potential impact of new regulations</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Market Competition: Other NFT projects competing for attention</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Economic Downturns: General market conditions affecting demand</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saints-purple mb-3">Technical & Project Risks</h3>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Smart Contract Vulnerabilities: Potential security issues</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Blockchain Congestion: Network performance affecting user experience</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Execution Risk: Ability to deliver on roadmap commitments</li>
                    <li className="flex items-start"><AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />Community Adoption: Building and maintaining engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Legal Disclaimer */}
          <motion.section variants={itemVariants} className="mb-12">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-dark/90 to-gray-900/60 border border-gray-500/40">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-gray-400 mr-4" />
                <h2 className="text-3xl font-black text-gray-300">Legal Disclaimer</h2>
              </div>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  This whitepaper is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The Saints Army project involves experimental technology and significant risks. Potential participants should conduct their own research and consult with qualified professionals before making any investment decisions.
                </p>
                <p>
                  The $HOLYFLAME token and Saints Army NFTs are not securities and are not registered with any regulatory authority. This document does not constitute an offer to sell or a solicitation to buy any securities or financial instruments.
                </p>
                <p>
                  By participating in the Saints Army ecosystem, users acknowledge and accept all risks associated with blockchain technology, cryptocurrency, and NFT ownership.
                </p>
                
                <Separator className="my-6 bg-gray-500/30" />
                
                <div className="text-center text-sm text-gray-400">
                  <p><strong>Document Version:</strong> 1.0</p>
                  <p><strong>Last Updated:</strong> January 2025</p>
                  <p><strong>Next Review:</strong> Quarterly Update Schedule</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="cosmic-card p-8 rounded-2xl bg-gradient-to-br from-saints-gold/20 via-saints-purple/20 to-saints-blue/20 border border-saints-gold/40">
              <h2 
                className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue"
              >
                Join the Saints Army. Embrace your destiny. 👑⚡
              </h2>
              <p 
                className="text-xl font-bold text-saints-gold mb-8"
                style={{
                  textShadow: "0 0 20px rgba(255,215,0,0.9)"
                }}
              >
                The flame burns eternal through unity, governance, and shared prosperity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/')}
                  className="cosmic-button btn-primary px-8 py-4 text-lg font-bold"
                >
                  Back to Home
                </Button>
                <Button
                  onClick={() => navigate('/whitelist')}
                  className="cosmic-button bg-saints-purple hover:bg-saints-purple/80 px-8 py-4 text-lg font-bold"
                >
                  Join Whitelist
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default FullWhitePaper;
