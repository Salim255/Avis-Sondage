import React, { useEffect, useState } from "react";
import AvisItem from "./AvisItem";
import { getAllReviews } from "../features/review/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { getStaticsByDate } from "../features/statics/staticsSlice";

const AvisAndStatics = () => {
  const dispatch = useDispatch();
  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  const [seleceted, setSelected] = useState("Rayon");
  const [entityId, setEntityId] = useState("");

  //const { opinionsList } = useSelector((store) => store.statics);
  const { reviewItems } = useSelector((store) => store.reviews);
  const { isLoading, staticsItems, opinionsList } = useSelector(
    (store) => store.statics
  );
  const { magasinList, rayonList, entitiesList } = useSelector(
    (store) => store.magasin
  );

  let noteAverage;
  if (staticsItems.noteAverage) {
    noteAverage = Math.round(staticsItems.noteAverage);
  }

  useEffect(() => {
    //dispatch(getViewsByDateAndEntity({ hello: "hello" }));
    dispatch(getAllReviews());
    //dispatch(getStaticsByDate());
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="overFlowScroll">
      <div className="avis-container--statistics">
        <div className="box statistic__1">
          <div className="box__chiffre">{staticsItems.comments}</div>
          <p className="box__text box__text--1 box__text">commentaires</p>

          <div className="box__tage">
            <p className="box__tage--1">{staticsItems.commentsDifference}%</p>
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
    </div>
  );
};

export default AvisAndStatics;
