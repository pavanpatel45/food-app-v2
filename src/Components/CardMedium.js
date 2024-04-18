import React from "react";

export default function CardMedium({ food,handleClick }) {
  return (
    <div
      className="grid grid-cols-9 justify-between p-2 my-2  search hover:rounded-lg gap-x-7 "
      style={{ backgroundColor: "#FFEFD5" }}
      onClick={handleClick}
    >
      
        <div className="col-span-1">
          <div className="text-xs" style={{ color: "#91A3B0" }}>
            Food Id
          </div>
          <div className="text-sm" style={{ color: "#008B8B" }}>
            {food.fdcId}
          </div>
        </div>
        <div className="col-span-7">
          <div className="text-xs" style={{ color: "#91A3B0" }}>
            Food Description
          </div>
          <div className="text-sm" style={{ color: "#008B8B" }}>
            {food.description}
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-xs" style={{ color: "#91A3B0" }}>
            Food Score
          </div>
          <div className="text-sm" style={{ color: "#008B8B" }}>
            {food.score}
          </div>
        </div>
      </div>
  );
}
