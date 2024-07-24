import Header from "@/components/header";
import ExploreMenu from "@/components/explore-menu";
import { useState } from "react";
import FoodDisplay from "@/components/food-display";
import AppDownload from "@/components/app-download";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
