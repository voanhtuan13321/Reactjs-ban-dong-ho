import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

// routes
const myRouters = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/product-detail',
    element: <ProductDetail />,
  },
];

export default function App() {
  /**
   * Render the routes.
   *
   * @returns component Route.
   */
  const renderRoutes = () => {
    return myRouters.map((rou) => {
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
      <Header />
      <Routes>{renderRoutes()}</Routes>
      <Footer />
    </>
  );
}
