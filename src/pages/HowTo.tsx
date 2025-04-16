
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeaderSection from '@/components/how-to/HeaderSection';
import ProcessSteps from '@/components/how-to/ProcessSteps';

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

const HowTo = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <HeaderSection 
          podcasts={podcasts}
          playingIndex={playingIndex}
          onTogglePlay={togglePlayPause}
        />
        <div className="mt-48 md:mt-52">
          <ProcessSteps />
        </div>
        
        {/* Contact */}
        <div className="text-center pb-16">
          <p className="font-gotham text-2xl font-bold mb-2">YUNG SPIELBURG</p>
          <p className="font-gotham text-lg">
            Inquiry: {' '}
            <a href="mailto:YungIntros@gmail.com" className="text-accent hover:text-accent-light">
              YungIntros@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
