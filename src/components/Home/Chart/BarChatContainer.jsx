import React from "react";
import BarChatComponent from "./BarChatComponent";

const BarChatContainer = () => {
  return (
    <div className="bg-white p-5 w-full md:w-[48%] shadow">
      <h1 className="text-gray-500 pb-4 border-b-2 ">Direct VS Indirect</h1>
      <div
        className="flex justify-between h-[50px] border-b-2 items-center
"
      >
        <h1 className="text-black font-bold text-2xl">$8.25K</h1>
        <h1 className="text-black font-bold text-2xl">$277.7K</h1>
      </div>
      <div className="h-[200px] lg:h-[300px]">
        <BarChatComponent />
      </div>
    </div>
  );
};

export default BarChatContainer;
