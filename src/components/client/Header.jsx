import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/img/Logo.png';
import banner from '../../assets/img/top-banner-chinh-hang-xuat-vat-day-du.png';
import banner1 from '../../assets/img/top-banner-chinh-sach-bao-hanh-doi-tra.png';
import banner2 from '../../assets/img/top-banner-giao-nhanh-mien-phi.png';
import Navbar from './Navbar';
import { AiOutlinePhone } from 'react-icons/ai';

const menuAvatar = [
  {
    to: '/client/profile',
    text: 'Profile',
  },
  {
    to: '/client/change-password',
    text: 'Change password',
  },
];

export default function Header() {
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(!isLoggedIn);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setIsLoggedIn(!isLoggedIn);
    navigate('/client/home');
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
    // <header className='bg-main-red'>
    //   <div className='w-container h-header mx-auto py-5 flex items-center justify-between'>
    //     <div className='text-white text-2xl font-semibold'>LOGO</div>
    //     <div className='text-white'>
    //       <Navbar />
    //     </div>
    //     <div>
    //       {isLoggedIn ? (
    //         <div className='flex items-center relative'>
    //           <FaShoppingCart
    //             className='mr-4 text-white text-3xl cursor-pointer hover:opacity-85'
    //             onClick={() => navigate('/client/cart')}
    //           />
    //           <span className='absolute top-0 right-12 bg-white rounded-full text-xs text-center font-semibold w-5 h-5 leading-4 border-2 border-main-red'>
    //             3
    //           </span>
    //           <div
    //             className='w-10 bg-white rounded-full border-2 border-white relative'
    //             onMouseEnter={() => setIsHoveredAvatar(true)}
    //             onMouseLeave={() => setIsHoveredAvatar(false)}
    //           >
    //             <img
    //               src='/profile.svg'
    //               alt='profile'
    //             />
    //             {isHoveredAvatar && (
    //               <div className='absolute top-5 right-0 z-50 transition-all duration-200 ease-in-out'>
    //                 <ul className='bg-white shadow-2xl w-36 rounded-md mt-5 overflow-hidden'>
    //                   {renderMenuAvatar()}
    //                   <hr />
    //                   <li className='p-2 hover:bg-red-100 transition-all duration-200 ease-in-out block cursor-pointer'>
    //                     <button onClick={handleLogout}>Logout</button>
    //                   </li>
    //                 </ul>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       ) : (
    //         <div>
    //           <Link
    //             to='/login'
    //             className='ml-3 bg-white py-1 px-2 rounded-md hover:opacity-95'
    //           >
    //             Login
    //           </Link>
    //           <Link
    //             to='/register'
    //             className='ml-3 bg-white py-1 px-2 rounded-md hover:opacity-95'
    //           >
    //             Register
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    <header className='bg-main-red'>
      <div className='w-container h-header mx-auto flex items-center justify-between border-b-2'>
        <div className='text-white text-2xl font-semibold flex items-center'>
          <div className='w-16 h-16 mr-2 flex items-center justify-center border border-white rounded-full'>
            <img
              src={logo}
              alt='logo'
              srcSet=''
              className='w-20 h-20'
            />
          </div>
          <p className='text-xl font-bold'>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>W</span>
            <span style={{ transform: 'rotate(5deg)' }}>A</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>T</span>
            <span style={{ transform: 'rotate(5deg)' }}>C</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>H</span>
            <span style={{ transform: 'rotate(5deg)' }}> </span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>S</span>
            <span style={{ transform: 'rotate(5deg)' }}>H</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>O</span>
            <span style={{ transform: 'rotate(5deg)' }}>P</span>
          </p>
        </div>
        <div className='items-center'>
          <div className='ml-4'>
            <input
              type='text'
              placeholder='Search'
              className='w-[350px] h-[50px] px-2 py-1 rounded-md'
            />
          </div>
        </div>
        <div>
          {isLoggedIn ? (
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
      <div className='w-container py-3 mx-auto flex items-center text-white justify-between'>
        <div>
          <Navbar />
        </div>
        <div className='flex'>
          <AiOutlinePhone className='w-8 h-7' />
          <span className='text-white text-lg font-semibold'>Hotline: +84 0984203849</span>
        </div>
      </div>
    </header>
  );
}
