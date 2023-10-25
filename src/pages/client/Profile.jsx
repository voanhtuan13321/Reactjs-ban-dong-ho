import { useState } from 'react';

export default function Profile() {
  const [isStatusEdit, setIsStatusEdit] = useState(false);

  const handleClickEdit = () => {
    setIsStatusEdit(!isStatusEdit);
  };
  const [activeTab, setActiveTab] = useState('profile');

  const switchToProfile = () => {
    setActiveTab('profile');
  };

  const switchToHistoryOrder = () => {
    setActiveTab('historyOrder');
  };
  const orders = [
    {
      id: 1,
      date: '2023-10-24',
      items: [
        { name: 'Apple Watch', price: 20, quantity: 2 },
        { name: 'Mi Band 5', price: 15, quantity: 1 },
      ],
      total: 55,
    },
    {
      id: 2,
      date: '2023-10-22',
      items: [{ name: 'Apple Watch C3', price: 30, quantity: 3 }],
      total: 90,
    },
  ];

  return (
    <div className='w-container mx-auto mt-20'>
      <div className='flex ml-5'>
        <button
          className={`${
            activeTab === 'profile' ? 'bg-main-red text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-tl-lg rounded-tr-lg`}
          onClick={switchToProfile}
        >
          Profile
        </button>
        <button
          className={`${
            activeTab === 'historyOrder' ? 'bg-main-red text-white' : 'bg-gray-300 text-gray-700'
          } px-4 py-2 rounded-tl-lg rounded-tr-lg`}
          onClick={switchToHistoryOrder}
        >
          History Order
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className='pb-16 bg-blueGray-200'>
          {' '}
          <div className='w-container mx-auto'>
            <section className='py-16 bg-blueGray-200'>
              <div className='mx-auto px-4'>
                <div className='flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg'>
                  <div className='px-6'>
                    <div className='flex flex-wrap justify-center'>
                      <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                        <div className='relative w-full h-full'>
                          <img
                            alt='...'
                            src='/profile.svg'
                            className='shadow-xl rounded-full h-auto align-middle border-none absolute left-0 right-0 -top-24 max-w-150-px'
                          />
                        </div>
                      </div>
                      <div className='w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center'>
                        <div className='py-6 px-3 mt-32 sm:mt-0'>
                          <button
                            className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'
                            onClick={handleClickEdit}
                          >
                            {isStatusEdit ? 'Cancel' : 'Edit'}
                          </button>
                        </div>
                      </div>
                      <div className='w-full lg:w-4/12 px-4 lg:order-1'></div>
                    </div>
                    <div className='text-center mt-28'>
                      <form className='w-full py-10 px-20'>
                        <div className='grid grid-cols-2 col-span-2 gap-10'>
                          <div className='col-span-1 mb-6'>
                            <label
                              className='text-[#808080] text-sm font-bold self-center'
                              htmlFor='fullname'
                            >
                              Fullname
                            </label>
                            <input
                              readOnly={!isStatusEdit}
                              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                              type='text'
                              id='fullname'
                              name='fullname'
                              placeholder='Enter fullname'
                            />
                          </div>

                          <div className='col-span-1 mb-6'>
                            <label
                              className='text-[#808080] text-sm font-bold self-center'
                              htmlFor='email'
                            >
                              Email
                            </label>
                            <input
                              readOnly={!isStatusEdit}
                              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                              type='email'
                              id='email'
                              name='email'
                              placeholder='Enter email'
                            />
                          </div>
                        </div>

                        <div className='grid grid-cols-2 col-span-2 gap-10'>
                          <div className='col-span-1 mb-6'>
                            <label
                              className='text-[#808080] text-sm font-bold self-center'
                              htmlFor='birthday'
                            >
                              Birthday
                            </label>
                            <input
                              readOnly={!isStatusEdit}
                              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                              type='date'
                              id='birthday'
                              name='birthday'
                            />
                          </div>

                          <div className='col-span-1 mb-6'>
                            <label
                              className='text-[#808080] text-sm font-bold self-center'
                              htmlFor='phone'
                            >
                              Phone
                            </label>
                            <input
                              readOnly={!isStatusEdit}
                              className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                              type='text'
                              id='phone'
                              name='phone'
                              placeholder='Enter phone'
                            />
                          </div>
                        </div>

                        <div className='mb-6'>
                          <label
                            className='text-[#808080] text-sm font-bold self-center'
                            htmlFor='address'
                          >
                            Address
                          </label>
                          <input
                            readOnly={!isStatusEdit}
                            className='w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-b-2 focus:border-main-red'
                            type='text'
                            id='address'
                            name='address'
                            placeholder='Enter address'
                          />
                        </div>
                        {isStatusEdit && (
                          <button className='bg-main-black text-white py-2 px-4 rounded-xl hover:opacity-90'>
                            Save
                          </button>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {activeTab === 'historyOrder' && (
        <div className='pb-16 bg-blueGray-200'>
          <div className='w-container mx-auto'>
            <section className='py-16 bg-blueGray-200'>
              <div className='mx-auto px-4'>
                <h1 className='text-3xl font-semibold mb-6'>Order History</h1>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className='bg-white shadow-xl rounded-lg p-4 mb-4'
                  >
                    <div className='flex justify-between mb-2 border-b pb-2'>
                      <p className='text-lg font-semibold'>Product</p>
                      <p className='text-lg font-semibold ml-3'>Name</p>
                      <p className='text-gray-600'>{order.date}</p>
                    </div>
                    <ul>
                      {order.items.map((item, index) => (
                        <li
                          key={index}
                          className='flex justify-between items-center mb-2'
                        >
                          <img
                            src='https://bizweb.dktcdn.net/100/021/944/products/fitbit-sense-2-techwearvn-2.jpg?v=1695741879530'
                            alt='Hình ảnh sản phẩm 2'
                            className='w-16 h-16 object-cover'
                          />
                          <p>{item.name}</p>
                          <p>
                            ${item.price} x {item.quantity}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className='flex justify-between mt-2'>
                      <p className='font-semibold'>Total:</p>
                      <p className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 640 512'
                          className='text-green-500 w-6 h-6 mr-2 fill-current'
                        >
                          <path d='M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                        </svg>
                        <span className='text-green-500 text-lg font-semibold'>
                          Vận chuyển thành công
                        </span>
                      </p>

                      <p className='text-main-red font-bold'>${order.total}</p>
                    </div>
                  </div>
                ))}
                <div className='flex justify-end'>
                  <button className='bg-main-red text-white py-2 px-4 rounded-xl mt-4'>
                    Tiếp tục mua hàng
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
