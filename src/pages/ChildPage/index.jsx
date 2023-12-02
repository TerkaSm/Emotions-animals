import './style.css'
import {Navigation} from '../../components/Navigation'
import {Link} from 'react-router-dom'
import imgCat from './img/kocka_uvod.gif'
import imgPanda from './img/panda_uvod.gif'
import imgTiger from './img/tygr_uvod.gif'
import {ANIMALS, STEPS} from '../../constants'
import {Audio} from '../../components/Audio'
import catChildrenPage from '../../assets/audio/kocka_titulka.mp3'
import {config} from './constants'
import {useState} from 'react'
import imgBubbleLeft from './img/bublina-nalevo.svg'
import imgBubbleRight from './img/bublina-napravo.svg'
import imgBed from './img/postylka.png'
import imgCubes from './img/kosticky.png'
import imgSwing from './img/houpacka.png'
import {ANIMALS, STEPS} from '../../constants'

export const ChildPage = () => {
	const [current, setCurrent] = useState(0)

	const onAudioEnded = () => {
		if (current < config.length) setCurrent(current + 1)
	}

	return (
		<main>
			<section className='section-background-baby-home'>
				{config.map(
					({audioSrc, id}, index) =>
						index === current && <Audio key={id} src={audioSrc} onAudioEnded={onAudioEnded} />,
				)}
				<Navigation />

				<Link to={`/zviratko/${ANIMALS.CAT}/${STEPS.INTRO}`}>
					<img className='baby-home__img baby-home__img--1' src={imgCat} alt='kočka'></img>
				</Link>
				<Link to={`/zviratko/${ANIMALS.PANDA}/${STEPS.INTRO}`}>
					<img className='baby-home__img baby-home__img--2' src={imgPanda} alt='panda'></img>
				</Link>
				<Link to={`/zviratko/${ANIMALS.TIGER}/${STEPS.INTRO}`}>
					<img className='baby-home__img baby-home__img--3' src={imgTiger} alt='tygr'></img>
				</Link>
				{config.map(
					({id, bubble, imgAtBubble}, index) =>
						index <= current && (
							<>
								<img key={id} className={bubble.className} src={bubble.src} alt='bubble' />
								<img key={id} className={imgAtBubble.className} src={imgAtBubble.src} alt='' />
							</>
						),
				)}
			</section>
		</main>
	)
}
