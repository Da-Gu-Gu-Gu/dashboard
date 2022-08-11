import React from "react";

const Bannder = () => {
  return (
    <div className="bg-purple-400/80  my-10 p-4  w-[90%] rounded h-max">
      <h1 className="md:text-3xl text-purple-800 font-semibold pb-3">
        Good afternoon,Acme Inc. 👋
      </h1>
      <p className="text-gray-300">
        Here is what's happening with your projects today:
      </p>
    </div>
  );
};

export default Bannder;
