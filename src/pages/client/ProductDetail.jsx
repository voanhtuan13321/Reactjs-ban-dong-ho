import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const similarProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
  },
  {
    id: 2,
    name: 'Product 2',
    image:
      'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-amazfit-gts-4den-1.jpg?v=1667843229057',
  },
  {
    id: 3,
    name: 'Product 3',
    image:
      'https://bizweb.dktcdn.net/100/021/944/products/vn-galaxy-watch5-pro-den-4198d8e7-d2a8-4f73-9ea2-4ffebfeb6533.jpg?v=1672474572980',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://bizweb.dktcdn.net/100/021/944/products/techwearvn-gtr42.jpg?v=1666887735127',
  },
];

export default function ProductDetail() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='w-container mx-auto mt-8'>
      <div className='bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <img
            src='https://watchbox-cdn.imgix.net/posted-product-images/638252971950586375_PATE323200_4792644_92915_37_1.jpg?h=1540&w=1540&auto=compress,format'
            alt='Hình ảnh sản phẩm'
            className='w-full'
          />
        </div>
        <div>
          <div className='border-b-4 border-main-black pb-7'>
            <h1 className='text-lg font-semibold mb-4'>PATEK PHILIPPE</h1>
            <h1 className='text-4xl font-semibold mb-4'>Grand Complications Perpetual Calendar</h1>
            <p className='text-gray-600 mb-4'>REF 5140J-001</p>
            <p className='text-xl font-bold text-main-red mb-4'>Price: $49,950</p>
            <div className='flex flex-col md:flex-row md:space-x-4'>
              <button className='bg-main-black text-white py-3 px-6 hover:bg-main-red flex-1 mx-2 h-16 font-bold'>
                ADD TO CART
              </button>
              <button className='bg-yellow-5 py-3 px-6 hover:bg-main-red flex-1 mx-2 border border-black text-black font-bold'>
                BUY NOW
              </button>
            </div>
          </div>
          <div className='mt-6 space-y-4 text-gray-600'>
            <h1 className='flex items-center text-lg'>
              <img
                src='https://watchbox-sfcc.imgix.net/icons/wb_sprite.svg#watch-dark'
                alt='oclock'
                className='w-6 h-6 mr-2'
              />
              Authenticated Collector Quality
            </h1>
            <h1 className='flex items-center text-lg'>
              <img
                src='https://watchbox-sfcc.imgix.net/icons/shipping-dark.svg'
                alt='oclock'
                className='w-6 h-6 mr-2'
              />
              Free Expedited Shipping
            </h1>
            <h1 className='flex items-center text-lg'>
              <img
                src='https://watchbox-sfcc.imgix.net/icons/wb_sprite.svg#warranty-dark'
                alt='oclock'
                className='w-6 h-6 mr-2'
              />
              2-Year WatchBox Warranty
            </h1>
          </div>
          <div className=' mb-4 mt-8'>
            <h1 className='text-2xl font-semibold '>Description</h1>
            <p>
              Pre-Owned Patek Philippe Grand Complications Perpetual Calendar (5140J001) self -
              winding automatic watch, features a 37.2mm 18k yellow gold case surrounding a silver
              dial on a black alligator strap with an 18k yellow gold Calatrava Cross deployant
              buckle. Functions include hours, minutes, seconds, chronograph, date, day, month, moon
              phase and perpetual calendar
            </p>
          </div>
          <div className=' mb-4 mt-8'>
            <h1 className='text-2xl font-semibold '>Features</h1>
            <h1 className='mt-2 border-b border-gray-300 font-light'>WATCH DETAILS</h1>
            <div className='mt-4'>
              <div className='flex flex-col'>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Color:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Screen Size:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Origin:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Face Size:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Frame Material:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Wire Material:</h1>
                  <p className='text-gray-600'>Red</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-8 rounded-lg shadow-lg mt-4 py-8'>
        {/* sản phẩm tương tự*/}
        <h1 className='text-3xl font-semibold mb-4'>Similar product</h1>
        <Slider {...carouselSettings}>
          {similarProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />
              <h2>{product.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
