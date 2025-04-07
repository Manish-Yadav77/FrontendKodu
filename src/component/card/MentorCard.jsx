import React from "react";

function MentorCard({ img, name, title, className }) {
  return (
    <div className="card shadow-lg text-center mb-4 p-3 rounded-5"
    style={{
      height:'210px',
    }}>
      <div className="card-body">
        <img
          src={img}
          alt={name}
          className={`rounded-circle shadow-lg shadow-black mb-3 ${className}`}
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <h5 className="card-title fw-bold text-black">{name}</h5>
        <p className="card-text text-black">{title}</p>
      </div>
    </div>
  );
}

export default MentorCard;