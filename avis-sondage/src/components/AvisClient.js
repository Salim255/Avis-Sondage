import React, { useEffect } from "react";
import { ReactComponent as Up } from "../img/icons/thumbs-up.svg";
import { ReactComponent as Down } from "../img/icons/thumbs-down.svg";
import { ReactComponent as Star } from "../img/icons/star.svg";
import { AiFillLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getClientById } from "../features/review/reviewSlice";
import { getUserByOpinionId } from "../features/userOpinionSlice";
import { Link, useParams } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

function AvisClient({ id, clientModal, setClientModal, toggleModal }) {
  //let { userOpinionId } = useParams();
  let userOpinionId = id;
  const dispatch = useDispatch();
  console.log("====================================");
  console.log(id, "from avisclient");
  console.log("====================================");
  const { isLoading, opinionsList } = useSelector((store) => store.statics);

  const { reviewItems, avgRatting, callPercentage } = useSelector(
    (store) => store.reviews
  );

  let user;
  if (opinionsList.length > 0) {
    user = reviewItems.find((x) => x.id === 1 * userOpinionId);
    console.log(user, "user");
  }

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      <section className="ratting-section" id="clientreview">
        <div className="ratting-container">
          <div
            className="ratting-container__close"
            onClick={() => toggleModal()}
          >
            &times;
          </div>
          <div className="ratting-container__ratting">
            <div className="like">
              <p className="like__text">Aimez vous utiliser l'application ?</p>
              <div className="like__icon ">
                <Up
                  fill={user.satisfaction ? "#8cec8c" : "white"}
                  width={30}
                  height={30}
                />
              </div>
              <div className="like__icon ">
                <Down
                  fill={!user.satisfaction ? "#8cec8c" : "white"}
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="stars">
              <div className="stars__note">Note:</div>

              <div className="stars__stars">
                <div>
                  {[...Array(5)].map((star, index) => {
                    return (
                      <>
                        {user.note - index > 0 ? (
                          <MdStar
                            color={"#ffcc10"}
                            key={index}
                            className="starMargin "
                          />
                        ) : index ? (
                          <MdStar
                            color={"#FFFFFF"}
                            key={index}
                            className="starMargin "
                          />
                        ) : (
                          <MdStar
                            color={"#FFFFFF"}
                            key={index}
                            className="starMargin "
                          />
                        )}
                      </>
                      /*  <MdStar   color={"#ffcc10" } key={index} className='starMargin'/> index <= E ? (<MdStar   color={"#ffcc10" } key={index} className='starMargin'/>):*/
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <form className="form ratting-container__form">
            <div className="form__group">
              <label className="form__group--label">
                Apport quotidien Welleat :
              </label>
              <textarea
                type="text"
                className="form__group--text"
                rows="2"
                value={user.dailyUse}
              />
            </div>
            <div className="form__group">
              <label className="form__group--label">
                Remarque sur Welleat :
              </label>
              <textarea
                type="text"
                className="form__group--text"
                rows="2"
                value={user.notice}
              />
            </div>
            <div className="form__group">
              <label className="form__group--label">Id??e pour Welleat :</label>
              <textarea
                type="text"
                className="form__group--text"
                rows="2"
                value={user.ideas}
              />
            </div>
            <div className="form__group">
              <p>L'utilisateur souhaite ??tre rappell??.</p>
              <div className="contact">
                <div className="contact__info">
                  <p>
                    {/*  {user.notice}
                    {user.notice} */}
                  </p>
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
