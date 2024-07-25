import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "@/components/navbar";
import Home from "@/pages/Home/home";
import Cart from "@/pages/Cart/cart";
import PlaceOrder from "@/pages/PlaceOrder/place-order";
import Footer from "@/components/footer";
import LoginPopup from "@/components/Auth/login-popup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
