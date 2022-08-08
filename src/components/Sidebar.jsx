import React from 'react'

const Sidebar = ({open}) => {
  return (
    <div>
        <div className="header my-5 px-3 flex justify-between relative">
            <p>Logo</p>
            <div onClick={open} className="iconwrapper absolute -right-3 w-[30px] h-[30px] flex items-center justify-center text-gray-500  bg-red-200 rounded-full">
                >
                </div>
        </div>
    </div>
  )
}

export default Sidebar