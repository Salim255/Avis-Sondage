import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
import { DatePicker } from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { createSurvey } from "../features/survey/createSurveySlice";
import {
  handleChange,
  deleteSurvey,
  setEditSurvey,
} from "../features/survey/createSurveySlice";

const initialState = {
  title: "",
  context: "",
};
export default function CreateSurvey() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [values, setValues] = useState(initialState);

  const {
    id,
    isLoading,
    createdSurvey,
    status,
    surveyOptions,
    isEditing,
    editSurveId,
  } = useSelector((store) => store.createdSurvey);

  const dispatch = useDispatch();
  /*   const handleChange  */
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setValues({ ...values, [name]: value });
    dispatch(handleChange({ name, value }));
    // setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, context } = values;
    if (!title || !context || !startDate || !endDate) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    dispatch(createSurvey({ title, context, startDate, endDate }));
    setValues(initialState);
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

                setStartDate(value);
              }}
            />
          </div>

          <p className="subdate__date--seperator">AU</p>
          <div>
            Termine
            <DatePicker
              onChange={(date) => {
                const value = moment(date).format("YYYY-MM-DD");
                setEndDate(value);
              }}
              className="datePicker date"
            />
          </div>
        </div>

        <form className="form " onSubmit={onSubmit}>
          <div className="form__center">
            <div>
              {/* Survey Title */}
              <FormRow
                type="text"
                name="title"
                value={values.title}
                handleChange={handleInput}
                labelText="Titre Du sondage"
              />
              {/* Survey Context */}
              <FormRow
                type="text"
                name="context"
                value={values.context}
                handleChange={handleInput}
                labelText="Contexte"
              />
              {isEditing ? "add option" : ""}
            </div>

            <div className="btn-container">
              <div>
                <button type="submit" className="btn btn-blak submit-btn">
                  submit
                </button>

                <Link to="/sondage" className="btn btn-blak submit-btn">
                  Back To Sondage Page
                </Link>
                <Link
                  to="/sondage"
                  className="btn btn-blak submit-btn"
                  onClick={() => dispatch(setEditSurvey({ editSurveyId: id }))}
                >
                  Edit{" "}
                </Link>
                <button
                  type="button"
                  className="btn"
                  onClick={() => dispatch(deleteSurvey(6))}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
