import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  name: string;
  description: string;
  audioFile: string;
  image?: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const AudioPlayer = ({ name, description, audioFile, image, isPlaying, onTogglePlay }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      onTogglePlay();
    }
  };

  return (
    <div
      className="aspect-square rounded-lg shadow-xl overflow-hidden p-px artistic-border"
      style={{
        backgroundImage: image ? `url(${image})` : 'linear-gradient(to bottom right, #ff6f61, #ffcc33)', // Fallback to gradient if no image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-full rounded-lg glass-dark overflow-hidden flex flex-col items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
          <audio ref={audioRef} src={audioFile} />
          <div
            onClick={handlePlayPause}
            className="w-14 h-14 rounded-full bg-coral flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon mb-2"
          >
            {isPlaying ? (
              <Pause className="text-white" size={20} />
            ) : (
              <Play className="text-white" size={20} />
            )}
          </div>
          <h3 className="text-white font-medium text-center mt-2 text-sm">{name}</h3>
          <p className="text-white/70 text-xs text-center">{description}</p>
          {isPlaying && (
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
  );
};

export default AudioPlayer;
