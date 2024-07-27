import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { StoreContext } from "@/context/StoreContext";
import { convertCurrency } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, url, food_list, cartItems } =
    useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const navigate = useNavigate();
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 20000;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryFee,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      toast.success(response.data.message);
      const randomNum = Math.floor(Math.random() * 2);
      if (randomNum) {
        window.location.href = response.data.successUrl;
      } else {
        window.location.href = response.data.errorUrl;
      }
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row my-[50px] justify-between gap-8 p-12 sm:p-0"
    >
      <div className="space-y-4">
        <p className="text-3xl font-bold">Delivery Information</p>
        <p className="font-semibold">Name</p>
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full p-3 border border-solid rounded-lg"
          required
        />
        <p className="font-semibold">Email</p>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
          placeholder="Example@gmail.com"
          className="w-full p-3 border border-solid rounded-lg"
          required
        />
        <p className="font-semibold">Address</p>
        <input
          type="text"
          value={data.street}
          name="street"
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full p-3 border border-solid rounded-lg"
          required
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            value={data.city}
            name="city"
            onChange={handleChange}
            className="w-1/2 p-3 border border-solid rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="State"
            value={data.state}
            name="state"
            onChange={handleChange}
            className="w-1/2 p-3 border border-solid rounded-lg"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip code"
            value={data.zipcode}
            name="zipcode"
            onChange={handleChange}
            className="w-1/2 p-3 border border-solid rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Country"
            value={data.country}
            name="country"
            onChange={handleChange}
            className="w-1/2 p-3 border border-solid rounded-lg"
            required
          />
        </div>
        <p className="font-semibold">Phone Number</p>
        <input
          type="text"
          placeholder="0972-782-789"
          value={data.phone}
          name="phone"
          onChange={handleChange}
          className="w-full p-3 border border-solid rounded-lg"
          required
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
        <button
          type="submit"
          className="self-center w-max bg-orange-300 px-3 py-2 rounded-lg uppercase"
        >
          proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
