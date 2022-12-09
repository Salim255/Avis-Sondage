import React, { useEffect, useState } from "react";
import { BsShop, BsShopWindow, BsTelephone } from "react-icons/bs";
import imge from "../img/user.jpeg";
import AvisClient from "./AvisClient";
import { getClientById } from "../features/review/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userOpinionSlice from "../features/userOpinionSlice";

function AvisItem({
  OpinionId,
  fisrtname,
  lastname,
  entity,
  satisfaction,
  note,

  notice,
  ideas,
  contact,
  reviewItems,
}) {
  const [itemId, setItemId] = useState("");

  const dispatch = useDispatch();

  const [clientModal, setClientModal] = useState(false);
  const [client, setClient] = useState(false);
  const toggleModal = () => {
    /* //let item_id = e.target.dataset.id;
    //setItemId(item_id);
    setClientModal(!clientModal);
    console.log(clientModal); */
    setClient(!client);
    console.log("====================================");
    console.log("Hello world Love", client);
    console.log("====================================");
  };

  /*  if () {
    return <div>Loading...</div>;
  } */

  return (
    <>
      <div className="list-avis" /* onClick={handleClick} */>
        <div className="list-avis__user">
          <img src={imge} className="list-avis__user--img" alt="user-img" />
          <div className="list-avis__user--name">
            {fisrtname} {lastname}
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
            <span className=" list-avis__note--chiffre">
              {note ? note : "5"}
            </span>
            <span className="small-chiffre">/5</span>
          </div>
        </div>
        <div className="list-avis__phone">
          <BsTelephone
            className={
              contact
                ? "list-avis__phone--iconTrue"
                : "list-avis__phone--iconFalse"
            }
          />
        </div>
        {/*  <Link
          to={`/avis/${OpinionId}`}
          className="list-avis__details"
          onClick={handleClick}
        >
          DÉTAILS
        </Link> */}
        <button
          className="list-avis__details btn"
          onClick={() => toggleModal()}
        >
          DÉTAILS
        </button>
      </div>
      {/* <AvisClient id={itemId} /> */}
      {client && (
        <AvisClient
          id={OpinionId}
          clientModal={clientModal}
          setClientModal={setClientModal}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

export default AvisItem;
