import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
import { DatePicker } from "antd";
import moment from "moment";

const initialState = {
  title: "",
  context: "",
};
export default function CreateSurvey() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, context } = values;
    if (!title || !context || !startDate || !endDate) {
      console.log("Please fill out all fields");
    }
  };

  return (
    <section className="create-survey">
      <h1 className="create-survey__header">CRÉER SONDAGE</h1>
      <div className="create-survey__container">
        <div className="subdate__date form__date">
          <div>
            Commence
            <DatePicker
              className="subdate__date--input "
              onChange={(date) => {
                const value1 = moment(date).format("YYYY-MM-DD");

                setStartDate(value1);
              }}
            />
          </div>

          <p className="subdate__date--seperator">AU</p>
          <div>
            Termine
            <DatePicker
              onChange={(date) => {
                const value2 = moment(date).format("YYYY-MM-DD");
                setEndDate(value2);
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
                handleChange={handleChange}
                labelText="Titre Du sondage"
              />
              {/* Survey Context */}
              <FormRow
                type="text"
                name="context"
                value={values.context}
                handleChange={handleChange}
                labelText="Contexte"
              />
            </div>

            <div className="btn-container">
              <div>
                <button type="submit" className="btn btn-blak submit-btn">
                  submit
                </button>

                <Link to="/sondage" className="btn btn-blak submit-btn">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
