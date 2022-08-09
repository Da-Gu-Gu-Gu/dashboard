import React from 'react'
import {BiSearch} from 'react-icons/bi'
import SelectComponents from './SelectComponents';


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Nav = () => {
  return (
    <div className='h-[60px] rounded-lg px-4 mt-3  flex items-center  bg-white'>
        <label for="search" className='cursor-pointer text-gray-500 text-2xl mr-2'><BiSearch/></label>
        <input type={"text"} id="search" className="grow bg-gray-100 p-3 rounded-lg outline-none border-none" placeholder='Search by tracking number '/>

        <div className='flex mx-3 px-2 h-[80%] rounded-lg w-[170px] bg-gray-100  items-center justify-around'>
    <p  className='text-gray-400 mt-[15px]'>City</p>
        <SelectComponents />
    </div>

    <div className='flex  px-2 h-[80%] rounded-lg w-[170px] bg-gray-100  items-center justify-around'>
    <p  className='text-gray-400 mt-[14px]'>Department</p>
      <SelectComponents />
    </div>
      <p className='h-full  ml-3 pt-2 leading-[60px]'>{new Date().toLocaleDateString("en-US", options)}</p>
    </div>
  )
}

export default Nav