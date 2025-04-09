import React, { useEffect, useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    profession: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      setErrors((prev) => ({
        ...prev,
        phone: phoneRegex.test(value) ? "" : "Invalid phone number!",
      }));
    }
  };

  const pdfUrl =
    "https://drive.google.com/file/d/1RC03Qkv2_cTAdXsGvBAz7QiO6jQX_ec2/view?usp=drivesdk";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      alert("Please fix the errors before submitting!");
      return;
    }

    console.log("Form Data:", formData);
    onClose();
    setFormData({ name: "", phone: "", city: "", profession: "" });
    window.open(pdfUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1050,
      }}
    >
      <div
        className="bg-gradient p-4 rounded w-100"
        style={{
          maxWidth: "400px",
          backgroundImage: "linear-gradient(to left, #60a5fa, #9333ea)",
        }}
      >
        <button
          onClick={onClose}
          className="btn btn-light position-absolute top-0 end-0 m-2"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
        <h2 className="text-center text-dark fw-bold mb-4">
          Join Kodu Institute & Land Your Dream Tech Job!
        </h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            required
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
          />
          {errors.city && <div className="text-danger">{errors.city}</div>}
          <input
            type="text"
            name="profession"
            placeholder="What do you do?"
            value={formData.profession}
            onChange={handleChange}
            className="form-control"
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "#2563eb",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;