import React from 'react';

const ErrorDisplay: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="flex justify-center items-center mt-6 p-4 bg-gray-100 border-l-4 border-red-500 text-gray-700 rounded-md shadow-sm">
      <span className="mr-3 text-red-500 text-xl">❌</span>
      <p className="text-center text-lg font-medium">{error}</p>
    </div>
  );
};

export default ErrorDisplay;
