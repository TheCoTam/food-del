import { assets } from "@/assets";
import {
  Facebook,
  Linkedin,
  Twitter,
  PhoneOutgoing,
  Phone,
  AtSign,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center bg-gray-700 pt-[80px] pb-5 text-white px-[8vw]">
      <div className="w-full grid grid-cols-4 gap-[30px]">
        <div className="flex flex-col gap-5 col-span-2">
          <img src={assets.logo} alt="logo" className="w-[30%]" />
          <p>Hello from footer</p>
          <div className="flex items-center gap-5">
            <Facebook />
            <Twitter />
            <Linkedin />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>COMPANY</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li className="flex items-center gap-2">
              <PhoneOutgoing className="w-4 h-4" />
              <p>0972782236</p>
            </li>
            <li className="flex items-center gap-2">
              <AtSign className="w-4 h-4" />
              <p>hoangnguyenanhtuyen@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-500 h-[2px] w-full" />
      <p>Copyright 2024 TheCoTam - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
