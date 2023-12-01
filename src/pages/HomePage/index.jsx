import './style.css';
import catImg from './img/cat.svg'
import pandaImg from './img/panda.svg'
import tigerImg from './img/tygr.svg'

export const HomePage = () => {
  return (
    <div className="container">
      <main>
        <section className="section section--color-1">
          <div className="home">
            <div className="home__content">
              <h1 className="home__title">Vítejte ve hře</h1>
              <p className="home__text">
                Pomozte dětem lépe zvládat vypjaté emoce
              </p>
            </div>
            <div className="home__flex">
              <a className="button button--secondary" href="#">
                Info o projektu
              </a>
              <a className="button button--primary" href="detska-titulka.html">
                Vstup do hry
              </a>
            </div>
          </div>
          <img
            className="home__img home__img--1"
            src={pandaImg}
            alt="panda"
          />
          <img
            className="home__img home__img--2"
            src={kockaImg}
            alt="kočka"
          />
          <img
            className="home__img home__img--3"
            src={tigerImg}
            alt="tygr"
          />
        </section>
      </main>
    </div>
  );
};
