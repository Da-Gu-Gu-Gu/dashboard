import React from 'react'

const Sidebar = ({open}) => {
  return (
    <div>
        <div className="header my-5 px-3 flex justify-between relative">
            <p>Logo</p>
            <div onClick={open} className="iconwrapper absolute -right-3 w-[30px] h-[30px] flex items-center justify-center text-gray-500  bg-gray-300 rounded-full">
                {"<"}
                </div>
        </div>
        <div className="flex overflow-hidden text-gray-400 justify-between my-2 mx-2">
            <p>Request</p>
            <div className="p-1 px-3 rounded-lg bg-gray-300 ">
                1
            </div>
        </div>
        <div className="flex overflow-hidden text-gray-400 justify-between my-2 mx-2">
            <p>Notifications</p>
            <div className="p-1 px-3 rounded-lg bg-gray-300 ">
                1
            </div>
        </div>
    </div>
  )
}

export default Sidebar