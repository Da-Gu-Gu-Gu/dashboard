import React from "react";
import { MdKeyboardArrowLeft, MdOutlineDashboard } from "react-icons/md";
import { FcCdLogo } from "react-icons/fc";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { RiFlagLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { Avatar, Image } from "antd";

const Sidebar = ({ open, sideopen }) => {
  return (
    <div className="h-full ">
      <div className={`header  my-5 px-3 flex  justify-between relative`}>
        <p className="text-4xl">
          <FcCdLogo />
        </p>
        <div
          onClick={open}
          className="iconwrapper border-4 border-gray-200 bg-purple-300/60 text-purple-700 
            cursor-pointer text-3xl absolute -right-3 w-[35px] h-[35px] flex items-center 
            justify-center  
            rounded-full"
        >
          <MdKeyboardArrowLeft />
        </div>
      </div>
      <div className="border-b-2 pb-4 px-3 ">
        <div className="flex mb-5 overflow-hidden items-center text-gray-400 justify-between my-2 mx-2">
          <div className={`flex  w-full   ${!sideopen && "justify-center "}`}>
            <p className="flex text-2xl mr-2 mb-0 ">
              <IoIosInformationCircleOutline />
            </p>
            <span
              className={`${sideopen ? "lg:inline" : "hidden"}  text-normal'`}
            >
              Request
            </span>
          </div>

          <div
            className={`${sideopen ? "lg:inline" : "hidden"} 
            transition-all w-[40px] h-[30px] flex 
            text-center leading-[30px] 
            rounded-lg bg-gray-300/50 `}
          >
            10
          </div>
        </div>
        <div className="flex mb-5 items-center overflow-hidden text-gray-400 justify-between my-2 mx-2">
          <div className={`flex  w-full   ${!sideopen && "justify-center "}`}>
            <p className="flex text-2xl mr-2 mb-0 ">
              <IoNotificationsOutline />
            </p>
            <span
              className={`${sideopen ? "lg:inline" : "hidden"}  text-normal'`}
            >
              Notification
            </span>
          </div>

          <div
            className={`${
              sideopen ? "lg:inline" : "hidden"
            } transition-all bg-gray-300/50    w-[40px] h-[30px] flex 
            text-center leading-[30px] rounded-lg`}
          >
            1
          </div>
        </div>
      </div>

      {/* links */}
      <div className="flex flex-col  flex-wrap gap-8 mt-10 grow h-[50%] justify-between">
        <div className="flex flex-col flex-wrap gap-8 ">
          <div
            className={`flex  w-4/5 mx-auto  text-gray-400 ${
              !sideopen && "justify-center "
            }  }`}
          >
            <p className="flex text-2xl mr-2 mb-0 ">
              <MdOutlineDashboard />
            </p>
            <span
              className={`${sideopen ? "lg:inline" : "hidden"}  text-normal`}
            >
              Dashboard
            </span>
          </div>

          <div
            className={`flex  w-4/5 mx-auto  text-gray-400  ${
              !sideopen && "justify-center "
            } }`}
          >
            <p className="flex text-2xl mr-2 mb-0 ">
              <BsTruck />
            </p>
            <span
              className={`${sideopen ? "lg:inline" : "hidden"}  text-normal`}
            >
              Shipments
            </span>
          </div>

          <div
            className={`flex  w-4/5 mx-auto  text-gray-400  ${
              !sideopen && "justify-center "
            } }`}
          >
            <div className="flex">
              <p className="flex text-2xl mr-2 mb-0 ">
                <BsBoxSeam />
              </p>
              <span
                className={`${sideopen ? "lg:inline" : "hidden"}  text-normal`}
              >
                Parcles
              </span>
            </div>
          </div>

          <div
            className={`flex  w-4/5 mx-auto  text-gray-400 ${
              !sideopen && "justify-center "
            }  }`}
          >
            <p className="flex text-2xl mr-2 mb-0 ">
              <RiFlagLine />
            </p>
            <span
              className={`${sideopen ? "lg:inline" : "hidden"}  text-normal`}
            >
              Branches
            </span>
          </div>

          <div
            className={`flex  w-4/5 mx-auto  text-gray-400 ${
              !sideopen && "justify-center "
            }  }`}
          >
            <div className="flex">
              <p className="flex text-2xl mr-2 mb-0 ">
                <BsPerson />
              </p>
              <span
                className={`${sideopen ? "lg:inline" : "hidden"}  text-normal`}
              >
                Clients
              </span>
            </div>
          </div>
        </div>

        <div className="bg-purple-400 mx-2 rounded-lg p-2 text-center text-white cursor-pointer">
          + Create shipment
        </div>
      </div>

      <div className="flex mt-3 border-t-2 p-2 items-center">
        <Avatar
          src={
            <Image
              src="https://joeschmoe.io/api/v1/random"
              style={{ width: 32 }}
            />
          }
        />
        <div className="grow mx-2">
          <p className="font-bold mb-0">UserName</p>
          <span>Manager</span>
        </div>
        <p>...</p>
      </div>
    </div>
  );
};

export default Sidebar;
