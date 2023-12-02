import './style.css'
import {Link} from 'react-router-dom'
import {FullscreenButton} from '../FullscreenButton'
import imgSwipeBase from './img/posouvatko_zaklad.svg'
import imgSwipeHome from './img/posouvatko_domu.svg'
import imgSwipeInfo from './img/posouvatko_info.svg'
import { useSwipeable } from 'react-swipeable'



export const Navigation = () => {
  const swipeconfig = {preventScrollOnSwipe: false, }
  const handlers1 = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    ...swipeconfig
  });
  const handlers2 = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    ...swipeconfig
  });
	return (
  
		<nav>
			<div className='swipe-button swipe-button--1' {...handlers1}>
				<img className='swipe-button__base' src={imgSwipeBase} alt='ikona posouvátko'></img>
				<Link to={'/'}>
					<img className='swipe-button__home' src={imgSwipeHome} alt='ikona domů'></img>
				</Link>
			</div>

			<FullscreenButton />

			<div className='swipe-button swipe-button--2' {...handlers2}>
				<img className='swipe-button__base' src={imgSwipeBase} alt='ikona posouvátko'></img>
				<Link to={'/info'}>
					<img className='swipe-button__info' src={imgSwipeInfo} alt='ikona info'></img>
				</Link>
			</div>
		</nav>
	)
}
