import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/client/Carousel';
import Brands from '../../components/client/Brands';
import Top5Product from '../../components/client/Top5Product';
import Search from '../../components/client/Search';
import FilterMoney from '../../components/client/FilterMoney';
import ListProduct from '../../components/client/ListProduct';
import requestHandle from '../../utils/requestHandle';

const data = [
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
    price: '4.900.000',
  },
  {
    name: 'B dong ho .',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
    price: '4.900.000',
  },
  {
    name: 'dong ho sit .',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
    price: '4.900.000',
  },
  {
    name: 'a dong ho .',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
    price: '4.900.000',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore odit est debitis at cum, eveniet tenetur quod suscipit ipsam ratione dolorem nemo labore tempora. Cumque sint eligendi recusandae consectetur.',
    discount: '10%',
    img: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
    price: '4.900.000',
  },
];
export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // const fetchProduct = async () => {
  //   try {
  //     const response = await requestHandle.get('product/');
  //     const data = await response.data;
  //     setProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //     navigate('/error');
  //   }
  // };

  return (
    <div className='w-container m-auto mt-2'>
      <Carousel />
      <Brands />
      <Top5Product />
      <div className='relative z-30 flex justify-center py-10 gap-4'>
        <Search data={data} />
        <FilterMoney />
      </div>
      <div className='relative z-10'>
        <ListProduct data={data} />
      </div>
    </div>
  );
}
