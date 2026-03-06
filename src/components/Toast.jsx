import React from 'react';
import { ShoppingBag, Heart, CheckCircle } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'cart': return <ShoppingBag size={18} className="toast-icon" />;
      case 'wishlist': return <Heart size={18} className="toast-icon" fill="#ede734" />;
      default: return <CheckCircle size={18} className="toast-icon" />;
    }
  };

  return (
    <div className="toast">
      {getIcon()}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
