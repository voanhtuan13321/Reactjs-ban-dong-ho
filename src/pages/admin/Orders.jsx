import React from 'react';
import LabelStatus from '../../components/admin/LabelStatus';

const trans = [
  {
    emailUser: 'manh@gmail.com',
    amount: 1000,
    status: 'accepted',
    paymentDate: '2-2-2013',
  },
  {
    emailUser: 'manh@gmail.com',
    amount: 1000,
    status: 'cancel',
    paymentDate: '2-2-2013',
  },
  {
    emailUser: 'manh@gmail.com',
    amount: 1000,
    status: 'waiting',
    paymentDate: '2-2-2013',
  },
  {
    emailUser: 'manh@gmail.com',
    amount: 1000,
    status: 'accepted',
    paymentDate: '2-2-2013',
  },
];
export default function Orders() {
  return (
    <div className='overflow-x-hidden rounded-sm m-5 w-full'>
      <table className='table text-center w-11/12 mx-auto'>
        <thead>
          <tr>
            <th className='text-xl'>#</th>
            <th className='text-xl'>Email</th>
            <th className='text-xl'>Status</th>
            <th className='text-xl'>Amount</th>
            <th className='text-xl'>Payment Date</th>
            <th className='text-xl'>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trans.map((l, k) => {
            return (
              <tr key={k}>
                <td>{k + 1}</td>
                <td className='font-bold text-lg'>{l.emailUser}</td>
                <td>
                  <LabelStatus type={l.status}>{l.status}</LabelStatus>
                </td>
                <td className='text-lg'>${l.amount}</td>
                <td className='text-lg'>{l.paymentDate}</td>
                <td>
                  {l.status === 'waiting' ? (
                    <>
                      <button className='text-center btn-success mr-2 py-1 px-3 rounded-md font-medium text-lg text-white border border-solid uppercase'>
                        Accept
                      </button>
                      <button className='text-center btn-error py-1 px-3 rounded-md font-medium text-lg text-white border border-solid uppercase'>
                        Cancel
                      </button>
                    </>
                  ) : (
                    ''
                  )}
                </td>
                <td>
                  <p className='text-blue-500 underline cursor-pointer text-lg'>Detail</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
