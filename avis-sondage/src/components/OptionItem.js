import React from "react";

const OptionItem = ({ option }) => {
  return (
    <div className="option1">
      <p className="sondageTitleStyle">Option: {option.option}</p>
      <p className="sondagTxtStyle">
        C'etait super bon mais j'ai tout fini en deux bouchées
      </p>
    </div>
  );
};

export default OptionItem;
