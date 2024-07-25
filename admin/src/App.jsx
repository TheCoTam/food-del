import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Add from "@/pages/add";
import List from "@/pages/list";
import Orders from "@/pages/orders";

function App() {
  return (
    <div>
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
