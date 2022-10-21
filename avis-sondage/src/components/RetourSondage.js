import React from "react";

function RetourSondage() {
  return (
    <section className="section-retour-sondage ">
      <div className="retour-sondage">
        <div className="retour-sondage__up"></div>
        <div className="retour-sondage__center sondage">
          <div className="sondage__header">
            <div className="sondage-title">
              <p className="sondageTitleStyle">Titre du sondage :</p>
              <p className="sondagTxtStyle">
                C'etait super bon mais j'ai tout fini en deux bouchées
              </p>
            </div>
            <div className="sondage-date">
              <p className="sondageTitleStyle">Date du sondage :</p>
              <div className="sondage-date__date">
                <di className="sondage-date__date--1">
                  <p className="dateStyle">Date .../.../ 2022</p>
                </di>
                <div className="sondage-date__date--2">
                  <p className="dateStyle">Date .../.../ 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" sondage-body">
            <div className="sondage-body__contexte">
              <p className="sondageTitleStyle">Contexte du sondage :</p>
              <p className="sondagTxtStyle">
                C'etait super bon mais j'ai tout fini en deux bouchées
              </p>
            </div>
            <div className="option1">
              <p className="sondageTitleStyle">Option 1 :</p>
              <p className="sondagTxtStyle">
                C'etait super bon mais j'ai tout fini en deux bouchées
              </p>
            </div>
            <div className="option2">
              <p className="sondageTitleStyle">Option 2 :</p>
              <p className="sondagTxtStyle">
                C'etait super bon mais j'ai tout fini en deux bouchées
              </p>
            </div>
          </div>
        </div>
        <div className="retour-sondage__down">
          <p className="retour-sondage__down--creer">CRÉER</p>
        </div>
      </div>
    </section>
  );
}

export default RetourSondage;
