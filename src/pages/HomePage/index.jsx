import './style.css'
import catImg from './img/kocka_home.svg'
import pandaImg from './img/panda_home.svg'
import tigerImg from './img/tygr_home.svg'
import {ButtonPrimary, ButtonSecondary} from '../../components/Button'
import { Audio } from '../../components/Audio'
import { PopUpBubblePortrait } from '../../components/PopUpBubble'
import { PopUpBubbleLandscape } from '../../components/PopUpBubble'

export const HomePage = () => {
	return (
		<div className='container'>
			<Audio />
			<PopUpBubblePortrait />
			{/* <PopUpBubbleLandscape /> */}
			<main>
				<section className='section section--color-1'>
					<div className='home'>
						<div className='home__content'>
							<h1 className='home__title'>Vítejte ve hře</h1>
							<p className='home__text'>Pomozte dětem lépe zvládat vypjaté emoce</p>
						</div>
						<div className='home__flex'>
							<ButtonSecondary src={'/info'}>Info o projektu</ButtonSecondary>
							<ButtonPrimary src={'/hra'}>Vstup do hry</ButtonPrimary>
						</div>
					</div>
					<img className='home__img home__img--1' src={pandaImg} alt='panda' />
					<img className='home__img home__img--2' src={catImg} alt='kočka' />
					<img className='home__img home__img--3' src={tigerImg} alt='tygr' />
				</section>
			</main>
		</div>
	)
}
