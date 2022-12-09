import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DatePicker } from "antd";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import imge from "../img/user.jpeg";
import AvisClient from "./AvisClient";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  getViewsByDateAndEntity,
} from "../features/review/reviewSlice";
import { getStaticsByDate } from "../features/statics/staticsSlice";
import "antd/dist/antd.min.css";
import AvisItem from "./AvisItem";

import SuiviAvisAside from "./SuiviAvisAside";
import SuiviRight from "./SuiviRight";

const { RangePicker } = DatePicker;

function SuiviAvis() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  const [startdate, setStartDate] = useState("hehe");
  const [endDate, setEndDate] = useState("hhh");

  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  const [entity, setEntity] = useState("");
  const [rayon, setRayon] = useState("");

  const dispatch = useDispatch();

  /*   const { isLoading, staticsItems, opinionsList } = useSelector(
    (store) => store.statics
  ); */

  const arrowMagasinHandler = (e) => {
    setArrow1(!arrow1);
    if (arrow2 || arrow3) {
      if (arrow2) {
        setArrow2(!arrow2);
      }
      if (arrow3) {
        setArrow3(!arrow3);
      }
    }
  };
  const arrowMarketHandler = (e) => {
    setArrow2(!arrow2);
    if (arrow1 || arrow3) {
      if (arrow1) {
        setArrow1(!arrow1);
      }
      if (arrow3) {
        setArrow3(!arrow3);
      }
    }
  };

  const arrowTriertHandler = (e) => {
    setArrow3(!arrow3);
    if (arrow1 || arrow2) {
      setArrow1(!arrow1);
      if (arrow1) {
        setArrow1(!arrow1);
      }
      if (arrow2) {
        setArrow2(!arrow2);
      }
    }
  };

  /* useEffect(() => {
    if (dates2 && dates1) {
      dispatch(getStaticsByDate({ dates1, dates2 }));
    }
    if (dates2 && dates1) {
      dispatch(getStaticsByDate({ dates1, dates2 }));
    }
  }, [dates1, dates2]); */

  useEffect(() => {
    if (!startdate || !endDate) {
    } else {
      //dispatch(getViewsByDateAndEntity());
    }
    dispatch(getAllReviews());
    //dispatch(getStaticsByDate({ dates1, dates2 }));
  }, []);

  /*  if (isLoading) {
    return <div>isLoading....</div>;
  } */

  return (
    <>
      <section className="avis-section" id="avis-section">
        <SuiviAvisAside
          arrowMarketHandler={arrowMarketHandler}
          arrowMagasinHandler={arrowMagasinHandler}
          arrow1={arrow1}
          arrow2={arrow2}
          arrow3={arrow3}
        />
        <SuiviRight arrowTriertHandler={arrowTriertHandler} arrow3={arrow3} />
      </section>
    </>
  );
}

export default SuiviAvis;
