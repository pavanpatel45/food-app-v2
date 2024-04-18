import React from "react";
import icon from "../Images/delivery.png";
import play from "../Images/playstore.png";
import apple from "../Images/app.png"
import Logo from "./Logo";

function Footer() {
  return (
    <div>

     
    <div  className=" bg-black">
      <div className="border border-solid border-black bg-black flex flex-row  items-center justify-around top-8" style={{ height: "459px" }}>
        <div className="mb-40">
          {/* <div className="flex flex-row items-center">
          <img
            src={icon}
            alt="icon"
            style={{ height: "48px", width: "48px" }}
          />
          <p
            style={{
              fontWeight: "700",
              color: "white",
              fontSize: "24px",
              marginLeft: "4px",
              fontFamily: "cursive",
            }}
          >
            Swimato
          </p>
        </div> */}
          <Logo />
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              marginLeft: "4px",
            }}
            className="text-gray-400"
          >
            © 2024 Bundl Technologies Pvt. Ltd
          </p>
        </div>
        <div className="mb-32 ">
          <p className="mb-3" style={{ fontWeight: "500", fontSize: "20px", color: "white" }}>Company</p>
          <ul className="text-gray-400 cursor-pointer" style={{ fontSize: "17px" }}>
            <li className="mb-3">About</li>
            <li className="mb-3">Careers</li>
            <li className="mb-3">Team</li>
            <li className="mb-3">Swimato One</li>
            <li className="mb-3">Instamart</li>
          </ul>
        </div>
        <div>
          <p className="mb-3" style={{ fontWeight: "500", fontSize: "20px", color: "white" }}>Contact Us</p>

          <ul className="text-gray-400 cursor-pointer" style={{ fontSize: "17px" }}>
            <li className="mb-3">Help and Support</li>
            <li className="mb-3">Partner with us</li>
            <li className="mb-3">Ride with us</li>
          </ul>
          <p className="mb-3 mt-16" style={{ fontWeight: "500", fontSize: "20px", color: "white" }}>Legal</p>
          <ul className="text-gray-400 cursor-pointer" style={{ fontSize: "17px" }}>

            <li className="mb-3">Terms & Conditions</li>
            <li className="mb-3">Cookie Policy</li>
            <li className="mb-3">Privacy Policy</li>
          </ul>
        </div>
        <div className="mb-16">
          <p className="mb-3" style={{ fontWeight: "500", fontSize: "20px", color: "white" }}>We deliver to:</p>
          <ul className="text-gray-400 cursor-pointer" style={{ fontSize: "17px" }}>

            <li className="mb-3">Bangalore</li>
            <li className="mb-3">Gurgaon</li>
            <li className="mb-3">Hyderabad</li>
            <li className="mb-3">Delhi</li>
            <li className="mb-3">Mumbai</li>
            <li className="mb-3">Indore</li>
            <li className="mb-3">+589 cities</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-20 mb-4 mx-10">
     <div className="ml-6">
       <p style={{ fontSize: "30px", fontWeight: "750", color: "#71797E", fontFamily: "sans-serif" }}>For better experience,download</p>
       <p style={{ fontSize: "30px", fontWeight: "750", color: "#71797E", fontFamily: "sans-serif" }}>the Swimato app now</p>
     </div>
     <div className="flex flex-row">
       <div className="border border-solid h-20 w-56 bg-black flex items-center cursor-pointer ml-4" style={{ borderRadius: "15px" }}>
         <img src={play} alt="playstore-icon" style={{ height: "40px", width: "40px", marginLeft: "10px" }} />
         <div className="ml-4">
           <p style={{ color: "white", fontSize: "12px" }}>GET IT ON </p>
           <p style={{ color: "white", fontWeight: "600", fontSize: "20px" }}>GOOGLE PLAY</p>
         </div>
       </div>
       <div className="border border-solid h-20 w-56 bg-black flex items-center cursor-pointer ml-8" style={{ borderRadius: "15px" }}>
         <img src={apple} alt="playstore-icon" style={{ height: "47px", width: "47px", marginLeft: "10px" }} />
         <div className="ml-4">
           <p style={{ color: "white", fontSize: "14px" }}>Download on the</p>
           <p style={{ color: "white", fontWeight: "600", fontSize: "20px" }}>APP STORE</p>
         </div>
       </div>
     </div>
   </div>
    </div>
    </div>
  );
}

export default Footer;