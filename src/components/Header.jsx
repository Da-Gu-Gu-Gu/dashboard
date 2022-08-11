import React from "react";
import IconButton from "./Header/IconButton";
import User from "./Header/User";

const Header = ({ sideOpenHandler }) => {
  return (
    <div className="sticky top-0  w-full  flex items-center h-[50px] border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-row items-center  w-full justify-between">
        {/* {/* Header: Left side */}
        <div
          onClick={() => sideOpenHandler()}
          className="flex w-max items-center h-full"
        >
          {/* Hamburger button */}
          <button
            className="text-slate-500 hover:text-slate-600 lg:hidden"
            aria-controls="sidebar"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        {/* Header: Right side */}
        <div className="flex   items-center justify-end">
          <div className="lg:px-8 flex flex-wrap gap-3 ">
            <IconButton icon="search" />
            <IconButton icon="message" />
            <IconButton icon="info" />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
