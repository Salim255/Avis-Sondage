import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getStaticsByDate } from "../features/statics/staticsSlice";
const SuiviAvisAside = ({
  arrowMarketHandler,
  arrowMagasinHandler,
  arrow1,
  arrow2,
  arrow3,
}) => {
  const [seleceted, setSelected] = useState("Rayon");
  const [seleceted1, setSelected1] = useState("Magasin");
  const dispatch = useDispatch();
  const [dates1, setDate1] = useState("2022-10-11");
  const [dates2, setDate2] = useState("2022-10-30");
  const { magasinList, rayonList, entitiesList } = useSelector(
    (store) => store.magasin
  );
  console.log("====================================");
  console.log(magasinList, entitiesList, rayonList);
  console.log("====================================");
  //const [seleceted, setSelected] = useState("Rayon");
  const [entityId, setEntityId] = useState("");

  const handleChange = (e) => {
    let he = e.target.textContent;

    if (arrow1) {
      console.log("====================================");
      console.log("hello salim");
      console.log("====================================");
      setSelected(he);
      setSelected1("Magasin");
      arrowMagasinHandler();
    } else if (arrow2) {
      setSelected1(he);
      setSelected("Rayon");
      arrowMarketHandler();
    }

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
  return (
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

            <div className="drop droptrier">
              <div className="drop__select">
                <div className="">
                  <p>{seleceted}</p>
                </div>
                <span className="small-border"></span>
                <span
                  className={arrow1 ? "custom-arrow2" : "custom-arrow"}
                  onClick={arrowMagasinHandler}
                ></span>
              </div>
              <ul
                className={arrow1 ? ["drop__list2"] : "hide"}
                /*    className="drop__list2" */
              >
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
              </ul>
            </div>
          </div>

          <div className="leftDown__magasin">
            <div className="leftDown__magasin--icon">
              <BsShop className="icon" />
            </div>

            <div className="drop droptrier">
              <div className="drop__select">
                <div className="">
                  <p>{seleceted1}</p>
                </div>
                <span className="small-border"></span>
                <span
                  className={arrow2 ? "custom-arrow2" : "custom-arrow"}
                  onClick={arrowMarketHandler}
                ></span>
              </div>
              <ul className={arrow2 ? ["drop__list2"] : "hide"}>
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
        </div>

        <div className="connecexion">
          <button type="submit" className="btn connecexion__btn">
            CONNEXION
          </button>
        </div>
      </div>
      {/* Right Side */}
    </div>
  );
};

export default SuiviAvisAside;
