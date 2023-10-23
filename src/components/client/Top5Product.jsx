import React from 'react';
import CardItem from './CardItem';

function Top5Product(props) {
  return (
    <div className='mt-4'>
      <p className='text-main-black text-4xl font-bold'>Top 5 Best Saler</p>
      <div className='grid grid-cols-12 gap-4 mt-4'>
        <div className='col-span-3'>
          <CardItem />
        </div>
        <div className='col-span-3'>
          <CardItem />
        </div>
        <div className='col-span-3'>
          <CardItem />
        </div>
        <div className='col-span-3'>
          <CardItem />
        </div>
      </div>
    </div>
  );
}

export default Top5Product;
