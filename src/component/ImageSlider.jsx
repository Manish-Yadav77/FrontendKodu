import React from "react";
import Marquee from "react-fast-marquee";

const ImageSlider = ({ images, className,style }) => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`logo-${index}`}
      className={`rounded-5 shadow-lg mx-2 mb-3 ${className ? className : "img-fluid"}`}
      style={ style ? style : 
        {
        height: "300px",
        maxWidth: "350px",
      }}
    />
  ))}
</Marquee>

  );
};

export default ImageSlider;