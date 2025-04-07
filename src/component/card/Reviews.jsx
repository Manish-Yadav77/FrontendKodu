import React from "react";

function Reviews({ name, description, img }) {
  return (
    <div className="card shadow-lg mb-4">
      <div className="card-body">
        <p className="card-text fst-italic">{description}</p>
        <div className="d-flex align-items-center mt-3">
          <img
            src={img}
            alt="User"
            className="rounded-circle me-3 "
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <div>
            <h5 className="mb-0">{name}</h5>
            <div className="text-warning">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;