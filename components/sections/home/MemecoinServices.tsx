import React from "react";
import ServiceCard from "../../common/ServiceCard";

const MemecoinServices: React.FC = () => {
  return (
    <div className="bg-[#081225] py-10 px-2 lg:px-auto">
      <div className="max-w-[1280px] mx-auto my-10">
        <p className="text-center text-white text-[32px] lg:text-[45px]">
          All your Memecoins in one place.
        </p>
        <p className="text-center text-white">
          Dive into the dynamic world of meme coin markets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {SERVICES.map((item, idx) => (
            <ServiceCard
              key={idx}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemecoinServices;

const SERVICES = [
  {
    iconSrc: "/images/meme-logo-icon.png",
    title: "Explore Memecoins",
    description: "Check out all trending Memecoins in the market.",
  },
  {
    iconSrc: "/images/guests-icon.png",
    title: "Quests",
    description: "Engage in web3 quests for Memecoin rewards and prizes",
  },
  {
    iconSrc: "/images/airdrops-icon.png",
    title: "Airdrops",
    description: "Access MemeRadar’s exclusive Airdrops for free",
  },
  {
    iconSrc: "/images/alerts-icon.png",
    title: "Alerts",
    description: "Create alerts to catch the next big Memecoin Moon.",
  },
  {
    iconSrc: "/images/portfolio-icon.png",
    title: "Portfolio",
    description: "Efficiently monitor and manage all your Memecoins",
  },
  {
    iconSrc: "/images/meme-token-icon.png",
    title: "MemeRadar Token",
    description: "Learn more about our platform's own decentralized MemeRadar Token.",
  },
];
