import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import imge from "../img/user.jpeg";

function SuiviAvis() {
  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

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

  return (
    <>
      <section className="avis-section">
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
              </div>
            </div>
            {/*  */}
            <div className="overFlowScroll">
              <div className="avis-container--statistics">
                <div className="box statistic__1">
                  <div className="box__chiffre">1214</div>
                  <p className="box__text box__text--1 box__text">
                    commentaires
                  </p>

                  <div className="box__tage">
                    <p className="box__tage--1">-12%</p>
                  </div>
                </div>
                <div className="box statistic__2">
                  <div className="box__chiffre">1212</div>
                  <p className="box__text box__text--2 box__text">notes</p>

                  <div className="box__tage">
                    <p className="box__tage--2">-12%</p>
                  </div>
                </div>
                <div className="box statistic__3">
                  <div className="box__chiffre">4,5/5 </div>
                  <p className="box__text box__text--3 box__text">en moyenne</p>

                  <div className="box__tage">
                    <p className="box__tage--3">+22%</p>
                  </div>
                </div>
                <div className="box statistic__4">
                  <div className="box__chiffre">75%</div>

                  <d className="box__text--4 box__text">
                    <p> de demandes</p>
                    <p>de rappel</p>
                  </d>

                  <div className="box__tage">
                    <p className="box__tage--4">+22%</p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="avis-container--avislist">
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>

                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
                <div className="list-avis">
                  <div className="list-avis__user">
                    <img
                      src={imge}
                      className="list-avis__user--img"
                      alt="user-img"
                    />
                    <div className="list-avis__user--name">Jean Jean</div>
                  </div>
                  <div className="list-avis__store">
                    <div className="list-avis__store--title">Magasin</div>
                    <div className="list-avis__store--name">
                      <div className="">
                        <p>
                          Leclerc <span> - Atlantis </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" list-avis__recommend">
                    <div>Recommended</div>
                    <div className=" list-avis__recommend--oui">Oui</div>
                  </div>
                  <div className=" list-avis__note">
                    <div>Note</div>
                    <div>
                      <span className=" list-avis__note--chiffre">4</span>/5
                    </div>
                  </div>
                  <div className="list-avis__phone">
                    <BsTelephone className="list-avis__phone--icon" />
                  </div>
                  <div className="list-avis__details">DÉTAILS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuiviAvis;
