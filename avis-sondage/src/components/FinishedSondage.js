import React from "react";

const FinishedSondage = () => {
  return (
    <div className="finishedSurvey">
      <div className="finishedSurvey__header">
        <div className="finishedSurvey__header--title">
          <p>20/09/2022 - fini</p>
        </div>
        <div className="finishedSurvey__header--duration">
          <p> Temps du sondage : 8 jours</p>
        </div>
      </div>
      <div className="finishedSurvey__statistics">
        <div className="box ">
          <div className="box__planning">
            <div className="box__planning--plng">UI du Planning</div>
            <div className="box__planning--detail">
              <a href="#sondagePopUP" className="link">
                Details
              </a>
            </div>
            <div className="box__planning--modifier">Modifier</div>
          </div>

          <div className="box__tage">
            <p className="box__tage--4 box__tage--4 box__tage--arreter">
              Arreter
            </p>
          </div>
        </div>
        <div className="box ">
          <div className="box__chiffre">75%</div>

          <d className="box__text--4 box__text">
            <p> demandes de rappel</p>
          </d>

          <div className="box__tage">
            <p className="box__tage--4">+22%</p>
          </div>
        </div>
        <div className="box ">
          <div className="box__chiffre">75%</div>

          <d className="box__text--4 box__text">
            <p> demandes de rappel</p>
          </d>

          <div className="box__tage">
            <p className="box__tage--4">+22%</p>
          </div>
        </div>
        <div className="box ">
          <div className="box__chiffre">75%</div>

          <d className="box__text--4 box__text">
            <p> demandes de rappel</p>
          </d>

          <div className="box__tage">
            <p className="box__tage--4">+22%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedSondage;
