import React from 'react';
import CardItem from './CardItem';
import Pagination from './Pagination';
import Search from './Search';
import FilterMoney from './FilterMoney';

function ListProduct(props) {
  return (
    <div className='my-2'>
      <div className='grid grid-cols-12 gap-5 '>
        <div className='col-span-3'>
          <CardItem />
        </div>
        <div className='col-span-3 '>
          <CardItem />
        </div>
        <div className='col-span-3 '>
          <CardItem />
        </div>
        <div className='col-span-3 '>
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
        <div className='col-span-3'>
          <CardItem />
        </div>
        <div className='col-span-3'>
          <CardItem />
        </div>
      </div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  );
}

export default ListProduct;
