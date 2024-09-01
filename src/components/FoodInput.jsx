import React from "react";

const FoodInput = ({ inputFood }) => {
  return (
    <input
      type="text"
      className="w-full border border-2 border-gray-400 p-2"
      placeholder="Enter Food Items here"
      onKeyDown={(event) => {
        if (event.key === "Enter") inputFood(event);
      }}
    />
  );
};

export default FoodInput;
