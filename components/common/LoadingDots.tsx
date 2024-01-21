import React from 'react';

const LoadingDots = () => {
  return (
    <div className='flex items-center justify-center gap-x-1 px-4 py-2'>
      <span className='sr-only'>Loading...</span>
      <div className='h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.3s]'></div>
      <div className='h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.15s]'></div>
      <div className='h-2 w-2 animate-bounce rounded-full bg-white'></div>
    </div>
  );
};

export default LoadingDots;
