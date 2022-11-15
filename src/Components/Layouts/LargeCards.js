import React from 'react'
import "./LargeCards.css"
const LargeCards = ({ image, text1, text2 }) => {
  return (
    <div className="largeCard">
    <img src={image} alt="card" />
    <span>{text1}</span>
    <div>
      <span className="productCardSpan">
        <p>{text2}</p>
      </span>
    </div>
    <div className="button-div">
      <button className="card-button">
        Barkeelu <img src="./images/arrow.png" alt="arrow" className="arrow-image"/>
      </button>
    </div>
  </div>  )
}

export default LargeCards