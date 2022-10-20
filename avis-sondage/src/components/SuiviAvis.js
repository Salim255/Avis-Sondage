import React, { useRef, useState, useEffect } from "react";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import imge from "../img/user.jpeg";

function SuiviAvis() {
  const [arrow, setArrow] = useState(false);
  const arrowHandler = (e) => {
    setArrow(!arrow);

    console.log(arrow);
  };

  return (
    <>
      <section className="sectionAvis">
        <div className="avis">
          <div className=" avis__left ">
            <div className="avis__left--up">
              <div className="avisHeader">
                <div className="avisHeader__GD">
                  <p>GD</p>
                </div>
                <div className="avisHeader__name">
                  <h3>GAUTIER DECROIX</h3>
                  <p className="avisHeader__name--title"> Manager</p>
                </div>
              </div>

              <div className="avis__centre">
                <h4 className="avis__centre--avis">AVIS</h4>
                <h5 className="avis__centre--sondage">SONDAGE</h5>
              </div>
            </div>

            <div className="avis__left--down">
              <div>
                <div className="dropDown">
                  <div className="dropDown__select">
                    <p>Select</p>
                  </div>
                  <span
                    className={arrow ? "custom-arrowB" : "custom-arrowA"}
                    onClick={arrowHandler}
                  ></span>
                </div>
                <ul className={arrow ? ["dropDown__list"] : "hide"}>
                  <li className="dropDown__list--option">Salim</li>
                  <li className="dropDown__list--option">Hassan</li>
                  <li className="dropDown__list--option">Adam</li>
                </ul>
              </div>
              {/*  <div className="surpermarket">
                <div className="surpermarket__icon">
                  <BsShopWindow className="icon" />
                </div>
                <div className="surpermarket__input">
                  <label for="market"></label>
                  <select
                    name="market"
                    id="market"
                    className="select select-left"
                  >
                    <option value="auchan">Auchan</option>
                    <option value="lidl">Lidl</option>
                  </select>
                </div>
              </div> */}
              <div className="grocery">
                <div className="grocery__icon">
                  <BsShop className="icon" />
                </div>
                <div className="grocery__input">
                  <label for="grocery"></label>
                  <select
                    name="grocery"
                    id="grocery"
                    className="select  select-left"
                  >
                    <option value="match">Match</option>
                    <option value="carrefour">Carrefour</option>
                  </select>
                </div>
              </div>
              <div className="btn connexion">
                <p>DECONNEXION</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="avis__right">
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
                    <div className="subdate__droplist--list">
                      <label for="type"></label>
                      <select name="type" id="type" className="select-right ">
                        <option value="rayon">Rayon</option>
                        <option value="lidl">Lidl</option>
                      </select>
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
