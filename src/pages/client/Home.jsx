import React from 'react';
import Carousel from '../../components/client/Carousel';
import Brands from '../../components/client/Brands';
import Top5Product from '../../components/client/Top5Product';
import Search from '../../components/client/Search';
import FilterMoney from '../../components/client/FilterMoney';
import ListProduct from '../../components/client/ListProduct';

export default function Home() {
  return (
    <div className='w-container m-auto mt-2'>
      <Carousel />
      <Brands />
      <Top5Product />
      <div className='relative z-30'>
        <Search />
      </div>
      <div className='relative z-40'>
        <FilterMoney />
      </div>
      <div className='relative z-10'>
        <ListProduct />
      </div>
    </div>
  );
}
