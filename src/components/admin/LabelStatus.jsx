import React from 'react';

function LabelStatus({ type, children }) {
  const generateClassByType = (type) => {
    if (type === 'accepted') return 'bg-success';
    if (type === 'cancel') return 'bg-error';
    if (type === 'waiting') return 'bg-warning';
    return '';
  };

  return (
    <label
      className={`rounded-2xl text-center text-white font-semibold px-2 text-base py-1 uppercase ${generateClassByType(
        type
      )}`}
    >
      {children}
    </label>
  );
}

export default LabelStatus;
