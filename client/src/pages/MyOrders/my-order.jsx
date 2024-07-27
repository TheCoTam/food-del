import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Package, Dot } from "lucide-react";
import toast from "react-hot-toast";

import { StoreContext } from "@/context/StoreContext";
import { convertCurrency } from "@/lib/utils";

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-[50px]">
      <h2 className="text-2xl font-bold">My Orders</h2>
      <div className="flex flex-col gap-5 mt-[30px]">
        {data.length === 0 && (
          <p className="self-center text-2xl font-bold text-gray-400 mt-[50px]">
            No Orders
          </p>
        )}
        {data.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row py-2 px-3 border-2 border-solid rounded-md gap-5 md:gap-3"
          >
            <div className="flex flex-1 items-center gap-5 md:gap-3">
              <Package className="text-orange-400" />
              <p className="flex-1">
                {order.items.map((item, index) => {
                  return (
                    item.name +
                    " x " +
                    item.quantity +
                    (index === order.items.length - 1 ? "" : ", ")
                  );
                })}
              </p>
              <p className="w-max">{convertCurrency(order.amount)}</p>
            </div>
            <div className="flex w-full md:w-[35%] items-center justify-between">
              <p className="">Items: {order.items.length}</p>
              <p className="flex items-center ">
                <Dot />
                {order.status}
              </p>
              <button
                onClick={() => toast.success("clicked")}
                className="w-max bg-orange-300 hover:bg-orange-400 active:bg-orange-500 py-1 px-2  rounded-md"
              >
                Track order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
