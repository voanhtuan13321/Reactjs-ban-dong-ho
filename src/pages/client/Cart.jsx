import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className='w-container mx-auto mt-8'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>Your cart</h2>
        <div className='bg-white p-6 shadow-md rounded-lg'>
          <div className='flex justify-center border-b border-gray-300 p-3 bg-slate-400'>
            <div className='w-2/5'>
              <p className='font-semibold'>Product</p>
            </div>
            <div className='w-1/5'>
              <p className='font-semibold'>Image</p>
            </div>
            <div className='w-1/5'>
              <p className='font-semibold'>Quantity</p>
            </div>
            <div className='w-1/5'>
              <p className='font-semibold'>Price</p>
            </div>
            <div className='w-1/5'>
              <p className='font-semibold'>Total</p>
            </div>
            <div className='w-1/5'>
              <p className='font-semibold'>Action</p>
            </div>
          </div>
          <div className='flex justify-between items-center p-3'>
            <div className='w-2/5'>
              <p>Tên sản phẩm 1</p>
            </div>
            <div className='w-1/5'>
              <img
                src='https://bizweb.dktcdn.net/100/021/944/products/dong-ho-ticwatch-e3-techwearvn-1-b27d4164-b949-4833-9d97-681a1fc77860.jpg?v=1634191229660'
                alt='Hình ảnh sản phẩm 1'
                className='w-16 h-16'
              />
            </div>
            <div className='w-1/5 flex'>
              <button className='bg-main-red text-amber-50 w-8 h-7 rounded-lg'>+</button>
              <p className='ml-2 mr-2'>1</p>
              <button className='bg-main-red text-amber-50 w-8 rounded-lg'>-</button>
            </div>
            <div className='w-1/5'>
              <p>$50</p>
            </div>
            <div className='w-1/5'>
              <p>$50</p>
            </div>
            <div className='w-1/5'>
              <button className='bg-red-500 text-amber-50 w-8 rounded-lg h-8 items-center'>
                <AiFillDelete className='ml-2' />
              </button>
            </div>
          </div>
          <div className='flex justify-between p-3'>
            <div className='w-2/5'></div>
            <div className='w-1/5'></div>
            <div className='w-2/5'></div>
            <div className='w-1/5'>
              <div className='font-semibold'>Tổng cộng: $120</div>
            </div>
          </div>

          <div className='flex justify-between p-3'>
            <div className='w-2/5'></div>
            <div className='w-1/5'></div>
            <div className='w-2/5'></div>
            <div className='w-1/5'>
              <button
                className='bg-main-black text-white py-3 px-4 hover:bg-main-red w-full rounded-xl'
                onClick={() => {
                  navigate('/client/order-detail');
                }}
              >
                Thanh toán
              </button>
              <button
                className='text-main-red mt-3 font-semibold bg-white hover:underline py-2 px-4 border border-black rounded-xl w-full'
                onClick={() => navigate('/client')}
              >
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-8 rounded-lg shadow-lg mt-4 mb-4'>
        <h2 className='text-3xl font-semibold mb-4 border-b-2 border-main-red py-3'>
          Today's offer
        </h2>
        <div className='flex'>
          <img
            src='https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/code-20k-techwearvn.jpg?1697034449262'
            alt=''
            srcset=''
            className='w-[400px]'
          />
          <img
            src='https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/code-100k-techwearvn.jpg?1697034449262'
            alt=''
            srcset=''
            className='w-[400px] ml-4'
          />
          <img
            src='https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/code-500k-techwearvn.png?1697034449262'
            alt=''
            srcset=''
            className='w-[400px] ml-4'
          />
        </div>
      </div>
    </div>
  );
}
