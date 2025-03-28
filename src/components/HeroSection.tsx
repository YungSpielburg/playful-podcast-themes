
import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

const podcasts = [
  { 
    name: 'All In Podcast', 
    description: 'Theme music',
    audioFile: './Wet Your Beak.mp3',
    image: '/all-in-image.jpg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro',
    audioFile: './Who Got The Truth.mp3',
    image: '/acquired-podcast-jpg.jpeg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'A16Z', 
    description: 'Theme music',
    audioFile: './A 16 Z Theme 8.6 (15s B).mp3',
    image: '/a16z-image-2.jpg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'Not Boring', 
    description: 'Outro theme',
    audioFile: './Not Boring (outro theme).mp3',
    image: 'not-boring-image.jpg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
];

const HeroSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-10 flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-coral/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 pt-10">
          {/* The "#1 Podcast Theme Producer" button has been removed */}
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="whitespace-nowrap">Give Your Podcast</span><br />
            a <span className="text-coral glow-coral">Signature</span><br />
            <span className="text-accent glow-accent">Sound</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-4 text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Grammy award-winning producer and songwriter who has produced themes for the world's top podcasts including The All In Podcast, Acquired.fm, and many more.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Let's create the sound that defines your show.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="btn-primary shadow-neon">
              Connect With Me
            </a>
            <a href="#portfolio" className="btn-secondary">
              Hear My Work
            </a>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            className="grid grid-cols-2 gap-4 w-full max-w-[400px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {podcasts.map((podcast, index) => (
              <AudioPlayer
                key={podcast.name}
                name={podcast.name}
                description={podcast.description}
                audioFile={podcast.audioFile}
                image={podcast.image}
                isPlaying={playingIndex === index}
                onTogglePlay={() => togglePlayPause(index)}
                hideText={podcast.hideText}
                buttonPosition={podcast.buttonPosition}
              />
            ))}
          </motion.div>
          
          <motion.div
            className="absolute top-1/4 -right-10 md:-right-20 w-24 h-24 rounded-full bg-accent/30 backdrop-blur-sm animate-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
          
          <motion.div
            className="absolute bottom-1/4 -left-10 md:-left-20 w-20 h-20 rounded-full bg-coral/30 backdrop-blur-sm animate-float animation-delay-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
