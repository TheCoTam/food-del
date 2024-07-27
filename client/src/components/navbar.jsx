import { assets } from "@/assets";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBasket,
  ShoppingBag,
  LogOut,
  User,
} from "lucide-react";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/StoreContext";

const MENU = [
  { name: "Home", href: "home" },
  { name: "Menu", href: "menu" },
  { name: "Mobile App", href: "mobile-app" },
  { name: "Contact Us", href: "contact-us" },
];

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-[120px] lg:w-[150px]" />
      </Link>
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
          <Link to="/cart">
            <ShoppingBasket className="text-black" />
          </Link>
          {getTotalCartAmount() !== 0 && (
            <div className="absolute min-w-[10px] min-h-[10px] rounded-full bg-orange-500 -top-[8px] -right-[8px]"></div>
          )}
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="text-base border-2 border-solid border-teal-400 hover:bg-teal-300 active:bg-teal-400 py-1 md:py-2 px-2 md:px-4 rounded-2xl cursor-pointer transition"
          >
            Sign In
          </button>
        ) : (
          <div className="group relative space-y-[1px]">
            <User className="rounded-full bg-teal-400 p-1 w-7 h-7 cursor-pointer" />
            <div className="absolute hidden group-hover:flex flex-col gap-2 py-2 px-3 rounded-md border-2 border-solid border-emerald-500 bg-gray-200 right-0 z-[1]">
              <button
                onClick={() => navigate("/myOrders")}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 active:bg-gray-400 px-3 py-2 rounded-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                <p>Orders</p>
              </button>
              <hr className="bg-gray-600 w-full h-[1px] border-none" />
              <button
                onClick={logout}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 active:bg-gray-400 px-3 py-2 rounded-lg"
              >
                <LogOut className="w-5 h-5" />
                <p>Logout</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
