
import { useState, useRef, useEffect } from 'react';
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
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Create or update audio element when audioFile changes
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setError(`Could not play audio: ${error.message}`);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioFile]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        setError(null); // Clear previous errors
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setError(`Could not play audio: ${error.message}`);
        });
      }
      onTogglePlay();
    }
  };

  // Log the image and audio file paths for debugging
  useEffect(() => {
    if (image) {
      console.log(`Loading image: ${image}`);
    }
    if (audioFile) {
      console.log(`Loading audio: ${audioFile}`);
    }
  }, [image, audioFile]);

  return (
    <div
      className="aspect-square rounded-lg shadow-xl overflow-hidden p-px border-2 border-sand/30 hover:border-sand/60 transition-all duration-300"
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
          <audio ref={audioRef} src={audioFile} preload="auto" />
          
          <div className="flex flex-col items-start mb-1">
            <div
              onClick={handlePlayPause}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-md bg-black/30 border-2 border-sand/40 hover:border-sand/70 ml-2 mb-1"
            >
              {isPlaying ? (
                <Pause className="text-white" size={16} />
              ) : (
                <Play className="text-white" size={16} />
              )}
            </div>
            
            {!hideText && (
              <>
                <h3 className="text-white font-semibold text-center text-sm drop-shadow-lg">{name}</h3>
                <p className="text-white/90 text-xs text-center drop-shadow-lg">{description}</p>
              </>
            )}
          </div>
          
          {error && (
            <div className="absolute bottom-2 right-2 bg-red-500/80 text-white text-xs p-1 rounded">
              {error}
            </div>
          )}
          
          {isPlaying && !error && (
            <div className="ml-2 mb-1">
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
