import Rating from './RatingStar';

function CardItem({ item }) {
  return (
    <div className='col-span-3 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
      <div className='relative'>
        <span className='absolute bg-main-red  rounded-b-md rounded-r-md py-2 px-4 font-bold capitalize shadow-lg right-[0%] opacity-80 hover:opacity-100 '>
          discount {item?.discount}%
        </span>
        <img
          className='rounded-t-lg'
          src={item?.img}
          alt=''
        />
      </div>
      <div className='p-6 flex flex-col justify-center gap-1 '>
        <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center truncate'>
          {item?.name}
        </h5>
        <Rating />
        <div className='flex gap-4 justify-center'>
          <p className='mb-4 text-lg font-semibold text-main-red '>{item?.price}đ</p>
          <p className='mb-4 text-lg font-semibold text-main-black line-through'>4.999.000đ</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
