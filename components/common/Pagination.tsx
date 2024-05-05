// Pagination.tsx
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (number: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex space-x-6 items-center justify-center mt-4 md:mt-0">
      <div className="flex items-center">
        <label htmlFor="itemsPerPage" className="mr-2 text-white text-sm">
          Show
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="bg-gray-700 text-white p-1 rounded"
        >
          {[10, 20, 30, 50].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-1 text-white">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img
            src="/images/left-arrow.svg"
            className="mt-[1px] h-4 w-4"
            alt="left arrow"
          />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === number ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          <img
            src="/images/right-arrow.svg"
            className="mt-[1px] h-4 w-4"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
