import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Home from "@/pages/Home/home";
import Cart from "@/pages/Cart/cart";
import PlaceOrder from "@/pages/PlaceOrder/place-order";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-[80%] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
