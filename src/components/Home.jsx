import React from "react";
import CarCard from "./CarCard";
import SelectComponents from "./SelectComponents";

const Home = () => {
  return (
    <div className=" h-full   bg-transparent">
      <div className="flex my-4 justify-between">
        <div className="flex items-center">
          <h2 className="font-bold text-2xl mt-3 mr-3">Shipments</h2>
          <div className="rounded-lg cursor-pointer bg-purple-500 p-3 px-5 text-white">
            Arrival (20)
          </div>
          <div className="rounded-lg mx-3 cursor-pointer bg-purple-500/30 p-3 px-5 text-white">
            Arrival (20)
          </div>
          <div className="rounded-lg cursor-pointer bg-purple-500/30 p-3 px-5 text-white">
            Arrival (20)
          </div>
        </div>
        

        <div className="flex flex-wrap gap-3">
        <div className='flex  px-2 rounded-lg w-[190px] min-w-max  bg-gray-100  items-center justify-around'>
    <p  className='text-gray-400 mt-[14px]'>Sort by</p>
      <SelectComponents />
    </div>
    <div className='flex  px-2 rounded-lg w-[190px] min-w-max bg-gray-100  items-center justify-around'>
    <p  className='text-gray-400 mt-[14px]'>Arrival done</p>
      <SelectComponents />
    </div>
        </div>

      </div>

      <div className="flex flex-wrap gap-4">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />

      </div>

    </div>
  );
};

export default Home;
