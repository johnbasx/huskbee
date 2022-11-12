import React from "react";

const ColorfulBlur: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-colofulLogo h-screen blur-3xl pointer-events-none opacity-50"></div>
    </div>
  );
};

export default ColorfulBlur;
