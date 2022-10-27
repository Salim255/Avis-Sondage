import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";

import imge from "../img/user.jpeg";
import RetourSondage from "./RetourSondage";
import PopUp from "./PopUp";
import SondageAside from "./SondageAside";
import SondageRight from "./SondageRight";
import { useDispatch, useSelector } from "react-redux";
import { getAllOpinions } from "../features/survey/opinionSlice";
//
const Sondage = () => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const dispatch = useDispatch();
  ///

  const { isLoading, allOpinions } = useSelector((store) => store.opinions);

  useEffect(() => {
    dispatch(getAllOpinions());
  }, []);

  if (isLoading) {
    return <div>isLoading...</div>;
  }
  const arrowMagasinHandler = (e) => {
    setArrow1(!arrow1);
    if (arrow2) {
      setArrow2(!arrow2);
    }
  };
  const arrowMarketHandler = (e) => {
    setArrow2(!arrow2);
    if (arrow1) {
      setArrow1(!arrow1);
    }
  };

  return (
    <>
      <section className="sondage-section" id="sondage-section">
        <SondageAside
          arrowMarketHandler={arrowMarketHandler}
          arrowMagasinHandler={arrowMagasinHandler}
          arrow1={arrow1}
          arrow2={arrow2}
        />
        <SondageRight />
      </section>
      <PopUp />
    </>
  );
};

export default Sondage;
