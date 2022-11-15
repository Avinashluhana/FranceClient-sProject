import React from "react";
import "./LargeCards.css";
const LargeCards = ({ image, text1, text2 }) => {
  return (
    <div className="largeCard">
      <img src={image} alt="card" />
      <span>{text1}</span>
      <div className="largeCard-text2">
        <span className="largeCardSpan">
          <p className="text-center">{text2}</p>
        </span>
      </div>
      <div className="button-div">
        <button className="largeCard-button">
          Barkeelu
          <img src="./images/arrow.png" alt="arrow" className="largeCard-arrow-image" />
        </button>
      </div>
    </div>
  );
};

export default LargeCards;
