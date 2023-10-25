import React, { useState } from 'react';
import CardItem from './CardItem';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';

function ListProduct({ data }) {
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentPageData = products.slice(offset, offset + itemsPerPage);
  const renderCartItem = () => {
    return currentPageData.map((item, i) => {
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
        <ReactPaginate
          breakLabel='...'
          className='flex justify-center items-center gap-3 my-6'
          nextLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
              <GrNext />
            </span>
          }
          pageRangeDisplayed={4}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          previousLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
              <GrPrevious />
            </span>
          }
          pageClassName='border border-solid rounded-md py-2 px-4 hover:bg-main-red hover:text-white cursor-pointer'
          activeClassName='bg-main-red text-white'
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ListProduct;
