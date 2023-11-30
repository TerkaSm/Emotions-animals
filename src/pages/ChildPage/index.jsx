import './style.css';

export const ChildPage = () => {
  return (
    <main>
      <div className="audio-box">
        <audio controls>
          <source src="audio/kocka_titulka.mp3" type="audio/mp3"></source>
        </audio>

        <audio controls>
          <source src="audio/tygr_titulka.mp3" type="audio/mp3"></source>
        </audio>

        <audio controls>
          <source src="audio/panda_titulka.mp3" type="audio/mp3"></source>
        </audio>
      </div>

      <section className="section-background-baby-home">
        <nav>
          <div className="swipe-button swipe-button--1">
            <img
              className="swipe-button__base"
              src="img/posouvatko_zaklad.svg"
              alt=""
            ></img>
            <img
              className="swipe-button__home"
              src="img/posouvatko_domu.svg"
              alt=""
            ></img>
          </div>

          <div className="swipe-button swipe-button--2">
            <img
              className="swipe-button__base"
              src="img/posouvatko_zaklad.svg"
              alt=""
            ></img>
            <img
              className="swipe-button__info"
              src="img/posouvatko_info.svg"
              alt=""
            ></img>
          </div>
        </nav>

        <a href="kocka-uvod.html">
          <img
            className="baby-home__img baby-home__img--1"
            src="img/kocka_uvod.gif"
            alt=""
          ></img>
        </a>
        <a href="panda-uvod.html">
          <img
            className="baby-home__img baby-home__img--2"
            src="img/panda_uvod.gif"
            alt=""
          ></img>
        </a>
        <a href="tygr-uvod.html">
          <img
            className="baby-home__img baby-home__img--3"
            src="img/tygr_uvod.gif"
            alt=""
          ></img>
        </a>
        <img
          className="baby-home__bubble baby-home__bubble--left"
          src="img/bublina-nalevo.svg"
          alt=""
        ></img>
        <img
          className="baby-home__bubble baby-home__bubble--rotate"
          src="img/bublina-napravo.svg"
          alt=""
        ></img>
        <img
          className="baby-home__bubble baby-home__bubble--right"
          src="img/bublina-napravo.svg"
          alt=""
        ></img>
        <img className="baby-home__bed" src="img/postylka.png" alt=""></img>
        <img className="baby-home__cubes" src="img/kosticky.png" alt=""></img>
        <img className="baby-home__swing" src="img/houpacka.png" alt=""></img>
      </section>
    </main>
  );
};
