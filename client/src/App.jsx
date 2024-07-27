import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/navbar";
import Home from "@/pages/Home/home";
import Cart from "@/pages/Cart/cart";
import Verify from "@/pages/Verify/verify";
import PlaceOrder from "@/pages/PlaceOrder/place-order";
import MyOrder from "@/pages/MyOrders/my-order";
import Footer from "@/components/footer";
import LoginPopup from "@/components/Auth/login-popup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      <Toaster />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="w-[95%] sm:w-[80%] m-auto min-h-[100vh]">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myOrders" element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
