import React, { useEffect } from "react";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import imge from "../img/user.jpeg";
import AvisClient from "./AvisClient";

function AvisItem({ id, review, ratting, user, last_name, first_name, img }) {
  useEffect(() => {}, [review, ratting, last_name, first_name]);
  return (
    <>
      <div className="list-avis">
        <div className="list-avis__user">
          <img src={imge} className="list-avis__user--img" alt="user-img" />
          <div className="list-avis__user--name">
            {first_name} {last_name}
          </div>
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
            <span className=" list-avis__note--chiffre">{ratting}</span>/5
          </div>
        </div>
        <div className="list-avis__phone">
          <BsTelephone className="list-avis__phone--icon" />
        </div>
        <a href="#clientreview" className="list-avis__details">
          DÉTAILS
        </a>
      </div>
      <AvisClient
        review={review}
        ratting={ratting}
        first_name={first_name}
        last_name={last_name}
      />
    </>
  );
}

export default AvisItem;
