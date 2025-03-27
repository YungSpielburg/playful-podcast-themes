
import React from 'react';

const AudioWave: React.FC = () => {
  return (
    <div className="audio-wave">
      <div className="audio-wave-bar h-4 animate-wave-1"></div>
      <div className="audio-wave-bar h-5 animate-wave-2"></div>
      <div className="audio-wave-bar h-3 animate-wave-3"></div>
      <div className="audio-wave-bar h-6 animate-wave-4"></div>
      <div className="audio-wave-bar h-2 animate-wave-5"></div>
    </div>
  );
};

export default AudioWave;
