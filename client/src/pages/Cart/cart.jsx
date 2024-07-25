import { useContext } from "react";

import { StoreContext } from "@/context/StoreContext";
import CartTotal from "@/components/Cart/cart-total";
import CartItem from "../../components/Cart/cart-item";

const Cart = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  return (
    <div>
      <div className="grid grid-cols-11 gap-2">
        <p className="col-span-2">Items</p>
        <p className="col-span-3">Title</p>
        <p className="col-span-2">Price</p>
        <p>Qty</p>
        <p className="col-span-2">Total</p>
        <p></p>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-3 mb-5">
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <CartItem
                key={index}
                image={item.image}
                id={item._id}
                name={item.name}
                price={item.price}
                quantity={cartItems[item._id]}
              />
            );
          }
        })}
      </div>
      <CartTotal />
    </div>
  );
};

export default Cart;
