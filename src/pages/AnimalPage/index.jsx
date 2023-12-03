import {Navigation} from '../../components/Navigation'
import {BreathStep} from '../../components/Steps/Breath'
import {DefaultStep} from '../../components/Steps/Default'
import {FOLW_CONFIG, STEPS} from '../../constants'
import './cat.css'
import './panda.css'
import './tiger.css'
import {useParams, useNavigate} from 'react-router-dom'
import {ChoicesStep} from '../../components/Steps/Choices'

export const AnimalPage = () => {
	const {animalId, stepId} = useParams()
	const navigateTo = useNavigate()
	const {
		audio,
		animation: {src, className},
		nextStep,
	} = FOLW_CONFIG[animalId][stepId]

	const redirectToNextStep = () =>
		navigateTo(
			stepId === STEPS.RESOLUTION
				? '/'
				: `/zviratko/${animalId}/${nextStep}`,
		)

	const props = {animalId, stepId, redirectToNextStep}

	const getComponent = () => {
		switch (stepId) {
			case STEPS.BREATH:
				return <BreathStep {...props} />
			case STEPS.CHOICES:
				return <ChoicesStep {...props} />
			default:
				return <DefaultStep {...props} />
		}
	}

	return (
		<>
			<Navigation />
			<section className={`section-background-${animalId}`}>
				{getComponent()}
			</section>
		</>
	)
}
