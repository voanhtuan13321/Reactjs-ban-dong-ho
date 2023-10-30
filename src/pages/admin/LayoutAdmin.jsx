import React from 'react';
import Header from '../../components/admin/Header';
import { Outlet } from 'react-router-dom';
import Siderbar from '../../components/admin/Siderbar';

export default function LayoutAdmin() {
  return (
    <>
      <Header />
      <Siderbar />
      <Outlet />
    </>
  );
}
