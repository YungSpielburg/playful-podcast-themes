
import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = (audioFiles: string[]) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(Array(audioFiles.length).fill(null));
  const [audioLoaded, setAudioLoaded] = useState<boolean[]>(Array(audioFiles.length).fill(false));

  // Initialize audio elements
  useEffect(() => {
    // Create and preload audio elements
    audioFiles.forEach((audioFile, index) => {
      const audio = new Audio(audioFile);
      audio.preload = 'auto';
      
      audio.addEventListener('canplaythrough', () => {
        const newLoadedState = [...audioLoaded];
        newLoadedState[index] = true;
        setAudioLoaded(newLoadedState);
      });
      
      audio.addEventListener('ended', () => {
        if (playingIndex === index) {
          setPlayingIndex(null);
        }
      });
      
      audioRefs.current[index] = audio;
    });

    // Cleanup on unmount
    return () => {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);

  const togglePlayPause = (index: number) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) {
      console.error('Audio element not found for index:', index);
      return;
    }

    try {
      if (playingIndex === index) {
        // Pause the currently playing audio
        audioElement.pause();
        setPlayingIndex(null);
        console.log('Paused audio at index:', index);
      } else {
        // Pause any currently playing audio
        if (playingIndex !== null && audioRefs.current[playingIndex]) {
          audioRefs.current[playingIndex]?.pause();
        }
        
        // Play the selected audio
        const playPromise = audioElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio started playing at index:', index);
              setPlayingIndex(index);
            })
            .catch(error => {
              console.error("Error playing audio:", error);
              // Try to play again with user interaction already happened
              if (error.name === 'NotAllowedError') {
                console.log('Audio playback requires user interaction first');
              }
            });
        }
      }
    } catch (error) {
      console.error('Error in togglePlayPause:', error);
    }
  };

  return { playingIndex, togglePlayPause, audioLoaded };
};
