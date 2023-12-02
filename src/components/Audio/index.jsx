import React, { useEffect, useRef } from 'react';
import catChildrenPage from '../../assets/audio/kocka_titulka.mp3'

export const Audio = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Funkce pro přehrání audia
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    // Přehraj audio po načtení stránky
    playAudio();
  }, []); // Zajišťuje, že useEffect se spustí pouze při načtení komponenty

  return (
    <audio ref={audioRef}>
      <source src={catChildrenPage} type="audio/mp3" />
    </audio>
  );
};
