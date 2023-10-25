import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './Navbar';

const menuAvatar = [
  {
    to: '/client/profile',
    text: 'Profile',
  },
];

export default function Header() {
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false);
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setState(!state)
    // navigate('/login');
  };

  const renderMenuAvatar = () => {
    return menuAvatar.map((item, index) => {
      return (
        <li
          key={index}
          className='p-2 hover:bg-red-100 transition-all duration-200 ease-in-out'
        >
          <Link
            to={item.to}
            className='block'
          >
            {item.text}
          </Link>
        </li>
      );
    });
  };

  return (
    <header className='bg-main-red'>
      <div className='w-container h-header mx-auto py-5 flex items-center justify-between'>
        <div className='text-white text-2xl font-semibold'>LOGO</div>
        <div className='text-white'>
          <Navbar />
        </div>
        <div>
          {state ? (
            <div className='flex items-center relative'>
              <FaShoppingCart
                className='mr-4 text-white text-3xl cursor-pointer hover:opacity-85'
                onClick={() => navigate('/client/cart')}
              />
              <span className='absolute top-0 right-12 bg-white rounded-full text-xs text-center font-semibold w-5 h-5 leading-4 border-2 border-main-red'>
                3
              </span>
              <div
                className='w-10 bg-white rounded-full border-2 border-white relative'
                onMouseEnter={() => setIsHoveredAvatar(true)}
                onMouseLeave={() => setIsHoveredAvatar(false)}
              >
                <img
                  src='/profile.svg'
                  alt='profile'
                />
                {isHoveredAvatar && (
                  <div className='absolute top-5 right-0 z-50 transition-all duration-200 ease-in-out'>
                    <ul className='bg-white shadow-2xl w-36 rounded-md mt-5 overflow-hidden'>
                      {renderMenuAvatar()}
                      <hr />
                      <li className='p-2 hover:bg-red-100 transition-all duration-200 ease-in-out block cursor-pointer'>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                )}
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
