import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
import { DatePicker } from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { createSurvey, editSurvey } from "../features/survey/createSurveySlice";
import {
  handleChange,
  handleOptionChange,
  deleteSurvey,
  setEditSurvey,
} from "../features/survey/createSurveySlice";
import ModfiyOption from "./ModfiyOption";

export const AddSurvey = () => {
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
  } = useSelector((store) => store.createdSurvey);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggleModal = (id, option, image) => {
    dispatch(setEditSurvey({ id: id, option: option, image: "image" }));
    setModal(!modal);
  };

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
      return;
    }

    dispatch(createSurvey({ title, context, startDate, endDate }));
  };

  const handleSurveyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch(handleChange({ name, value }));
  };
  return (
    <section className="create-survey">
      <h1 className="create-survey__header">
        {isEditing ? "Modifier Sondage" : "CRÉER SONDAGE"}
      </h1>
      <div className="create-survey__container">
        <div className="subdate__date form__date">
          <div>
            Commence
            <DatePicker
              className="subdate__date--input "
              onChange={(date) => {
                const value = moment(date).format("YYYY-MM-DD");
                const name = "startDate";
                dispatch(handleChange({ name, value }));
              }}
            />
          </div>

          <p className="subdate__date--seperator">AU</p>
          <div>
            Termine
            <DatePicker
              onChange={(date) => {
                const value = moment(date).format("YYYY-MM-DD");
                const name = "endDate";
                dispatch(handleChange({ name, value }));
              }}
              className="datePicker date"
            />
          </div>
        </div>

        <form className="form " /* onSubmit={onSubmit} */>
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
              {/* Survey Context */}
              <FormRow
                type="text"
                name="context"
                value={context}
                handleChange={handleSurveyInput}
                labelText="Contexte"
              />
              {surveyOptions.map((ops) => {
                return (
                  <>
                    <div key={ops.id}>
                      <div>
                        Option: {ops.id}: {ops.option}
                        <br />
                        {ops.image ? ops.image : "imageplace holde"}
                        <div
                          onClick={() =>
                            toggleModal(ops.id, ops.option, ops.image)
                          }
                          className="btn"
                        >
                          modifier
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

                    {/*  <FormRow
                      type="text"
                      name="option"
                      value={option}
                      handleChange={handleSurveyInput}
                      labelText={`Option: ${ops.option}`}
                      key={ops.id}
                    /> */}
                    {/*    <FormRow
                      type="text"
                      name="image"
                      value={image}
                      handleChange={handleSurveyInput}
                      labelText={`Image: ${ops.id}`}
                      key={ops.id}
                    /> */}
                  </>
                );
              })}
              {isEditing ? "add option" : ""}
            </div>

            <div className="btn-container">
              <div>
                <button
                  type="submit"
                  className="btn btn-blak submit-btn"
                  disabled={isLoading}
                  onClick={handleSubmit}
                >
                  submit
                </button>

                <Link to="/sondage" className="btn btn-blak submit-btn">
                  Back To Sondage Page
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
