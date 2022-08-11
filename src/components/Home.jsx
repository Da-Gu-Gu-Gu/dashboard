import React from "react";
import Bannder from "./Home/Bannder";
import BarChatContainer from "./Home/Chart/BarChatContainer";
import ChartContainer from "./Home/Chart/ChartContainer";
import LineChatContainer from "./Home/Chart/LineChatContainer";
import Fitler from "./Home/Fitler";
import Users from "./Home/Users";

const Home = () => {
  return (
    <div className=" h-max flex w-full flex-col items-center">
      <Bannder />
      <div className="w-[90%] flex md:flex-row flex-col flex-wrap gap-3 justify-between py-3">
        <Users />
        <Fitler />
      </div>
      <div className="w-[90%] flex flex-wrap gap-5 mb-20 justify-between py-5">
        <ChartContainer color={"red"} />
        <ChartContainer color={"green"} />
        <ChartContainer color={"blue"} />

        <BarChatContainer />
        <LineChatContainer />
      </div>
    </div>
  );
};

export default Home;
