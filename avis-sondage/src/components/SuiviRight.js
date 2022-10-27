import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import AvisItem from "./AvisItem";
import { getAllReviews } from "../features/review/reviewSlice";

const { RangePicker } = DatePicker;

const SuiviRight = ({ arrowTriertHandler, arrow3, staticsItems }) => {
  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  const dispatch = useDispatch();
  const { opinionsList } = useSelector((store) => store.statics);
  const { reviewItems, avgRatting, callPercentage } = useSelector(
    (store) => store.reviews
  );

  useEffect(() => {
    dispatch(getAllReviews());
    // dispatch(getStaticsByDate());
  }, []);

  let noteAverage;
  if (staticsItems.noteAverage) {
    noteAverage = Math.round(staticsItems.noteAverage);
  }

  return (
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
                </ul>
              </div>
            </div>
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
          </div>
        </div>
        {/*  */}
        <div className="overFlowScroll">
          <div className="avis-container--statistics">
            <div className="box statistic__1">
              <div className="box__chiffre">{staticsItems.comments}</div>
              <p className="box__text box__text--1 box__text">commentaires</p>

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
                <p className="box__tage--2">{staticsItems.notesDifference}%</p>
              </div>
            </div>
            <div className="box statistic__3">
              <div className="box__chiffre">
                {noteAverage}
                <span className="small-chiffre">/5</span>
              </div>
              <p className="box__text box__text--3 box__text">en moyenne</p>

              <div className="box__tage">
                <p className="box__tage--3">
                  {Math.round(staticsItems.notesAverageDifference, 1)}%
                </p>
              </div>
            </div>
            <div className="box statistic__4">
              <div className="box__chiffre">
                {staticsItems.callAverage}
                <span className="small-chiffre">%</span>
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
            {opinionsList &&
              opinionsList.map((item) => {
                return reviewItems.map((el) => {
                  if (item.OpinionId === el.id) {
                    console.log(item.OpinionId === el.id, "Hello loya");
                    return (
                      <AvisItem
                        key={item.OpinionId}
                        {...item}
                        reviewItems={reviewItems}
                      />
                    );
                  }
                });
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiviRight;
