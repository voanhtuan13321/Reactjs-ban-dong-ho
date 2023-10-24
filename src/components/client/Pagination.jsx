import React from 'react';
import ReactPaginate from 'react-paginate';
import {GrNext,GrPrevious} from 'react-icons/gr'
function Pagination(props) {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        className='flex justify-center items-center gap-3 my-6'
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
            <GrNext/>
          </span>
        }
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
            <GrPrevious/>
          </span>
        }
        pageClassName='border border-solid rounded-md py-2 px-4 hover:bg-main-red hover:text-white'
        activeClassName='bg-main-red text-white'
        disabledClassName={true}
      />
    </div>
  );
}

export default Pagination;