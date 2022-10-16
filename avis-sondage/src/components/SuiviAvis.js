import React from "react";
import { BsShop, BsShopWindow } from "react-icons/bs";

function SuiviAvis() {
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
                  <p className="avisHeader__title"> Manager</p>
                </div>
              </div>

              <div className="avis__cnetre">
                <h4 className="avis__cnetre--avis">AVIS</h4>
                <h5 className="avis__cnetre--sondage">SONDAGE</h5>
              </div>
            </div>

            <form className="avis__left--down">
              <div className="surpermarket">
                <div className="surpermarket__icon">
                  <BsShopWindow className="icon" />
                </div>
                <div className="surpermarket__input">
                  <label for="market"></label>
                  <select name="market" id="market" className="select">
                    <option value="auchan">Auchan</option>
                    <option value="lidl">Lidl</option>
                  </select>
                </div>
              </div>
              <div className="grocery">
                <div className="grocery__icon">
                  <BsShop className="icon" />
                </div>
                <div className="grocery__input">
                  <label for="grocery"></label>
                  <select name="grocery" id="grocery" className="select">
                    <option value="match">Match</option>
                    <option value="carrefour">Carrefour</option>
                  </select>
                </div>
              </div>
              <div className="btn connexion">
                <p>DECONNEXION</p>
              </div>
            </form>
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
                    <form className="subdate__droplist--list">
                      <label for="type"></label>
                      <select name="type" id="type" className="select-right ">
                        <option value="rayon">Rayon</option>
                        <option value="lidl">Lidl</option>
                      </select>
                    </form>
                  </div>
                  <div className="subdate__date">
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value=""
                      className="subdate__date--input"
                    />
                    <p className="subdate__date--seperator">AU</p>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value=""
                      className="subdate__date--input"
                    />
                  </div>
                </div>
              </div>
              <div className="avis-container--statistics">
                <div>None</div>
                <div>Tow</div>
                <div>Three</div>
                <div>Four</div>
              </div>
              <div className="avis-container--avislist">
                <div>avis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuiviAvis;
