import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import FoodItem from "./food-item";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log(food_list);
  return (
    <div>
      <h2>Top dishes near you</h2>
      <div>
        {food_list.map((food, index) => {
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
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
