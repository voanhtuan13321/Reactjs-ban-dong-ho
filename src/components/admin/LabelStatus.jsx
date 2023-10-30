import React from 'react';

function LabelStatus({ type, children }) {
  const renderLabel = () => {
    switch (type) {
      case 'accepted':
        return (
          <label className='bg-success rounded-2xl text-center text-white font-semibold px-2 py-1 text-base uppercase'>
            {children}
          </label>
        );
      case 'cancel':
        return (
          <label className='bg-error rounded-2xl text-center text-white font-semibold px-2 py-1 text-base uppercase'>
            {children}
          </label>
        );
      case 'waiting':
        return (
          <label className='bg-warning rounded-2xl text-center text-white font-semibold px-2 py-1 text-base uppercase'>
            {children}
          </label>
        );
      default:
        return (
          <label className='bg-success rounded-2xl text-center text-white font-semibold px-2 text-base py-1 '>
            {children}
          </label>
        );
    }
  };
  return <>{renderLabel()}</>;
}

export default LabelStatus;
