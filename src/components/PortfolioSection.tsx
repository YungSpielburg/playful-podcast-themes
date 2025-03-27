
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

// Updated client logos with audio file paths
const clientLogos = [
  { 
    name: 'All In Podcast', 
    description: 'The theme helped them become a top 10 podcast worldwide',
    highlight: true,
    audioFile: '/Wet Your Beak.mp3'
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro music for their tech acquisition analysis',
    highlight: false,
    audioFile: '/Who Got The Truth.mp3'
  },
  { 
    name: 'A16Z', 
    description: 'Theme music for one of technology\'s top VC podcasts',
    highlight: false,
    audioFile: '/A 16 Z Theme 8.6 (15s B).mp3'
  },
  { 
    name: 'Not Boring', 
    description: 'Distinctive sound created for Packy McCormick\'s business analysis',
    highlight: false,
    audioFile: '/Not Boring (outro theme).mp3'
  },
  { 
    name: 'Balaji Srinivasan', 
    description: 'Unique audio identity for the renowned tech philosopher',
    highlight: false,
    audioFile: '/the network state for website.mp3'
  },
  { 
    name: 'ConsumerVC', 
    description: 'Crafted the perfect sound for consumer investment insights',
    highlight: false,
    audioFile: '/VC Consumer Bumper 1.0.wav'
  },
];

const PortfolioSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(Array(clientLogos.length).fill(null));
  const [audioLoaded, setAudioLoaded] = useState<boolean[]>(Array(clientLogos.length).fill(false));

  // Initialize audio elements
  useEffect(() => {
    // Create and preload audio elements
    clientLogos.forEach((client, index) => {
      const audio = new Audio(client.audioFile);
      audio.preload = 'auto';
      audio.addEventListener('canplaythrough', () => {
        const newLoadedState = [...audioLoaded];
        newLoadedState[index] = true;
        setAudioLoaded(newLoadedState);
      });
      audio.addEventListener('ended', () => {
        if (playingIndex === index) {
          setPlayingIndex(null);
        }
      });
      audioRefs.current[index] = audio;
    });

    // Cleanup on unmount
    return () => {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);

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

  const togglePlayPause = (index: number) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) {
      console.error('Audio element not found for index:', index);
      return;
    }

    try {
      if (playingIndex === index) {
        // Pause the currently playing audio
        audioElement.pause();
        setPlayingIndex(null);
        console.log('Paused audio at index:', index);
      } else {
        // Pause any currently playing audio
        if (playingIndex !== null && audioRefs.current[playingIndex]) {
          audioRefs.current[playingIndex]?.pause();
        }
        
        // Play the selected audio
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio started playing at index:', index);
              setPlayingIndex(index);
            })
            .catch(error => {
              console.error("Error playing audio:", error);
              // Try to play again with user interaction already happened
              if (error.name === 'NotAllowedError') {
                console.log('Audio playback requires user interaction first');
              }
            });
        }
      }
    } catch (error) {
      console.error('Error in togglePlayPause:', error);
    }
  };

  return (
    <section id="portfolio" className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-coral/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by the World's <span className="text-coral glow-coral">Top Podcasts</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I've had the privilege of working with some of the most influential voices in podcasting, helping them create unforgettable audio identities.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
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
                  onClick={() => togglePlayPause(index)}
                  className={`w-10 h-10 rounded-full ${playingIndex === index ? 'bg-coral' : 'bg-accent/80'} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon`}
                >
                  {playingIndex === index ? (
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

              {playingIndex === index && (
                <div className="mt-4">
                  <div className="audio-wave">
                    <div className="audio-wave-bar h-4 animate-wave-1"></div>
                    <div className="audio-wave-bar h-5 animate-wave-2"></div>
                    <div className="audio-wave-bar h-3 animate-wave-3"></div>
                    <div className="audio-wave-bar h-6 animate-wave-4"></div>
                    <div className="audio-wave-bar h-2 animate-wave-5"></div>
                  </div>
                </div>
              )}
            </motion.div>
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
