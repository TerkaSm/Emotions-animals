import {Navigation} from '../../components/Navigation'
import { FOLW_CONFIG } from '../../constants'
import './cat.css'
import './panda.css'
import './tiger.css'
import { useParams, useNavigate} from 'react-router-dom'


export const AnimalPage = () => {
	const {animalId, stepId} = useParams()
	const navigateTo = useNavigate()
    const {audio, animation: {src, className}, nextStep, renderStep} = FOLW_CONFIG[animalId] [stepId]

	// const {back} = FOLW_CONFIG[animalId]
    const onAudioEnded = () => navigateTo(`/zviratko/${animalId}/${nextStep}`)

	return (
		<>
		<Navigation />
		<section className={`section-background-${animalId}`} >
			{renderStep({animalId, stepId, onAudioEnded})}
		</section>
		</>
		)
}
