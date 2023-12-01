import './style.css'
import {ButtonPrimary} from '../../components/Button'
import React from 'react'

export const InfoPage = () => {
	return (
		<section className='info'>
			<div className='info__content'>
				<h1 className='info__title'>O projektu</h1>
				<p className='info__text'>
					Jsme tři kodérky, které chtějí změnit svou kariéru a naučit se něco nového. Náš projekt je
					jednoduchá naučná hra pro děti od 2 do 5 let při které je vítaná spolupráce rodičů. Vybraly jsme si
					tři zvířátka, která provedou děti situacemi se kterými se velmi často setkávají. Jedná se o strach,
					vztek a smutek.
				</p>
				<p className='info__text'>
					Kočička se pokusí dítě uklidnit, aby se večer v postýlce nebálo. Tygřík ukáže dítěti jak se
					vypořádat s netrpělivostí u hry s kostičkami. Panda se pokusí najít řešení při hře na hřišti.
					Základem hry je naučit dítě zastavit se, třikrát se v klidu zhluboka nadechnout, zamyslet se jak
					danou situaci vyřešit a vybrat si jedno z možných řešení. Naším záměrem je, aby děti a rodiče pomocí
					zvířátek mohli lépe řešit složitější situace, které se objevují v běžném životě. Byly bychom rády,
					kdyby hra pomohla k prohloubení vztahu mezi rodičem a dítětem. Díky tomu, že hra je připravena
					hlavně pro malé děti, rozhodly jsme se, že ve hře nebudou texty, ale mluvené slovo pro lepší
					pochopení.
				</p>
				<p className='info__text u-padding-bottom'>Doufáme, že si hru užijete.</p>
				<h1 className='info__title'>Jak hra funguje</h1>
				<h2 className='info__title-2'>
					<span className='info__point'>1.</span>
				</h2>
				<p className='info__text'>
					Nechte dítě ťuknutím vybrat jedno zvířátko. Vybrané zvíře provede dítě jednou ze situací:
				</p>
				<ul className='info__list'>
					<li>kočka: strach ze samostatného usínání</li>
					<li>tygr: vztek z nezdaru (spadne mu věž z kostek)</li>
					<li>panda: smutek kvůli obsazené oblíbené houpačce</li>
				</ul>
				<h2 className='info__title-2'>
					<span className='info__point'>2.</span>
				</h2>
				<p className='info__text'>
					Zvířátko uvede situaci a emoci. Dítě bude vyzváno ať zvířátku pomůže s nadechnutím. Přejede prstem
					3x zvířátku po bříšku a tím se zvíře nadechne.
				</p>
				<h2 className='info__title-2'>
					<span className='info__point'>3.</span>
				</h2>
				<p className='info__text'>
					Pak přijde na řadu zamyšlení, jak danou situaci vyřešit. Zazní 3 možnosti a postupně vyskočí
					bublinky. Dítě pomůže zvířátku s výběrem ťuknutím na jednu z bublinek.
				</p>
				<h2 className='info__title-2'>
					<span className='info__point'>4.</span>
				</h2>
				<p className='info__text u-padding-bottom'>
					Následuje řešení a rekapitulace situace (nádech, zamyšlení, vyřešení situace). Zvířátko je
					spokojené, dítě pomohlo situaci vyřešit. Dítě má tedy možnost ve hře vidět, že situaci lze řešit.
				</p>
				<h1 className='info__title'>V čem vám hra pomůže</h1>
				<p className='info__text u-padding-bottom'>
					Až se dítě příště samo do takové situace dostane, můžete mu připomenout, jak ve hře zvířátku
					pomohlo, a zkusit to udělat podobně jako ve hře. Hru je možné si také zahrát po odeznění emocí z
					podobné situace. Kočička může být užitečná přímo před usnutím.
				</p>
				<h1 className='info__title'>Posuvná tlačítka</h1>
				<p className='info__text u-padding-bottom'>
					Najdete je vždy v pravém a levém horním rohu a fungují na posun (swipe) prstem. Dostanou vás na
					domovskou obrazovku (domeček) nebo sem do infa (i).
				</p>

				<ButtonPrimary src={'/'}>Domů</ButtonPrimary>
			</div>
		</section>
	)
}
