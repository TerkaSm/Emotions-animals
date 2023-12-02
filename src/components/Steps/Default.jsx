import { FOLW_CONFIG } from "../../constants"
import { Audio } from "../Audio"
import { useNavigate} from 'react-router-dom'

export const DefaultStep = ({animalId, stepId,onAudioEnded}) => {

    const {audio, animation: {src, className}, nextStep} = FOLW_CONFIG[animalId][stepId]

    return (
        <> 
            <Audio src={audio} onAudioEnded={onAudioEnded}/>
            <img className={className} src={src} alt=""/>
        </>
    )
}