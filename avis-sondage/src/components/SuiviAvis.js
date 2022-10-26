import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import { DatePicker } from "antd";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import imge from "../img/user.jpeg";
import AvisClient from "./AvisClient";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../features/review/reviewSlice";
import { getStaticsByDate } from "../features/statics/staticsSlice";
import "antd/dist/antd.css";
import AvisItem from "./AvisItem";
import moment from "moment";
const { RangePicker } = DatePicker;

function SuiviAvis() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);
  /*   const [startDate, setStartDate] = useState("2018-07-22");
  const [endtDate, setEndtDate] = useState("2018-07-22"); */
  const [startDate, setStartDate] = useState("26/09/2022");
  const [dates1, setDate1] = useState();
  const [dates2, setDate2] = useState();
  console.log(dates1, dates2);
  const { reviewItems, avgRatting, callPercentage } = useSelector(
    (store) => store.reviews
  );
  const { isLoading, staticsItems } = useSelector((store) => store.statics);

  const dispatch = useDispatch();
  let noteAverage;
  if (staticsItems.noteAverage) {
    noteAverage = staticsItems.noteAverage;
    noteAverage.toFixed(0);
    //console.log(noteAverage);
  }

  const handleDateInput = (e) => {};
  const handelSelect = (date) => {
    console.log(date);
  };

  const onChange = () => {};
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

  useEffect(() => {
    dispatch(getAllReviews());
    dispatch(getStaticsByDate());
  }, []);

  useEffect(() => {
    if (dates2 && dates1) {
      console.log("====================================");
      console.log(dates2, dates1, "before");
      console.log("====================================");
      dispatch(getStaticsByDate({ dates1, dates2 }));
      console.log(dates2, dates1, "aftre");
    }
  }, [dates1, dates2]);

  return (
    <>
      <section className="avis-section" id="avis-section">
        <div className="avis-section__left">
          <div className="avis-section__left--up">
            <div className="manager">
              <div className="manager__GD">
                <p>GD</p>
              </div>
              <div className="manager__name">
                <h3 className="manager__name--name">GAUTIER DECROIX</h3>
                <p className="manager__title noActive"> Manager</p>
              </div>
            </div>
          </div>
          <div className="avis-section__left--center link">
            <p className="activeA sbm">AVIS</p>
            <Link to="/sondage" className="noActive link">
              SONDAGE
            </Link>
          </div>
          <div className="avis-section__left--down">
            <div className="leftDown">
              <div className="leftDown__magasin">
                <div className="leftDown__magasin--icon">
                  <BsShop className="icon" />
                </div>

                <div className="drop">
                  <div className="drop__select">
                    <div className="">
                      <p>Traiteur</p>
                    </div>
                    <span className="small-border"></span>
                    <span
                      className={arrow1 ? "custom-arrow2" : "custom-arrow"}
                      onClick={arrowMagasinHandler}
                    ></span>
                  </div>
                  <ul className={arrow1 ? ["drop__list"] : "hide"}>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                  </ul>
                </div>
              </div>

              <div className="leftDown__magasin">
                <div className="leftDown__magasin--icon">
                  <BsShop className="icon" />
                </div>

                <div className="drop">
                  <div className="drop__select">
                    <div className="">
                      <p>Atlantis</p>
                    </div>
                    <span
                      className={arrow2 ? "custom-arrow2" : "custom-arrow"}
                      onClick={arrowMarketHandler}
                    ></span>
                  </div>
                  <ul className={arrow2 ? ["drop__list"] : "hide"}>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                    <li className="drop__list--option">Magasin</li>
                    <li className="drop__list--option">Market</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="connecexion">
              <button type="submit" className="btn connecexion__btn">
                CONNEXION
              </button>
            </div>
          </div>
          {/* Right Side */}
        </div>
        <div className="avis-section__right">
          <div>
            <div>
              <h2 className="avis__right--header">Avis</h2>
              <p className="avis__right--title">SUIVIS DES AVIS</p>
            </div>
            <hr />
          </div>

          <div className="avis-container">
            <div className="avis-container--date">
              <div className="subdate">
                <div className="subdate__droplist">
                  <div className="subdate__droplist--title">Trier par </div>

                  <div className="drop">
                    <div className="drop__select">
                      <div className="">
                        <p>RAYON</p>
                      </div>
                      <span className="small-border"></span>
                      <span
                        className={arrow3 ? "custom-arrow2" : "custom-arrow"}
                        onClick={arrowTriertHandler}
                      ></span>
                    </div>
                    <ul className={arrow3 ? ["drop__list"] : "hide"}>
                      <li className="drop__list--option">Magasin</li>
                      <li className="drop__list--option">Market</li>
                      <li className="drop__list--option">Magasin</li>
                      <li className="drop__list--option">Market</li>
                      <li className="drop__list--option">Magasin</li>
                      <li className="drop__list--option">Market</li>
                    </ul>
                  </div>
                </div>
                <div className="subdate__date">
                  <DatePicker
                    className="subdate__date--input calendarElement"
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
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="overFlowScroll">
              <div className="avis-container--statistics">
                <div className="box statistic__1">
                  <div className="box__chiffre">{staticsItems.comments}</div>
                  <p className="box__text box__text--1 box__text">
                    commentaires
                  </p>

                  <div className="box__tage">
                    <p className="box__tage--1">
                      {staticsItems.commentsDifference}%
                    </p>
                  </div>
                </div>
                <div className="box statistic__2">
                  <div className="box__chiffre">{staticsItems.notes}</div>
                  <p className="box__text box__text--2 box__text">notes</p>

                  <div className="box__tage">
                    <p className="box__tage--2">
                      {staticsItems.notesDifference}%
                    </p>
                  </div>
                </div>
                <div className="box statistic__3">
                  <div className="box__chiffre">{noteAverage}/5 </div>
                  <p className="box__text box__text--3 box__text">en moyenne</p>

                  <div className="box__tage">
                    <p className="box__tage--3">
                      {staticsItems.notesAverageDifference}%
                    </p>
                  </div>
                </div>
                <div className="box statistic__4">
                  <div className="box__chiffre">
                    {staticsItems.callAverage}%
                  </div>

                  <div className="box__text--4 box__text">
                    <p> demandes de rappel</p>
                  </div>

                  <div className="box__tage">
                    <p className="box__tage--4">
                      +{staticsItems.callAverageDifference}%
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="avis-container--avislist">
                {reviewItems.map((item) => (
                  <AvisItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuiviAvis;
