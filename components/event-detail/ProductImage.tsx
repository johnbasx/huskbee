import React, { FC } from 'react';

const ProductImage = ({
  ImageSrc,
  ImageAlt,
}: {
  ImageSrc: string;
  ImageAlt: string;
}) => {
  return (
    <div className='lg:col-span-4 lg:row-end-1'>
      <div className='aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-neutral-100'>
        <img
          src={ImageSrc}
          alt={ImageAlt}
          className='object-cover object-center'
        />
      </div>
    </div>
  );
};

export default ProductImage;
