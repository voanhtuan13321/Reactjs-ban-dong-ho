import React from 'react';

export default function Button({ children, size, backGroundColor, color, onClick }) {
  return (
    <button
      className={`
        bg-${backGroundColor} text-${color} rounded-md px-4 py-2
        ${size === 'sm' && 'px-2 py-1'}
        ${size === 'lg' && 'px-6 py-3'}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
