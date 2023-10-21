import { NavLink } from 'react-router-dom';

// navs
const navs = [
  {
    to: '/client/',
    text: 'Home',
  },
  {
    to: '/client/product-detail',
    text: 'Product Details',
  },
];

export default function Navbar() {
  /**
   * Render navbar.
   * @returns
   */
  const renderNavs = () => {
    return navs.map((nav) => {
      /**
       * Handle class name
       * @param {*} param0
       * @returns
       */
      const handleClassName = ({ isActive }) => {
        let className = 'mx-3';
        isActive && (className += ' font-bold');
        return className;
      };

      return (
        <NavLink
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
