
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const clientLogos = [
  { 
    name: 'All In Podcast', 
    description: 'My theme has risen with the show to become a top 10 podcast worldwide',
    highlight: true,
    audioFile: '/wet-your-beak.mp3'
  },
  { 
    name: 'Acquired.fm', 
    description: 'Custom intro music for their tech acquisition analysis',
    highlight: false,
    audioFile: '/who-got-the-truth-fixed.mp3'
  },
  { 
    name: 'A16Z', 
    description: 'Theme music for one of technology\'s top VC podcasts',
    highlight: false,
    audioFile: '/a16z-15s-b.mp3'
  },
  { 
    name: 'Not Boring', 
    description: 'Distinctive sound created for Packy McCormick\'s business analysis',
    highlight: false,
    audioFile: '/not-boring-fix.mp3'
  },
  { 
    name: 'Balaji Srinivasan', 
    description: 'Unique audio identity for the renowned tech philosopher',
    highlight: false,
    audioFile: '/network-state.mp3'
  },
  { 
    name: 'ConsumerVC', 
    description: 'Crafted the perfect sound for consumer investment insights',
    highlight: false,
    audioFile: '/consumer-vc.mp3'
  },
  { 
    name: 'The Happy Dentist', 
    description: 'A radical song for a radical podcast on dentistry, believe it or not!',
    highlight: false,
    audioFile: '/happy-dentist.mp3'
  },
  { 
    name: 'Cloud Poker Night', 
    description: 'The who\'s who place for online poker in tech',
    highlight: false,
    audioFile: '/nightfall.mp3'
  },
  { 
    name: 'Venture Coinist', 
    description: 'As the song says, "We Going Up!"',
    highlight: false,
    audioFile: '/we-going-up.mp3'
  },
];

const PortfolioSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(Array(clientLogos.length).fill(null));

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

  const handleAudioEnded = () => {
    setPlayingIndex(null);
  };

  return (
    <section id="portfolio" className="py-10 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-coral/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      {clientLogos.map((client, index) => (
        <audio 
          key={`audio-${index}`}
          ref={el => audioRefs.current[index] = el}
          src={client.audioFile}
          onEnded={handleAudioEnded}
        />
      ))}
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="font-anton text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-wide whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by the World's <span className="text-accent glow-accent">Top Podcasts</span>
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
