import Button from '../../components/Button';
import OrderDetailItem from '../../components/client/OrderDetailItem';

const listDetail = [
  {
    id: 1,
    name: 'Tên sản phẩm',
    price: 30000,
    discount: 0,
    quantity: 20,
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem expedita veritatis a quam corporis! Cum ducimus cupiditate error explicabo! Cumque iusto quos sequi nemo, quam labore voluptates consequatur eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, amet expedita dicta optio architecto enim sint repellat autem accusantium aliquam neque assumenda necessitatibus. Autem, labore. Similique velit ab suscipit magnam?',
  },
  {
    id: 2,
    name: 'Tên sản phẩm',
    price: 30000,
    discount: 10,
    quantity: 20,
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorem expedita veritatis a quam corporis! Cum ducimus cupiditate error explicabo! Cumque iusto quos sequi nemo, quam labore voluptates consequatur eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, amet expedita dicta optio architecto enim sint repellat autem accusantium aliquam neque assumenda necessitatibus. Autem, labore. Similique velit ab suscipit magnam?',
  },
];

export default function OrderDetail() {
  const caculateTotalPrice = listDetail.reduce((preValue, curValue) => {
    const { price, quantity, discount } = curValue;
    return preValue + quantity * (price - (price * discount) / 100);
  }, 0);

  /**
   * Render order details.
   * @returns
   */
  const renderItemDetail = () => {
    return listDetail.map((item, index) => {
      return (
        <OrderDetailItem
          key={index}
          item={item}
        />
      );
    });
  };

  return (
    <div className='w-container px-10 mx-auto shadow-xl rounded-xl'>
      <div>{renderItemDetail()}</div>
      <div className='text-end font-bold'>
        Tổng tiền: {caculateTotalPrice.toLocaleString('vi-VN')} VND
      </div>
      <div className='text-end py-5'>
        <Button>Trở lại</Button>
        <Button
          backGroundColor='main-black'
          color='white'
        >
          Thanh toán
        </Button>
      </div>
    </div>
  );
}
