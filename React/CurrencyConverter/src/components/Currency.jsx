import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import toast from "react-hot-toast";
import axios from "axios";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");

  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Some Fields Missing");
      return;
    }

    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      setToAmt(
        fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
      );
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-10 space-y-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
          Currency Converter
        </h2>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* FROM */}
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 shadow-sm">
            {from && (
              <img
                src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                alt=""
                className="w-8 h-8"
              />
            )}
            <select
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full bg-transparent outline-none p-2 text-gray-700"
            >
              <option value="">Select From Country</option>
              {CountryData.map((country, idx) => (
                <option
                  value={country.CurrencyCode + " " + country.CountryCode}
                  key={idx}
                >
                  {country.CountryName}
                </option>
              ))}
            </select>
          </div>

          {/* TO */}
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2 shadow-sm">
            {to && (
              <img
                src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                alt=""
                className="w-8 h-8"
              />
            )}
            <select
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full bg-transparent outline-none p-2 text-gray-700"
            >
              <option value="">Select To Country</option>
              {CountryData.map((country, idx) => (
                <option
                  value={country.CurrencyCode + " " + country.CountryCode}
                  key={idx}
                >
                  {country.CountryName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-1 text-gray-600">Amount</label>
          <input
            type="text"
            name="fromAmt"
            value={fromAmt}
            onChange={(e) => setFromAmt(e.target.value)}
            placeholder="Enter amount"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={Convert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md"
        >
          Convert
        </button>

        {/* Result */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-gray-600">Converted Amount</p>
          <p className="text-2xl font-bold text-blue-700">
            {toAmt ? toAmt : "XXXXXX"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Currency;
