import catChildrenPage from '../../assets/audio/kocka_titulka.mp3'
import pandaChildrenPage from '../../assets/audio/panda_titulka.mp3'
import tigerChildrenPage from '../../assets/audio/tygr_titulka.mp3'
import imgBubbleLeft from '../../assets/img/bublina-nalevo.svg' 
import imgBubbleRight from '../../assets/img/bublina-napravo.svg'
import imgBed from '../../assets/img/postylka.png'
import imgCubes from '../../assets/img/kosticky.png'
import imgSwing from '../../assets/img/houpacka.png'

export const config = [
    {
        audioSrc: catChildrenPage,
        bubble: {
            className: 'baby-home__bubble baby-home__bubble--left',
            src: imgBubbleLeft,
        },
        imgAtBubble: {
            className:'baby-home__bed',
            src: imgBed,
        }
    },
    {
        audioSrc: tigerChildrenPage,
        bubble: {
            className: 'baby-home__bubble baby-home__bubble--rotate',
            src: imgBubbleRight,
        },
        imgAtBubble: {
            className:'baby-home__cubes',
            src: imgCubes,
        }
    },
    {
        audioSrc: pandaChildrenPage,
        bubble: {
            className: 'baby-home__bubble baby-home__bubble--right',
            src: imgBubbleRight,
        },
        imgAtBubble: {
            className:'baby-home__swing',
            src: imgSwing,
        }
    },
]