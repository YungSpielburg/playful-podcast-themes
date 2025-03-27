import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  name: string;
  description: string;
  audioFile: string;
  image?: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  hideText?: boolean;
  buttonPosition?: 'center' | 'bottom';
}

const AudioPlayer = ({ 
  name, 
  description, 
  audioFile, 
  image, 
  isPlaying, 
  onTogglePlay,
  hideText = false,
  buttonPosition = 'center'
}: AudioPlayerProps) => {
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

  // Log the image path for debugging
  if (image) {
    console.log(`Attempting to load image: ${image}`);
  }

  return (
    <div
      className="aspect-square rounded-lg shadow-xl overflow-hidden p-px artistic-border"
      style={{
        backgroundImage: image ? `url(${image})` : 'linear-gradient(to bottom right, #ff6f61, #ffcc33)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'auto',
        filter: image ? 'brightness(120%) contrast(110%) saturate(110%)' : 'none',
      }}
    >
      <div
        className="w-full h-full rounded-lg overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: hideText ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'none',
        }}
      >
        <div className={`relative w-full h-full flex flex-col items-start ${buttonPosition === 'bottom' ? 'justify-end pb-2' : 'justify-center'} p-4`}>
          <audio ref={audioRef} src={audioFile} />
          
          <div className="flex flex-col items-start mb-1"> {/* Reduced margin-bottom */}
            <div
              onClick={handlePlayPause}
              className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon bg-transparent border-2 border-coral/50 hover:border-coral ml-2 mb-1" // Reduced margin-bottom
            >
              {isPlaying ? (
                <Pause className="text-white" size={20} />
              ) : (
                <Play className="text-white" size={20} />
              )}
            </div>
            
            {!hideText && (
              <>
                <h3 className="text-white font-semibold text-center text-sm drop-shadow-lg">{name}</h3>
                <p className="text-white/90 text-xs text-center drop-shadow-lg">{description}</p>
              </>
            )}
          </div>
          
          {isPlaying && (
            <div className="ml-2 mb-1"> {/* Added margin-bottom to wave animation */}
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
