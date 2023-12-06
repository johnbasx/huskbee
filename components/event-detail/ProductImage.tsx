import React, { FC } from "react";

const ProductImage = ({
  ImageSrc,
  ImageAlt,
}: {
  ImageSrc: string;
  ImageAlt: string;
}) => {
  return (
    <div className="lg:row-end-1 lg:col-span-4">
      <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={ImageSrc}
          alt={ImageAlt}
          className="object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImage;
