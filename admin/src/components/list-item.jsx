import { convertCurrency } from "@/lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

const ListItem = ({ id, src, name, category, price, fetchList, url }) => {
  const removeFood = async () => {
    const response = await axios.post(`${url}/api/food/remove`, { id });
    await fetchList();
    if (response.data.success) {
      toast.success("Food removed");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="grid grid-cols-10 items-center p-3 gap-2 border-2 border-t-0">
      <img src={src} alt="image" />
      <p className="col-span-4">{name}</p>
      <p className="col-span-2">{category}</p>
      <p className="col-span-2">{convertCurrency(price)}</p>
      <p className="text-red-500 cursor-pointer" onClick={removeFood}>
        X
      </p>
    </div>
  );
};

export default ListItem;
