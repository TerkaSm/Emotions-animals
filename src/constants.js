//img cat
import catBreathImg from './assets/img/kocka_nadech.gif'
import catEmotionImg from './assets/img/kocka_strach.gif'
import catIntroImg from './assets/img/kocka_uvod.gif'
import catThinkImg from './assets/img/kocka_zamysleni.gif'
import catEndImg from './assets/img/kocka_zaver.gif'
import catInhaleImgPng from './assets/img/kocka_nadech.png'
// img panda
import pandaBreathImg from './assets/img/panda_nadech.gif'
import pandaEmotionImg from './assets/img/panda_plac.gif'
import pandaIntroImg from './assets/img/panda_uvod.gif'
import pandaThinkImg from './assets/img/panda_zamysleni.gif'
import pandaEndImg from './assets/img/panda_zaver.gif'
import pandaInhaleImgPng from './assets/img/panda_nadech.png'
// img tiger
import tigerBreathImg from './assets/img/tygr_nadech.gif'
import tigerIntroImg from './assets/img/tygr_uvod.gif'
import tigerEmotionImg from './assets/img/tygr_vztek.gif'
import tigerThinkImg from './assets/img/tygr_zamysleni.gif'
import tigerInhaleImgPng from './assets/img/tygr_nadech.png'
// bubbles
import cubesImg from './assets/img/Kostky_vez.png'
import cubesBaseImg from './assets/img/Kostky_zakladna.png'
import slothImg from './assets/img/lenochod.png'
import slothHeadImg from './assets/img/lenochod_bublina.png'
import mumImg from './assets/img/maminka.png'
import bearImg from './assets/img/medvidek.png'
import bedImg from './assets/img/postylka.png'
import bubleLeftImg from './assets/img/bublina-nalevo.svg'
import bubleRightImg from './assets/img/bublina-napravo.svg'
import swingImg from './assets/img/houpacka.png'
import bookImg from './assets/img/knizka.png'
import slideImg from './assets/img/klouzacka.png'

//audio cat
import catSituationAudio from './assets/audio/kocka_emoce.mp3'
import catBreath1Audio from './assets/audio/kocka_nadech_1.mp3'
import catBreath2Audio from './assets/audio/kocka_nadech_2.mp3'
import catBreath3Audio from './assets/audio/kocka_nadech_3.mp3'
import catIntroAudio from './assets/audio/kocka_uvod.mp3'
import catChoicesIntroAudio from './assets/audio/kocka_zamysleni_uvod.mp3'
import catChoices1Audio from './assets/audio/kocka_zamysleni_1.mp3'
import catChoices2Audio from './assets/audio/kocka_zamysleni_2.mp3'
import catChoices3Audio from './assets/audio/kocka_zamysleni_3.mp3'
import catChoicesEndAudio from './assets/audio/kocka_zamysleni_vyber.mp3'
import catResolutionAudio from './assets/audio/kocka_zaver.mp3'

//audio panda
import pandaSituationAudio from './assets/audio/panda_emoce.mp3'
import pandaBreath1Audio from './assets/audio/panda_nadech_1.mp3'
import pandaBreath2Audio from './assets/audio/panda_nadech_2.mp3'
import pandaBreath3Audio from './assets/audio/panda_nadech_3.mp3'
import pandaIntroAudio from './assets/audio/panda_uvod.mp3'
import pandaChoicesIntroAudio from './assets/audio/panda_zamysleni_uvod.mp3'
import pandaChoices1Audio from './assets/audio/panda_zamysleni_1.mp3'
import pandaChoices2Audio from './assets/audio/panda_zamysleni_2.mp3'
import pandaChoices3Audio from './assets/audio/panda_zamysleni_3.mp3'
import pandaChoicesEndAudio from './assets/audio/panda_zamysleni_vyber.mp3'
import pandaResolutionAudio from './assets/audio/panda_zaver.mp3'

//audio tiger
import tigerSituationAudio from './assets/audio/tygr_emoce_vztek.mp3'
import tigerBreath1Audio from './assets/audio/tygr_nadech_1.mp3'
import tigerBreath2Audio from './assets/audio/tygr_nadech_2.mp3'
import tigerBreath3Audio from './assets/audio/tygr_nadech_3.mp3'
import tigerIntroAudio from './assets/audio/tygr_uvod.mp3'
import tigerChoicesIntroAudio from './assets/audio/tygr_zamysleni_uvod.mp3'
import tigerChoices1Audio from './assets/audio/tygr_zamysleni_1.mp3'
import tigerChoices2Audio from './assets/audio/tygr_zamysleni_2.mp3'
import tigerChoices3Audio from './assets/audio/tygr_zamysleni_3.mp3'
import tigerChoicesEndAudio from './assets/audio/tygr_zamysleni_vyber.mp3'
import tigerResolutionAudio from './assets/audio/tygr_zaver.mp3'

import {DefaultStep} from './components/Steps/Default'
import {BreathStep} from './components/Steps/Breath'

export const ANIMALS = {
	CAT: 'cat',
	PANDA: 'panda',
	TIGER: 'tiger',
}

export const STEPS = {
	INTRO: 'intro',
	SITUATION: 'situation',
	BREATH: 'breath',
	CHOICES: 'choices',
	RESOLUTION: 'resolution',
}

export const FOLW_CONFIG = {
	[ANIMALS.CAT]: {
		id: ANIMALS.CAT,
		intro: {
			audio: catIntroAudio,
			animation: {
				src: catIntroImg,
				className: 'img-cat-intro',
			},
			nextStep: STEPS.SITUATION,
		},
		situation: {
			audio: catSituationAudio,
			animation: {
				src: catEmotionImg,
				className: 'img-cat-emotion',
			},
			nextStep: STEPS.BREATH,
		},
		breath: {
			audio: [catBreath1Audio, catBreath2Audio, catBreath3Audio],
			img: {
				src: catInhaleImgPng,
				className: 'img-cat-breath',
			},
			animation: {
				src: catBreathImg,
				className: 'img-cat-breath',
			},
			gifDuration: 3180,
			nextStep: STEPS.CHOICES,
		},
		choices: {
			audios: [catChoicesIntroAudio, catChoices1Audio, catChoices2Audio, catChoices3Audio, catChoicesEndAudio],
			bubbles: [
				{
					bubble: {
						className: 'cat-bubble cat-bubble--left',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'cat-book',
						src: bookImg,
					},
				},
				{
					bubble: {
						className: 'cat-bubble cat-bubble--rotate',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'cat-toy',
						src: bearImg,
					},
				},
				{
					bubble: {
						className: 'cat-bubble cat-bubble--right',
						src: bubleRightImg,
					},
					imgAtBubble: {
						className: 'cat-mum',
						src: mumImg,
					},
				},
			],
			animation: {
				src: catThinkImg,
				className: 'img-cat-think',
			},
			nextStep: STEPS.RESOLUTION,
		},
		resolution: {
			audio: catResolutionAudio,
			animation: {
				src: catEndImg,
				className: 'img-cat-end',
			},
		},
	},
	[ANIMALS.TIGER]: {
		id: ANIMALS.TIGER,
		intro: {
			audio: tigerIntroAudio,
			animation: {
				src: tigerIntroImg,
				className: 'img-tiger-intro',
			},
			nextStep: STEPS.SITUATION,
		},
		situation: {
			audio: tigerSituationAudio,
			animation: {
				src: tigerEmotionImg,
				className: 'img-tiger-emotion',
			},
			nextStep: STEPS.BREATH,
		},
		breath: {
			audio: [tigerBreath1Audio, tigerBreath2Audio, tigerBreath3Audio],
			img: {
				src: tigerInhaleImgPng,
				className: 'img-tiger-breath',
			},
			animation: {
				src: tigerBreathImg,
				className: 'img-tiger-breath',
			},
			gifDuration: 2330,
			nextStep: STEPS.CHOICES,
		},
		choices: {
			audios: [tigerChoicesIntroAudio, tigerChoices1Audio, tigerChoices2Audio, tigerChoices3Audio, tigerChoicesEndAudio],
			bubbles: [
				{
					bubble: {
						className:  'tiger-bubble tiger-bubble--left',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'tiger-cubes',
						src: cubesImg,
					},
				},
				{
					bubble: {
						className: 'tiger-bubble tiger-bubble--rotate',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'tiger-cubes--2',
						src: cubesBaseImg,
					},
				},
				{
					bubble: {
						className: 'tiger-bubble tiger-bubble--right',
						src: bubleRightImg,
					},
					imgAtBubble: {
						className: 'tiger-mum',
						src: mumImg,
					},
				},
			],
			animation: {
				src: tigerThinkImg,
				className: 'img-tiger-think',
			},
			nextStep: STEPS.RESOLUTION,
		},
		resolution: {
			audio: tigerResolutionAudio,
			animation: {
				src: tigerIntroImg,
				className: 'img-tiger-end',
			},
		},
	},
	[ANIMALS.PANDA]: {
		id: ANIMALS.PANDA,
		intro: {
			audio: pandaIntroAudio,
			animation: {
				src: pandaIntroImg,
				className: 'img-panda-intro',
			},
			nextStep: STEPS.SITUATION,
		},
		situation: {
			audio: pandaSituationAudio,
			animation: {
				src: pandaEmotionImg,
				className: 'img-panda-emotion',
			},
			nextStep: STEPS.BREATH,
		},
		breath: {
			audio: [pandaBreath1Audio, pandaBreath2Audio, pandaBreath3Audio],
			img: {
				src: pandaInhaleImgPng,
				className: 'img-panda-breath',
			},
			animation: {
				src: pandaBreathImg,
				className: 'img-panda-breath',
			},
			gifDuration: 2772,
			nextStep: STEPS.CHOICES,
		},
		choices: {
			audios: [pandaChoicesIntroAudio, pandaChoices1Audio, pandaChoices2Audio, pandaChoices3Audio, pandaChoicesEndAudio],
			bubbles: [
				{
					bubble: {
						className:  'panda-bubble panda-bubble--left',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'panda-slide',
						src: slideImg,
					},
				},
				{
					bubble: {
						className: 'panda-bubble panda-bubble--rotate',
						src: bubleLeftImg,
					},
					imgAtBubble: {
						className: 'panda-sloth-head',
						src: slothHeadImg,
					},
				},
				{
					bubble: {
						className: 'panda-bubble panda-bubble--right',
						src: bubleRightImg,
					},
					imgAtBubble: {
						className: 'panda-mum',
						src: mumImg,
					},
				},
			],
			animation: {
				src: pandaThinkImg,
				className: 'img-panda-think',
			},
			nextStep: STEPS.RESOLUTION,
		},
		resolution: {
			audio: pandaResolutionAudio,
			animation: {
				src: pandaEndImg,
				className: 'img-panda-end',
			},
		},
	},
}
