import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import imge from "../img/user.jpeg";
import RetourSondage from "./RetourSondage";
import PopUp from "./PopUp";

const Shared = () => {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
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
        <div className="sondage-section__left">
          <div className="sondage-section__left--up">
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
          <div className="sondage-section__left--center">
            <Link to="/avis" className="noActive link sbm">
              AVIS
            </Link>
            <p className="activeS">SONDAGE</p>
          </div>
          <div className="sondage-section__left--down">
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
        </div>

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
          <div className="right__card">
            <div className="scroll">
              <div className="programmedSurvey">
                <div className="programmedSurvey__header">
                  <div className="programmedSurvey__header--title">
                    <p>13/20/2021 - programmé</p>
                  </div>
                  <div className="programmedSurvey__header--duration">
                    <p> Temps du sondage : 8 jours</p>
                  </div>
                </div>
                <div className="programmedSurvey__statistics">
                  <div className="box ">
                    <div className="box__planning">
                      <div className="box__planning--plng">UI du Planning</div>
                      <div className="box__planning--detail">
                        <a href="#sondagePopUP" className="link">
                          Details
                        </a>
                      </div>
                      <div className="box__planning--modifier">Modifier</div>
                    </div>

                    <div className="box__tage">
                      <p className="box__tage--4 box__tage--4 box__tage--arreter">
                        Arreter
                      </p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p>demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">1212</div>
                    <p className="box__text box__text--2 box__text">notes</p>

                    <div className="box__tage">
                      <p className="box__tage--2">-12%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="runningSurvey">
                <div className="runningSurvey__header">
                  <div className="runningSurvey__header--title">
                    <p>18/10/2022 - en cours</p>
                  </div>
                  <div className="runningSurvey__header--duration">
                    <p> Temps du sondage : 8 jours</p>
                  </div>
                </div>
                <div className="runningSurvey__statistics">
                  <div className="box ">
                    <div className="box__planning">
                      <div className="box__planning--plng">UI du Planning</div>
                      <div className="box__planning--detail">
                        <a href="#sondagePopUP" className="link">
                          Details
                        </a>
                      </div>
                      <div className="box__planning--modifier">Modifier</div>
                    </div>

                    <div className="box__tage">
                      <p className="box__tage--4 box__tage--4 box__tage--arreter">
                        Arreter
                      </p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">1212</div>
                    <p className="box__text box__text--2 box__text">notes</p>

                    <div className="box__tage">
                      <p className="box__tage--2">-12%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="finishedSurvey">
                <div className="finishedSurvey__header">
                  <div className="finishedSurvey__header--title">
                    <p>20/09/2022 - fini</p>
                  </div>
                  <div className="finishedSurvey__header--duration">
                    <p> Temps du sondage : 8 jours</p>
                  </div>
                </div>
                <div className="finishedSurvey__statistics">
                  <div className="box ">
                    <div className="box__planning">
                      <div className="box__planning--plng">UI du Planning</div>
                      <div className="box__planning--detail">
                        <a href="#sondagePopUP" className="link">
                          Details
                        </a>
                      </div>
                      <div className="box__planning--modifier">Modifier</div>
                    </div>

                    <div className="box__tage">
                      <p className="box__tage--4 box__tage--4 box__tage--arreter">
                        Arreter
                      </p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                  <div className="box ">
                    <div className="box__chiffre">75%</div>

                    <d className="box__text--4 box__text">
                      <p> demandes de rappel</p>
                    </d>

                    <div className="box__tage">
                      <p className="box__tage--4">+22%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopUp />
    </>
  );
};

export default Shared;
