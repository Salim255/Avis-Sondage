import React from "react";
import { Link } from "react-router-dom";

const ProgrammedSondage = () => {
  return (
    <div className="programmedSurvey">
      <div className="programmedSurvey__header">
        <div className="programmedSurvey__header--title">
          <p>13/20/2021 - programmé</p>
        </div>
        <div className="programmedSurvey__header--duration">
          <p> Temps du sondage : 8 jours</p>
        </div>
      </div>
      <div className="programmedSurvey__statistics">
        <div className="box ">
          <div className="box__planning">
            <div className="box__planning--plng">UI du Planning</div>
            <div className="box__planning--detail">
              <Link to="/sondage" className="link">
                Details
              </Link>
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
            <p>demandes de rappel</p>
          </d>

          <div className="box__tage">
            <p className="box__tage--4">+22%</p>
          </div>
        </div>
        <div className="box ">
          <div className="box__chiffre">1212</div>
          <p className="box__text box__text--2 box__text">notes</p>

          <div className="box__tage">
            <p className="box__tage--2">-12%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammedSondage;
