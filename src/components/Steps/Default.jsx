import { FOLW_CONFIG } from "../../constants"
import { Audio } from "../Audio"
import { useNavigate} from 'react-router-dom'

export const DefaultStep = ({animalId, stepId,redirectToNextStep}) => {

    const {audio, animation: {src, className}, nextStep} = FOLW_CONFIG[animalId][stepId]

    return (
        <> 
            <Audio src={audio} onAudioEnded={redirectToNextStep}/>
            <img className={className} src={src} alt=""/>
        </>
    )
}