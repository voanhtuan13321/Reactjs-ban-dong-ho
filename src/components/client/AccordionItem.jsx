import { useState } from 'react';

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <div
        className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-b-2 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
        onClick={toggleAccordion}
      >
        <h2 className='text-lg'>{title}</h2>
        <div>
          <svg
            data-accordion-icon
            className='w-3 h-3 rotate-180 shrink-0'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 5 5 1 1 5'
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className='p-5 border-b-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
          <p className='mb-2 text-gray-500 dark:text-gray-400'>{content}</p>
        </div>
      )}
    </div>
  );
}
