import React from "react";
import { ReactComponent as Up } from "../img/icons/thumbs-up.svg";
import { ReactComponent as Down } from "../img/icons/thumbs-down.svg";
import { ReactComponent as Star } from "../img/icons/star.svg";

import { AiFillLike } from "react-icons/ai";

function AvisClient() {
  return (
    <>
      <section className="ratting-section">
        <div className="ratting-container">
          <div className="ratting-container__ratting">
            <div className="like">
              <p className="like__text">Aimez vous utiliser l'application ?</p>
              <div className="like__icon ">
                <Up fill="#8cec8c" width={30} height={30} />
              </div>
              <div className="like__icon ">
                <Down fill="#f4f4f4" width={30} height={30} />
              </div>
            </div>
            <div className="stars">
              <div className="stars__note">Note:</div>

              <div className="stars__stars">
                <div>
                  <span className="star-margin">
                    <Star fill="#eb8b1e" />
                  </span>
                  <span className="star-margin">
                    <Star fill="#eb8b1e" />
                  </span>
                  <span className="star-margin">
                    <Star fill="#eb8b1e" />
                  </span>
                  <span className="star-margin">
                    <Star fill="#eb8b1e" />
                  </span>
                  <span className="star-margin">
                    <Star fill="#eb8b1e" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="form ratting-container__form">
            <div className="form__group">
              <label className="form__group--label">
                Apport quotidien Welleat :
              </label>
              <textarea type="text" className="form__group--text" rows="3" />
            </div>
            <div className="form__group">
              <label className="form__group--label">
                Remarque sur Welleat :
              </label>
              <textarea type="text" className="form__group--text" rows="3" />
            </div>
            <div className="form__group">
              <label className="form__group--label">Idée pour Welleat :</label>
              <textarea type="text" className="form__group--text" rows="3" />
            </div>
            <div className="form__group">
              <p>L'utilisateur souhaite être rappellé.</p>
              <div className="contact">
                <div className="contact__info">
                  <p>Salim Hassan</p>
                  <p>06.44.99.25.89</p>
                </div>
                <div className="contact__btn">
                  <p className="contact__btn--style">CONTACTER</p>
                </div>
              </div>
            </div>
          </form>

          <div className="ratting-container__cancel ">
            <p className="cancel">ANNULER</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AvisClient;
