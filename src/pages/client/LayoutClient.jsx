import React from 'react';
import Header from '../../components/client/Header';
import Footer from '../../components/client/Footer';
import { Outlet } from 'react-router-dom';

export default function LayoutClient() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
