import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestHandle from '../../utils/requestHandle';
import { AiFillApple } from 'react-icons/ai';
import { SiSamsung, SiXiaomi, SiHuawei } from 'react-icons/si';

function Brands({ handleGetProductsByBrand }) {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await requestHandle.get('brands/');
      const data = await response.data.data;
      // console.log(data);
      setBrands(data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  const renderData = () => {
    const brandIcons = {
      Apple: <AiFillApple className='w-8 h-8' />,
      SamSung: <SiSamsung className='w-8 h-8' />,
      Xiaomi: <SiXiaomi className='w-8 h-8' />,
      Huawei: <SiHuawei className='w-8 h-8' />,
    };

    return brands.map((item, index) => {
      const colors = [
        'text-black-500 font-extrabold',
        'text-blue-700 font-extrabold',
        'text-[#fb923c] font-extrabold',
        'text-red-500 font-extrabold',
      ];
      const textClass = colors[index % colors.length];

      return (
        <div
          key={index}
          onClick={() => handleGetProductsByBrand(item.id)}
          className={`col-span-3 bg-white text-main-black text-lg text-center font-semibold ${textClass} px-4 py-3 rounded-lg cursor-pointer hover:opacity-90 transition-all duration-200 ease-in-out border-2 border-gray-300`}
        >
          {brandIcons[item.name]} {item.name}
        </div>
      );
    });
  };

  return (
    <div className='mt-3'>
      <p className='text-main-black text-4xl font-bold py-5 border-b-2 border-gray-400'>
        DANH MỤC SẢN PHẨM
      </p>
      <div className='grid grid-cols-12 gap-4 mt-5'>{renderData()}</div>
    </div>
  );
}

export default Brands;
