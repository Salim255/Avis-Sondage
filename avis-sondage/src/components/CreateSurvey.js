import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "./FormRow";
import { handleChange, clearValues } from "../features/survey/surveySlice";

export default function CreateSurvey() {
  const dispatch = useDispatch();
  const { isLoading, isEditing, editSurvey, position } = useSelector(
    (store) => store.survey
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position) {
      toast.error("Please fill out all fields");
    }
  };

  const handleSurveyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <div>
      <form className="form">
        <h3>{isEditing ? "edit survey" : "add survey"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            labelText="survey description"
            handleChange={handleSurveyInput}
          />
          <FormRow
            type="text"
            name="position"
            value={position}
            labelText="survey description"
            handleChange={handleSurveyInput}
          />
          <FormRow
            type="text"
            name="position"
            value={position}
            labelText="survey description"
            handleChange={handleSurveyInput}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-blak cealr-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-blak submit-btn"
              onClick={() => handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
