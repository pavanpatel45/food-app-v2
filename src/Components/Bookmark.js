import React, { useEffect, useState } from "react";
import CardMedium from "./CardMedium";
import DialogBox from "./DialogBox";
import { Link } from "react-router-dom";
import home from "../Images/home.png";
export default function Bookmark() {
  const [data, setData] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [id, setId] = useState();
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setId("");
  };
  useEffect(() => {
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=paneer&pageSize=5&pageNumber=1&api_key=rtvxHn8xJkOelav5gz5Trjd2RuhW7n4FwI5CPvAs`;
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_url}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log("Json Data", jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("Error :", error);
        setData("");
      }
    };

    fetchData();
  }, []);
  const handleClick = (id) => {
    console.log("Box is clicked with id", id);
    setIsDialogOpen(true);
    setId(id);
  };
  return (
    <div className="flex justify-center  mt-10">
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        setIsOpen={handleClick}
        id={id}
        isBookmark={true}
      />
      <div className="w-8/12 ">
        {data &&
          data.foods.map((food) => {
            return (
              <CardMedium
                food={food}
                handleClick={() => handleClick(food.fdcId)}
              />
            );
          })}
      </div>
    </div>
  );
}
