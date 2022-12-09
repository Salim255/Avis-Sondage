import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import FormRow from "./FormRow";
import { DatePicker } from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { createSurvey, editSurvey } from "../features/survey/createSurveySlice";
import { getAllOpinions } from "../features/survey/opinionSlice";
import imge from "../img/user.jpeg";
import {
  handleChange,
  handleOptionChange,
  deleteSurvey,
  setEditSurvey,
  deleteOption,
  toggleModalDetails,
} from "../features/survey/createSurveySlice";
import ModfiyOption from "./ModfiyOption";
import CreateSondageQuestionsAndOptions from "./CreateSondageQuestionsAndOptions";

export const AddSurvey = ({
  setModall,
  modall,
  idd,
  btnState,
  setBtnState,
  detailsbtn,
  setDetailsbtn,
}) => {
  const {
    isLoading,
    context,
    title,
    startDate,
    endDate,
    status,
    image,
    option,
    isEditing,
    surveyOptions,
    editSurveyId,
    createdSurvey,
  } = useSelector((store) => store.createdSurvey);
  const dispatch = useDispatch();
  /* console.log(useParams(), "nini");
  const { opinonId } = useParams(); */
  const opinonId = idd;
  const [modal, setModal] = useState(false);
  const [addOtionModal, setAddOptionModal] = useState(false);
  const [modifierOption, setModifierOption] = useState(false);
  //const refUse = useRef(null);
  console.log("====================================");
  console.log(createdSurvey);
  console.log("====================================");
  const toggleModal = (id, option, image) => {
    dispatch(setEditSurvey({ id: id, option: option, image: "image" }));
    setModal(!modal);
    //setModifierOption(!modifierOption);
  };

  const toggleAddOptionModal = () => {
    //dispatch(setEditSurvey({ id: id, option: option, image: "image" }));
    setAddOptionModal(!addOtionModal);
  };
  console.log("====================================");
  console.log("non", btnState, modall);
  console.log("====================================");
  const handleFermer = () => {
    setModall(!modall);
    setBtnState("");
  };
  console.log("====================================");
  console.log("non", btnState, modall);
  console.log("====================================");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !context || !startDate || !endDate) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    if (isEditing) {
      dispatch(
        editSurvey({
          surveyId: editSurveyId,
          survey: { title, context, startDate, endDate },
        })
      );
      setModall(!modall);
      return;
    }

    dispatch(createSurvey({ title, context, startDate, endDate }));
    dispatch(getAllOpinions());
  };

  const handleSurveyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch(handleChange({ name, value }));
  };
  return (
    <>
      <section className="overlay ">
        <div className="create-survey ">
          <div className="create-survey__header">
            <h1 className="create-survey__header--title">
              {btnState === "Details"
                ? "Details"
                : isEditing
                ? "Modifier Sondage"
                : "CRÉER SONDAGE"}
            </h1>
            <p
              onClick={() => setModall(!modall)}
              className="create-survey__header--close"
            >
              x
            </p>
          </div>
          <div className="scroll-sondage ">
            <div className="retour-sondage">
              <form className="form  retour-sondage__center">
                <div className="form__center">
                  <div>
                    {/* Survey Title */}
                    <FormRow
                      type="text"
                      name="title"
                      value={title}
                      handleChange={handleSurveyInput}
                      labelText="Titre Du sondage"
                    />
                    <div className="  retour-sondage__up">
                      <h4 className="retour-sondage__up--header">
                        Data du Sondage
                      </h4>
                      <div className="retour-sondage__up--date">
                        <div>
                          Debut Du Sondage
                          <DatePicker
                            className="subdate__date--input "
                            onChange={(date) => {
                              const value = moment(date).format("YYYY-MM-DD");
                              const name = "startDate";
                              dispatch(handleChange({ name, value }));
                            }}
                            placeholder={startDate}
                          />
                        </div>

                        <div>
                          Fin Du Sondage
                          <DatePicker
                            onChange={(date) => {
                              const value = moment(date).format("YYYY-MM-DD");
                              const name = "endDate";
                              dispatch(handleChange({ name, value }));
                            }}
                            className="datePicker date"
                            placeholder={endDate}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Survey Context */}
                    <FormRow
                      type="text"
                      name="context"
                      value={context}
                      handleChange={handleSurveyInput}
                      labelText="Contexte Du Sondage"
                    />

                    {surveyOptions.map((ops) => {
                      return (
                        <>
                          <div className="optionContainer">
                            <div key={ops.id} className="optionItem">
                              <div className="optionItem__title">
                                Option {ops.id} :
                                <div className=" optionItem__img">
                                  {ops.image ? (
                                    <img src={imge} alt="image" />
                                  ) : (
                                    <img
                                      src={imge}
                                      className="optionItem__img--img"
                                      alt="Option-img"
                                    />
                                  )}
                                </div>
                                <textarea
                                  className="optionItem__text"
                                  value={ops.option}
                                />
                                {btnState !== "Details" && (
                                  <div
                                    onClick={() => {
                                      toggleModal(
                                        ops.id,
                                        ops.option,
                                        ops.image
                                      );
                                    }}
                                    className=" optionItem__btn--submit optionItem__btn"
                                  >
                                    modifier
                                  </div>
                                )}
                                {btnState !== "Details" && (
                                  <div
                                    onClick={() =>
                                      dispatch(deleteOption(ops.id))
                                    }
                                    className=" optionItem__btn--delete optionItem__btn"
                                  >
                                    supprimer
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          {modal && (
                            <ModfiyOption
                              toggleModal={toggleModal}
                              handleChange={handleSurveyInput}
                              modal={modal}
                              {...ops}
                            />
                          )}
                        </>
                      );
                    })}
                    {btnState === "Details" ? (
                      ""
                    ) : (
                      <div
                        onClick={toggleAddOptionModal}
                        className=" optionItem__btn--add optionItem__btn"
                      >
                        Créer option
                      </div>
                    )}
                    {addOtionModal && (
                      <CreateSondageQuestionsAndOptions
                        toggleModal={toggleAddOptionModal}
                        handleChange={handleSurveyInput}
                        opinonId={opinonId}
                        btnState={btnState}
                        //modal={modal}
                      />
                    )}
                  </div>
                </div>
              </form>
              <div className="btn-container  retour-sondage__down"></div>
            </div>
          </div>
          <div className="retour-sondage__down--btns btn-flex">
            {btnState === "Details" ? (
              <button
                type="button"
                className="btn btn__submit  btn-flex__submit"
                onClick={handleFermer}
              >
                fermer
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn__submit btn__submit--modifier  btn-flex__submit"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isEditing ? "modifier" : "Créer"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
