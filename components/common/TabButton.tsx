import React from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        label !== "TON" ? "ml-[-10px]" : ""
      } px-6 py-2 text-sm font-semibold rounded-md ${
        isActive ? "bg-blue-600 text-white z-10" : "bg-gray-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
