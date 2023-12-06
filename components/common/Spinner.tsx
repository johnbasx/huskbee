import React from "react";

const Spinner = () => {
  return (
    // <div className="loading-spinner">
    <svg className="loading-spinner__circle-svg" viewBox="25 25 50 50">
      <circle
        className="loading-spinner__circle-stroke"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        stroke-miterlimit="10"
      />
    </svg>
    // </div>
  );
};

export default Spinner;
