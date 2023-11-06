import { Route, Routes } from 'react-router-dom';
import Home from './pages/client/Home';
import Cart from './pages/client/Cart';
import Contact from './pages/client/Contact';
import ProductDetail from './pages/client/ProductDetail';
import LayoutClient from './pages/client/LayoutClient';
import Profile from './pages/client/Profile';
import OrderDetail from './pages/client/OrderDetail';
import LayoutAdmin from './pages/admin/LayoutAdmin';
import ChangePassword from './pages/client/ChangePassword';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Index from './pages/client/Index';
import ForgotPassword from './components/client/ForgotPassword';
import Brands from './pages/admin/Brands';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Statistical from './pages/admin/Statistical';

// routes client
const clientRoute = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'product-detail/:id',
    element: <ProductDetail />,
  },
  {
    path: 'order-detail',
    element: <OrderDetail />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'change-password',
    element: <ChangePassword />,
  },
];

// routes admin
const adminRoute = [
  {
    path: 'brands',
    element: <Brands />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'orders',
    element: <Orders />,
  },
  {
    path: 'statistical',
    element: <Statistical />,
  },
];

export default function App() {
  /**
   * Render the routes.
   *
   * @returns component Route.
   */
  const renderRoutesClient = () => {
    return clientRoute.map((rou, index) => {
      return (
        <Route
          key={index}
          path={rou.path}
          element={rou.element}
        />
      );
    });
  };

  /**
   * Render the routes.
   *
   * @returns component Route.
   */
  const renderRoutesAdmin = () => {
    return adminRoute.map((rou, index) => {
      return (
        <Route
          key={index}
          path={rou.path}
          element={rou.element}
        />
      );
    });
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Index />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />

        <Route
          path='/client'
          element={<LayoutClient />}
        >
          {renderRoutesClient()}
        </Route>

        <Route
          path='/admin/*'
          element={<LayoutAdmin />}
        >
          {renderRoutesAdmin()}
        </Route>

        <Route
          path='/error'
          element={<Error />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}
