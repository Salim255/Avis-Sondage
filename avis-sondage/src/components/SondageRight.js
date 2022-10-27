import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import SondageCard from "./SondageCard";

export default function SondageRight({ allOpinions }) {
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
          <input
            type="date"
            id="start"
            name=""
            value="2018-07-22"
            className="subdate__date--input"
          />
          <p className="subdate__date--seperator">AU</p>
          <input
            type="date"
            id="end"
            name=""
            value="2018-07-22"
            className="subdate__date--input"
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
