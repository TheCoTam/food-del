import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Add from "@/pages/add";
import List from "@/pages/list";
import Orders from "@/pages/orders";
import { Toaster } from "react-hot-toast";

function App() {
  const url = "http://localhost:4000";

  return (
    <div>
      <Toaster />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
