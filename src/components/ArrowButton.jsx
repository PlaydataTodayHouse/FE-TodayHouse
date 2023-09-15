import React, { useState } from 'react';

function ArrowButton({ direction }) {
    const [isHovered, setIsHovered] = useState(false);
    const transform = direction === 'left' ? 'scaleX(-1)' : null;

  const arrowButtonStyles = {
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease'
  };
  
  const arrowButtonHoverStyles = {
    filter: 'grayscale(0%)'
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      style={{ 
        ...arrowButtonStyles, 
        ...(isHovered ? arrowButtonHoverStyles : {}), 
        transform 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g clipPath="url(#clip0_10_73)">
        <path d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z" fill="#35C5F0"/>
        <path d="M23 20L15.5 27.5L16.9 28.9L25.3 20.5L25.8 20L25.3 19.5L16.9 11.1L15.5 12.5L23 20Z" fill="white"/>
      </g>
    </svg>
  );
}

export default ArrowButton;