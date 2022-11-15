import React from "react";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import Cards from "../Layouts/Cards";
import Slider from "../Layouts/Slider";
import PeopleCard from "../PeopleCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="section-2">
        <img src="./images/border.png" alt="border" />
        <img
          src="./images/mini-border.png"
          alt="mini-border"
          className="mini-border"
        />
        <h1>TOUBA CA KANAM EN CHIFFRE</h1>

        <div className="section2-content">
          <div className="people">
            <img src="./images/people.png" alt="peoples" />
            <h4>+1000</h4>
            <h3>MEMBRES ACTIFS</h3>
          </div>

          <div className="building">
            <img src="./images/buildings.png" alt="building" />
            <h4>+1000</h4>
            <h3>MEMBRES ACTIFS</h3>
          </div>
          <div className="people">
            <img src="./images/people.png" alt="peoples" />
            <h4>+1000</h4>
            <h3>MEMBRES ACTIFS</h3>
          </div>
          <div className="building">
            <img src="./images/buildings.png" alt="building" />
            <h4>+1000</h4>
            <h3>MEMBRES ACTIFS</h3>
          </div>
        </div>
        <div className="button-center">
          <button className="section2-button">
            Barkeelu
            <img src="./images/arrow.png" alt="arrow" className="arrow" />
          </button>
        </div>
      </div>
      <div className="section-3">
        <div className="section3-content">
          <img src="./images/border.png" alt="border" />
          <img
            src="./images/mini-border.png"
            alt="mini-border"
            className="mini-border"
          />

          <h1 className="section3-heading">PROJET EN COURS</h1>
          <h2>LAAJ LUÑU MAN, DEF KO FU ÑU XAM</h2>
          <h2>SOUTENIR ET SUIVRE L’ÉVOLUTION DES PROJETS</h2>
          <h2>DE TOUBA CA KANAM</h2>
          <div className="cards">
            <Cards
              image="./images/card1.jpeg"
              text1="ENVIRONNEMENT"
              text2="PROJET DE REBOISEMENT NAATAL TOUBA"
            />
            <Cards
              image="./images/pssahm.jpeg"
              text1="ENVIRONNEMENT"
              text2="JET DE REBOISEMENTNAATAL TOUBA"
            />
            <Cards
              image="./images/pssahm.jpeg"
              text1="ENVIRONNEMENT"
              text2="JET DE REBOISEMENTNAATAL TOUBA"
            />
          </div>
        </div>
      </div>

      <div className="section-4">
        <div className="section4-content">
          <img src="./images/border.png" alt="border" />
          <img
            src="./images/mini-border.png"
            alt="mini-border"
            className="mini-border"
          />
          <h1 className="section3-heading">PROJET EN COURS</h1>
          <h2>LAAJ LUÑU MAN, DEF KO FU ÑU XAM</h2>
          <h2>SOUTENIR ET SUIVRE L’ÉVOLUTION DES PROJETS</h2>
          <h2>DE TOUBA CA KANAM</h2>
          <div className="cards">
            <Cards
              image="./images/card-building.png"
              text1="
              14 OCTOBRE 2022 | INFRASTRUCTURE"
              text2="FIN DES TRAVAUX DE
              CONSTRUCTION DU COMPLEXE
              CHEIKH AHMADOUL KHADIM
              À TOUBA..."
            />
            <Cards
              image="./images/crane-image.png"
              text1="
              14 OCTOBRE 2022 | INFRASTRUCTURE"
              text2="TOUBA CA KANAM DÉMARRE
            UN AUTRE DES SES ACTIVITÉS
            AVEC L’OPERATION DEFA
            YONE YI..."
            />
            <Cards
              image="./images/peope-card.png"
              text1="14 OCTOBRE 2022 | ENVIRONNEMENT"
              text2="NAATAL TOUBA, OPÉRATION
            DE REBOISEMENT EN ETROITE
            COLLABORATION AVEC LES
            EAUX ET DORETS..."
            />
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="section5-content">
          <div className="section5-image">
            <img src="./images/logo-white.png" alt="logo" />
          </div>
          <div className="section5-text">
            <img src="./images/border.png" alt="border" />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
            <h1>MBOOLO, MOOY DOOLE.</h1>
            <p>
              TOUBA CA KANAM est une association apolitique qui investit sa
              force, sa richesse,son intelligence au service de CHEIKH AHMADOU
              BAMBA KHADIM RASSOUL.
            </p>
            <p className="section5-p">
              Lu mata faggu fagul na nu ko (Sëriñ bi), te juboo na ci ak
              Boroomam ; lu mata ñaan ñaanal na ñu ko, te Boromam nangul na ko
              ko. Kon legeeyël Sëriñ bi rek a fi nekk
            </p>
          </div>
        </div>
      </div>
      <div className="section-6">
        <div className="section-content">
          <h1>L’ÉQUIPE TOUBA CA KANAM</h1>

          <div className="cards">
            <PeopleCard
              image="./images/people0.png"
              text1="S. ABDOU LAHAD H. MBACKÉE"
              text2="RESPONSABLE MORAL 2
              DE TOUBA CA KANAM"
            />
            <PeopleCard
              image="./images/people1.jpeg"
              text1="S. ABDOU FATAH GUEYE"
              text2="PRÉSIDENT
              TOUBA CA KANAM"
            />
            <PeopleCard
              image="./images/people2.jpeg"
              text1="MOR SOURANG"
              text2="DEUXIÈME ADJOINT AU
              SECRÉTAIRE GÉNÉRAL"
            />
            <PeopleCard
              image="./images/people3.jpeg"
              text1="MODOU BOUSSO BA"
              text2="TRÉSORIER GÉNÉRAL
              TOUBA CA KANAM"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
