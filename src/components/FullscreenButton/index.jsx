import React from 'react';
import "./style.css";
import { useState } from 'react';

export const FullscreenButton = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleClick = () => {
    if (!fullScreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  const openFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <button onClick={handleClick} className="full-screen-button">
      {!fullScreen ? 'Otevřít na' : 'Zavřít'} plnou obrazovku
    </button>
  );
};



