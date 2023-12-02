import './style.css'
import { Link } from 'react-router-dom'
import { FullscreenButton } from '../FullscreenButton'
import imgSwipeBase from './img/posouvatko_zaklad.svg'
import imgSwipeHome from './img/posouvatko_domu.svg'
import imgSwipeInfo from './img/posouvatko_info.svg'
import { useSwipeable } from 'react-swipeable'
import { useState, useEffect } from 'react'

export const Navigation = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleToggle = () => {
    if (isDesktop)
    {setIsToggled(true)};
    console.log ('handle')
  };

  const handleSwiped = (eventData) => {
    if (!isDesktop) {
      console.log("User Swiped!", eventData);
    }
  };

  const swipeconfig = { preventScrollOnSwipe: false };
  const handlers1 = useSwipeable({
    onSwiped: handleSwiped,
    ...swipeconfig
  });

  const handlers2 = useSwipeable({
    onSwiped: handleSwiped,
    ...swipeconfig
  });

  return (
    <nav>
      <div className={`swipe-button swipe-button--1 ${isToggled ? 'moveLeft' : ''}`} {...handlers1} onClick={handleToggle}>
        <img className='swipe-button__base' src={imgSwipeBase} alt='ikona posouvátko'></img>
        <Link to={'/'}>
          <img className='swipe-button__home' src={imgSwipeHome} alt='ikona domů'></img>
        </Link>
      </div>

      <FullscreenButton />

      <div className={`swipe-button swipe-button--2 ${isToggled ? 'toggled' : ''}`} {...handlers2} onClick={handleToggle}>
        <img className='swipe-button__base' src={imgSwipeBase} alt='ikona posouvátko'></img>
        <Link to={'/info'}>
          <img className='swipe-button__info' src={imgSwipeInfo} alt='ikona info'></img>
        </Link>
      </div>
    </nav>
  );
};
