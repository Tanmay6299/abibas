import React from 'react';
import './Marquee.css';

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="marquee-text">{text}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
