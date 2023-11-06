import React, { useEffect, useState } from 'react';

function OrderSuccess() {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    // Lấy URL hiện tại
    const url = window.location.href;

    // Phân tích các tham số từ URL
    const urlParams = new URLSearchParams(url);

    // Trích xuất các giá trị từ tham số
    const amount = urlParams.get('vnp_Amount');
    const invoiceId = urlParams.get('vnp_BankTranNo');
    const emailCustomer = urlParams.get('vnp_OrderInfo').split(',')[0];
    const paymentDate = urlParams.get('vnp_PayDate');
    const year = paymentDate.substring(0, 4);
    const month = paymentDate.substring(6, 4);
    const day = paymentDate.substring(8, 6);

    // Tạo chuỗi ngày tháng năm
    const formattedDate = `${day}/${month}/${year}`;
    const status = urlParams.get('vnp_ResponseCode') === '00' ? 'Successfully' : 'Failed';

    // Lưu dữ liệu vào state
    setInvoiceData({
      invoiceId,
      emailCustomer,
      amount,
      formattedDate,
      status,
    });
  }, []);
  console.log(invoiceData);

  return (
    <div className='w-1/3  rounded-md shadow-2xl mx-auto my-20'>
      <p className='text-center font-bold text-3xl uppercase '>Invoice</p>
      <div className='flex flex-col gap-3 mx-4 my-3'>
        <div className='flex gap-3 items-center'>
          <label className='font-semibold text-2xl'>Invoice ID: </label>
          <p className='text-lg'>{invoiceData?.invoiceId}</p>
        </div>
        <div className='flex gap-3 items-center'>
          <label className='font-semibold text-2xl'>Email Customer: </label>
          <p className='text-lg'>{invoiceData?.emailCustomer}</p>
        </div>
        <div className='flex gap-3 items-center'>
          <label className='font-semibold text-2xl'>Amount: </label>
          <p className='text-lg'>{invoiceData?.amount}</p>
        </div>
        <div className='flex gap-3 items-center'>
          <label className='font-semibold text-2xl'>Payment Date: </label>
          <p className='text-lg'>{invoiceData?.formattedDate}</p>
        </div>
        <div className='flex gap-3 items-center mb-5'>
          <label className='font-semibold text-2xl'>Status: </label>
          <p className='text-lg'>{invoiceData?.status}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
