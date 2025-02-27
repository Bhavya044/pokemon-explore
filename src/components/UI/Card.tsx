import React from 'react';

const Card: React.FC<{ children: React.ReactNode; classProp?: string }> = ({
  children,
  classProp,
}) => {
  return (
    <div className={`${classProp} bg-white p-6 rounded-2xl shadow-lg`}>
      {children}
    </div>
  );
};

export default Card;
