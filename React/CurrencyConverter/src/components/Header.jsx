import React from "react";
import {
  HiMiniCurrencyDollar,
  HiCurrencyRupee,
  HiMiniCurrencyEuro,
  HiMiniCurrencyPound,
} from "react-icons/hi2";

const Header = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white px-4 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-xl md:text-3xl font-bold">
        <HiCurrencyRupee className="animate-bounce" />
        <HiMiniCurrencyDollar className="animate-spin" />
        <span>Currency Converter</span>
        <HiMiniCurrencyEuro className="animate-pulse" />
        <HiMiniCurrencyPound className="animate-ping" />
      </div>
    </div>
  );
};

export default Header;
