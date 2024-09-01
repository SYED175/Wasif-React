import { useState } from "react";
import FoodInput from "./components/FoodInput";
import FoodList from "./components/FoodList";

function App() {
  const [foodList, setFoodList] = useState([]);

  const inputFood = (event) => {
    const newFoodList = [...foodList, event.target.value];
    setFoodList(newFoodList);
    event.target.value = "";
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl p-3 border border-2 border-blue-700  rounded-md">
        <FoodInput inputFood={inputFood} />
        <FoodList foodList={foodList} />
      </div>
    </div>
  );
}

// Message title as props  Parent->child  comm.
// function as props Child->Parent comm.

// when we want to share the data between two components then define in the parent component

export default App;
