import React, { useEffect, useRef } from 'react';

export const Audio = ({src,onAudioEnded}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef?.current) {
        audioRef.current.play(true);
      }
    };

    startAudio();
  }, [audioRef?.current]);

  return (
    <audio ref={audioRef} onEnded={onAudioEnded} key={src}>
      <source src={src} type="audio/mp3" />
    </audio>
  );
};
