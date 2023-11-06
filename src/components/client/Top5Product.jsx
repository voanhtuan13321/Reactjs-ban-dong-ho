import { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { useNavigate } from 'react-router-dom';
import requestHandler from '../../utils/requestHandle';

function Top5Product() {
  const [top, setTop] = useState([]);
  const navigate = useNavigate();
  const fecthTop5 = async () => {
    try {
      const response = await requestHandler.get('product/top5');
      const data = await response.data.data;
      console.log(data);
      setTop(data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };
  useEffect(() => {
    fecthTop5();
  }, []);

  const renderCartItem = () => {
    return top.map((item, i) => {
      return (
        <CardItem
          item={item}
          key={i}
        />
      );
    });
  };

  return (
    <div className='mt-4'>
      <p className='text-main-black text-4xl font-bold'>Top 5 Best Saler</p>
      <div className='grid grid-cols-12 gap-4 mt-4'>{renderCartItem()}</div>
    </div>
  );
}

export default Top5Product;
