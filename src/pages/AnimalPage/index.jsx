import {Navigation} from '../../components/Navigation'
import { Intro } from '../../components/Steps/intro'
import { FOLW_CONFIG } from '../../constants'
import './cat.css'
import './panda.css'
import './tiger.css'
import { useParams} from 'react-router-dom'


export const AnimalPage = () => {
	const {animalId, stepId} = useParams()
	// const {back} = FOLW_CONFIG[animalId]

	return (
		<>
		<Navigation />
		<section className={`section-background-${animalId}`} >
			<Intro animalId={animalId} stepId={stepId} />
		</section>
		</>
		)
}
