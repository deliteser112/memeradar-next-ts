import React, { useEffect, useState } from "react";

interface Header {
  title: string;
  isOrder: boolean;
  isWarning: boolean;
}

export interface Content {
  total_accounts: number;
  name: string;
  icon: string;
  earliest_detection: number;
  latest_detection: number;
  weight: string;
  link: string;
  network: string;
}

interface MemeCoinTableProps {
  headers: Header[];
  content: Content[];
}

const MemeCoinTable: React.FC<MemeCoinTableProps> = ({ headers, content }) => {

  const [sortAccount, setSortAccount] = useState(false);
  const [sortEarlyTime, setEarliestTime] = useState(false);
  const [sortLatestTime, setLatestTime] = useState(false);

  const sortData = (eventData, ) => {

  }

  const getElapsedTime = (minutes: number) => {
    let min = minutes % 60;
    let hour = (minutes - min) / 60;
    let remainderHour = hour % 60;
    let days = (hour - remainderHour) / 24;

    if (hour > 0 && days <= 0)
      return `${hour} hrs ${min} min ago`
    else if (days > 0)
      return `${days} days ${remainderHour} hrs ago`

    return `${minutes} min ago`
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-[#BFC4DD]">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`py-2 px-4 ${header.isOrder ? "text-center" : ""}`}
              >
                <div className="flex justify-center items-center">
                  <span className="mr-1">{header.title}</span>
                  {header.isWarning && (
                    <>
                      <img
                        src="/images/table-order.svg"
                        className="mt-[1px] h-3 w-3 mr-1"
                        alt="warning order"
                        onClick
                      />
                      <img
                        src="/images/table-warning.svg"
                        className="mt-[1px] h-4 w-4"
                        alt="warning warning"
                      />
                    </>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((item, index) => (
            <tr
              key={index}
              className={`text-center my-2 rounded-md ${
                index % 2 === 0
                  ? "bg-[#253452] border border-[#253452] hover:bg-[#253478]"
                  : "bg-[#081225] border border-[#303241] hover:bg-[#253478]"
              }`}
            >
              <td className="py-3 px-4 text-white">{item.total_accounts}</td>
              <td className="py-3 px-4 text-white">
                {/* <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 inline mr-2"
                /> */}
                {item.name}
              </td>
              <td className="py-3 px-4 text-white">
                {getElapsedTime(item.earliest_detection)}
              </td>
              <td className="py-3 px-4 text-white">{getElapsedTime(item.latest_detection)}</td>
              <td className="py-3 px-4 text-white">{item.weight}</td>
              <td className="py-3 px-4 text-white">
                <a href={item.link} className=" text-right text-blue-500 hover:underline">
                  <img
                    src="/images/link_visit.svg"
                    className="mt-[1px] h-3 w-3 mr-1"
                    alt="warning order"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemeCoinTable;
