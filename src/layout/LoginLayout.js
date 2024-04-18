import React from "react";
import bg from '../Images/bg.png';
import { Outlet } from "react-router-dom";

export default function LoginFrame() {

  return (
    <div className="relative">
      <img src={bg} alt="icon"  style={{height:"100vh" , width:"100vw"}} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}