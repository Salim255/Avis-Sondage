import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import SondageCard from "./SondageCard";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllOpinions } from "../features/survey/opinionSlice";
import CreateSurvey from "./CreateSurvey";
import { AddSurvey } from "./AddSurvey";

export default function SondageRight({ allOpinions }) {
  const [startdate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggleCreateModal = () => {
    setModal(!modal);
  };

  if (startdate && endDate) {
    dispatch(getAllOpinions({ startDate: startdate, endDate: endDate }));
  }
  return (
    <>
      <div className="sondage-section__right right">
        <div className="right__header">
          <div>
            <h2 className="avis__right--header">Sondage</h2>
            <p className="avis__right--title">SUIVIS DES SONDAGES</p>
          </div>
          <hr />
        </div>

        <div className="right__date">
          <div className="subdate__date">
            <DatePicker
              className="subdate__date--input "
              onChange={(date) => {
                const value1 = moment(date).format("YYYY-MM-DD");

                setStartDate(value1);
              }}
            />
            <p className="subdate__date--seperator">AU</p>
            <DatePicker
              onChange={(date) => {
                const value2 = moment(date).format("YYYY-MM-DD");
                setEndDate(value2);
              }}
              className="datePicker"
            />
          </div>

          <div className="right__date--ajouter">
            <CiCirclePlus className="ajouter__icon" />
            <div className="ajouter__text" onClick={() => toggleCreateModal()}>
              AJOUTER
            </div>
          </div>
        </div>
        <SondageCard allOpinions={allOpinions} />
      </div>

      {modal && (
        <AddSurvey
          toggleModal={toggleCreateModal}
          setModall={setModal}
          modall={modal}
          /* idd={clickedId} */
        />
      )}
    </>
  );
}
