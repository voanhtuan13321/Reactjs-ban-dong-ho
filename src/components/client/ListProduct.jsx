import React, { useState } from 'react';
import CardItem from './CardItem';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';

function ListProduct({ products }) {
  const data = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
      price: '4.900.000',
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
      discount: '10%',
      img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
      price: '4.900.000',
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
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
          pageRangeDisplayed={3}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          previousLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
              <GrPrevious />
            </span>
          }
          pageClassName='border border-solid rounded-md py-2 px-4 hover:bg-main-red hover:text-white'
          activeClassName='bg-main-red text-white'
          disabledClassName={true}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ListProduct;
