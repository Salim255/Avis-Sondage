import React, { useRef, useState, useEffect } from "react";

export default function Test() {
  const setRef = useRef(null);
  const [arrow, setArrow] = useState(false);
  const arrowHandler = (e) => {
    setArrow(!arrow);

    console.log(arrow);
  };

  return (
    <div className="selector">
      <div id="selectField">
        <p id="selectText">Select</p>
        <div
          className={arrow ? "custom-arrowB" : "custom-arrowA"}
          ref={setRef}
          onClick={arrowHandler}
        ></div>
      </div>
      <ul>
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
  );
}
