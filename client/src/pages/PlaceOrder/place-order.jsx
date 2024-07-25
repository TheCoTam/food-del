import { useContext } from "react";
import toast from "react-hot-toast";
import { StoreContext } from "@/context/StoreContext";
import { convertCurrency } from "@/lib/utils";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 20000;

  return (
    <form className="flex flex-col md:flex-row my-[50px] justify-between gap-8 p-12 sm:p-0">
      <div className="space-y-4">
        <p className="text-3xl font-bold">Delivery Information</p>
        <p className="font-semibold">Name</p>
        <input
          type="text"
          placeholder="e.g John Doe"
          className="w-full p-3 border border-solid rounded-lg"
        />
        <p className="font-semibold">Email</p>
        <input
          type="email"
          placeholder="Example@gmail.com"
          className="w-full p-3 border border-solid rounded-lg"
        />
        <p className="font-semibold">Address</p>
        <input
          type="text"
          placeholder="Street Address"
          className="w-full p-3 border border-solid rounded-lg"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="w-1/2 p-3 border border-solid rounded-lg"
          />
          <input
            type="text"
            placeholder="State"
            className="w-1/2 p-3 border border-solid rounded-lg"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip code"
            className="w-1/2 p-3 border border-solid rounded-lg"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-1/2 p-3 border border-solid rounded-lg"
          />
        </div>
        <p className="font-semibold">Phone Number</p>
        <input
          type="text"
          placeholder="0972-782-789"
          className="w-full p-3 border border-solid rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5 w-full sm:w-[35%]">
        <h2 className="text-2xl font-bold">Cart Totals</h2>
        <div>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>{convertCurrency(getTotalCartAmount())}</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Delivery Fee</p>
            <p>{convertCurrency(deliveryFee)}</p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>{convertCurrency(getTotalCartAmount() + deliveryFee)}</p>
          </div>
        </div>
        <button className="self-center w-max bg-orange-300 px-3 py-2 rounded-lg uppercase">
          proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
