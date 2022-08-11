import React from "react";
import { Link } from "react-router-dom";
import LinkComponent from "./Sidebar/Link";
import { useLocation } from "react-router-dom";

const Sidebar = ({ open }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`
      transition-all
    ${open ? "mobie_menu_open" : "mobile_menu_close"}
    w-[250px] px-8  lg:block left-0 overflow-hidden lg:static lg:top-auto opacity-1 z-40 top-0 bg-gray-800 h-screen text-white`}
    >
      <div className="h-[80px] py-2">
        <p>Logo</p>
      </div>
      <span className="text-gray-400 text-sm">PAGES</span>
      <Link to="/">
        <div className={` ${pathname === "/" && "bg-gray-900"}`}>
          <LinkComponent name={"Dashboard"} />
        </div>
      </Link>
      <Link to="/analytics">
        <div className={` ${pathname === "/analytics" && "bg-gray-900"}`}>
          <LinkComponent name={"Analytics"} />
        </div>
      </Link>
      <Link to="/ecommerce">
        <div className={` ${pathname === "/ecommerce" && "bg-gray-900"}`}>
          <LinkComponent name={"Ecommerce"} />
        </div>
      </Link>
      <Link to="/campaings">
        <div className={` ${pathname === "/campaings" && "bg-gray-900"}`}>
          <LinkComponent name={"Campaigns"} />
        </div>
      </Link>
      <Link to="/team">
        <div className={` ${pathname === "/team" && "bg-gray-900"}`}>
          <LinkComponent name={"Team"} />
        </div>
      </Link>
      <Link to="/messages">
        <div className={` ${pathname === "/messages" && "bg-gray-900"}`}>
          <LinkComponent name={"Messages"} />
        </div>
      </Link>
      <Link to="/tasks">
        <div className={` ${pathname === "/tasks" && "bg-gray-900"}`}>
          <LinkComponent name={"Tasks"} />
        </div>
      </Link>
      <Link to="/inbox">
        <div className={` ${pathname === "/inbox" && "bg-gray-900"}`}>
          <LinkComponent name={"Inbox"} />
        </div>
      </Link>
      <Link to="/calendar">
        <div className={` ${pathname === "/calendar" && "bg-gray-900"}`}>
          <LinkComponent name={"Calendar"} />
        </div>
      </Link>
      <Link to="/settings">
        <div className={` ${pathname === "/settings" && "bg-gray-900"}`}>
          <LinkComponent name={"Settings"} />
        </div>
      </Link>
      <Link to="/utility">
        <div className={` ${pathname === "/utility" && "bg-gray-900"}`}>
          <LinkComponent name={"Utility"} />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
