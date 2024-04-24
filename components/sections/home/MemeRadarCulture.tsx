import React from "react";

const MemeRadarCulture: React.FC = () => {
  return (
    <div className="bg-[#081225]">
      <img src="/images/black-bar.png" alt="bg pattern" className="w-full min-h-[140px]" />
      <div className="relative max-w-[1280px] mx-auto text-center pt-32">
        <img src="/images/memecoin-symbol.png" alt="meme coin symbol" className="absolute mx-auto top-[-160px] left-[50%] transform -translate-x-1/2" />
        <p className="text-center text-[50px] text-bold text-white text-[30px] lg:text-[45px]">
          Cultural Movements Decentralized
        </p>
        <p className="text-center text-[18px] lg:text-[22px] text-white my-4">
          MemeRadar - The ultimate Memecoin of the future
        </p>
        <button className="text-[20px] text-white round-md bg-[#2D35F8] rounded-full py-3 px-8 my-10">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default MemeRadarCulture;
