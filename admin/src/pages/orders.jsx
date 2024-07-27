import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import OrderItem from "@/components/order-item";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="py-10 px-8 space-y-10 w-full">
      <p className="text-2xl font-bold">Orders Page</p>
      <div className="flex flex-col gap-5">
        {orders.length === 0 && <p>No Orders</p>}
        {orders.map((order, index) => (
          <OrderItem
            key={index}
            items={order.items}
            name={order.address.name}
            street={order.address.street}
            city={order.address.city}
            state={order.address.state}
            country={order.address.country}
            zipcode={order.address.zipcode}
            phone={order.address.phone}
            length={order.items.length}
            amount={order.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
