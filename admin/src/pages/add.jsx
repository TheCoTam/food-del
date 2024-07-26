import { ImageUp } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "salad",
    price: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      toast.success("Product added successfully");
      setData({
        name: "",
        description: "",
        category: "salad",
        price: "",
      });
      setImage(false);
    } else {
      toast.error("Something went wrong");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-[80%] ml-[5vw] mt-[50px]">
      <form className="flex flex-col gap-5 w-1/2" onSubmit={handleSubmit}>
        <label
          htmlFor="image"
          className="flex items-center cursor-pointer gap-3 w-max"
        >
          <div
            className={`flex items-center justify-center w-[150px] border-2 border-dashed rounded-lg ${
              image ? "px-2 py-1" : "px-8 py-8"
            }`}
          >
            {image ? (
              <img src={URL.createObjectURL(image)} alt="image" />
            ) : (
              <ImageUp />
            )}
          </div>
          <p className="font-semibold">Upload Image</p>
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="hidden"
          id="image"
          required
        />
        <p className="font-semibold">Product Name</p>
        <input
          type="text"
          placeholder="e.g Chicken Salad"
          name="name"
          onChange={handleChange}
          value={data.name}
          disabled={isSubmitting}
          className="border-2 p-3 rounded-lg"
          required
        />
        <p className="font-semibold">Product Description</p>
        <textarea
          type="text"
          placeholder="Description about this product"
          name="description"
          onChange={handleChange}
          value={data.description}
          disabled={isSubmitting}
          className="border-2 p-3 rounded-lg"
          required
        />
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5 w-1/2">
            <p className="font-semibold">Product category</p>
            <select
              onChange={handleChange}
              name="category"
              disabled={isSubmitting}
              className="border-2 p-1 rounded-lg"
            >
              <option value="salad">Salad</option>
              <option value="rolls">Rolls</option>
              <option value="deserts">Deserts</option>
              <option value="sandwich">Sandwich</option>
              <option value="cake">Cake</option>
              <option value="pure-veg">Pure Veg</option>
              <option value="pasta">Pasta</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <p className="font-semibold">Product Price</p>
            <input
              type="Number"
              placeholder="e.g 10000"
              name="price"
              onChange={handleChange}
              value={data.price}
              disabled={isSubmitting}
              className="border-2 p-3 rounded-lg"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-max px-3 py-2 rounded-xl border-2 self-center border-rose-500 bg-rose-400 hover:bg-rose-500 active:bg-rose-600 text-gray-700 font-semibold"
          disabled={isSubmitting}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
