import React, { useState, useEffect } from 'react';
import requestHandler from '../../utils/requestHandle';

export default function HistoryOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        // Fetch order data from API
        const orderResponse = await requestHandler.get('order/');
        const orderData = orderResponse.data.data;

        // Fetch order detail for each order
        const ordersWithDetails = await Promise.all(
          orderData.map(async (order) => {
            const orderDetailResponse = await requestHandler.get(`order/order-detail/${order.id}`);
            const orderDetail = orderDetailResponse.data.data;
            return { ...order, orderDetail };
          })
        );

        setOrders(ordersWithDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchOrderData();
  }, []);

  return (
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
                  <p className='text-lg font-semibold'>Order Code</p>
                  <p className='text-lg font-semibold ml-3'>{order.orderCode}</p>
                  {/* <p className='text-gray-600'>{order.date}</p> */}
                </div>
                <ul>
                  {order.orderDetail.map((item, index) => (
                    <li
                      key={index}
                      className='flex justify-between items-center mb-2'
                    >
                      <img
                        src={`IMAGE_URL/${item.id}`}
                        alt={item.productName}
                        className='w-16 h-16 object-cover'
                      />
                      <p>{item.productName}</p>
                      <p>
                        ${item.price} x {item.quantity}
                      </p>
                      <p>${item.price * item.quantity}</p>
                    </li>
                  ))}
                </ul>
                <div className='flex justify-between mt-2'>
                  <p className='font-semibold'>Total:</p>
                  <p className='flex items-center'>
                    {order.status === 'accepted' && (
                      <>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 640 512'
                          className='text-green-500 w-6 h-6 mr-2 fill-current'
                        >
                          <path d='M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                        </svg>
                        <span className='text-green-400 text-lg font-semibold'> Accepted</span>
                      </>
                    )}
                    {order.status === 'waiting' && (
                      <>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 640 512'
                          className='text-green-500 w-6 h-6 mr-2 fill-current'
                        >
                          <path d='M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                        </svg>
                        <span className='text-yellow-400 text-lg font-semibold'> Waiting</span>
                      </>
                    )}
                    {order.status === 'cancel' && (
                      <>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 640 512'
                          className='text-green-500 w-6 h-6 mr-2 fill-current'
                        >
                          <path d='M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
                        </svg>
                        <span className='text-red-400 text-lg font-semibold'>Cancel</span>
                      </>
                    )}
                  </p>
                  <p className='text-main-red font-bold'>${order.totalAmount}</p>
                </div>
              </div>
            ))}
            <div className='flex justify-end'>
              <button className='bg-main-red text-white py-2 px-4 rounded-xl mt-4'>
                Continue Shopping
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
