import { Outlet } from 'react-router-dom';
import Header from '../../components/client/Header';
import Footer from '../../components/client/Footer';

export default function LayoutClient() {
  return (
    <>
      <Header />
      <div className='min-h-[611px]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
