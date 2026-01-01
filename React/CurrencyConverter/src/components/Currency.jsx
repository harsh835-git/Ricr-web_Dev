import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(CountryData);

  return (
    <>
      <div className="bg-amber-100 h-screen">
        <div className=" w-3xl bg-white rounded shaow border p-3">
          <div className="grid gird-cols-2">
            <select
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border p-3 rounded overflow-hidden"
            >
              <option value="">-Select Country-</option>
            </select>

            <select
              name="to"
              value={to}
              onChange={(e) => setto(e.target.value)}
              className="border p-3 rounded overflow-hidden"
            >
              <option value="">-Select Country-</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
