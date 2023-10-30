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
  const [searchTerm, setSearchTerm] = useState('');
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
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-container m-auto mt-2'>
      <Carousel />
      <Brands />
      <Top5Product />
      <div className='relative z-30 flex justify-center py-10 gap-4'>
        <Search
          products={products}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
        <FilterMoney />
      </div>
      <div className='relative z-10'>
        <ListProduct products={products} filteredList={filteredList}  />
      </div>
    </div>
  );
}
