import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BtnSlider from './BtnSlider';
import "../Css/FoodItem.css"
export default function FoodItem({dataSlider,title}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    console.log("next slide is called",slideIndex);
    if(slideIndex + 4 > dataSlider.length){
      setSlideIndex(1)
    }
    else if (slideIndex + 4 <= dataSlider.length) {
      setSlideIndex(slideIndex + 4)
    }
  }

  const prevSlide = () => {
    console.log("prev slide is called");
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 4)
    }
    else if (slideIndex <= 1) {
      if(dataSlider.length%4 == 0){
        setSlideIndex(dataSlider.length - 3);
      }
      else if(dataSlider.length%4 == 1){
        setSlideIndex(dataSlider.length );
      }
      else if(dataSlider.length%4 == 2){
        setSlideIndex(dataSlider.length - 1);
      }
      else if(dataSlider.length%4 == 3){
        setSlideIndex(dataSlider.length - 2);
      }
    }
  }
  function handleClick(foodItem){
      console.log("at handleClick : ", foodItem);
  }
  return (
    <div className='flex flex-col gap-4'>
    <div className='flex justify-center text-4xl'>{title}</div>
    <div className='flex gap-4 justify-center my-4'>
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      {slideIndex - 1 >= 0 && slideIndex - 1 <= dataSlider.length -1&&
      
        <div key={dataSlider[slideIndex - 1].id} onClick={() => handleClick(dataSlider[slideIndex-1].name)} className='FoodItem-container '>
           <Link to="/search" state={{name:dataSlider[slideIndex - 1].name}} ><img src={dataSlider[slideIndex - 1].src} height="200px" width="200px" /></Link>
        </div>}
        {slideIndex  >= 0 && slideIndex  <= dataSlider.length-1 &&
      <div key={dataSlider[slideIndex].id} onClick={() => handleClick(dataSlider[slideIndex].name)}  className='FoodItem-container'>
         <Link to="/search" state={{name:dataSlider[slideIndex ].name}} ><img src={dataSlider[slideIndex].src} height="200px" width="200px" /></Link>
      </div>}
      {slideIndex + 1 >= 0 && slideIndex + 1 <= dataSlider.length-1 &&
      <div key={dataSlider[slideIndex + 1].id} onClick={() => handleClick(dataSlider[slideIndex+1].name)}  className='FoodItem-container'>
         <Link to="/search" state={{name:dataSlider[slideIndex + 1].name}} ><img src={dataSlider[slideIndex + 1].src} height="200px" width="200px" /></Link>
      </div>}
      {slideIndex +2  >= 0 && slideIndex +2 <= dataSlider.length-1 &&
      <div key={dataSlider[slideIndex + 2].id} onClick={() => handleClick(dataSlider[slideIndex+2].name)}  className='FoodItem-container' >
         <Link to="/search" state={{name:dataSlider[slideIndex +2].name}} ><img src={dataSlider[slideIndex + 2].src} height="200px" width="200px" /></Link>
      </div>}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
    </div>
    </div>
  )
}
