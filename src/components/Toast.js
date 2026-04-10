import React, { useEffect } from 'react';

function Toast({ message, isVisible, onClose, duration = 2000 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, duration]);

  if (!isVisible) return null;

  return (
    <div className="toast">
      <span className="toast-message">{message}</span>
    </div>
  );
}

export default Toast;