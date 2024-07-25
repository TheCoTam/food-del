import { useContext } from "react";
import { TicketCheck } from "lucide-react";

import { StoreContext } from "@/context/StoreContext";
import { convertCurrency } from "@/lib/utils";

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  if (getTotalCartAmount() === 0) return null;

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5 my-5">
      <div className="flex flex-col gap-5 col-span-2">
        <h2 className="text-2xl font-bold">Cart Totals</h2>
        <div>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>{convertCurrency(getTotalCartAmount())}</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Delivery Fee</p>
            <p>{convertCurrency(20000)}</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>{convertCurrency(getTotalCartAmount() + 20000)}</p>
          </div>
        </div>
        <button className="self-center w-max bg-orange-300 px-3 py-2 rounded-lg uppercase">
          proceed to checkout
        </button>
      </div>
      <div className="flex flex-col space-y-3 px-2 items-center">
        <p className="font-semibold">If you have a coupon, enter it here!</p>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="COUPON CODE"
            className="p-2 border-dashed border-2 md:w-[150px] lg:w-[200px] border-teal-500 rounded-xl"
          />
          <button>
            <TicketCheck className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
