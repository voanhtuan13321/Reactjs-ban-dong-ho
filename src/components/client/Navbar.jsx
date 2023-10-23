import { NavLink } from 'react-router-dom';

// navs
const navs = [
  {
    to: '/client/',
    text: 'Home',
  },
  {
    to: '/client/contact',
    text: 'Contact',
  },
];

export default function Navbar() {
  /**
   * Render navbar.
   * @returns
   */
  const renderNavs = () => {
    return navs.map((nav, index) => {
      /**
       * Handle class name
       * @param {*} param0
       * @returns
       */
      const handleClassName = ({ isActive }) => {
        let className = 'mx-3 transition-all duration-200 ease-in-out';
        isActive && (className += ' font-bold');
        return className;
      };

      return (
        <NavLink
          key={index}
          to={nav.to}
          className={handleClassName}
        >
          {nav.text}
        </NavLink>
      );
    });
  };

  return <>{renderNavs()}</>;
}
