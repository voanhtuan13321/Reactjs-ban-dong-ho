import { useState } from 'react';

export default function Profile() {
  const [isStatusEdit, setIsStatusEdit] = useState(false);

  const handleClickEdit = () => {
    setIsStatusEdit(!isStatusEdit);
  };

  return (
    <div className='w-container mx-auto mt-20'>
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
  );
}
