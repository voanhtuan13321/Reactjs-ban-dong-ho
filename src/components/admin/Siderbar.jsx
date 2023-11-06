import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navs = [
  {
    to: '/admin/brands',
    text: 'Brands',
  },
  {
    to: '/admin/products',
    text: 'Products',
  },
  {
    to: '/admin/orders',
    text: 'Orders',
  },
  {
    to: '/admin/statistical',
    text: 'Statistical',
  },
];

export default function Siderbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogout = () => {
    alert('Logout');
  };

  const renderNav = (nav) => {
    return (
      <div
        key={nav.to}
        onClick={() => navigate(nav.to)}
        className={`cursor-pointer hover:text-red-500 transition-all duration-150 ease-linear p-2 text-2xl ${
          location.pathname === nav.to && 'text-red-500'
        }`}
      >
        {nav.text}
      </div>
    );
  };

  return (
    <div className='h-screen shadow-2xl'>
      <h1 className='font-bold text-6xl text-center py-5'>logo</h1>
      <div className='p-10'>{navs.map((nav) => renderNav(nav))}</div>
      <div className='text-center'>
        <button
          className='bg-red-600 text-white text-lg px-5 py-3 rounded-lg hover:bg-red-500 transition-all duration-150 ease-linear'
          onClick={handleClickLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
