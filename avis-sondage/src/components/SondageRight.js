import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import SondageCard from "./SondageCard";
import { DatePicker } from "antd";
import moment from "moment";

export default function SondageRight({ allOpinions }) {
  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  return (
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

              setDate1(value1);
            }}
          />
          <p className="subdate__date--seperator">AU</p>
          <DatePicker
            onChange={(date) => {
              const value2 = moment(date).format("YYYY-MM-DD");
              setDate2(value2);
            }}
            className="datePicker"
          />
        </div>

        <div className="right__date--ajouter">
          <CiCirclePlus className="ajouter__icon" />
          <Link to="/create" className="ajouter__text">
            AJOUTER
          </Link>
        </div>
      </div>
      <SondageCard allOpinions={allOpinions} />
    </div>
  );
}
