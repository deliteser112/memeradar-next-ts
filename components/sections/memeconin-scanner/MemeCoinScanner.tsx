import React from "react";
import MemeCoinTable from "./MemeCoinTable";

const MemeCoinScanner: React.FC = () => {
  return (
    <div className="py-10 px-2 lg:px-auto">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-white text-[24px] lg:text-[34px] max-w-[644px] mx-auto my-8">
          Memecoin Scanner
        </p>
        <MemeCoinTable headers={TABLE_HEADER} content={TABLE_CONTENT} />
      </div>
    </div>
  );
};

export default MemeCoinScanner;

const TABLE_HEADER = [
  {
    title: "Total Accounts",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "Token",
    isOrder: false,
    isWarning: false,
  },
  {
    title: "Earliest Detection",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "Latest Detection",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "Weight",
    isOrder: true,
    isWarning: true,
  },
  {
    title: "",
    isOrder: false,
    isWarning: false,
  }
];

const TABLE_CONTENT = [
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 1,
    name: "Dogecoin",
    icon: "/images/dogecoin-icon.png",
    earliest_detection: 47,
    latest_detection: 47,
    weight: 1.5,
    link: 'https://example.com',
  },
  {
    total_accounts: 2,
    name: "Shiba Inu",
    icon: "/images/shibacoin-icon.png",
    earliest_detection: 86,
    latest_detection: 86,
    weight: 1.5,
    link: 'https://example.com',
  },
];