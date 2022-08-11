import React from "react";
import { RiDashboardFill, RiTeamFill } from "react-icons/ri";
import {
  AiOutlineBarChart,
  AiOutlineDropbox,
  AiOutlineInbox,
  AiOutlineCalendar,
  AiOutlineSetting,
} from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import { TbMessage2, TbTools } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";

const LinkComponent = ({ name }) => {
  const iconHandler = (icon) => {
    switch (icon) {
      case "Dashboard":
        return <RiDashboardFill />;
      case "Analytics":
        return <AiOutlineBarChart />;
      case "Ecommerce":
        return <AiOutlineDropbox />;
      case "Campaigns":
        return <WiStars />;
      case "Team":
        return <RiTeamFill />;
      case "Message":
        return <TbMessage2 />;
      case "Tasks":
        return <FaTasks />;
      case "Inbox":
        return <AiOutlineInbox />;
      case "Calendar":
        return <AiOutlineCalendar />;
      case "Setting":
        return <AiOutlineSetting />;
      case "Utility":
        return <TbTools />;
      default:
        return <AiOutlineBarChart />;
    }
  };

  return (
    <div className={`flex cursor-pointer items-center mt-3 p-2 text-white`}>
      <p className="pr-3">{iconHandler(name)}</p>
      <p>{name}</p>
    </div>
  );
};

export default LinkComponent;
