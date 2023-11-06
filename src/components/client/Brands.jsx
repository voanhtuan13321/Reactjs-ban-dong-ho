import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestHandle from '../../utils/requestHandle';

function Brands({handleGetProductsByBrand}) {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const fecthBrand = async () => {
    try {
      const response = await requestHandle.get('brands/');
      const data = await response.data.data;
      console.log(data);
      setBrands(data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };
  useEffect(() => {
    fecthBrand();
  }, []);
  const renderData = () => {
    return brands.map((item, index) => {
      return (
        <div
          key={index}
          onClick={() => handleGetProductsByBrand(item.id)}
          className='col-span-3 bg-main-black text-white text-lg text-center font-semibold px-4 py-3 rounded-lg cursor-pointer hover:opacity-90 transition-all duration-200 ease-in-out'
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <div className='mt-3 '>
      <p className='text-main-black text-4xl font-bold'>Popular Brands</p>
      <div className='grid grid-cols-12 gap-4 mt-5'>{renderData()}</div>
    </div>
  );
}

export default Brands;
