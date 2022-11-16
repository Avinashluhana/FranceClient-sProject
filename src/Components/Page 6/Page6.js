import React from "react";
import Footer from "../Footer/Footer";
import "./Page6.css";

const Page6 = () => {
  return (
    <div className="page6-main">
      <div className="page2-banner">
        <div className="banner2-text">
          <h1>NOS PROJETS</h1>
          <p>Accueil - Nos projets</p>
        </div>
      </div>
      <div className="page6-content">
        <div className="page6-section1">
          <div className="borders">
            <img
              src="./images/border.png"
              alt="border"
              className="text-center"
            />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
          </div>
          <h1 className="page6-heading">
            VOUS POUVEZ À TOUT MOMENT NOUS CONTACTER PAR TÉLÉPHONE OU PAR EMAIL
          </h1>
          <p className="text-center">Tél.: +221 33 888 28 28</p>
          <p>221 77 000 00 00 | +221 76 000 00 00 | +221 75 000 00 00</p>
          <p>Email : contact@toubacakanam.sn</p>
        </div>
        <div className="page6-section2">
          <div className="page6-section2-content">
            <h3 className="text-center">
              REMPLISSEZ LE FORMULAIRE POUR NOUS ENVOYER DIRECTEMENT UN MESSAGE
              PAR EMAIL
            </h3>
            <div className="contact-form">
              <div className="contact-row1">
                <input type="text" placeholder="Prénom(s) & Nom*" />
                <input type="email" placeholder="E-mail*" />
              </div>
              <div className="contact-row1">
                <input type="number " placeholder="Téléphone* " />
                <input type="text" placeholder="Objet" />
              </div>
              <div className="textarea">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="page6-textarea"
                />
              </div>
              <div className="page6-button">
                <button className="largeCard-button">
                  Envoyer
                  <img
                    src="./images/arrow.png"
                    alt="arrow"
                    className="largeCard-arrow-image"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="page6-section3">
          <div className="borders">
            <img
              src="./images/border.png"
              alt="border"
              className="text-center"
            />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
          </div>
          <h1 className="section3-heading">CONTRIBUTION</h1>
          <h3>VOUS POUVEZ AUSSI EFFECTUER À TOU MOMENT VOTRE :</h3>
          <div className="page6-button">
            <button className="largeCard-button">
              Barkeelu
              <img
                src="./images/arrow.png"
                alt="arrow"
                className="largeCard-arrow-image"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />    
    </div>
  );
};

export default Page6;
