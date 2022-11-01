import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
//import { handleChange, clearValues } from "../features/survey/surveySlice";

export default function ModifySurvey() {
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
    //dispatch(handleChange({ name, value }));
  };

  return (
    <section className="create-survey">
      <h1 className="create-survey__header">Modifier Sondage</h1>
      <div className="create-survey__container">
        <form className="form ">
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
                type="submit"
                className="btn btn-blak submit-btn"
                onClick={() => handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
              <Link
                to="/sondage"
                className="btn btn-blak submit-btn"
                onClick={() => handleSubmit}
                disabled={isLoading}
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
