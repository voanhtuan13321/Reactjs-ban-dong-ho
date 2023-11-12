import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';
import CardItem from './CardItem';

function ListProduct({ filteredList }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    setPageCount(Math.ceil(filteredList.length / itemsPerPage));
    setCurrentPage(0);
  }, [filteredList]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredList.slice(offset, offset + itemsPerPage);

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
      {pageCount > 1 && (
        <div className='flex justify-center'>
          <ReactPaginate
            breakLabel='...'
            className='flex justify-center items-center gap-3 my-6'
            nextLabel={
              <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
                <GrNext />
              </span>
            }
            pageRangeDisplayed={3}
            pageCount={pageCount}
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
      )}
    </div>
  );
}

export default ListProduct;
