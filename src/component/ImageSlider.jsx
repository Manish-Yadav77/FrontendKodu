import React from "react";
import Marquee from "react-fast-marquee";

const ImageSlider = ({ images,className }) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`logo-${index}`}
          className={className? `${className}`: `h-60 w-60 md:h-70 md:w-70 lg:h-80 lg:w-90 md:mb-8 lg:mb-0 rounded-3xl shadow-black shadow-2xl ml-7 mb-3 `}
        />
      ))}
    </Marquee>
  );
};

export default ImageSlider;
