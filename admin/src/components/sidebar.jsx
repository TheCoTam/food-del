import { NavLink } from "react-router-dom";
import { Plus, List, Package } from "lucide-react";

const MENU = [
  {
    title: "Add item",
    icon: Plus,
    to: "/add",
    className: "text-green-500",
  },
  {
    title: "List items",
    icon: List,
    to: "/list",
    className: "text-blue-500",
  },
  {
    title: "Orders",
    icon: Package,
    to: "/orders",
    className: "text-orange-500",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[18%] border-r border-solid min-h-[100vh] text-[max(1vw, 10px)]">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
        {MENU.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-5 border-2 border-solid py-2 px-3 rounded-l-lg border-r-0 ${
                isActive && "bg-orange-300 border-orange-500"
              }`
            }
          >
            <item.icon className={item.className} />
            <span className="hidden md:block">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
