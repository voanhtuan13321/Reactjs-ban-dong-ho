import React from 'react';

const data = ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple'];

function Brands() {
  const renderData = () => {
    return data.map((dt, index) => {
      return (
        <div
          key={index}
          className='col-span-3 bg-main-black text-white text-lg text-center font-semibold px-4 py-3 rounded-lg cursor-pointer hover:opacity-90 transition-all duration-200 ease-in-out'
        >
          {dt}
        </div>
      );
    });
  };

  return (
    <div className='mt-3 '>
      <p className='text-main-black text-4xl font-bold'>Popular Brands</p>
      <div className='grid grid-cols-12 gap-4 mt-5'>{renderData()}</div>
    </div>
  );
}

export default Brands;
