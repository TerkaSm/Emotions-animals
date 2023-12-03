import {useState} from 'react'
import {FOLW_CONFIG} from '../../constants'
import {Audio} from '../Audio'

export const ChoicesStep = ({animalId, stepId, redirectToNextStep}) => {
	const [current, setCurrent] = useState(0)
	const {
		audios,
		animation: {src, className},
		bubbles,
	} = FOLW_CONFIG[animalId][stepId]

	const onAudioEnded = () => {
		if (current < audios.length - 1) {
			setCurrent(current + 1)
		}
	}
	return (
		<>
			<Audio src={audios[current]} onAudioEnded={onAudioEnded} />
			{current > 0 &&
				bubbles.map(
					({bubble, imgAtBubble}, index) =>
						index < current && (
							<div key={index} onClick={redirectToNextStep}>
								<img className={bubble.className} src={bubble.src} alt='bubble' />
								<img className={imgAtBubble.className} src={imgAtBubble.src} alt='' />
							</div>
						),
				)}
			<img className={className} src={src} alt='' />
		</>
	)
}
