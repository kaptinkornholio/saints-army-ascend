import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useComingSoonModal } from "@/hooks/use-coming-soon-modal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface DropCountdownProps {
  targetDate: Date;
}

const DropCountdown: React.FC<DropCountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { ComingSoonButton } = useComingSoonModal();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background overlay with SAINTSEDIT.png image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url(https://raw.githubusercontent.com/kaptinkornholio/saints-army-ascend/main/SAINTSEDIT.png)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-saints-dark/80 via-saints-dark/60 to-saints-dark/90"></div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-saints-blue/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-saints-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <h2 className="cosmic-title text-3xl md:text-4xl mb-8 animate-glow">
          SAINTS ARMY NFT Drop Countdown
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={index}
              className="w-24 md:w-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-saints-gold">{unit.value}</div>
              <div className="text-sm md:text-base text-white/70 uppercase">{unit.label}</div>
            </motion.div>
          ))}
        </div>
        <ComingSoonButton className="btn-primary text-lg">GET NOTIFIED</ComingSoonButton>
      </div>
    </section>
  );
};

export default DropCountdown;
