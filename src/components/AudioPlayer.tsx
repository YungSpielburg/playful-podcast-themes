
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  subtitle?: string;
  audioSrc: string;
  imageSrc?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

const AudioPlayer = ({ 
  title, 
  subtitle, 
  audioSrc, 
  imageSrc, 
  onPlay, 
  onPause 
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPause?.();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      setIsPlaying(true);
      onPlay?.();
    }
  };

  useEffect(() => {
    // Clean up when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="aspect-square rounded-lg bg-gradient-to-br from-coral to-accent shadow-xl overflow-hidden p-px artistic-border">
      <div className="w-full h-full rounded-lg glass-dark overflow-hidden flex flex-col">
        {/* Image container */}
        <div className="relative flex-1 w-full overflow-hidden">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-card to-secondary/80" />
          )}
          
          {/* Overlay with play button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <button
              onClick={togglePlayPause}
              className="w-14 h-14 rounded-full bg-coral flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="text-white" size={20} />
              ) : (
                <Play className="text-white" size={20} />
              )}
            </button>
          </div>
        </div>
        
        {/* Audio info */}
        <div className="p-3 text-center">
          <h3 className="text-white font-medium text-sm">{title}</h3>
          {subtitle && <p className="text-white/70 text-xs">{subtitle}</p>}
          
          {/* Hidden audio element */}
          <audio 
            ref={audioRef}
            src={audioSrc}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />
          
          {/* Audio visualization when playing */}
          {isPlaying && (
            <div className="mt-2">
              <div className="audio-wave mx-auto">
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
