import React from "react";
import TrendingTable from "../../common/TrendingTable";

const TrendingList: React.FC = () => {
  return (
    <div className="bg-[#081225] py-10 px-2 lg:px-auto">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-white text-[24px] lg:text-[34px] max-w-[644px] mx-auto">
          Be the first to find the most trending Memecoins in real time
        </p>
        <TrendingTable headers={TABLE_HEADER} content={TABLE_CONTENT} />

        <div className="w-full block items-center mt-10 lg:flex">
          <p className="flex-1 text-white text-center lg:text-left">
            List of services that we’re using to calculate data:
          </p>
          <div className="flex-1 flex justify-center items-center mx-auto">
            <span className="text-white text-[18px] mr-2">
              Explore All tokens
            </span>
            <img
              src="/images/arrow-right.svg"
              className="mt-[1px] h-3 w-3"
              alt="arrow right"
            />
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default TrendingList;

const TABLE_HEADER = [
  {
    title: "Name",
    isOrder: false,
    isWarning: false,
  },
  {
    title: "Price",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "1h",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "24h",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "7d",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "Vol 24H",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "Circ.Mkt.Cap",
    isOrder: true,
    isWarning: true,
  },
];

const TABLE_CONTENT = [
  {
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    price: 0.75883,
    interval_1h: -5.6,
    interval_24h: 1.6,
    interval_7d: -3.6,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    price: 0.0083,
    interval_1h: -5.6,
    interval_24h: 3.7,
    interval_7d: -1.2,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    price: 0.75883,
    interval_1h: -5.6,
    interval_24h: 1.6,
    interval_7d: -3.6,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    price: 0.0083,
    interval_1h: -5.6,
    interval_24h: 3.7,
    interval_7d: -1.2,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    price: 0.75883,
    interval_1h: -5.6,
    interval_24h: 1.6,
    interval_7d: -3.6,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    price: 0.0083,
    interval_1h: -5.6,
    interval_24h: 3.7,
    interval_7d: -1.2,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    price: 0.75883,
    interval_1h: -5.6,
    interval_24h: 1.6,
    interval_7d: -3.6,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    price: 0.0083,
    interval_1h: -5.6,
    interval_24h: 3.7,
    interval_7d: -1.2,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    price: 0.75883,
    interval_1h: -5.6,
    interval_24h: 1.6,
    interval_7d: -3.6,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
  {
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    price: 0.0083,
    interval_1h: -5.6,
    interval_24h: 3.7,
    interval_7d: -1.2,
    vol_24h: 4.42,
    circ_mkt_cap: 1.22,
  },
];
