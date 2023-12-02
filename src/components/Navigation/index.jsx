import './style.css'
import {FullscreenButton} from '../FullscreenButton'
import imgSwipeBase from './img/posouvatko_zaklad.svg'
import imgSwipeHome from './img/posouvatko_domu.svg'
import imgSwipeInfo from './img/posouvatko_info.svg'
import {useSwipeable} from 'react-swipeable'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'



export const Navigation = () => {
	const navigate = useNavigate()
	const [isToggled, setIsToggled] = useState({
    home: false,
    info: false
  })
	const IsTouchScreen = (( 'ontouchstart' in window ) || 
  ( navigator.maxTouchPoints > 0 ) || 
  ( navigator.msMaxTouchPoints > 0 ))


	// useEffect(() => {
  //   setIsTouchScreen()
	// 	// const handleResize = () => {
	// 	// 	setIsDesktop(window.innerWidth > 935)
	// 	// }
	// 	// if (typeof window !== 'undefined') {
	// 	// 	window.addEventListener('resize', handleResize)
	// 	// 	return () => {
	// 	// 		window.removeEventListener('resize', handleResize)
	// 	// 	}
	// 	// }
	// }, [])


	const handleEvent = (url) => {
		setIsToggled({
      home: url === '/',
      info: url === '/info'
    })
		setTimeout(() => {
			navigate(url)
		}, 350)
	}
	const handleToggle = (url) => {
		if (IsTouchScreen) {
			handleEvent(url)
		}
	}
	const handleSwiped = (url) => {
		if (!IsTouchScreen) {
			handleEvent(url)
		}
	}
	const swipeconfig = {preventScrollOnSwipe: false}
	const handlers1 = useSwipeable({
		onSwiped: () => handleSwiped('/'),
		...swipeconfig,
	})
	const handlers2 = useSwipeable({
		onSwiped: () => handleSwiped('/info'),
		...swipeconfig,
	})
  
	return (
		<nav>
			<div className='swipe-button swipe-button--1' {...handlers1} onClick={() => handleToggle('/')}>
				<img className='swipe-button__base' src={imgSwipeBase} alt='ikona posouvátko'></img>
				<img
					className={`swipe-button__home ${isToggled.home ? 'moveLeft' : ''}`}
					src={imgSwipeHome}
					alt='ikona domů'
				></img>
			</div>

			<FullscreenButton />
			<div className='swipe-button swipe-button--2' {...handlers2} onClick={() => handleToggle('/info')}>
				<img
					className='swipe-button__base'
					src={imgSwipeBase}
					alt='ikona posouvátko'
				></img>
				<img className={`swipe-button__info ${isToggled.info ? 'moveRight' : ''}`}
        src={imgSwipeInfo} alt='ikona info'></img>
			</div>
		</nav>
	)
}
