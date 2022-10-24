import React from "react";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import imge from "../img/user.jpeg";

function AvisItem({ id, review, ratting, user, last_name, first_name, img }) {
  console.log(ratting, review, user);
  return (
    <div className="list-avis">
      <div className="list-avis__user">
        <img src={img} className="list-avis__user--img" alt="user-img" />
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
      <div className="list-avis__details">DÉTAILS</div>
    </div>
  );
}

export default AvisItem;
