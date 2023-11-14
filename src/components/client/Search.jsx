import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ handleSearch, searchTerm }) => {
  return (
    <div>
      <div className=' relative text-gray-600'>
        <input
          className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          name='search'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Bạn muốn tìm gì?....'
        />
        <BsSearch className='absolute right-0 top-3  mr-4' />
      </div>
    </div>
  );
};

export default Search;
