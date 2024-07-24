import { assets } from "@/assets";
import { Search, ShoppingBasket } from "lucide-react";
import { useState } from "react";

const MENU = ["Home", "Menu", "Mobile App", "Contact Us"];

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex items-center justify-between py-5">
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      <ul className="flex gap-5 text-lg">
        {MENU.map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer ${
              menu === item
                ? "pb-[2px] border-b-[2px] border-solid border-teal-400"
                : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10">
        <Search className="text-black" />
        <div className="relative">
          <ShoppingBasket className="text-black" />
          <div className="absolute min-w-[10px] min-h-[10px] rounded-full bg-orange-500 -top-[8px] -right-[8px]"></div>
        </div>
        <button className="text-base border-2 border-solid border-teal-400 hover:bg-teal-300 active:bg-teal-400 py-2 px-4 rounded-2xl cursor-pointer transition">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
