import React from "react";
import { Link, useParams } from "react-router-dom";

const RunningSondage = ({ opinion }) => {
  //let endDate = opinion.endDate.slice(0, 10).split("-").join("/");

  return (
    <div className="runningSurvey">
      <div className="runningSurvey__header">
        <div className="runningSurvey__header--title">
          <p>{opinion.endDate.slice(0, 10)} - en cours</p>
        </div>
        <div className="runningSurvey__header--duration">
          <p> Temps du sondage : {opinion.activeDays} jours</p>
        </div>
      </div>
      <div className="runningSurvey__statistics">
        <div className="box ">
          <div className="box__planning">
            <div className="box__planning--plng">UI du Planning</div>
            <div className="box__planning--detail">
              <Link to={`/sondage/get/${opinion.id}`} className="link">
                Details
              </Link>
            </div>
            <div className="box__planning--modifier">
              <Link to={`/sondage/modify/${opinion.id}`}>Modifier</Link>
            </div>
          </div>

          <div className="box__tage">
            <p className="box__tage--4 box__tage--4 box__tage--arreter">
              Arreter
            </p>
          </div>
        </div>

        {opinion.options.map((option) => {
          return (
            <div className="box " key={option.id}>
              <div className="box__chiffre">{option.count}</div>
              <p className="box__text box__text--2 box__text">
                {option.option}
              </p>

              <div className="box__tage">
                <p
                  className={
                    option.countPercent > 0
                      ? ["box__tage--2 plus"]
                      : ["box__tage--2 minus"]
                  }
                >
                  {option.countPercent > 0
                    ? `+ ${Math.round(option.countPercent)}`
                    : `- ${Math.round(option.countPercent)}`}
                  %
                </p>
              </div>
            </div>
          );
        })}

        <div className="box ">
          <div className="box__chiffre">
            {Math.round(opinion.participation)}%
          </div>

          <d className="box__text--4 box__text">
            <p> participation au sondage</p>
          </d>

          <div className="box__tage">
            <p className="box__tage--4">+22%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningSondage;
