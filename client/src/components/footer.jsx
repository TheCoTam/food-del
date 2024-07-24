import { assets } from "@/assets";
import {
  Facebook,
  Linkedin,
  Twitter,
  PhoneOutgoing,
  AtSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex flex-col gap-5 items-center bg-gray-700 pt-[80px] pb-5 text-white px-[8vw]"
      id="contact-us"
    >
      <div className="w-full flex flex-col items-center lg:grid lg:grid-cols-2 gap-[50px] md:gap-[30px]">
        <div className="flex flex-col gap-5">
          <img src={assets.logo} alt="logo" className="w-full lg:w-[30%]" />
          <p>Hello from footer</p>
          <div className="flex items-center gap-5">
            <Facebook className="bg-blue-600 rounded-md cursor-pointer p-[2px]" />
            <Twitter className="text-blue-600 bg-white cursor-pointer rounded-md p-[2px]" />
            <Linkedin className="bg-blue-600 rounded-md cursor-pointer p-[2px]" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-[50px]">
          <div className="flex flex-col gap-5 text-center">
            <h2 className="text-2xl font-bold">COMPANY</h2>
            <ul className="space-y-2">
              <Link to="/">Home</Link>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 text-center sm:text-start">
            <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
            <ul className="md:pl-3">
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
      </div>
      <hr className="bg-teal-5  00 h-[2px] w-full" />
      <p>Copyright 2024 TheCoTam - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
