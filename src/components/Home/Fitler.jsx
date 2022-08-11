import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { VscListFilter } from "react-icons/vsc";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const Fitler = () => {
  return (
    <div className="flex w-max flex-wrap gap-3 items-center ">
      <div className="w-[30px] shadow-sm h-[30px] flex items-center justify-center bg-white rounded-md cursor-pointer">
        <VscListFilter />
      </div>
      <div className="">
        <RangePicker />
      </div>
      <div className="bg-purple-500 h-[40px] flex w-[120px] cursor-pointer items-center justify-around text-white rounded">
        <PlusOutlined />
        Add View
      </div>
    </div>
  );
};

export default Fitler;
