import { useState } from "react"
import { FOLW_CONFIG } from "../../constants"
import { Audio } from "../Audio"
import { useNavigate} from 'react-router-dom'

export const BreathStep = ({animalId, stepId, redirectToNextStep}) => {
	const [audioIndex, setAudioIndex] = useState(0)
    const [showAnimation, setShowAnimation] = useState(false)

    const {audio, img, animation, gifDuration, nextStep} = FOLW_CONFIG[animalId][stepId]

    const startAnimation = () => {
        setShowAnimation(true)
        setTimeout(() => {
            setShowAnimation(false)
            setAudioIndex(audioIndex + 1)
        }, gifDuration)
    }


    const imgProps = showAnimation ? animation : img

    return (
        <> 
            <Audio src={audio[audioIndex]}/>
            <img onClick={startAnimation} {...imgProps}/>
        </>
    )
}