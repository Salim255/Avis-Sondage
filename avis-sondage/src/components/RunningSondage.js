import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  handleChange,
  deleteSurvey,
  setEditSurvey,
} from "../features/survey/createSurveySlice";
import { useSelector, useDispatch } from "react-redux";
import { AddSurvey } from "./AddSurvey";

const RunningSondage = ({ opinion }) => {
  //let endDate = opinion.endDate.slice(0, 10).split("-").join("/");
  const [modal, setModal] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const [clickedId, setClickedId] = useState();
  const [detailsbtn, setDetailsbtn] = useState(false);

  //const refDetails = useRef(null);
  const toggleModal = (e) => {
    // dispatch(setEditSurvey({ id: id, option: option, image: "image" }));
    setModal(!modal);
    //const  value1 = refModifer.current.focus;
    setBtnState("Modfier");
    // detailsbtn.current.styles.color = "red";
    /*  if (value2.innerHTML === "Details") {
      console.log("====================================");
      console.log(value2.innerHTML, "detals");
      console.log("====================================");
      setBtnState(!btnState);
      console.log(value2.innerHTML, "detals", btnState);
    } */

    setClickedId(opinion.id);
    dispatch(
      setEditSurvey({
        editSurveyId: opinion.id,
        title: opinion.title,
        context: opinion.context,
        startDate: opinion.startDate,
        endDate: opinion.endDate,
        surveyOptions: opinion.options,
      })
    );
  };

  const toggleModalDetails = (e) => {
    // dispatch(setEditSurvey({ id: id, option: option, image: "image" }));
    setModal(!modal);
    //const value1 = refModifer.current.focus;
    setDetailsbtn(!detailsbtn);
    setBtnState("Details");
    console.log("====================================");
    //console.log(detailsbtn.current, "Hello");
    // detailsbtn.current.styles.color = "red";
    /*  if (value2.innerHTML === "Details") {
      console.log("====================================");
      console.log(value2.innerHTML, "detals");
      console.log("====================================");
      setBtnState(!btnState);
      console.log(value2.innerHTML, "detals", btnState);
    } */

    setClickedId(opinion.id);
    dispatch(
      setEditSurvey({
        editSurveyId: opinion.id,
        title: opinion.title,
        context: opinion.context,
        startDate: opinion.startDate,
        endDate: opinion.endDate,
        surveyOptions: opinion.options,
      })
    );
  };

  const dispatch = useDispatch();
  return (
    <>
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
              <div className="box__planning--plng">{opinion.title}</div>
              <div className="box__planning--detail">
                {/*  <Link to={`/sondage/get/${opinion.id}`} className="link">
                Details
              </Link> */}
                <div onClick={() => toggleModalDetails()}>Details</div>
              </div>
              <div className="box__planning--modifier">
                {/*   <Link
                  to={`/sondage/get/${opinion.id}`}
                  onClick={() => {
                    dispatch(
                      setEditSurvey({
                        editSurveyId: opinion.id,
                        title: opinion.title,
                        context: opinion.context,
                        startDate: opinion.startDate,
                        endDate: opinion.endDate,
                        surveyOptions: opinion.options,
                      })
                    );
                  }}
                >
                  Modifier
                </Link> */}
                <div onClick={(e) => toggleModal()}>Modifier</div>
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
      {modal && (
        <AddSurvey
          toggleModal={toggleModal}
          setModall={setModal}
          modall={modal}
          btnState={btnState}
          setBtnState={setBtnState}
          idd={clickedId}
          toggleModalDetails={toggleModalDetails}
          setDetailsbtn={setDetailsbtn}
          detailsbtn={detailsbtn}
        />
      )}
    </>
  );
};

export default RunningSondage;
