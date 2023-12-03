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
        if (audioIndex < 2) setAudioIndex(audioIndex + 1)
        setAudioIndex(audioIndex + 1)
        setTimeout(() => {
            setShowAnimation(false)
            if (audioIndex === 2) redirectToNextStep()
        }, gifDuration)
    }

    const imgProps = showAnimation ? animation : img

    return (
        <> 
            {!showAnimation && <Audio src={audio[audioIndex]}/>}
            <img onClick={startAnimation} {...imgProps}/>
        </>
    )
}