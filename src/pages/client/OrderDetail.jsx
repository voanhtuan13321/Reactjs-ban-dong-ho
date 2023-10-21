import Button from '../../components/Button';

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
  const caculateTotal = (price, quantity, discount) => {
    return quantity * (price - (price * discount) / 100);
  };

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
        <div
          key={index}
          className='flex gap-5 my-5'
        >
          <div className='bg-blue-400 basis-1/5 relative'>
            image
            {item.discount > 0 && (
              <div className='absolute top-0 right-0 m-1 p-1 bg-yellow-300 text-sm rounded-md'>
                Khuyến mãi {item.discount} %
              </div>
            )}
          </div>
          <div className='basis-4/5'>
            <h3 className='font-bold text-xl'>{item.name}</h3>
            <div className='flex my-3'>
              <p className='basis-1/4'>Giá: {item.price.toLocaleString('vi-VN')} VND</p>
              <p className='basis-1/4'>Khuyến mãi: {item.discount} %</p>
              <p className='basis-1/4'>Số lượng: {item.quantity} cái</p>
              <p className='basis-1/4 text-end'>
                Thành tiền:{' '}
                {caculateTotal(item.price, item.quantity, item.discount).toLocaleString('vi-VN')}{' '}
                VND
              </p>
            </div>
            <p className='text-justify'>Mô tả: {item.decription}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='w-container mx-auto'>
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
