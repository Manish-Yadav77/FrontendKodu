import React from "react";

function MentorCard({ img, name, title }) {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 w-80 flex flex-col items-center text-center h-60 mb-12 shadow-gray-700">
      <img
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover mb-4 shadow-lg shadow-black"
      />
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className=" text-sm mt-2 text-black font-semibold">{title}</p>
    </div>
  );
}

export default MentorCard;
