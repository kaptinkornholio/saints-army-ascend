
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
  
  // Enhanced collection of NFTs with new additions
  const nftCollection: NFTDetails[] = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_fd7a394d-2163-42ea-8442-d9319d7dc32a.png",
      title: "SAINT WARRIOR",
      description: "A divine protector with celestial powers, born from the stars to defend the sacred realms. Infused with cosmic energy, this Saint commands respect across dimensions.",
      traits: [
        { trait_type: "Class", value: "Warrior" },
        { trait_type: "Rarity", value: "Legendary" },
        { trait_type: "Power", value: "Cosmic Shield" },
        { trait_type: "Element", value: "Celestial" }
      ]
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_84bfd672-a697-4e9b-aec0-92bf4f75ac4b.png",
      title: "GALACTIC SAINT",
      description: "Traversing the cosmos, this Saint harnesses galactic energy to open portals between worlds. Their vision sees beyond the veil of reality.",
      traits: [
        { trait_type: "Class", value: "Mystic" },
        { trait_type: "Rarity", value: "Epic" },
        { trait_type: "Power", value: "Portal Creation" },
        { trait_type: "Element", value: "Void" }
      ]
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_640a9d23-dc16-480d-9029-f17ea3097702.png",
      title: "DIVINE TACTICIAN",
      description: "Strategic mastermind of the Saints Army, capable of predicting enemy movements across space and time. His tactical brilliance has never led to defeat.",
      traits: [
        { trait_type: "Class", value: "Strategist" },
        { trait_type: "Rarity", value: "Mythic" },
        { trait_type: "Power", value: "Foresight" },
        { trait_type: "Element", value: "Time" }
      ]
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_b07b4f49-eff1-4f00-9a72-9ab9ddaf8791.png",
      title: "ETHEREAL SAINT",
      description: "Born of pure ethereal energy, this Saint exists between dimensions. Their touch can heal allies or devastate enemies, making them a pivotal force in cosmic conflicts.",
      traits: [
        { trait_type: "Class", value: "Healer" },
        { trait_type: "Rarity", value: "Divine" },
        { trait_type: "Power", value: "Energy Manipulation" },
        { trait_type: "Element", value: "Ether" }
      ]
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_a8477262-d89e-4f3f-8486-0a33716f9efb.png",
      title: "CELESTIAL GUARDIAN",
      description: "Guardian of the sacred celestial gates, this Saint ensures only the worthy may pass. Ancient wisdom flows through their veins, guiding their judgment.",
      traits: [
        { trait_type: "Class", value: "Guardian" },
        { trait_type: "Rarity", value: "Immortal" },
        { trait_type: "Power", value: "Judgement" },
        { trait_type: "Element", value: "Light" }
      ]
    },
    {
      id: 6,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_01bd3426-feb2-464e-94bc-c27bf8da8c1f.png",
      title: "QUANTUM SAINT",
      description: "Existing in multiple realities simultaneously, this Saint can manipulate the quantum field to alter probability and outcome. A strategic advantage in any conflict.",
      traits: [
        { trait_type: "Class", value: "Reality Bender" },
        { trait_type: "Rarity", value: "Quantum" },
        { trait_type: "Power", value: "Probability Shift" },
        { trait_type: "Element", value: "Quantum" }
      ]
    },
    {
      id: 7,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_6ebbf499-83a2-4658-a8f3-380b5b8ef234.png",
      title: "COSMIC COMMANDER",
      description: "Leading the Saints Army through countless victories, this commander's tactical genius is matched only by their unbreakable spirit and loyalty to the divine cause.",
      traits: [
        { trait_type: "Class", value: "Commander" },
        { trait_type: "Rarity", value: "Supreme" },
        { trait_type: "Power", value: "Inspiration Aura" },
        { trait_type: "Element", value: "Will" }
      ]
    },
    {
      id: 8,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_018782c6-d907-4711-829f-284d56744886.png",
      title: "TEMPORAL SAINT",
      description: "Master of the timestream, capable of glimpsing both past and future. Their guidance has prevented countless catastrophes across the timeline.",
      traits: [
        { trait_type: "Class", value: "Chronomancer" },
        { trait_type: "Rarity", value: "Timeless" },
        { trait_type: "Power", value: "Temporal Vision" },
        { trait_type: "Element", value: "Chronos" }
      ]
    },
    {
      id: 9,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_03c3ef03-9d82-4530-a6cc-c7a7a1ce1036.png",
      title: "ASTRAL VOYAGER",
      description: "Traversing the astral planes with ease, this Saint can project their consciousness across vast cosmic distances. Their knowledge of celestial pathways has saved countless souls lost in dimensional rifts.",
      traits: [
        { trait_type: "Class", value: "Explorer" },
        { trait_type: "Rarity", value: "Astral" },
        { trait_type: "Power", value: "Dimensional Shifting" },
        { trait_type: "Element", value: "Astral" }
      ]
    },
    {
      id: 10,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_40087631-605d-411e-8daf-b9da2bb40365.png",
      title: "NEXUS KEEPER",
      description: "Guardian of the cosmic nexus points where realities converge. Their mask hides a face that has witnessed the birth and death of countless universes, preserving the balance between all dimensions.",
      traits: [
        { trait_type: "Class", value: "Keeper" },
        { trait_type: "Rarity", value: "Primordial" },
        { trait_type: "Power", value: "Reality Anchor" },
        { trait_type: "Element", value: "Nexus" }
      ]
    },
    {
      id: 11,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_6bd0c4f7-be6a-432c-9e03-270277e374ed.png",
      title: "VOID WALKER",
      description: "This enigmatic Saint has mastered the art of void walking, allowing them to step between the cracks of reality. Their presence distorts the very fabric of space around them, making them nearly impossible to track.",
      traits: [
        { trait_type: "Class", value: "Assassin" },
        { trait_type: "Rarity", value: "Shadow" },
        { trait_type: "Power", value: "Void Step" },
        { trait_type: "Element", value: "Darkness" }
      ]
    },
    {
      id: 12,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_81b85bf2-45a7-4cf6-b29e-374994c405b6.png",
      title: "STELLAR ORACLE",
      description: "Blessed with cosmic foresight, this Saint reads the patterns of stars to divine future events. Their prophecies have guided the Saints Army through its darkest hours toward ultimate triumph.",
      traits: [
        { trait_type: "Class", value: "Oracle" },
        { trait_type: "Rarity", value: "Cosmic" },
        { trait_type: "Power", value: "Stellar Divination" },
        { trait_type: "Element", value: "Stars" }
      ]
    },
    {
      id: 13,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_84fdc872-823c-47c1-863b-5b9ab7c814b8.png",
      title: "NEBULA WEAVER",
      description: "This Saint can manipulate the essence of nebulas, weaving cosmic dust and gas into powerful constructs. Their artistry creates breathtaking celestial displays that can either inspire allies or blind enemies.",
      traits: [
        { trait_type: "Class", value: "Artisan" },
        { trait_type: "Rarity", value: "Celestial" },
        { trait_type: "Power", value: "Nebula Manipulation" },
        { trait_type: "Element", value: "Cosmic Dust" }
      ]
    },
    {
      id: 14,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_964457cf-c416-4641-9ac3-4d1587af77e3.png",
      title: "HARMONIC SAINT",
      description: "Master of cosmic frequencies, this Saint can attune to the harmonic resonance of any plane of existence. Their melodic powers can heal broken realities or shatter corrupted dimensions with precise vibrational attacks.",
      traits: [
        { trait_type: "Class", value: "Harmonist" },
        { trait_type: "Rarity", value: "Resonant" },
        { trait_type: "Power", value: "Frequency Control" },
        { trait_type: "Element", value: "Sound" }
      ]
    },
    {
      id: 15,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_af822c43-0866-4cc9-98e5-35ef59c66a56.png",
      title: "EQUILIBRIUM KEEPER",
      description: "This Saint maintains the delicate balance between order and chaos across all realms. Their dual nature allows them to understand both creation and destruction, making them a perfect mediator in cosmic conflicts.",
      traits: [
        { trait_type: "Class", value: "Balancer" },
        { trait_type: "Rarity", value: "Primal" },
        { trait_type: "Power", value: "Equilibrium Shift" },
        { trait_type: "Element", value: "Balance" }
      ]
    },
    {
      id: 16,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_bf27e3e7-cb63-4b00-90c6-ca95f4107932.png",
      title: "SOLAR ASCENDANT",
      description: "Channeling the raw power of stars, this Saint radiates with solar energy. Their presence alone can sustain life in barren worlds or unleash devastating solar flares against those who threaten the innocent.",
      traits: [
        { trait_type: "Class", value: "Radiant" },
        { trait_type: "Rarity", value: "Solar" },
        { trait_type: "Power", value: "Stellar Channeling" },
        { trait_type: "Element", value: "Solar" }
      ]
    },
    {
      id: 17,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/Shane_Corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_dd5068d1-0066-4f34-90b3-731b3cef2e01.png",
      title: "DIGITAL ASCENDANT",
      description: "Existing simultaneously in physical and digital realms, this Saint can manipulate data streams and code with thought alone. They protect the digital consciousness of the multiverse from corruption and decay.",
      traits: [
        { trait_type: "Class", value: "Codeweaver" },
        { trait_type: "Rarity", value: "Digital" },
        { trait_type: "Power", value: "Code Manipulation" },
        { trait_type: "Element", value: "Data" }
      ]
    },
    {
      id: 18,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_750da02f-2a3c-4cbc-b02c-0147b72d8d99.png",
      title: "LUNAR GUARDIAN",
      description: "Drawing power from celestial moons across all dimensions, this Saint controls gravitational forces and tidal energies. Their silent vigilance protects sleeping worlds from threats that lurk in darkness.",
      traits: [
        { trait_type: "Class", value: "Guardian" },
        { trait_type: "Rarity", value: "Lunar" },
        { trait_type: "Power", value: "Gravitational Control" },
        { trait_type: "Element", value: "Lunar" }
      ]
    },
    {
      id: 19,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_78ae3b5c-dcb2-4c59-b6be-ae76e747defb.png",
      title: "PLASMA ARCHITECT",
      description: "This Saint can shape and solidify plasma into elaborate structures and weapons. Their creations combine beauty and function, from impenetrable fortresses to bridges spanning between dimensions.",
      traits: [
        { trait_type: "Class", value: "Builder" },
        { trait_type: "Rarity", value: "Plasma" },
        { trait_type: "Power", value: "Matter Shaping" },
        { trait_type: "Element", value: "Plasma" }
      ]
    },
    {
      id: 20,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_7b85391d-2bc9-42d3-8f72-137fb8ab50ba.png",
      title: "QUANTUM MYSTIC",
      description: "Merging ancient mysticism with quantum physics, this Saint perceives all possible timelines simultaneously. Their decisions are guided by knowledge of countless futures, always choosing paths leading to greater harmony.",
      traits: [
        { trait_type: "Class", value: "Seer" },
        { trait_type: "Rarity", value: "Transcendent" },
        { trait_type: "Power", value: "Timeline Vision" },
        { trait_type: "Element", value: "Quantum" }
      ]
    },
    {
      id: 21,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_835b8d72-3939-44ea-9d48-e5b380b79c01.png",
      title: "ELEMENTAL SOVEREIGN",
      description: "Master of the six primordial elements, this Saint maintains the elemental balance across all planes of existence. Their mere presence can calm raging storms or quell volcanic eruptions threatening inhabited worlds.",
      traits: [
        { trait_type: "Class", value: "Elemental" },
        { trait_type: "Rarity", value: "Sovereign" },
        { trait_type: "Power", value: "Elemental Mastery" },
        { trait_type: "Element", value: "Primal" }
      ]
    },
    {
      id: 22,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_corneliuson_A_digital_illustration_shoot_from_a_frontal_camera_be94a27d-82dd-41e0-9027-c2a832d53d0e.png",
      title: "NEURAL SAINT",
      description: "With a mind expanded beyond normal consciousness, this Saint can connect to and process information from billions of sources simultaneously. They serve as the central intelligence network for the entire Saints Army.",
      traits: [
        { trait_type: "Class", value: "Processor" },
        { trait_type: "Rarity", value: "Neural" },
        { trait_type: "Power", value: "Omni-cognition" },
        { trait_type: "Element", value: "Thought" }
      ]
    },
    {
      id: 23,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/shane_Corneliuson_A_vibrant_and_colorful_digital_illustration_shoot_ba6cd2ae-b0bb-4fed-8e90-ab371ec7e716.png",
      title: "PRISMATIC SAINT",
      description: "This Saint manipulates light across all spectrums, visible and invisible. Their rainbow aura can reveal hidden truths, penetrate the darkest deceptions, or focus into beams of purifying energy that cleanse corruption.",
      traits: [
        { trait_type: "Class", value: "Illuminator" },
        { trait_type: "Rarity", value: "Prismatic" },
        { trait_type: "Power", value: "Spectrum Manipulation" },
        { trait_type: "Element", value: "Light" }
      ]
    },
    {
      id: 24,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_1d988b5d-41d6-4a2c-b90d-93b6105e9f46.png",
      title: "GALACTIC SENTINEL",
      description: "Standing watch at the edge of galaxies, this Saint monitors cosmic threats before they can reach inhabited systems. Their enhanced perception can detect disturbances in space-time fabric across vast distances.",
      traits: [
        { trait_type: "Class", value: "Watcher" },
        { trait_type: "Rarity", value: "Galactic" },
        { trait_type: "Power", value: "Far Sight" },
        { trait_type: "Element", value: "Void" }
      ]
    },
    {
      id: 25,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_3620d107-2e96-4f16-ae83-81ee4e7b3bd1.png",
      title: "ENTROPY MANAGER",
      description: "This Saint regulates the flow of entropy throughout cosmic systems. Their power ensures that while all things eventually decay, they do so in harmony with the cosmic cycle of rebirth and renewal.",
      traits: [
        { trait_type: "Class", value: "Regulator" },
        { trait_type: "Rarity", value: "Eternal" },
        { trait_type: "Power", value: "Entropy Control" },
        { trait_type: "Element", value: "Decay/Renewal" }
      ]
    },
    {
      id: 26,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_430fb7c2-ee36-42a7-94c6-29423b8741b0.png",
      title: "DIMENSIONAL ARCHITECT",
      description: "This master builder can reshape the fundamental structure of dimensions. Their cosmic blueprints have created safe havens for countless species displaced by dimensional catastrophes.",
      traits: [
        { trait_type: "Class", value: "Creator" },
        { trait_type: "Rarity", value: "Foundational" },
        { trait_type: "Power", value: "Reality Crafting" },
        { trait_type: "Element", value: "Structure" }
      ]
    },
    {
      id: 27,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_75975696-ae35-42c5-94ed-52415f679894.png",
      title: "COSMIC HARMONIZER",
      description: "This Saint maintains the delicate harmonic balance between all universal forces. Their subtle adjustments prevent cosmic discord that could tear reality apart at its seams.",
      traits: [
        { trait_type: "Class", value: "Tuner" },
        { trait_type: "Rarity", value: "Harmonic" },
        { trait_type: "Power", value: "Force Alignment" },
        { trait_type: "Element", value: "Harmony" }
      ]
    },
    {
      id: 28,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_7de18f4b-5b5d-42be-9e61-0833c52a636d.png",
      title: "NEURAL NEXUS",
      description: "Serving as the psychic hub for the Saints Army, this Saint can mentally connect all members across vast distances. Their telepathic network allows instantaneous communication and coordination during multidimensional operations.",
      traits: [
        { trait_type: "Class", value: "Connector" },
        { trait_type: "Rarity", value: "Psychic" },
        { trait_type: "Power", value: "Mind Linking" },
        { trait_type: "Element", value: "Thought" }
      ]
    },
    {
      id: 29,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_b42382c3-e0ff-4503-8eb8-31f535de8021.png",
      title: "ANTIMATTER SAGE",
      description: "This ancient Saint has mastered the dangerous art of antimatter manipulation. Their carefully controlled power can create sustainable energy sources for entire civilizations or devastate cosmic threats when necessary.",
      traits: [
        { trait_type: "Class", value: "Energy Master" },
        { trait_type: "Rarity", value: "Antimatter" },
        { trait_type: "Power", value: "Matter/Antimatter Conversion" },
        { trait_type: "Element", value: "Antimatter" }
      ]
    },
    {
      id: 30,
      image: "https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/CyberLink_Galaxy_A_digital_illustration_shoot_from_a_frontal_camera_ed2973e3-21ab-4268-8594-65ab07277de2.png",
      title: "GENESIS SAINT",
      description: "Present at the birth of the current universe, this primordial Saint carries the original spark of creation within. Their essence contains blueprints for rebuilding reality should the cosmos face extinction.",
      traits: [
        { trait_type: "Class", value: "Originator" },
        { trait_type: "Rarity", value: "Genesis" },
        { trait_type: "Power", value: "Creation Spark" },
        { trait_type: "Element", value: "Primordial" }
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
    openModal("Magic Eden Coming Soon", "The SAINTS ARMY NFT will be available on Magic Eden soon. Stay tuned!");
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
              <span className="text-saints-gold font-semibold text-sm">52 Members</span>
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
