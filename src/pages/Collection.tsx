
import React from 'react';
import { motion } from 'framer-motion';
import NFTDetailModal from '@/components/NFTDetailModal';
import { NFTDetails } from '@/components/NFTDetailModal';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users } from 'lucide-react';
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

const Collection: React.FC = () => {
  const [selectedNFT, setSelectedNFT] = React.useState<NFTDetails | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const navigate = useNavigate();
  const { openModal } = useComingSoonModal();
  
  // New collection of NFTs with fresh character descriptions
  const nftCollection: NFTDetails[] = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_fd7a394d-2163-42ea-8442-d9319d7dc32a.png",
      title: "COSMIC WARDEN",
      description: "Guardian of the celestial boundaries, this warrior possesses the power to see through dimensional veils. Their armor channels starlight into devastating energy attacks while protecting allies with barriers of pure cosmic force.",
      traits: [
        { trait_type: "Class", value: "Warden" },
        { trait_type: "Rarity", value: "Mythic" },
        { trait_type: "Power", value: "Starlight Channeling" },
        { trait_type: "Element", value: "Cosmic" }
      ]
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_84bfd672-a697-4e9b-aec0-92bf4f75ac4b.png",
      title: "VOID NAVIGATOR",
      description: "Master of interdimensional travel, capable of opening rifts between realities. This Saint's knowledge of void currents allows them to transport entire armies across impossible distances in the blink of an eye.",
      traits: [
        { trait_type: "Class", value: "Navigator" },
        { trait_type: "Rarity", value: "Legendary" },
        { trait_type: "Power", value: "Rift Creation" },
        { trait_type: "Element", value: "Void" }
      ]
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_640a9d23-dc16-480d-9029-f17ea3097702.png",
      title: "NEURAL ARCHITECT",
      description: "Designer of consciousness networks, this Saint builds bridges between minds across the galaxy. Their neural constructs allow instantaneous communication and shared knowledge among all connected beings.",
      traits: [
        { trait_type: "Class", value: "Architect" },
        { trait_type: "Rarity", value: "Supreme" },
        { trait_type: "Power", value: "Mind Linking" },
        { trait_type: "Element", value: "Psychic" }
      ]
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_b07b4f49-eff1-4f00-9a72-9ab9ddaf8791.png",
      title: "PLASMA FORGEMASTER",
      description: "Creator of celestial weapons and armor, this Saint shapes plasma with their bare hands. Each creation is imbued with properties that adapt to the wielder's needs, making every piece unique and powerful.",
      traits: [
        { trait_type: "Class", value: "Forgemaster" },
        { trait_type: "Rarity", value: "Divine" },
        { trait_type: "Power", value: "Matter Shaping" },
        { trait_type: "Element", value: "Plasma" }
      ]
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_a8477262-d89e-4f3f-8486-0a33716f9efb.png",
      title: "QUANTUM SENTINEL",
      description: "Protector of probability streams, this Saint maintains the stability of quantum fluctuations. Their presence ensures that favorable outcomes manifest while preventing catastrophic timeline collapses.",
      traits: [
        { trait_type: "Class", value: "Sentinel" },
        { trait_type: "Rarity", value: "Quantum" },
        { trait_type: "Power", value: "Probability Control" },
        { trait_type: "Element", value: "Quantum" }
      ]
    },
    {
      id: 6,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_01bd3426-feb2-464e-94bc-c27bf8da8c1f.png",
      title: "FREQUENCY MANIPULATOR",
      description: "Controller of vibrational energies, this Saint can alter the fundamental frequencies of matter. Their power extends from healing broken molecules to creating devastating sonic weapons that resonate at lethal frequencies.",
      traits: [
        { trait_type: "Class", value: "Manipulator" },
        { trait_type: "Rarity", value: "Harmonic" },
        { trait_type: "Power", value: "Frequency Control" },
        { trait_type: "Element", value: "Sound" }
      ]
    },
    {
      id: 7,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_6ebbf499-83a2-4658-a8f3-380b5b8ef234.png",
      title: "STELLAR COMMANDER",
      description: "Leader of cosmic fleets, this Saint coordinates battles across multiple star systems simultaneously. Their tactical brilliance is enhanced by precognitive abilities that reveal enemy strategies before they're formed.",
      traits: [
        { trait_type: "Class", value: "Commander" },
        { trait_type: "Rarity", value: "Galactic" },
        { trait_type: "Power", value: "Battle Coordination" },
        { trait_type: "Element", value: "Strategy" }
      ]
    },
    {
      id: 8,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_018782c6-d907-4711-829f-284d56744886.png",
      title: "CHRONO GUARDIAN",
      description: "Keeper of temporal stability, this Saint prevents paradoxes and timeline corruption. Their mastery over time allows them to accelerate allies, slow enemies, and even create temporal shields that deflect attacks.",
      traits: [
        { trait_type: "Class", value: "Guardian" },
        { trait_type: "Rarity", value: "Temporal" },
        { trait_type: "Power", value: "Time Manipulation" },
        { trait_type: "Element", value: "Time" }
      ]
    },
    {
      id: 9,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_03c3ef03-9d82-4530-a6cc-c7a7a1ce1036.png",
      title: "DIMENSIONAL SCOUT",
      description: "Explorer of infinite realities, this Saint maps uncharted dimensions and discovers new paths through the multiverse. Their reconnaissance abilities reveal hidden threats and opportunities across parallel worlds.",
      traits: [
        { trait_type: "Class", value: "Scout" },
        { trait_type: "Rarity", value: "Multiversal" },
        { trait_type: "Power", value: "Reality Mapping" },
        { trait_type: "Element", value: "Dimension" }
      ]
    },
    {
      id: 10,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_40087631-605d-411e-8daf-b9da2bb40365.png",
      title: "NEXUS PROTECTOR",
      description: "Guardian of critical junction points where realities intersect, this Saint maintains the delicate balance between worlds. Their mask conceals features that have witnessed the birth and death of countless universes.",
      traits: [
        { trait_type: "Class", value: "Protector" },
        { trait_type: "Rarity", value: "Primordial" },
        { trait_type: "Power", value: "Reality Anchoring" },
        { trait_type: "Element", value: "Nexus" }
      ]
    },
    {
      id: 11,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_6bd0c4f7-be6a-432c-9e03-270277e374ed.png",
      title: "SHADOW WEAVER",
      description: "Master of darkness and concealment, this Saint can merge with shadows to become undetectable. Their stealth abilities extend to hiding entire armies or creating shadow duplicates to confuse enemies.",
      traits: [
        { trait_type: "Class", value: "Weaver" },
        { trait_type: "Rarity", value: "Shadow" },
        { trait_type: "Power", value: "Shadow Manipulation" },
        { trait_type: "Element", value: "Darkness" }
      ]
    },
    {
      id: 12,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_81b85bf2-45a7-4cf6-b29e-374994c405b6.png",
      title: "COSMIC ORACLE",
      description: "Seer of infinite possibilities, this Saint reads the cosmic winds to predict future events. Their prophecies guide the Saints Army through the most challenging battles by revealing the paths to victory.",
      traits: [
        { trait_type: "Class", value: "Oracle" },
        { trait_type: "Rarity", value: "Prophetic" },
        { trait_type: "Power", value: "Future Sight" },
        { trait_type: "Element", value: "Destiny" }
      ]
    },
    {
      id: 13,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_84fdc872-823c-47c1-863b-5b9ab7c814b8.png",
      title: "NEBULA SCULPTOR",
      description: "Artist of cosmic phenomena, this Saint shapes nebulas and star formations into functional structures. Their creations serve as both beautiful monuments and strategic fortifications in the void of space.",
      traits: [
        { trait_type: "Class", value: "Sculptor" },
        { trait_type: "Rarity", value: "Artistic" },
        { trait_type: "Power", value: "Celestial Crafting" },
        { trait_type: "Element", value: "Nebula" }
      ]
    },
    {
      id: 14,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_964457cf-c416-4641-9ac3-4d1587af77e3.png",
      title: "HARMONIC RESONATOR",
      description: "Conductor of universal frequencies, this Saint synchronizes the vibrations of entire fleets for coordinated attacks. Their harmonic control can create healing melodies or destructive sonic storms.",
      traits: [
        { trait_type: "Class", value: "Resonator" },
        { trait_type: "Rarity", value: "Harmonic" },
        { trait_type: "Power", value: "Sonic Control" },
        { trait_type: "Element", value: "Harmony" }
      ]
    },
    {
      id: 15,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_af822c43-0866-4cc9-98e5-35ef59c66a56.png",
      title: "BALANCE KEEPER",
      description: "Maintainer of cosmic equilibrium, this Saint ensures that no force becomes too powerful. Their dual nature allows them to channel both creation and destruction, keeping the universe in perfect harmony.",
      traits: [
        { trait_type: "Class", value: "Keeper" },
        { trait_type: "Rarity", value: "Balanced" },
        { trait_type: "Power", value: "Equilibrium Control" },
        { trait_type: "Element", value: "Balance" }
      ]
    },
    {
      id: 16,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_bf27e3e7-cb63-4b00-90c6-ca95f4107932.png",
      title: "SOLAR CHANNELER",
      description: "Conduit for stellar energy, this Saint can absorb and redirect the power of suns. Their radiant abilities can illuminate dark regions of space or concentrate solar fury into devastating beam attacks.",
      traits: [
        { trait_type: "Class", value: "Channeler" },
        { trait_type: "Rarity", value: "Stellar" },
        { trait_type: "Power", value: "Solar Manipulation" },
        { trait_type: "Element", value: "Solar" }
      ]
    },
    {
      id: 17,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_dd5068d1-0066-4f34-90b3-731b3cef2e01.png",
      title: "DATA STREAM SAINT",
      description: "Bridge between digital and physical realms, this Saint processes information at quantum speeds. Their consciousness exists simultaneously in multiple data networks, gathering intelligence across the galaxy.",
      traits: [
        { trait_type: "Class", value: "Data Saint" },
        { trait_type: "Rarity", value: "Digital" },
        { trait_type: "Power", value: "Information Processing" },
        { trait_type: "Element", value: "Data" }
      ]
    },
    {
      id: 18,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_750da02f-2a3c-4cbc-b02c-0147b72d8d99.png",
      title: "LUNAR WATCHER",
      description: "Silent observer of planetary cycles, this Saint draws power from moons across the cosmos. Their gravitational control can alter tides, create orbital weapons, or establish protective lunar shields.",
      traits: [
        { trait_type: "Class", value: "Watcher" },
        { trait_type: "Rarity", value: "Lunar" },
        { trait_type: "Power", value: "Gravitational Control" },
        { trait_type: "Element", value: "Moon" }
      ]
    },
    {
      id: 19,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_78ae3b5c-dcb2-4c59-b6be-ae76e747defb.png",
      title: "PLASMA ENGINEER",
      description: "Builder of energy constructs, this Saint designs and constructs plasma-based technology. Their creations range from defensive barriers to complex machinery that harnesses the power of stars.",
      traits: [
        { trait_type: "Class", value: "Engineer" },
        { trait_type: "Rarity", value: "Technological" },
        { trait_type: "Power", value: "Energy Construction" },
        { trait_type: "Element", value: "Plasma" }
      ]
    },
    {
      id: 20,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_7b85391d-2bc9-42d3-8f72-137fb8ab50ba.png",
      title: "QUANTUM MYSTIC",
      description: "Philosopher of reality's deepest mysteries, this Saint merges science with ancient wisdom. Their understanding of quantum consciousness allows them to influence probability at the subatomic level.",
      traits: [
        { trait_type: "Class", value: "Mystic" },
        { trait_type: "Rarity", value: "Enlightened" },
        { trait_type: "Power", value: "Quantum Consciousness" },
        { trait_type: "Element", value: "Knowledge" }
      ]
    },
    {
      id: 21,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_835b8d72-3939-44ea-9d48-e5b380b79c01.png",
      title: "ELEMENTAL SOVEREIGN",
      description: "Ruler of primordial forces, this Saint commands the fundamental elements that compose reality. Their mastery extends beyond simple manipulation to the creation of new elemental combinations.",
      traits: [
        { trait_type: "Class", value: "Sovereign" },
        { trait_type: "Rarity", value: "Primordial" },
        { trait_type: "Power", value: "Elemental Mastery" },
        { trait_type: "Element", value: "All Elements" }
      ]
    },
    {
      id: 22,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_be94a27d-82dd-41e0-9027-c2a832d53d0e.png",
      title: "NEURAL NETWORK SAINT",
      description: "Living supercomputer, this Saint processes the thoughts and memories of billions simultaneously. Their expanded consciousness serves as the central intelligence hub for all Saints Army operations.",
      traits: [
        { trait_type: "Class", value: "Network Saint" },
        { trait_type: "Rarity", value: "Collective" },
        { trait_type: "Power", value: "Mass Processing" },
        { trait_type: "Element", value: "Mind" }
      ]
    },
    {
      id: 23,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_Corneliuson_A_vibrant_and_colorful_digital_illustration_shoot_ba6cd2ae-b0bb-4fed-8e90-ab371ec7e716.png",
      title: "SPECTRUM WEAVER",
      description: "Master of light in all its forms, this Saint paints reality with colors beyond normal perception. Their rainbow aura can reveal hidden truths, dispel illusions, or create blinding displays of pure beauty.",
      traits: [
        { trait_type: "Class", value: "Weaver" },
        { trait_type: "Rarity", value: "Chromatic" },
        { trait_type: "Power", value: "Light Spectrum Control" },
        { trait_type: "Element", value: "Light" }
      ]
    },
    {
      id: 24,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_1d988b5d-41d6-4a2c-b90d-93b6105e9f46.png",
      title: "GALACTIC MONITOR",
      description: "Surveillance specialist of cosmic threats, this Saint maintains watch over entire galaxy clusters. Their enhanced perception systems can detect anomalies across vast distances of space and time.",
      traits: [
        { trait_type: "Class", value: "Monitor" },
        { trait_type: "Rarity", value: "Surveillance" },
        { trait_type: "Power", value: "Cosmic Awareness" },
        { trait_type: "Element", value: "Detection" }
      ]
    },
    {
      id: 25,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_3620d107-2e96-4f16-ae83-81ee4e7b3bd1.png",
      title: "ENTROPY REGULATOR",
      description: "Controller of decay and renewal cycles, this Saint ensures that destruction serves the greater purpose of cosmic rebirth. Their power transforms endings into new beginnings across the universe.",
      traits: [
        { trait_type: "Class", value: "Regulator" },
        { trait_type: "Rarity", value: "Cyclical" },
        { trait_type: "Power", value: "Decay/Renewal Control" },
        { trait_type: "Element", value: "Entropy" }
      ]
    },
    {
      id: 26,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_430fb7c2-ee36-42a7-94c6-29423b8741b0.png",
      title: "REALITY BUILDER",
      description: "Constructor of dimensional frameworks, this Saint designs and builds the structural foundations of new realities. Their blueprints have created safe havens for countless displaced civilizations.",
      traits: [
        { trait_type: "Class", value: "Builder" },
        { trait_type: "Rarity", value: "Foundational" },
        { trait_type: "Power", value: "Reality Construction" },
        { trait_type: "Element", value: "Structure" }
      ]
    },
    {
      id: 27,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_75975696-ae35-42c5-94ed-52415f679894.png",
      title: "FORCE HARMONIZER",
      description: "Tuner of universal energies, this Saint maintains the delicate balance between all cosmic forces. Their subtle adjustments prevent dimensional collapse and ensure the stability of reality itself.",
      traits: [
        { trait_type: "Class", value: "Harmonizer" },
        { trait_type: "Rarity", value: "Universal" },
        { trait_type: "Power", value: "Force Balancing" },
        { trait_type: "Element", value: "Harmony" }
      ]
    },
    {
      id: 28,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_7de18f4b-5b5d-42be-9e61-0833c52a636d.png",
      title: "PSYCHIC NEXUS",
      description: "Central hub of telepathic communication, this Saint connects minds across impossible distances. Their neural network allows instant coordination and emotional support for all Saints Army members.",
      traits: [
        { trait_type: "Class", value: "Nexus" },
        { trait_type: "Rarity", value: "Telepathic" },
        { trait_type: "Power", value: "Mind Connection" },
        { trait_type: "Element", value: "Psychic" }
      ]
    },
    {
      id: 29,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_b42382c3-e0ff-4503-8eb8-31f535de8021.png",
      title: "ANTIMATTER SAGE",
      description: "Ancient master of dangerous energies, this Saint safely harnesses antimatter for constructive purposes. Their wisdom transforms the most destructive force in the universe into tools of creation and healing.",
      traits: [
        { trait_type: "Class", value: "Sage" },
        { trait_type: "Rarity", value: "Ancient" },
        { trait_type: "Power", value: "Antimatter Control" },
        { trait_type: "Element", value: "Antimatter" }
      ]
    },
    {
      id: 30,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_ed2973e3-21ab-4268-8594-65ab07277de2.png",
      title: "GENESIS KEEPER",
      description: "Protector of creation's original spark, this primordial Saint carries within them the blueprint for universal reconstruction. Should reality face extinction, they hold the power to begin again.",
      traits: [
        { trait_type: "Class", value: "Keeper" },
        { trait_type: "Rarity", value: "Genesis" },
        { trait_type: "Power", value: "Creation Essence" },
        { trait_type: "Element", value: "Origin" }
      ]
    }
  ];

  const handleNFTClick = (nft: NFTDetails) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMagicEdenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal("Magic Eden Coming Soon", "The SAINTS ARMY NFT collection will be available on Magic Eden soon. Stay tuned for the official launch!");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-saints-dark text-white pt-20 pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-saints-dark"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <Button 
              onClick={() => navigate('/')} 
              variant="ghost" 
              className="mb-3 text-saints-gold hover:bg-saints-purple/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-saints-purple to-saints-blue">
              SAINTS ARMY Collection
            </h1>
            <p className="text-white/70 mt-2 text-sm sm:text-base">
              Explore the complete collection of divine NFTs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Community Counter */}
            <div className="flex items-center gap-2 px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
              <Users className="h-4 w-4 text-saints-gold" />
              <span className="text-saints-gold font-semibold text-sm">55 Members</span>
            </div>

            <div className="px-3 py-2 bg-saints-purple/20 border border-saints-purple/30 rounded-lg">
              <p className="text-saints-gold font-semibold text-sm">Total: {nftCollection.length}</p>
            </div>
          </div>
        </div>

        {/* Magic Eden Coming Soon Button */}
        <div className="mb-6 text-center">
          <button
            onClick={handleMagicEdenClick}
            className="inline-flex items-center gap-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 px-4 py-2 hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
          >
            <img src="https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Magic-Eden-Logo.jpg" alt="Magic Eden" className="w-5 h-5 rounded-full" />
            <span className="font-semibold">Available on Magic Eden Soon</span>
          </button>
        </div>

        {/* NFT Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nftCollection.map((nft) => (
            <motion.div
              key={nft.id}
              variants={itemVariants}
              className="cosmic-card p-4 lg:p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(178,0,255,0.5)] bg-gradient-to-br from-black/80 to-saints-purple/10 cursor-pointer"
              onClick={() => handleNFTClick(nft)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saints-gold/5 to-saints-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saints-purple to-saints-blue opacity-0 group-hover:opacity-20 rounded-xl blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-3 lg:mb-4 rounded-lg overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={nft.image} 
                      alt={nft.title}
                      className="w-full aspect-square object-cover"
                    />
                  </motion.div>
                </div>
                
                <h3 className="font-bold text-sm lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-saints-gold via-white to-saints-blue mb-2 text-center">
                  {nft.title}
                </h3>
                
                <div className="flex flex-wrap gap-1 lg:gap-2 mb-3 justify-center">
                  {nft.traits.slice(0, 2).map((trait, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-saints-purple/20 text-white/80 rounded-full px-2 py-1 border border-saints-purple/30"
                    >
                      {trait.value}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3 pt-2 border-t border-saints-purple/20">
                  <button
                    className="w-full py-2 bg-saints-purple/30 hover:bg-saints-purple/50 text-white rounded-lg border border-saints-purple/30 transition-all duration-300 text-xs lg:text-sm font-semibold hover:shadow-[0_0_15px_rgba(178,0,255,0.5)]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* NFT Detail Modal */}
      <NFTDetailModal isOpen={modalOpen} onClose={closeModal} nft={selectedNFT} />
    </div>
  );
};

export default Collection;
