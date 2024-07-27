import { useContext } from "react";
import { Plus, Minus } from "lucide-react";

import { StoreContext } from "@/context/StoreContext";
import { assets } from "@/assets";
import { convertCurrency } from "@/lib/utils";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="animate-fadeIn1s shadow-lg rounded-lg">
      <div className="rounded-t-xl overflow-hidden relative">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="w-full object-cover"
        />
        {!cartItems[id] ? (
          <Plus
            onClick={() => addToCart(id)}
            className="w-5 h-5 cursor-pointer absolute bottom-[15px] right-[15px] rounded-full bg-white hover:bg-gray-200 active:bg-gray-300"
          />
        ) : (
          <div className="flex items-center gap-[10px] bg-white rounded-[50px] p-1 absolute bottom-[15px] right-[15px]">
            <button>
              <Minus
                onClick={() => removeFromCart(id)}
                className="w-5 h-5 text-red-500 cursor-pointer bg-red-200 hover:bg-red-300 active:bg-red-400 rounded-full"
              />
            </button>
            <p>{cartItems[id]}</p>
            <button>
              <Plus
                onClick={() => addToCart(id)}
                className="w-5 h-5 text-green-600 cursor-pointer bg-green-200 hover:bg-green-300 active:bg-green-400 rounded-full"
              />
            </button>
          </div>
        )}
      </div>
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_stars} alt="rating" className="w-[70px]" />
        </div>
        <p className="text-xs text-gray-400">{description}</p>
        <p className="text-lg font-semibold text-orange-600">
          {convertCurrency(price)}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
