import { assets } from "@/assets";

const AppDownload = () => {
  return (
    <div className="mt-[100px] text-[2vw] font-semibold text-center">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[2vw] my-[40px]">
        <img
          src={assets.play_store}
          alt="play store"
          className="cursor-pointer max-w-[180px] transition hover:scale-105"
        />
        <img
          src={assets.app_store}
          alt="app store"
          className="cursor-pointer max-w-[180px] transition hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AppDownload;
