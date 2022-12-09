import React, { useState, useEffect, useRef } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import AvisItem from "./AvisItem";
import { getAllReviews } from "../features/review/reviewSlice";
import { getViewsByDateAndEntity } from "../features/statics/staticsSlice";
import { getStaticsByDate } from "../features/statics/staticsSlice";
import AvisAndStatics from "./AvisAndStatics";
const { RangePicker } = DatePicker;

const SuiviRight = ({ arrowTriertHandler, arrow3, staticsItems }) => {
  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  const [seleceted, setSelected] = useState("Rayon");
  const [entityId, setEntityId] = useState("");

  const ref = useRef();
  const dispatch = useDispatch();
  const { opinionsList } = useSelector((store) => store.statics);
  const { reviewItems } = useSelector((store) => store.reviews);
  const { magasinList, rayonList, entitiesList } = useSelector(
    (store) => store.magasin
  );

  console.log(entitiesList);
  const [startdate, setStartDate] = useState("hehe");
  const [endDate, setEndDate] = useState("hhh");

  const handleChange = (e) => {
    let he = e.target.textContent;
    setSelected(he);
    arrowTriertHandler();
    if (magasinList.includes(he) || rayonList.includes(he)) {
      if (magasinList.includes(he)) {
        entitiesList.map((entity) => {
          if (entity.name === he) {
            setEntityId(entity.id);
            dispatch(getStaticsByDate({ dates1, dates2, entity: entity.id }));
            return;
          }
        });
      } else {
        entitiesList.map((entity) => {
          entity.Services.map((service) => {
            if (service.name === he) {
              dispatch(getStaticsByDate({ dates1, dates2, entity: entity.id }));
              return;
            }
          });
        });
      }
    }

    arrow3 = false;
  };
  /*   useEffect(() => {
    //dispatch(getViewsByDateAndEntity({ hello: "hello" }));
    dispatch(getAllReviews());
    //dispatch(getStaticsByDate());
  }, []); */

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

              <div className="drop droptrier">
                <div className="drop__select">
                  <div className="">
                    <p>{seleceted}</p>
                  </div>
                  <span className="small-border"></span>
                  <span
                    className={arrow3 ? "custom-arrow2" : "custom-arrow"}
                    onClick={arrowTriertHandler}
                  ></span>
                </div>
                <ul className={arrow3 ? ["drop__list"] : "hide"}>
                  {magasinList &&
                    magasinList.map((magasin, index) => {
                      return (
                        <li
                          key={index}
                          className="drop__list--option"
                          onClick={handleChange}
                        >
                          {magasin}
                        </li>
                      );
                    })}

                  {rayonList &&
                    rayonList.map((magasin, index) => {
                      return (
                        <li
                          key={index}
                          className="drop__list--option"
                          onClick={handleChange}
                        >
                          {magasin}
                        </li>
                      );
                    })}
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
        <AvisAndStatics
          staticsItems={staticsItems}
          opinionsList={opinionsList}
          reviewItems={reviewItems}
        />
        {/*   <div className="overFlowScroll">
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
       
          <div className="avis-container--avislist">
            {opinionsList &&
              opinionsList.map((item) => {
                return reviewItems.map((el) => {
                  if (item.OpinionId === el.id) {
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
        </div> */}
      </div>
    </div>
  );
};

export default SuiviRight;
