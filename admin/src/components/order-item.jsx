import { Package } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { convertCurrency } from "@/lib/utils";
import { Phone, Milestone } from "lucide-react";

const OrderItem = ({
  id,
  items,
  name,
  street,
  city,
  state,
  country,
  zipcode,
  phone,
  length,
  amount,
  status,
  url,
  fetchOrders,
}) => {
  const handleChange = async (e) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId: id,
      status: e.target.value,
    });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchOrders();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-gray-500 rounded-lg p-2 sm:p-5 gap-3">
      <div className="w-full md:flex-1 flex items-center gap-3">
        <Package className="text-orange-400 md:w-6 md:h-6 lg:h-8 lg:w-8" />
        <div className="flex flex-col gap-3 flex-1">
          <div className="border border-teal-300 p-2 rounded-md">
            {items.map((item, index) => {
              return (
                item.name +
                " x " +
                item.quantity +
                (index === items.length - 1 ? "" : ", ")
              );
            })}
          </div>
          <p className="text-lg font-semibold">{name}</p>
          <div>
            <div className="flex gap-2 items-center">
              <Milestone className="w-4 h-4" />
              <p>{street},</p>
            </div>
            <p>
              {city}, {state}, {country}, {zipcode}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="w-4 h-4" />
            <p>{phone}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full md:w-[50%]">
        <p>Items: {length}</p>
        <p>{convertCurrency(amount)}</p>
        <select
          onChange={(e) => handleChange(e)}
          value={status}
          className="border-2 border-orange-400 rounded-md bg-orange-100 p-1"
        >
          <option value="Food Processing">Food Processing</option>
          <option value="Out For delivery">Out For delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
};

export default OrderItem;
