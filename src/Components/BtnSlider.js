import React from 'react'
import leftArrow from "../Images/prev.png";
import rightArrow from "../Images/next.png";

export default function BtnSlider({ direction, moveSlide }) {
    // console.log(direction, moveSlide);
    return (
      <button
        onClick={moveSlide}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} />
      </button>
    );
  }
