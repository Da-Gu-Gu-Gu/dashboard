import React from 'react'
import { Progress } from 'antd';

const CarCard = () => {
  return (
    <div className='bg-white rounded-lg p-3 w-[48%]'>
        <div className='flex justify-between'>
            <h2 className='font-bold text-xl'>Barcelona - Valencia <span className='pt-3 text-sm text-gray-400'>15 Jun,2:00 PM</span></h2>
            <p className='text-red-400 text-2xl font-bold'>90%</p>
        </div>
        <div className='flex justify-around'>
            <div className='flex w-2/5 flex-col'>
                <div>
                <p className='text-gray-300 mb-0'>Available kg</p>
                <h2 className='text-gray-600'>20/200</h2>
                </div>
                <div>
                <p className='text-gray-300 mb-0'>Shipment Number</p>
                <h2 className='text-gray-600'>V4A34D</h2>
                </div>
                <div>
                <p className='text-gray-300 mb-0'>Truck</p>
                <h2 className='text-gray-600'>lveco 80E18</h2>
                </div>
            </div>
            <div className='w-1/2 h-full'>
            <Progress
      strokeColor={{
        '0%': '#ff0000',
        '100%': '#87d068',
      }}
      style={{
        height:'100%'
      }}
      percent={90}
      showInfo={false}
    />
            </div>
        </div>
    </div>
  )
}

export default CarCard