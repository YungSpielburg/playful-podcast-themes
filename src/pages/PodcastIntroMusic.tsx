
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import { useState } from 'react';

const PodcastIntroMusic = () => {
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  
  // Sample data for podcast intros
  const podcastThemes = [
    {
      id: "all-in",
      name: "All In Podcast Theme",
      description: "Upbeat tech podcast intro",
      audioFile: "/wet-your-beak.mp3",
      image: "/all-in-image.jpg"
    },
    {
      id: "acquired",
      name: "Acquired.fm Theme",
      description: "Business analysis podcast",
      audioFile: "/who-got-the-truth-fixed.mp3",
      image: "/acquired-podcast-jpg.jpeg"
    },
    {
      id: "happy-dentist",
      name: "Happy Dentist Podcast",
      description: "Healthcare professional theme",
      audioFile: "/happy-dentist.mp3",
      image: "/happy-dentist-image-2.jpeg"
    },
    {
      id: "a16z",
      name: "a16z Podcast Theme",
      description: "Venture capital insights",
      audioFile: "/a16z-15s-b.mp3",
      image: "/a16z-image-2.jpg"
    }
  ];
  
  // Handle toggling audio playback
  const handleTogglePlay = (id: string) => {
    if (activeAudio === id) {
      setActiveAudio(null);
    } else {
      setActiveAudio(id);
    }
  };

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-foreground relative overflow-hidden">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              <span className="text-accent glow-accent">Podcast</span> Intro <span className="text-accent glow-accent">Music</span>
            </h1>
            <p className="font-gotham text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse my collection of custom podcast intro themes that have helped define some of the world's most popular shows.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcastThemes.map((theme) => (
              <motion.div
                key={theme.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <AudioPlayer
                  name={theme.name}
                  description={theme.description}
                  audioFile={theme.audioFile}
                  image={theme.image}
                  isPlaying={activeAudio === theme.id}
                  onTogglePlay={() => handleTogglePlay(theme.id)}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="font-anton text-3xl md:text-4xl tracking-wide mb-6">
              Want a <span className="text-accent glow-accent">Custom Theme</span> for Your Podcast?
            </h2>
            <p className="font-gotham text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I create bespoke intro music that perfectly captures the essence of your podcast. Let's collaborate on something unique.
            </p>
            <a 
              href="#contact" 
              className="btn-primary inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default PodcastIntroMusic;
