import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OptionItem from "./OptionItem";

function PopUp() {
  let { onionId } = useParams();

  const { isLoading, allOpinions } = useSelector((store) => store.opinions);
  let opinion;
  if (allOpinions && allOpinions.length > 0) {
    opinion = allOpinions.find((x) => x.id === 1 * onionId);
    console.log(opinion, "From here1");
  }

  /*  const { title, stisfaction } = opinion; */
  return (
    <section className="popup">
      <div className="popup__content">
        <div className="retour-sondage">
          <div className="retour-sondage__up">
            <Link to="/sondage" className="popup__content--close">
              &times;
            </Link>
          </div>
          <div className="retour-sondage__center sondage">
            <div className="sondage__header">
              <div className="sondage-title">
                <p className="sondageTitleStyle">Titre du sondage :</p>
                <p className="sondagTxtStyle">{opinion.title}</p>
              </div>
              <div className="sondage-date">
                <p className="sondageTitleStyle">Date du sondage :</p>
                <div className="sondage-date__date">
                  <di className="sondage-date__date--1">
                    <p className="dateStyle">
                      Date {opinion.startDate.slice(0, 10)}
                    </p>
                  </di>
                  <div className="sondage-date__date--2">
                    <p className="dateStyle">
                      Date {opinion.endDate.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sondage-body">
              <div className="sondage-body__contexte">
                <p className="sondageTitleStyle">Contexte du sondage :</p>
                <p className="sondagTxtStyle">{opinion.context}</p>
              </div>
              {opinion.options.map((option) => (
                <OptionItem key={option.id} option={option} />
              ))}
            </div>
          </div>
          <div className="retour-sondage__down">
            <p className="retour-sondage__down--creer">CRÉER</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopUp;
