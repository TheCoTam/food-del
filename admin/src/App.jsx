import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Add from "@/pages/add";
import List from "@/pages/list";
import Orders from "@/pages/orders";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
