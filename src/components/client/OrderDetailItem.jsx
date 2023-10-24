export default function OrderDetailItem({ item }) {
  const caculateTotal = (price, quantity, discount) => {
    return quantity * (price - (price * discount) / 100);
  };

  return (
    <div className='flex gap-5 my-5'>
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
            {caculateTotal(item.price, item.quantity, item.discount).toLocaleString('en-US')} USD
          </p>
        </div>
        <p className='text-justify'>Mô tả: {item.decription}</p>
      </div>
    </div>
  );
}
