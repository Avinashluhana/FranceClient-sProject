import React from "react";
import "./PeopleCard.css";
const PeopleCard = ({ image, text1, text2 }) => {
  return (
    <div className="productCard1">
      <img src={image} alt="card" />
      <span>{text1}</span>
      <div>
        <span className="productCardSpan1">
          <p>{text2}</p>
        </span>
      </div>
    </div>
  );
};

export default PeopleCard;
