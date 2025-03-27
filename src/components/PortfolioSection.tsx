
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clientLogos from '../data/clientLogos';
import ClientCard from './portfolio/ClientCard';
import PortfolioHeader from './portfolio/PortfolioHeader';

const PortfolioSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Listen for audio play events
  useEffect(() => {
    const handleAudioPlay = (e: Event) => {
      const customEvent = e as CustomEvent;
      setPlayingIndex(customEvent.detail.playingIndex);
    };
    
    window.addEventListener('audio-play', handleAudioPlay);
    return () => window.removeEventListener('audio-play', handleAudioPlay);
  }, []);

  return (
    <section id="portfolio" className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-coral/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <PortfolioHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {clientLogos.map((client, index) => (
            <ClientCard 
              key={client.name}
              client={client}
              index={index}
              isPlaying={playingIndex === index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#contact" className="btn-primary shadow-neon">
            Join These Success Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
