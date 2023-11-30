import './style.css';
import { Link } from 'react-router-dom';

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
            src="img/zvirata/panda/panda_uvod.svg"
            alt="panda"
          />
          <img
            className="home__img home__img--2"
            src="img/zvirata/kocka/kocka_uvod.svg"
            alt="kočka"
          />
          <img
            className="home__img home__img--3"
            src="img/zvirata/tygr/tygr_uvod.svg"
            alt="tygr"
          />
        </section>
      </main>
    </div>
  );
};
