import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

// Podcast data structure
const podcasts = [
  { 
    name: 'All In Podcast', 
    description: 'Theme music',
    audioFile: '/Wet Your Beak.mp3',
    image: '/ALL IN IMAGE.jpg' // Add image property for All In Podcast
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro',
    audioFile: '/Who Got The Truth.mp3'
  },
  { 
    name: 'A16Z', 
    description: 'Theme music',
    audioFile: '/A 16 Z Theme 8.6 (15s B).mp3'
  },
  { 
    name: 'Not Boring', 
    description: 'Outro theme',
    audioFile: '/Not Boring (outro theme).mp3'
  },
];

const HeroSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(Array(podcasts.length).fill(null));

  const togglePlayPause = (index: number) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) return;

    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex]?.pause();
      }
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      setPlayingIndex(index);
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-10 flex items-center overflow-hidden">
      {/* Audio elements */}
      {podcasts.map((podcast, index) => (
        <audio 
          key={`audio-${index}`}
          ref={el => audioRefs.current[index] = el}
          src={podcast.audioFile}
          onEnded={() => setPlayingIndex(null)}
        />
      ))}
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-coral/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 pt-10">
          <motion.span 
            className="inline-block px-3 py-1 mb-6 rounded-full text-sm font-medium bg-accent text-accent-foreground shadow-neon-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            #1 Podcast Theme Producer
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Podcast<br />
            <span className="text-coral glow-coral">Deserves</span> Iconic<br />
            <span className="text-accent glow-accent">Music</span>
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
              Book a Consultation
            </a>
            <a href="#portfolio" className="btn-secondary">
              Hear My Work
            </a>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {podcasts.map((podcast, index) => (
              <div 
                key={podcast.name}
                className="aspect-square rounded-lg bg-gradient-to-br from-coral to-accent shadow-xl overflow-hidden p-px artistic-border"
              >
                <div className="w-full h-full rounded-lg glass-dark overflow-hidden flex flex-col items-center justify-center">
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                    {podcast.image && (
                      <img 
                        src={podcast.image} 
                        alt={`${podcast.name} theme`}
                        className="w-16 h-16 object-cover rounded-full mb-2"
                      />
                    )}
                    <div 
                      onClick={() => togglePlayPause(index)}
                      className="w-14 h-14 rounded-full bg-coral flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon mb-2"
                    >
                      {playingIndex === index ? (
                        <Pause className="text-white" size={20} />
                      ) : (
                        <Play className="text-white" size={20} />
                      )}
                    </div>
                    
                    <h3 className="text-white font-medium text-center mt-2 text-sm">{podcast.name}</h3>
                    <p className="text-white/70 text-xs text-center">{podcast.description}</p>
                    
                    {playingIndex === index && (
                      <div className="mt-auto">
                        <div className="audio-wave">
                          <div className="audio-wave-bar h-2 animate-wave-1"></div>
                          <div className="audio-wave-bar h-3 animate-wave-2"></div>
                          <div className="audio-wave-bar h-1 animate-wave-3"></div>
                          <div className="audio-wave-bar h-4 animate-wave-4"></div>
                          <div className="audio-wave-bar h-2 animate-wave-5"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
