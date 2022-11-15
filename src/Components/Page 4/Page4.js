import React from "react";
import "./Page4.css";

const Page4 = () => {
  return (
    <div className="page4-main">
      <div className="page2-banner">
        <div className="banner2-text">
          <h1>PROJET DE REBOISEMENT "NAATAL TOUBA"</h1>
          <p>Accueil - Nos projets - Projet de Reboisement "NAATAL TOUBA"</p>
        </div>
      </div>
      <div className="page4-content">
        <div className="page2-section1">
          <div className="image-section4">
            <img
              src="./images/page41.jpeg"
              alt="rectangle"
              className="page4-image"
            />
          </div>
          <div className="text-section4">
            <img src="./images/border.png" alt="border" />
            <img
              src="./images/mini-border.png"
              alt="mini-border"
              className="mini-border"
            />
            <h1 className="font-weight-bold">OBJECTIF DE LA COLLECTE</h1>
            <h1 className="amount">50 000 000 FCFA</h1>
            <p>
              Après avoir procédé avec la pose de la première pierre de 4
              nouveaux postes de santé il y a deux semaines, l’association Touba
              Ca Kanam vient de piloter la plantation de 700 khayas sur
              l’autoroute Ngabou - Touba sous le ndigël du Khalife Général des
              Mourides et la présence effective de Serigne Abdou Karim Mbacké,
              parrain de la journée de reboisement. Un moment fort auquel a pris
              part le colonel Baïdy Bâ, qui n’a pas manqué de signaler que son
              apport en plante pour Touba ira jusqu’à 3.000 unités. <br />{" "}
              <br /> Le directeur des Eaux et Forêts de préciser que l’activité
              s’inscrit dans le Programme d’aménagement paysager et de
              reverdissement des axes routiers du Sénégal initié par le Chef de
              l’État et dont les jalons sont déjà posés dans plusieurs localités
              du Sénégal...
            </p>
            <p className="page4-mini-text">LIRE LA SUITE...</p>
            <div className="page4-icons">
              <p>PARTAGER :</p>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <div className="page4-section2">
          <img src="./images/border.png" alt="border" />
          <img
            src="./images/mini-border.png"
            alt="mini-border"
            className="mini-border"
          />
          <h1>YONÉ SAMA BARKEELU</h1>
          <h5>ENVOYER MA CONTRIBUTION</h5>
          <div className="page4-cards">
            <div className="page4-Card">
              <div className="card-row">
                <div className="box1">
                  <span className="text-center">Je Donni Une foes</span>
                </div>
                <div className="box2">
                  <span className="text-center">je donne tous les mois</span>
                </div>
              </div>
              <div className="card-row">
                <div className="box3">
                  <span className="text-center">1000 france</span>
                </div>
                <div className="box3 ">
                  <span className="text-center">2000 france</span>
                </div>
              </div>
              <div className="card-row">
                <div className="box3">
                  <span className="text-center">1000 france</span>
                </div>
                <div className="box3 ">
                  <span className="text-center">2000 france</span>
                </div>
              </div>

              <div>
                <span className="productCardSpan">
                  <p></p>
                </span>
              </div>
              <div className="button-div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
