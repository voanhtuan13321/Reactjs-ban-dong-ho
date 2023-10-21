import { Route, Routes } from 'react-router-dom';
import Home from './pages/client/Home';
import ProductDetail from './pages/client/ProductDetail';
import LayoutClient from './pages/client/LayoutClient';
import LayoutAdmin from './pages/admin/LayoutAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderDetail from './pages/client/OrderDetail';

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
    path: 'product-detail',
    element: <ProductDetail />,
  },
  {
    path: 'order-detail',
    element: <OrderDetail />,
  },
];

// routes admin
const adminRoute = [
  {
    path: '',
    element: null,
  },
];

export default function App() {
  /**
   * Render the routes.
   *
   * @returns component Route.
   */
  const renderRoutesClient = () => {
    return clientRoute.map((rou) => {
      return (
        <Route
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
    return adminRoute.map((rou) => {
      return (
        <Route
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
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />

        <Route
          path='/client'
          element={<LayoutClient />}
        >
          {renderRoutesClient()}
        </Route>

        <Route
          path='/admin'
          element={<LayoutAdmin />}
        >
          {renderRoutesAdmin()}
        </Route>
      </Routes>
    </>
  );
}
