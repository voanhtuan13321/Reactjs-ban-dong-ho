import React from 'react';
import CardItem from './CardItem';
import Pagination from './Pagination';

function ListProduct({ products }) {
  const renderCartItem = () => {
    return products.map((item, i) => {
      return (
        <CardItem
          item={item}
          key={i}
        />
      );
    });
  };

  return (
    <div className='my-2'>
      <div className='grid grid-cols-12 gap-5 '>{renderCartItem()}</div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  );
}

export default ListProduct;
