import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='bg-main-red'>
      <div className='w-container h-header mx-auto py-5 flex items-center justify-between'>
        <div className='text-white text-2xl font-semibold'>LOGO</div>
        <div className='text-white'>
          <Navbar />
        </div>
        <div>
          {true ? (
            <div className='flex items-center relative'>
              <FaShoppingCart className='mr-4 text-white text-3xl cursor-pointer hover:opacity-85' />
              <span className='absolute top-0 right-12 bg-white rounded-full text-xs text-center font-semibold w-5 h-5 leading-4 border-2 border-main-red'>
                3
              </span>
              <div className='w-10 bg-white rounded-full border-2 border-white'>
                <img
                  src='/profile.svg'
                  alt='profile'
                />
              </div>
            </div>
          ) : (
            <div>
              <Link
                to='/login'
                className='ml-3 bg-white py-1 px-2 rounded-md hover:opacity-95'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='ml-3 bg-white py-1 px-2 rounded-md hover:opacity-95'
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
