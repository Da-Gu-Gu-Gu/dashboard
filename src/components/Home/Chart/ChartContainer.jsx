import React from "react";
import ChartComponent from "./ChartComponent";
import { FaTelegramPlane } from "react-icons/fa";

const ChartContainer = ({ color }) => {
  return (
    <div className="bg-white shadow md:w-[48%] lg:w-[30%]  p-3">
      <div className="flex justify-between p-2">
        <p className="text-2xl">
          <FaTelegramPlane color={color} />
        </p>
        <p className="text-2xl cursor-pointer">...</p>
      </div>
      <h1 className="text-2xl font-bold my-2">Acme Plus</h1>
      <p className="text-gray-500 text-sm">SALES</p>
      <h1 className="text-3xl font-bold">$24,7800</h1>
      <ChartComponent />
    </div>
  );
};

export default ChartContainer;
