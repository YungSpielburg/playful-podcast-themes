
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

type AudioPlayerProps = {
  audioFile: string;
  index: number;
}

const AudioPlayer = ({ audioFile, index }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create the audio element
    const audio = new Audio(audioFile);
    audioRef.current = audio;
    
    // Set up the event listener for when audio ends
    const handleAudioEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleAudioEnded);
    
    // Clean up
    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleAudioEnded);
    };
  }, [audioFile]);
  
  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    
    if (isPlaying) {
      audioElement.pause();
    } else {
      // Publish an event to notify other players to pause
      const event = new CustomEvent('audio-play', { detail: { playingIndex: index } });
      window.dispatchEvent(event);
      
      audioElement.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };
  
  // Listen for play events from other audio players
  useEffect(() => {
    const handleAudioPlay = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail.playingIndex !== index && isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      }
    };
    
    window.addEventListener('audio-play', handleAudioPlay);
    return () => window.removeEventListener('audio-play', handleAudioPlay);
  }, [index, isPlaying]);
  
  return (
    <div 
      onClick={togglePlayPause}
      className={`w-10 h-10 rounded-full ${isPlaying ? 'bg-coral' : 'bg-accent/80'} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-neon`}
    >
      {isPlaying ? (
        <Pause className="text-white" size={18} />
      ) : (
        <Play className="text-white" size={18} />
      )}
    </div>
  );
};

export default AudioPlayer;
