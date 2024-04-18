import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import { Outlet } from 'react-router-dom'
import FoodItem from '../Components/FoodItem'
import dataIndian from '../Data/dataIndianFood'
import dataChinese from '../Data/dataChineseFood'
export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='text-2xl font-bold font-serif text-orange-700 px-10 my-10' style={{fontFamily:"cursive"}}>"Nourish your body, elevate your spirit. Embrace wholesome choices for vitality. From fresh produce to lean proteins, let's celebrate good food and a vibrant, healthy lifestyle together!"<span className='text-black'> :-RAHUL BHAGAT</span></div>
      <FoodItem dataSlider={dataIndian} title="Indian Food"/>
      <FoodItem dataSlider={dataChinese} title="Chinese Food"/>
    </div>
  )
}
