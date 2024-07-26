import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import ListItem from "@/components/list-item";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-5 py-5 flex-1">
      <p className="text-2xl font-bold mb-5">All Foods List</p>
      <div className="grid grid-cols-10 items-center p-3 gap-2 bg-gray-300 rounded-t-md">
        <b className="col-span-2">Images</b>
        <b className="col-span-3">Name</b>
        <b className="col-span-2">Category</b>
        <b className="col-span-2">Price</b>
        <b>Action</b>
      </div>
      {list.length === 0 && (
        <p className="w-full text-xl text-gray-500 text-center py-5">
          No food yet!
        </p>
      )}
      {list.map((item) => (
        <ListItem
          key={item._id}
          id={item._id}
          src={`${url}/images/` + item.image}
          name={item.name}
          price={item.price}
          category={item.category}
          fetchList={fetchList}
          url={url}
        />
      ))}
    </div>
  );
};

export default List;
