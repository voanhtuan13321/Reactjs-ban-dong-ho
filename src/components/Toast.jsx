import React, { useState, useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const toastClasses = `fixed top-0 right-0 p-3 m-3 rounded-md shadow-md text-white ${
    type === 'success' ? 'bg-green-400' : 'bg-red-400'
  }`;

  return showToast && <div className={toastClasses}>{message}</div>;
}
