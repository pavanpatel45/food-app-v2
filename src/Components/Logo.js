import React from 'react'
import icon from '../Images/delivery.png'
export default function Logo() {
  return (
    <div className="flex flex-row items-center">
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
  </div>
  )
}
