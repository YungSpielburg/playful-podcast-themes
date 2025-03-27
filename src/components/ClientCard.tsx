
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import AudioWave from './AudioWave';
import { Card } from '@/components/ui/card';

interface ClientCardProps {
  client: {
    name: string;
    description: string;
    highlight: boolean;
    audioFile: string;
  };
  index: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

const ClientCard: React.FC<ClientCardProps> = ({ client, index, isPlaying, onTogglePlay }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariants}
      className={`rounded-xl overflow-hidden ${client.highlight ? 'glass border-2 border-accent/20' : 'artistic-card'} p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex justify-between items-start">
        <div className={`mb-4 rounded-lg p-3 inline-flex ${client.highlight ? 'bg-accent text-white shadow-neon-accent' : 'bg-coral/10 text-coral'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
            <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"></path>
          </svg>
        </div>
        <div 
          onClick={onTogglePlay}
          className={`w-10 h-10 rounded-full ${isPlaying ? 'bg-coral' : 'bg-accent/80'} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon`}
        >
          {isPlaying ? (
            <Pause className="text-white" size={18} />
          ) : (
            <Play className="text-white" size={18} />
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-display font-bold mb-2">{client.name}</h3>
      <p className="text-muted-foreground flex-grow">{client.description}</p>
      
      {client.highlight && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium text-accent">Featured Client</span>
          </div>
        </div>
      )}

      {isPlaying && (
        <div className="mt-4">
          <AudioWave />
        </div>
      )}
    </motion.div>
  );
};

export default ClientCard;
