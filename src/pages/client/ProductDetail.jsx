import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import requestHandle from '../../utils/requestHandle';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState(null);
  const [sameBrandProducts, setSameBrandProducts] = useState([]);
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
  const fetchProduct = async () => {
    try {
      const response = await requestHandle.get(`product/${id}`);
      const data = await response.data;
      setProductDetail(data);
      setSameBrandProducts(data.sameBrandProducts);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, []);

  const renderProductList = () => {
    return sameBrandProducts.map((product) => (
      <div key={product.id}>
        <div className='overflow-hidden'>
          <img
            src={product.imageSource}
            alt={product.name}
            className='hover:scale-110 duration-200 ease-linear cursor-pointer'
            onClick={() => navigate(`/client/product-detail/${product.id}`)}
          />
        </div>
        <h2 className='text-center'>{product.name}</h2>
      </div>
    ));
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
            <h1 className='text-lg font-semibold mb-4'>{productDetail?.brands}</h1>
            <h1 className='text-4xl font-semibold mb-4'>{productDetail?.name}</h1>
            <p className='text-gray-600 mb-4'>{productDetail?.model}</p>
            <p className='text-xl font-bold text-main-red mb-4'>Price: ${productDetail?.price}</p>
            <div className='flex items-center py-4'>
              <p className='text-black-600 font-bold'>Quantity:</p>
              <input
                type='number'
                className='w-14 py-2 px-3 border border-gray-300 rounded ml-3'
                value={1}
              />
            </div>
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
            <p>{productDetail?.description}</p>
          </div>
          <div className=' mb-4 mt-8'>
            <h1 className='text-2xl font-semibold '>Features</h1>
            <h1 className='mt-2 border-b border-gray-300 font-light'>WATCH DETAILS</h1>
            <div className='mt-4'>
              <div className='flex flex-col'>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Color:</h1>
                  <p className='text-gray-600'>{productDetail?.color}</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Screen Size:</h1>
                  <p className='text-gray-600'>{productDetail?.screenSize}</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Origin:</h1>
                  <p className='text-gray-600'>{productDetail?.origin}</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Face Size:</h1>
                  <p className='text-gray-600'>{productDetail?.faceSize}</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Frame Material:</h1>
                  <p className='text-gray-600'>{productDetail?.frameMaterial}</p>
                </div>
                <div className='flex items-center mb-2'>
                  <h1 className='w-36 text-black-600 font-bold'>Wire Material:</h1>
                  <p className='text-gray-600'>{productDetail?.wireMaterial}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-8 rounded-lg shadow-lg mt-4 mb-5'>
        {/* sản phẩm tương tự*/}
        <h1 className='text-3xl font-semibold mb-4'>Similar product</h1>
        <Slider {...carouselSettings}>{renderProductList()}</Slider>
      </div>
    </div>
  );
}
