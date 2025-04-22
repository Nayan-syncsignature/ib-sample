import React from 'react';

const Rectangle = ({ color, className }: { color: string; className?: string }) => {
    return (
    <svg width="957" height="273" viewBox="0 0 957 273" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 330L962 0V330H692H0Z" fill={color} />
    </svg>
  );
};

export default Rectangle;