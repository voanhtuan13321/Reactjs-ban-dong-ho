import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/client/Carousel';
import Brands from '../../components/client/Brands';
import Top5Product from '../../components/client/Top5Product';
import Search from '../../components/client/Search';
import FilterMoney from '../../components/client/FilterMoney';
import ListProduct from '../../components/client/ListProduct';
import requestHandle from '../../utils/requestHandle';

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await requestHandle.get('product/');
      const data = await response.data;
      setProducts(data);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  return (
    <div className='w-container m-auto mt-2'>
      <Carousel />
      <Brands />
      <Top5Product />
      <div className='relative z-30 flex justify-center py-10 gap-4'>
        <Search />
        <FilterMoney />
      </div>
      <div className='relative z-10'>
        <ListProduct products={products} />
      </div>
    </div>
  );
}
