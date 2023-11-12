import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Carousel from '../../components/client/Carousel';
import Brands from '../../components/client/Brands';
import Top5Product from '../../components/client/Top5Product';
import Search from '../../components/client/Search';
import ListProduct from '../../components/client/ListProduct';
import requestHandle from '../../utils/requestHandle';
import { setCountCart } from '../../utils/counterCartSlice';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
    fetchCountCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await requestHandle.get('product/');
      const data = await response.data.data;
      setProducts(data);
      setFilteredList(data);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  const fetchCountCart = async () => {
    try {
      const response = await requestHandle.get('cart/');
      const carts = await response.data.data;
      dispatch(setCountCart(carts.length));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (searchTerm) => {
    const filteredList = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  const handleGetProductsByBrand = (id) => {
    requestHandle
      .get(`product/?brandId=${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setFilteredList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-container m-auto mt-2'>
      <Carousel />
      <Brands handleGetProductsByBrand={handleGetProductsByBrand} />
      <Top5Product />
      <div className='relative z-30 flex justify-center py-10 gap-4'>
        <Search
          products={products}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      </div>
      <div className='relative z-10'>
        <ListProduct
          products={products}
          filteredList={filteredList}
        />
      </div>
    </div>
  );
}
