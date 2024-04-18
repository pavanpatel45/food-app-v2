import React from "react";
import icon from "../Images/delivery.png";
import image from '../Images/Screenshot (10).png'
import Map from "./Map";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import '../Css/AboutUs.css'
const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      
        <div className="border border-solid border-orange-600 bg-orange-600 h-3/4 w-full flex flex-row  items-center" >
        {/* <div className="flex flex-row justify-center"> */}
          <div className="w-full flex justify-around">
            <img
              src={icon}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md"
              style={{height:"380px", width:"380px"}}
            />
          </div>
          <div className="w-full flex justify-around">
            <p className="text-4xl leading-relaxed mb-6 text-white">
              Our mission is to elevate the quality of life for the urban
              consumer with unparalleled convenience. Convenience is what makes
              us tick. It's what makes us get out of bed and say, "Let's do
              this."{" "}
            </p>
          {/* </div> */}
        </div>
        
      </div>
      <div className="flex justify-center mt-6">
      <img src={image} alt="image"/>
      </div>
      <div className="mt-6">
        <Map/>
      </div>
      <div className="border border-solid h-60 w-full mt-6 " style={{backgroundColor:"#94499C"}}>
        <div className="mt-3 flex flex-row justify-center gap-10 pt-16 items-center">
        <div className="cursor-pointer icon p-2" style={{ fontSize: '3rem', color: 'white' }}>
      <FaLinkedin />
      </div>
      <div className="cursor-pointe icon p-2" style={{ fontSize: '3rem', color: 'white' }}>
      <FaFacebook />
      </div>
      <div className="cursor-pointer icon p-2" style={{ fontSize: '3rem', color: 'white' }}>
      <FaInstagram />
      </div>
      <div className="cursor-pointer icon p-2" style={{ fontSize: '3rem', color: 'white' }}>
      <FaTwitter />
      </div>
      <div className="cursor-pointer icon p-2" style={{ fontSize: '3rem', color: 'white' }}>
      <FaThreads />
      </div>
      </div>
      </div>
    </section>
  );
};

export default About;