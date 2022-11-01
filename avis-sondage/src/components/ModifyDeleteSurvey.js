import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

export const ModifyDeleteSurvey = ({
  isLoading,

  status,
  isEditing,
  editSurveId,
}) => {
  const { opinonId } = useParams();
  const { allOpinions } = useSelector((store) => store.opinions);

  const { context, title, startDate, endDate } = allOpinions.find(
    (opionion) => opionion.id === 1 * opinonId
  );

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !context || !startDate || !endDate) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(createSurvey({ title, context, startDate, endDate }));
  };

  const handleSurveyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("====================================");
    console.log(name, value);
    console.log("====================================");
    dispatch(handleChange({ name, value }));
  };
  useEffect(() => {
    //dispatch(handleChange({}));
  }, []);
  return (
    <section className="create-survey">
      <h1 className="create-survey__header">
        {isEditing ? "Modifier Sondage" : "CRÉER Salim SONDAGE"}
      </h1>
      <div className="create-survey__container">
        <div className="subdate__date form__date">
          <div>
            Commence
            <DatePicker
              className="subdate__date--input "
              placeholder={startDate}
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
              placeholder={endDate}
              onChange={(date) => {
                const value = moment(date).format("YYYY-MM-DD");
                const name = "endDate";
                dispatch(handleChange({ name, value }));
              }}
              className="datePicker date"
            />
          </div>
        </div>

        <form className="form ">
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
                <Link
                  to="/sondage"
                  className="btn"
                  onClick={() => dispatch(deleteSurvey(opinonId))}
                >
                  delete
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
