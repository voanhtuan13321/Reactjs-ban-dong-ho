import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-neutral-200 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <div className='flex items-center justify-center border-b-2 border-main-red p-6 dark:border-neutral-500 lg:justify-between'>
        <div className='mr-12 hidden lg:block'>
          <span className='font-bold'>Watch Shop is very happy to accompany you !!!</span>
        </div>
        <div className='flex justify-center'>
          <a
            href='#!'
            className='mr-6 text-neutral-600 dark:text-neutral-200'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
            </svg>
          </a>
        </div>
      </div>

      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='mr-3 h-4 w-4'
              >
                <path d='M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z' />
              </svg>
              Watch Shop
            </h6>
            <p>
              "Explore the latest in wearable technology with our online store, offering a diverse
              collection of smartwatches that seamlessly blend style and functionality. Discover the
              future of timekeeping at our smartwatch boutique."
            </p>
          </div>
          <div>
            <h6 className='mb-4 font-semibold uppercase'>Contact Us</h6>
            <p>Email: watchshop099@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h6 className='mb-4 font-semibold uppercase'>Customer Support</h6>
            <p>FAQs</p>
            <p>Shipping & Returns</p>
            <p>Warranty Information</p>
          </div>
          <div>
            <h6 className='mb-4 font-semibold uppercase'>Newsletter</h6>
            <p>Subscribe to our newsletter for the latest updates and promotions.</p>
          </div>
        </div>
      </div>
      <div className='bg-main-red p-6 text-center dark:bg-neutral-100'>
        <span className='text-neutral-100'>© 2023 Copyright: </span>
        <a
          className='font-semibold text-neutral-100 dark:text-neutral-100'
          href='https://tw-elements.com/'
        >
          Watch Shop
        </a>
      </div>
    </footer>
  );
};

export default Footer;
