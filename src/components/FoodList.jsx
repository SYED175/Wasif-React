import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodList }) => {
  return (
    <div className="pl-5 mt-6 mb-2">
      <ul className="list-disc">
        {foodList.map((food) => (
          <FoodItem key={food} food={food} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
