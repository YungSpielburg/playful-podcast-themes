
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen pt-20 pb-10 flex items-center overflow-hidden">
      <audio 
        ref={audioRef} 
        src="/Wet Your Beak.mp3" 
        onEnded={() => setIsPlaying(false)}
      />
      
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
            #1 Podcast Theme Producer Worldwide
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
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Grammy award-winning producer and songwriter who has produced themes for the world's top podcasts including The All In Podcast, Acquired.fm, and many more. Let's create the sound that defines your show.
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
            className="relative z-10 w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-coral to-accent shadow-xl overflow-hidden p-px artistic-border">
              <div className="w-full h-full rounded-2xl glass-dark overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative w-full h-full z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <div 
                        onClick={togglePlayPause}
                        className="w-24 h-24 rounded-full bg-coral flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon"
                      >
                        {isPlaying ? (
                          <Pause className="text-white" size={40} />
                        ) : (
                          <Play className="text-white" size={40} />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-0 right-0 px-6">
                    <div className="glass-dark rounded-xl p-4 flex items-center gap-4">
                      <div className="audio-wave">
                        {isPlaying ? (
                          <>
                            <div className="audio-wave-bar h-4 animate-wave-1"></div>
                            <div className="audio-wave-bar h-5 animate-wave-2"></div>
                            <div className="audio-wave-bar h-3 animate-wave-3"></div>
                            <div className="audio-wave-bar h-6 animate-wave-4"></div>
                            <div className="audio-wave-bar h-2 animate-wave-5"></div>
                          </>
                        ) : (
                          <>
                            <div className="audio-wave-bar h-2"></div>
                            <div className="audio-wave-bar h-2"></div>
                            <div className="audio-wave-bar h-2"></div>
                            <div className="audio-wave-bar h-2"></div>
                            <div className="audio-wave-bar h-2"></div>
                          </>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">Wet Your Beak</h4>
                        <p className="text-white/70 text-xs">Produced by Yung Spielburg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-coral/50 to-accent/50 blur-xl"></div>
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
