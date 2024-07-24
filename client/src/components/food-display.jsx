import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import FoodItem from "./food-item";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list || food_list.length === 0) {
    return (
      <h2 className="flex text-xl text-gray-500 font-bold w-full items-center justify-center my-[30px]">
        No food available
      </h2>
    );
  }

  return (
    <div className="my-[30px]">
      <h2 className="text-2xl font-bold">Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-[30px] gap-7">
        {food_list.map((food, index) => {
          if (category === "All" || category === food.category) {
            return (
              <FoodItem
                key={index}
                id={food._id}
                name={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
