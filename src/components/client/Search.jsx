import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ handleSearch, searchTerm }) => {
  return (
<<<<<<< HEAD
    <div className=''>
      <div className='relative text-gray-600'>
=======
    <div>
      <div className=' relative text-gray-600'>
>>>>>>> 66067547772161f891e1555689edda75f43f85bf
        <input
          className='border-2 border-gray-300 bg-white h-12 px-6 pr-16 rounded-full text-sm focus:outline-none w-64'
          name='search'
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Bạn muốn tìm gì?....'
        />
        <BsSearch className='absolute right-0 top-4 mr-4' />
      </div>
    </div>
  );
};

export default Search;
