import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { VscListFilter } from "react-icons/vsc";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const Fitler = () => {
  return (
    <div className="flex  w-full md:w-max  flex-wrap flex-col md:flex-row mt-3 md:mt-0 gap-3 items-center md:justify-between justify-center ">
      <div className="flex w-max md:w-max flex-wrap gap-3 justify-between">
        <div className="w-[30px] shadow-sm h-[30px] flex items-center justify-center bg-white rounded-md cursor-pointer">
          <VscListFilter />
        </div>
        <div className="">
          <RangePicker />
        </div>
      </div>
      <div className="bg-purple-500 h-[40px]  flex w-full flex-wrap gap-2 md:w-[120px] cursor-pointer items-center justify-center text-white rounded">
        <PlusOutlined />
        Add View
      </div>
    </div>
  );
};

export default Fitler;
