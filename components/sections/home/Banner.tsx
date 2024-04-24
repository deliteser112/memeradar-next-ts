import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto py-8">
        <div className="lg:w-3/5 max-w-[720px] text-center lg:text-left">
          <p className="text-center text-white lg:text-left text-[32px] lg:text-[50px] font-semibold">
            Discover trending{" "}
            <span className="relative">
              <span>Memecoins</span>
              <img src="/images/curve.svg" alt="curve" className="absolute left-0 bottom-[-5px] w-full" />
            </span>{" "}
            on TON, Solana & BASE
          </p>

          <p className="text-thin text-white my-8">
            Find meme coins that are being picked up on X and get alerts on
            Telegram for tokens in real-time with our scanner. Integrated with
            our TG bot, you can easily buy meme coins and snipe them.
          </p>
          <div className="flex my-4 justify-center lg:justify-start">
            <button className="font-bold text-white round-md bg-[#2D35F8] rounded-full py-2 px-6 mr-4">
              Explore Memecoins
            </button>
            <button className="font-bold text-white round-md bg-[#2D35F8] rounded-full py-2 px-6">
              Quests
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 flex justify-end">
          <img
            src="/images/banner-right.png"
            alt="banner right"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
