import React from "react";
import { FiSearch, FiInfo, FiMessageCircle } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";

const IconButton = ({ icon }) => {
  const iconHandler = (icon) => {
    switch (icon) {
      case "user":
        return <FaUserAstronaut color="white" />;
      case "search":
        return <FiSearch />;
      case "info":
        return <FiInfo />;
      case "message":
        return <FiMessageCircle />;
      default:
        return <FiSearch />;
    }
  };
  return (
    <div
      className={` ${
        icon === "user" && " bg-purple-700 "
      } cursor-pointer bg-gray-100 text-gray-500 rounded-full w-[30px] h-[30px] flex items-center justify-center`}
    >
      {iconHandler(icon)}
    </div>
  );
};

export default IconButton;
