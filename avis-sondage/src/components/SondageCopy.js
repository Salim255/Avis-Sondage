import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";

function Sondage(props) {
  const [selectText, setSelectText] = useState("Select");
  const [arrow, setArrow] = useState(false);
  const refContainer = useRef(null);
  const setRef = useRef(null);

  const selectTextHandler = () => {};

  const optionsHandler = (e) => {
    setSelectText(e.target.innerHTML);
  };

  const arrowHandler = (e) => {
    setArrow(!arrow);
    console.log("====================================");
    // console.log(setRef.current.innerHTML);
    console.log("====================================");
    console.log(setRef.current);
    console.log("====================================");
    console.log("====================================");
  };

  const displyListHandler = () => {
    console.log("====================================");
    console.log(setRef.current);
    console.log("====================================");
  };

  useEffect(() => {
    refContainer.current.innerHTML = selectText;
  }, [selectText]);

  return (
    <div className="hero">
      <div className="selector">
        <div id="selectField" onClick={arrowHandler}>
          <p id="selectText" ref={refContainer}>
            Select
          </p>
          <span className=""></span>
        </div>
        <ul
          id="list"
          onClick={optionsHandler}
          className={!arrow ? "hide" : "show"}
        >
          <li className="options">
            <p>Auchan</p>
          </li>
          <li className="options">
            <p>Carrefour</p>
          </li>
          <li className="options">
            <p>Zara</p>
          </li>
          <li className="options">
            <p>Leclerc</p>
          </li>
          <li className="options">
            <p>Match</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sondage;
