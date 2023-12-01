import './style.css';
import { ButtonPrimary } from '../../components/Button';
import React from 'react';

export const InfoPage = () => {
  return (
    <section className="info">
      <div className="info__content">
        <h1 className="info__title">O projektu</h1>
        <p className="info__text">Jsme tři holky, které se potkaly na kurzu Czechitas proto, aby změnily svou kariéru a naučily se něco nového. Náš projekt je jednoduchá naučná hra pro děti od 2 do 5 let, kdy pro ty nejmenší je potřeba, aby s nimi hrál rodič a vysvětloval dané situace dítěti. Vybraly jsme si tři zvířátka, každé provede dítě jednou vypjatou situací, která je na denním pořádku. Jedná se o tři emoce: strach, vztek a smutek.</p>
        <p className="info__text">Kočička provede dítě jak na usínání, aby se večer nebálo. Tygřík provede dítě hrou s kostičkami a netrpělivostí u hry. Panda provede dítě hrou na dětském hřišti, kdy oblíbená atrakce je obsazená. Základem hry je dítě naučit se zastavit, třikrát se v klidu zhluboka, zamyslet se jak danou situaci vyřešit bez pláče, vybrat si jedno z řešení a to udělat. Naším záměrem je, aby děti a rodič narazili na běžné situace, které přes den řeší a pomocí zvířátek si povídali o tom, jak je možné vyřešit dané problémy v klidu a pohodě. Díky tomu, že hra je připravena hlavně pro malé děti, rozhodly jsme se, že texty ve hře budou nahrané pomocí audia pro lepší lepší pochopení dané problematiky.</p>
        <p className="info__text u-padding-bottom">Doufáme, že si hru užijete a využijete v běžném životě.</p>
        <h1 className="info__title">Jak hra funguje</h1>
        <h2 className="info__title-2"><span className="info__point">1.</span></h2>
        <p className="info__text">Nechte dítě ťuknutím vybrat jedno zvířátko. Vybrané zvíře provede dítě jednou ze situací:</p>
        <ul className="info__list">
          <li>kočka: strach ze samostatného usínání</li>
          <li>tygr: vztek z nezdaru (spadne mu věž z kostek)</li>
          <li>panda: smutek kvůli obsazené oblíbené houpačce</li>
        </ul>
        <h2 className="info__title-2"><span className="info__point">2.</span></h2>
        <p className="info__text">Zvířátko uvede situaci a emoci. Dítě bude vyzváno ať zvířátku pomůže s nadechnutím. Přejede prstem 3x zvířátku po bříšku a tím se zvíře nadechne.</p>
        <h2 className="info__title-2"><span className="info__point">3.</span></h2>
        <p className="info__text">Pak přijde na řadu zamyšlení, jak danou situaci vyřešit. Zazní 3 možnosti a postupně vyskočí bublinky. Dítě pomůže zvířátku s výběrem ťuknutím na jednu z bublinek.</p>
        <h2 className="info__title-2"><span className="info__point">4.</span></h2>
        <p className="info__text u-padding-bottom">Následuje řešení a rekapitulace situace (nádech, zamyšlení, vyřešení situace). Zvířátko je spokojené, dítě pomohlo situaci vyřešit. Dítě má tedy možnost ve hře vidět, že situaci lze řešit.</p>
        <h1 className="info__title">V čem vám hra pomůže</h1>
        <p className="info__text u-padding-bottom">Až se dítě příště samo do takové situace dostane, můžete mu připomenout, jak ve hře zvířátku pomohlo, a zkusit to udělat podobně jako ve hře. Hru je možné si také zahrát po odeznění emocí z podobné situace. Kočička může být užitečná přímo před usnutím.</p>
        <h1 className="info__title">Posuvná tlačítka</h1>
        <p className="info__text u-padding-bottom">Najdete je vždy v pravém a levém horním rohu a fungují na posun (swipe) prstem. Dostanou vás na domovskou obrazovku (domeček) nebo sem do infa (i).</p>

        <ButtonPrimary src={"/"}>
          Domů
        </ButtonPrimary>

      </div>
    </section>
  );
};

