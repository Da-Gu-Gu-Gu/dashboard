import React, { useState } from "react";
import IconButton from "./IconButton";
import { BsCaretDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="border-l-2  px-2 cursor-pointer text-purple-400 flex flex-wrap gap-3 items-center"
      >
        <IconButton icon={"user"} />
        <p>UserName</p>
        <BsCaretDown color="black" />
      </div>
      {open && (
        <div className="absolute top-[60px] w-[170px] rounded-lg shadow-lg p-3 bg-white z-100">
          <p className="font-bold text-lg">Acme Inc.</p>
          <p className="italic text-sm pb-3 border-b-2">Admin</p>
          <Link to="/">
            <p className="coursor-pointer text-purple-600 my-3">Settings</p>
          </Link>
          <Link to="/">
            <p className="coursor-pointer text-purple-600">Logout</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
