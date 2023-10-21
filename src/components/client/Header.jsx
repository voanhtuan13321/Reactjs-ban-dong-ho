import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='bg-main-red'>
      <div className='w-container h-header mx-auto py-5 flex items-center justify-between'>
        <div className='text-white text-2xl font-bold'>LOGO</div>
        <div className='text-white'>
          <Navbar />
        </div>
        <div>
          {true ? (
            <div className='w-10 bg-white rounded-full border-2 border-white'>
              <img
                src='/profile.svg'
                alt='profile'
              />
            </div>
          ) : (
            <div>
              <Link
                to='/login'
                className='ml-3 bg-white py-1 px-2 rounded-md'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='ml-3 bg-white py-1 px-2 rounded-md'
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
