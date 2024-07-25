import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { convertCurrency } from "@/lib/utils";

const CartItem = ({ id, image, name, price, quantity }) => {
  const { removeFromCart } = useContext(StoreContext);

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-11 gap-2">
        <img src={image} className="col-span-2 w-[50px] md:w-[100px]" />
        <p className="col-span-3">{name}</p>
        <p className="col-span-2 text-sm md:text-base break-words">
          {convertCurrency(price)}
        </p>
        <p>{quantity}</p>
        <p className="col-span-2 text-sm md:text-base break-words">
          {convertCurrency(price * quantity)}
        </p>
        <button
          className="cursor-pointer w-full h-full self-center"
          onClick={() => removeFromCart(id)}
        >
          x
        </button>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
