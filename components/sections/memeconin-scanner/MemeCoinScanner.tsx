import React, { useState, useEffect } from "react";
import MemeCoinTable from "./MemeCoinTable";
import TabButton from "../../common/TabButton";

import Pagination from "../../common/Pagination";

const tabs = ["TON", "BASE", "SOL"];

const MemeCoinScanner: React.FC = () => {
  const [tableContent, setTableContent] = useState([]);
  const [activeTab, setActiveTab] = useState("BASE");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default is 10

  useEffect(() => {
    const dynamicData = Array.from({ length: 40 }, (_, index) => ({
      total_accounts: Math.floor(Math.random() * 10) + 1,  // Dynamic part
      name: index % 2 === 0 ? "Dogecoin" : "Shiba Inu",
      icon: index % 2 === 0 ? "/images/dogecoin-icon.png" : "/images/shibacoin-icon.png",
      earliest_detection: Math.floor(Math.random() * 60) + 10,
      latest_detection: Math.floor(Math.random() * 60) + 10,
      weight: parseFloat((Math.random() * 2 + 1).toFixed(1)),
      link: "https://example.com"
    }));
    setTableContent(dynamicData);
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableContent.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Change items per page
  const changeItemsPerPage = (numItems: number) => {
    setItemsPerPage(numItems);
    setCurrentPage(1);
  };

  return (
    <div className="py-10 px-2 lg:px-auto">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-white text-[24px] lg:text-[34px] max-w-[644px] mx-auto my-8">
          Memecoin Scanner
        </p>

        <div className="block md:flex items-center justify-between mb-6">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>

          <Pagination
            totalItems={tableContent.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={paginate}
            onItemsPerPageChange={changeItemsPerPage}
          />
        </div>

        <MemeCoinTable headers={TABLE_HEADER} content={currentItems} />
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
  },
];

// const TABLE_CONTENT = Array.from({ length: 46 }, (_, index) => ({
//   total_accounts: Math.floor(Math.random() * 10) + 1,
//   name: index % 2 === 0 ? "Dogecoin" : "Shiba Inu",
//   icon: index % 2 === 0 ? "/images/dogecoin-icon.png" : "/images/shibacoin-icon.png",
//   earliest_detection: Math.floor(Math.random() * 60) + 10, // Random minutes between 10 and 69
//   latest_detection: Math.floor(Math.random() * 60) + 10,  // Random minutes between 10 and 69
//   weight: (Math.random() * 2 + 1).toFixed(2), // Random weight between 1.0 and 3.0
//   link: "https://example.com"
// }));
