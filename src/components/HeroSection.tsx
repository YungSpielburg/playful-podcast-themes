
import { motion } from 'framer-motion';
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { useIsMobile } from '@/hooks/use-mobile';

const podcasts = [
  { 
    name: 'All In Podcast', 
    description: 'Theme music',
    audioFile: '/wet-your-beak.mp3',
    image: '/all-in-image.jpg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro',
    audioFile: '/who-got-the-truth-fixed.mp3',
    image: '/acquired-podcast-jpg.jpeg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'The Happy Dentist', 
    description: 'Theme song',
    audioFile: '/happy-dentist.mp3',
    image: '/happy-dentist-image-2.jpeg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
  { 
    name: 'A16Z', 
    description: 'Theme music',
    audioFile: '/a16z-15s-b.mp3',
    image: '/a16z-image-2.jpg',
    hideText: true,
    buttonPosition: 'bottom' as const
  },
];

const HeroSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

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
        {/* Enhanced background elements with softer gradients that match the new background */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-red/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
        
        {/* New soft red bursts with adjusted opacity to work with the new background */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red/15 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-coral/15 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 pt-10">
          {/* The "#1 Podcast Theme Producer" button has been removed */}
          
          <motion.h1 
            className="font-anton text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="whitespace-nowrap">Give Your Podcast</span><br />
            A <span className="font-anton text-accent glow-accent">Signature</span><br />
            <span className="text-accent glow-accent">Sound</span>
          </motion.h1>
          
          <motion.p 
            className="font-gotham text-lg md:text-xl mb-4 text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Grammy award-winning producer and songwriter who has produced themes for the world's top podcasts including The All In Podcast, Acquired.fm, and many more.
          </motion.p>
          
          <motion.p 
            className="font-gotham text-lg md:text-xl mb-8 text-muted-foreground max-w-xl"
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
            <a href="#contact" className="font-gotham btn-primary shadow-neon">
              Connect With Me
            </a>
            <a href="#portfolio" className="font-gotham btn-secondary">
              Hear My Work
            </a>
          </motion.div>
        </div>
        
        <div className="flex-1 relative w-full">
          <motion.div
            className={`${isMobile ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-[90%]' : 'grid grid-cols-2 gap-4 w-full max-w-[400px] mx-auto'}`}
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
          
          {/* Mobile-only Connect button - shown after the audio players */}
          {isMobile && (
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" className="btn-primary shadow-neon w-full max-w-[250px] text-center flex justify-center items-center">
                Connect With Me
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
