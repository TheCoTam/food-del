import { assets } from "@/assets";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "lucide-react";
import { useState } from "react";

const MENU = [
  { name: "Home", href: "home" },
  { name: "Menu", href: "menu" },
  { name: "Mobile App", href: "mobile-app" },
  { name: "Contact Us", href: "contact-us" },
];

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex items-center justify-between py-5">
      <img src={assets.logo} alt="logo" className="w-[120px] lg:w-[150px]" />
      <ul className="md:flex gap-5 md:text-base lg:text-lg hidden">
        {MENU.map((item) => {
          if (item.href === "home") {
            return (
              <Link
                key={item.href}
                to="/"
                onClick={() => setMenu(item.href)}
                className={`cursor-pointer ${
                  menu === item.href
                    ? "pb-[2px] border-b-[2px] border-solid border-teal-400"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            );
          }
          return (
            <a
              href={`#${item.href}`}
              key={item.href}
              onClick={() => setMenu(item.href)}
              className={`cursor-pointer ${
                menu === item.href
                  ? "pb-[2px] border-b-[2px] border-solid border-teal-400"
                  : ""
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </ul>
      <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
        <Search className="text-black" />
        <div className="relative">
          <ShoppingBasket className="text-black" />
          <div className="absolute min-w-[10px] min-h-[10px] rounded-full bg-orange-500 -top-[8px] -right-[8px]"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="text-base border-2 border-solid border-teal-400 hover:bg-teal-300 active:bg-teal-400 py-1 md:py-2 px-2 md:px-4 rounded-2xl cursor-pointer transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
