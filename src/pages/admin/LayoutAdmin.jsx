import React from 'react';
import { Outlet } from 'react-router-dom';
import Siderbar from '../../components/admin/Siderbar';

export default function LayoutAdmin() {
  return (
    <>
      <div className='flex'>
        <div className='w-380px fixed top-0 left-0'>
          <Siderbar />
        </div>
        <div className='ml-380px p-10 w-full'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
