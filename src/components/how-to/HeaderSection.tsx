
import React from 'react';
import AudioPlayer from '@/components/AudioPlayer';

interface Podcast {
  name: string;
  description: string;
  audioFile: string;
  image: string;
  hideText: boolean;
  buttonPosition: 'bottom' | 'center';
}

interface HeaderSectionProps {
  podcasts: Podcast[];
  playingIndex: number | null;
  onTogglePlay: (index: number) => void;
}

const HeaderSection = ({ podcasts, playingIndex, onTogglePlay }: HeaderSectionProps) => {
  return (
    <div className="relative mb-16">
      {/* Left Audio Players */}
      <div className="absolute left-0 top-0 space-y-4 w-[200px]">
        <AudioPlayer
          key={podcasts[0].name}
          name={podcasts[0].name}
          description={podcasts[0].description}
          audioFile={podcasts[0].audioFile}
          image={podcasts[0].image}
          isPlaying={playingIndex === 0}
          onTogglePlay={() => onTogglePlay(0)}
          hideText={podcasts[0].hideText}
          buttonPosition={podcasts[0].buttonPosition}
        />
        <AudioPlayer
          key={podcasts[1].name}
          name={podcasts[1].name}
          description={podcasts[1].description}
          audioFile={podcasts[1].audioFile}
          image={podcasts[1].image}
          isPlaying={playingIndex === 1}
          onTogglePlay={() => onTogglePlay(1)}
          hideText={podcasts[1].hideText}
          buttonPosition={podcasts[1].buttonPosition}
        />
      </div>

      {/* Center Text */}
      <div className="text-center mx-auto max-w-2xl">
        <h1 className="font-anton text-4xl md:text-5xl font-bold mb-6">
          How to Give Your Podcast
          <br />
          <span className="text-accent">A Signature Sound</span>
        </h1>
        <p className="font-gotham text-lg text-muted-foreground">
          I'm Yung Spielburg, a Grammy award-winning producer and songwriter who has produced 
          themes for the world's top podcasts including The All In Podcast, Acquired.fm, Not Boring, and many more. 
          Below is my method for creating iconic musical themes.
        </p>
      </div>

      {/* Right Audio Players */}
      <div className="absolute right-0 top-0 space-y-4 w-[200px]">
        <AudioPlayer
          key={podcasts[2].name}
          name={podcasts[2].name}
          description={podcasts[2].description}
          audioFile={podcasts[2].audioFile}
          image={podcasts[2].image}
          isPlaying={playingIndex === 2}
          onTogglePlay={() => onTogglePlay(2)}
          hideText={podcasts[2].hideText}
          buttonPosition={podcasts[2].buttonPosition}
        />
        <AudioPlayer
          key={podcasts[3].name}
          name={podcasts[3].name}
          description={podcasts[3].description}
          audioFile={podcasts[3].audioFile}
          image={podcasts[3].image}
          isPlaying={playingIndex === 3}
          onTogglePlay={() => onTogglePlay(3)}
          hideText={podcasts[3].hideText}
          buttonPosition={podcasts[3].buttonPosition}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
