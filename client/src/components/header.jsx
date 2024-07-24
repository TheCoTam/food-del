const Header = () => {
  return (
    <div className="h-[34vw] mt-[30px] mx-auto bg-[url('/header_img.png')] bg-contain bg-no-repeat rounded-2xl relative">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn2s">
        <h2 className="text-[4.5vw] md:text-[3.5vw] lg:text-[4.5vw] font-bold text-white">
          Order your favorite food here
        </h2>
        <p className="text-white hidden md:block md:text-sm lg:text-base">
          Chose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time
        </p>
        <button className="bg-white rounded-full py-2 px-4 hover:bg-teal-300 active:bg-teal-400">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
