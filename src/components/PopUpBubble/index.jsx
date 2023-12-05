import React from 'react'
import './style.css'
import {useState, useEffect} from 'react'
import PopUpBubblePortraitImg from './img/pop-up_bubble-portrait.svg'
import PopUpBubbleLandscapeImg from './img/pop-up_bubble-landscape.svg'
import {FullscreenButton} from '../FullscreenButton'


export const PopUpBubbleTurnCall = () => {
    const [displayPopup, setDisplayPopup] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setDisplayPopup(window.innerWidth > window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={!displayPopup ? "filter" : "filter hidden"}>
            <div className='popup-bubble'>
                <img className='popup-bubble__img popup-bubble__img--portrait' src={PopUpBubblePortraitImg} alt="vyskakovací okno" />
                <div className='popup-bubble__content'>
                    <p className='popup-bubble__text'>Pro správné fungování aplikace otočte prosím vaše zařízení na šířku</p>
                </div>
            </div>
        </div>
    );
};


export const PopUpBubbleFullscreen = () => {
    const [displayPopup, setDisplayPopup] = useState(false)

    const handleClick = () => {
        setDisplayPopup(!displayPopup)
    }

	return (
		<div className={!displayPopup ? "filter filter--2" : "filter hidden"}>
            <div className='popup-bubble popup-bubble--2'>
                <img className='popup-bubble__img popup-bubble__img--portrait' src={PopUpBubbleLandscapeImg} alt="vyskakovací okno" />
                <div className='popup-bubble__content popup-bubble__content--2'>
                    <p className='popup-bubble__text popup-bubble__text--2'>...a potvrďte otevření na plnou obrazovku</p>
                    <div onClick={handleClick} className='u-wrapp-bottom'>
                        <FullscreenButton />
                    </div>
                </div>
            </div>
        </div>
	)
}