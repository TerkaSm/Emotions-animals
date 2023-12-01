import './style.css'
import {Navigation} from '../../components/Navigation'
import {Link} from 'react-router-dom'
import imgCat from './img/kocka_uvod.gif'
import imgPanda from './img/panda_uvod.gif'
import imgTiger from './img/tygr_uvod.gif'
import imgBubbleLeft from './img/bublina-nalevo.svg'
import imgBubbleRight from './img/bublina-napravo.svg'
import imgBed from './img/postylka.png'
import imgCubes from './img/kosticky.png'
import imgSwing from './img/houpacka.png'

export const ChildPage = () => {
	return (
		<main>
			<section className='section-background-baby-home'>
				<Navigation />

				<Link to='/zviratko'>
					<img className='baby-home__img baby-home__img--1' src={imgCat} alt='kočka'></img>
				</Link>
				<Link to='/zviratko'>
					<img className='baby-home__img baby-home__img--2' src={imgPanda} alt='panda'></img>
				</Link>
				<Link to='/zviratko'>
					<img className='baby-home__img baby-home__img--3' src={imgTiger} alt='tygr'></img>
				</Link>
				<img className='baby-home__bubble baby-home__bubble--left' src={imgBubbleLeft} alt='bublina' />
				<img className='baby-home__bubble baby-home__bubble--rotate' src={imgBubbleRight} alt='bublina' />
				<img className='baby-home__bubble baby-home__bubble--right' src={imgBubbleRight} alt='bublina' />
				<img className='baby-home__bed' src={imgBed} alt='postýlka' />
				<img className='baby-home__cubes' src={imgCubes} alt='kostičky' />
				<img className='baby-home__swing' src={imgSwing} alt='houpačka' />
			</section>
		</main>
	)
}
