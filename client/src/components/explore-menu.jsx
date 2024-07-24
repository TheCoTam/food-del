import { menu_list } from "@/assets";

const MENU_LIST = [
  {
    id: "salad",
    name: "Salad",
    img: menu_list.menu_1,
  },
  {
    id: "rolls",
    name: "Rolls",
    img: menu_list.menu_2,
  },
  {
    id: "deserts",
    name: "Deserts",
    img: menu_list.menu_3,
  },
  {
    id: "sandwich",
    name: "Sandwich",
    img: menu_list.menu_4,
  },
  {
    id: "cake",
    name: "Cake",
    img: menu_list.menu_5,
  },
  {
    id: "pure-veg",
    name: "Pure Veg",
    img: menu_list.menu_6,
  },
  {
    id: "pasta",
    name: "Pasta",
    img: menu_list.menu_7,
  },
  {
    id: "noodles",
    name: "Noodles",
    img: menu_list.menu_8,
  },
];

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5 mt-10" id="menu">
      <h1 className="text-2xl font-bold">Explore our menu</h1>
      <p className="max-w-[60%]">explore menu text</p>
      <div className="flex justify-between items-center gap-7 text-center my-5 overflow-x-scroll">
        {MENU_LIST.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setCategory((prev) => (prev === item.id ? "All" : item.id))
            }
          >
            <img
              src={item.img}
              alt="image"
              className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition ${
                category === item.id ? "border-[4px] border-[#FFD700]" : ""
              }`}
              id={item.name}
            />
            <label
              htmlFor={item.name}
              className={`mt-2 text-[1.4xw] font-semibold cursor-pointer ${
                category === item.id ? "text-teal-500 " : ""
              }`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>
      <hr className="h-[2px] bg-gray-700 border-0 rounded-full" />
    </div>
  );
};

export default ExploreMenu;
