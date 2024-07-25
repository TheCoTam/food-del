import { assets } from "@/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img src={assets.logo} alt="logo" className="w-[max(10%, 80px)]" />
      <img src={assets.profile_image} alt="profile" className="w-10" />
    </div>
  );
};

export default Navbar;
