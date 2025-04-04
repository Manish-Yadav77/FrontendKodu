import React from "react";

function Reviews({ name, description, img }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg shadow-black rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 mb-12 h-full w-90 ml-3 flex flex-col justify-between min-h-[250px]">

      <p className="text-lg italic font-semibold text-black mb-3 flex-grow">
        {description}
      </p>

      <div className="flex items-end gap-4 mt-auto">

        <img
          src={img}
          alt="User_Img"
          className="h-20 w-20 rounded-full object-cover shadow-lg shadow-black"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <div className="flex text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
