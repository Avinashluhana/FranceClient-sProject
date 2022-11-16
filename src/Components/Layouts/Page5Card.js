import React from "react";
import "./Page5Card.css";
const Page5Card = ({ image, text1, text2, text3 }) => {
  return (
    <div className="largeCard1">
      <img src={image} alt="card" />
      <span className="text-center">{text1}</span>
      <div className="largeCard-text2">
        <span className="largeCardSpan">
          <p>{text2}</p>
        </span>
        <p className="text3">{text3}</p>
      </div>
    </div>
  );
};

export default Page5Card;
