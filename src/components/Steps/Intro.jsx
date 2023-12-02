import { FOLW_CONFIG } from "../../constants"
import { Audio } from "../Audio"
import { useNavigate} from 'react-router-dom'

export const Intro = ({animalId, stepId}) => {
    const navigateTo = useNavigate()

    const {audio, animation: {src, className}} = FOLW_CONFIG[animalId] [stepId]
    const onAudioEnded = () => navigateTo('/')
    return (
        <> 
            <Audio src={audio} onAudioEnded={onAudioEnded}/>
            <img className={className} src={src} alt=""/>
        </>
    )
}