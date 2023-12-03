import {Navigation} from '../../components/Navigation'
import { BreathStep } from '../../components/Steps/Breath'
import { DefaultStep } from '../../components/Steps/Default'
import { FOLW_CONFIG, STEPS } from '../../constants'
import './cat.css'
import './panda.css'
import './tiger.css'
import { useParams, useNavigate} from 'react-router-dom'


export const AnimalPage = () => {
	const {animalId, stepId} = useParams()
	const navigateTo = useNavigate()
    const {audio, animation: {src, className}, nextStep} = FOLW_CONFIG[animalId] [stepId]

	// const {back} = FOLW_CONFIG[animalId]
    const redirectToNextStep = () => navigateTo(`/zviratko/${animalId}/${nextStep}`)

	const props = { animalId, stepId, redirectToNextStep}

	return (
		<>
		<Navigation />
		<section className={`section-background-${animalId}`} >
			{stepId === STEPS.BREATH ? <BreathStep {...props}/> : <DefaultStep {...props} />}
		</section>
		</>
		)
}