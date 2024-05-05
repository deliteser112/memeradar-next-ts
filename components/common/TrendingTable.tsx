import React from "react";

interface TrendingTableProps {
  headers: Array<{ title: string; isOrder: boolean; isWarning: boolean }>;
  content: Array<{
    name: string;
    icon: string;
    price: number;
    interval_1h: number;
    interval_24h: number;
    interval_7d: number;
    vol_24h: number;
    circ_mkt_cap: number;
  }>;
}

const TrendingTable: React.FC<TrendingTableProps> = ({ headers, content }) => {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#0E1726] text-white">
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
          {content.map((contentItem, index) => (
            <tr
              key={index}
              className={`text-center my-2 rounded-md ${
                index % 2 === 0
                  ? "bg-[#253452] border border-[#253452] hover:bg-[#253478]"
                  : "bg-[#081225] border border-[#303241] hover:bg-[#253478]"
              }`}
            >
              <td className="py-3 px-4 text-white">
                <img
                  src={contentItem.icon}
                  alt={contentItem.name}
                  className="w-6 h-6 inline-block mr-2"
                />
                {contentItem.name}
              </td>
              <td className="py-3 px-4 text-white">
                ${contentItem.price.toFixed(5)}
              </td>
              <td
                className={`py-3 px-4 ${
                  contentItem.interval_1h < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {contentItem.interval_1h}%
              </td>
              <td
                className={`py-3 px-4 ${
                  contentItem.interval_24h < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {contentItem.interval_24h}%
              </td>
              <td
                className={`py-3 px-4 ${
                  contentItem.interval_7d < 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {contentItem.interval_7d}%
              </td>
              <td className="py-3 px-4 text-white">
                ${contentItem.vol_24h.toFixed(2)}M
              </td>
              <td className="py-3 px-4 text-white">
                ${contentItem.circ_mkt_cap.toFixed(2)}B
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingTable;
