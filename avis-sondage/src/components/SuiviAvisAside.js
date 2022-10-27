import React from "react";
import { Link } from "react-router-dom";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
const SuiviAvisAside = ({
  arrowMarketHandler,
  arrowMagasinHandler,
  arrow1,
  arrow2,
}) => {
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
  );
};

export default SuiviAvisAside;
