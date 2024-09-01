import React from "react";

const FoodItem = ({ food }) => {
  return (
    <li className="mb-2 flex justify-between items-center" key={food}>
      <span>{food}</span>

      <div>
        <button className="border rounded-sm   ml-2 px-2 py-2 bg-red-500 rounded-xl text-white hover:bg-red-400">
          Delete
        </button>
      </div>
    </li>
  );
};

export default FoodItem;
