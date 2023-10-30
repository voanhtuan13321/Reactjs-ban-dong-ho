import React from 'react';
import Header from '../../components/admin/Header';
import { Outlet } from 'react-router-dom';
import Siderbar from '../../components/admin/Siderbar';

export default function LayoutAdmin() {
  return (
    <>
      <Header />
      <div className='flex'>
        <div className='basis-1/4'>
          <Siderbar />
        </div>
        <div className='basis-3/4'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
