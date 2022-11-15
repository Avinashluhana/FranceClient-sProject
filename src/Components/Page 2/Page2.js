import React from "react";
import Footer from "../Footer/Footer";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="page2-main">
      <div className="page2-banner">
        <div className="banner2-text">
          <h1>QUI SOMMES-NOUS?</h1>
          <p>Accueil - Qui sommes-nous?</p>
        </div>
      </div>
      <div className="page2-section1">
        <div className="text-section">
          <img src="./images/border.png" alt="border" />
          <img
            src="./images/mini-border.png"
            alt="mini-border"
            className="mini-border"
          />
          <h1 className="font-weight-bold">
            TOUBA CA KANAM est une association apolitique qui investit sa force,
            sa richesse, son intelligence au service de CHEIKH AHMADOU BAMBA
            KHADIM RASSOUL.
          </h1>
          <p>
            Une entité, association à but non lucratif crée en 2017 sous le
            Ndiguel du Khalife General des Mourides Cheikh Sidy Mokhtar MBAKE,
            ayant comme objectif : le développement de la ville sainte de Touba
            selon les principes de son fondateur le vénéré Cheikh Ahmadou Bamba.
            Une vision de la ville sainte déclinée dans son ouvre : Matlabul
            Fawzayni.
          </p>
          <button className="card-button">
            Barkeelu
            <img src="./images/arrow.png" alt="arrow" className="arrow-image" />
          </button>
        </div>
        <div className="image-section">
          <img src="./images/pag2-1.png" alt="rectangle" />
        </div>
      </div>
      <div className="page2-section2">
        <div className="page2-content">
          <div className="border-images">
            <img src="./images/border.png" alt="border" />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
          </div>

          <h1 className="text-center section3-heading font-weight-bold">
            TOUBA CA KANAM EN 4 DATES
          </h1>
          <h3 className="text-center font-weight-bold">LES DEBUTS</h3>
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-dark"
            data-bs-ride="true"
          >
            <div className="carousel-indicators carousel-dark">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active carousel-dark"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="slider-text">
                  <p>
                    Touba Ca Kanam est une association apolitique créée en Août
                    2016 au domicile de Serigne Ndame Atta MBACKE par des
                    disciples « Talibés » mourides avertis, réfléchis et très
                    conscient de la situation socioéconomique défavorable de la
                    ville sainte de Touba. En effet, l’idée originelle est
                    partie d’une émission qui se passait sur un site internet du
                    groupe TOUBA INFOS (dont l’Administrateur se nomme Mr Fallou
                    NDIAYE) à travers laquelle il était traité des thèmes autour
                    de problématiques de développement inhérentes à la cité
                    bénite de Touba. Partant de ce constat, une plateforme de
                    discussions et d’échanges a été mise sur place notamment un
                    groupe WhatsApp pour recueillir les idées et les
                    propositions sur les possibles axes de développement de la
                    ville de Touba. Ainsi, ces débats organisés firent l’objet
                    d’une synthèse consignée dans un document.
                  </p>
                </div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
              </div>
              <button
                className="carousel-control-prev slider-button carousel-dark "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next carousel-dark"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="page2-section3">
        <div className="page2-section3-content">
          <div className="border-images">
            <img src="./images/border.png" alt="border" className="border2" />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
          </div>

          <h1 className="text-center section3-heading">
            MISSIONS & OBJECTIFS DE
          </h1>
          <h1 className="text-center section3-heading">TOUBA CA KANAM</h1>
          <p>
            Notre mission principale est de participer de manière significative
            et inclusive au développement socioéconomique de la ville sainte de
            Touba comme l’avait voulu et écrit sur « Matlabul Fawzaini » par le
            père fondateur de la communauté mouride Cheikh Ahmadou Bamba. A
            travers cette mission, nous avons déterminé un objectif général qui
            est de mobiliser une base de deux millions de mourides, moyennant
            une contribution forfaitaire de 1000F/ mois ce qui fera un nominale
            de deux milliards le mois et vingt-quatre (24) milliards l’année.
            Ainsi, l’atteinte de cet objectif principal nous permettra de
            financer et de réaliser concrètement les projets de « TOUBA CA KANAM
            » dans le domaine de l’éducation, la santé, l’eau, l’assainissement
            et autres secteurs de développement.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page2;
