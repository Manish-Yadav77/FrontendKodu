import React, { useState } from "react";

const BookMySeatButton = () => {
  const [bookings, setBookings] = useState(3);
  const [recentUser, setRecentUser] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

    if (!nameRegex.test(formData.name))
      newErrors.name = "Enter a valid name (min 3 letters)";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!phoneRegex.test(formData.contact))
      newErrors.contact = "Enter a valid 10-digit phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setBookings((prev) => prev + 1);
      setRecentUser(formData.name);
      setFormVisible(false);
      setFormData({ name: "", email: "", contact: "" });
      setErrors({});
    }
  };

  return (
    <div className="text-center my-5">
      <div className="mb-3">
        <p className="fs-5 text-success fw-semibold">
          🎯 {bookings} people have already booked their seats!
        </p>
        {recentUser && (
          <p className="text-info fs-6">
            🚀 <strong>{recentUser}</strong> just booked a seat!
          </p>
        )}
      </div>

      <button
        className="btn btn-dark px-4 py-2 fs-5 rounded-pill shadow"
        onClick={() => setFormVisible(true)}
      >
        Book My Seat 🪑
      </button>

      {/* Booking Form */}
      {formVisible && (
        <div className="container mt-4 d-flex justify-content-center">
          <div
            className="card shadow p-4"
            style={{ maxWidth: "500px", width: "100%", backgroundColor: "#f8f9fa" }}
          >
            <h4 className="text-center mb-3 fw-bold">🎟️ Secure Your Seat</h4>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="e.g. Ankit Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="e.g. ankit@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                  placeholder="e.g. 9876543210"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact}</div>
                )}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success rounded-pill">
                  Confirm Booking ✅
                </button>
              </div>
            </form>

            <button
              className="btn btn-link text-danger mt-3"
              onClick={() => {
                setFormVisible(false);
                setErrors({});
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookMySeatButton;
