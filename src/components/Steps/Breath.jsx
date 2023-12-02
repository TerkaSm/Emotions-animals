import { useState } from "react"
import { FOLW_CONFIG } from "../../constants"
import { Audio } from "../Audio"
import { useNavigate} from 'react-router-dom'

export const BreathStep = ({animalId, stepId,onAudioEnded}) => {
	const [audioIndex, setAudioIndex] = useState(0)

    const {audio, animation: {src, className}, nextStep} = FOLW_CONFIG[animalId] [stepId]

    return (
        <> 
            <Audio src={audio[audioIndex]} onAudioEnded={onAudioEnded}/>
            <img className={className} src={src} alt=""/>
        </>
    )
}