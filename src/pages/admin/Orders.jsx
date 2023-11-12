import { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';
import LabelStatus from '../../components/admin/LabelStatus';
import requestHandle from '../../utils/requestHandle';

const itemsPerPage = 10;

export default function Orders() {
  // const fetchListOrder = async () => {
  //   // await axios.get('http://localhost:8080/api/order/',
  //   // {headers: {
  //   //   "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5oZHVuZzExMTEyQGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwibmFtZSI6IkxlTWFuaER1bmcxIiwiaWQiOjIsImV4cCI6MTY5OTUyNzI2OX0.C5joC8q2QmvbaRQOiekbktpw2NG9MMTR-VYW134fW6E'   
  //   // }}).then((resp) => {console.log(resp.data);});
    
  // };
  // useEffect(()=>{
  //   fetchListOrder()
  // },[])
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setPageCount(Math.ceil(orders.length / itemsPerPage));
    setCurrentPage(0);
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const fetchOrders = async () => {
    try {
      const response = await requestHandle.get('order/');
      const data = response.data.data;
      // console.log(data);
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = orders.slice(offset, offset + itemsPerPage);

  const handleAcceptOrCancel = async (id, status) => {
    const dataReq = { orderId: id, status };
    try {
      await requestHandle.put('order/', dataReq);
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  const renderOrders = () => {
    return currentPageData.map((l, k) => {
      return (
        <tr key={k}>
          <td>{l.orderCode}</td>
          <td className='font-bold text-lg'>{l.emailUser}</td>
          <td>
            <LabelStatus type={l.status}>{l.status}</LabelStatus>
          </td>
          <td className='text-lg'>{l.totalAmount} VND</td>
          <td className='text-lg'>{l.createDate}</td>
          <td className='w-2/12'>
            {l.status === 'waiting' && (
              <>
                <button
                  className='text-center btn-success mr-2 py-1 px-3 rounded-md font-medium text-lg text-white border border-solid uppercase'
                  onClick={() => handleAcceptOrCancel(l.id, 'accepted')}
                >
                  Accept
                </button>
                <button
                  className='text-center btn-error py-1 px-3 rounded-md font-medium text-lg text-white border border-solid uppercase'
                  onClick={() => handleAcceptOrCancel(l.id, 'cancel')}
                >
                  Cancel
                </button>
              </>
            )}
          </td>
          <td>
            <p className='text-blue-500 underline cursor-pointer text-lg'>Detail</p>
          </td>
        </tr>
      );
    });
  };

  return (
    <main className='flex-1 overflow-y-auto pt-8 px-6  bg-base-200'>
      <div className='card w-full p-6 bg-base-100 shadow-xl mt-2'>
        <div className='text-xl font-semibold inline-block'>Order List</div>
        <div className='divider mt-2'></div>
        <div className='h-full w-full pb-6 bg-base-100'>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full text-center'>
              <thead>
                <tr>
                  <th>orderCode</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Payment Date</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderOrders()}</tbody>
            </table>
            <ReactPaginate
              breakLabel='...'
              className='flex justify-center items-center gap-3 my-6 float-right mr-5'
              nextLabel={
                <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
                  <GrNext />
                </span>
              }
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={
                <span className='w-10 h-10 flex items-center justify-center bg-white rounded-md border border-solid'>
                  <GrPrevious />
                </span>
              }
              marginPagesDisplayed={10}
              pageClassName='border border-solid rounded-md py-2 px-4 hover:bg-main-red hover:text-white cursor-pointer'
              activeClassName='bg-main-red text-white'
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className='h-16'></div>
    </main>
  );
}
