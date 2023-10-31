import React from 'react';
import { Outlet } from 'react-router-dom';
import Siderbar from '../../components/admin/Siderbar';
import Orders from './Orders';

export default function LayoutAdmin() {
  return (
    <>
      <div className='flex'>
        <div className='basis-1/5'>
          <Siderbar />
        </div>
        <div className='basis-4/5 p-10'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
