import React, { useState } from "react";
import InputField from "./InputField";

const Form = () => {
  const optArray = ["Hisar", "Delhi", "Rohtak", "Chandigarh", "Jaipur"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    city: "",
    willingToAttend: "",
    enteredCaptcha: "",
    checked: false,
  });
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [errors, setErrors] = useState({});

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required!";
    if (
      !formData.email ||
      !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format!";
    }
    if (!formData.mobile || !/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits starting with 6-9!";
    }
    if (!formData.city) newErrors.city = "City selection is required!";
    if (!formData.willingToAttend)
      newErrors.willingToAttend = "Please indicate your willingness!";
    if (!formData.enteredCaptcha)
      newErrors.enteredCaptcha = "Captcha is required!";
    if (formData.enteredCaptcha !== generatedCaptcha)
      newErrors.captcha = "Captcha is incorrect!";
    if (formData.checked !== true)
      newErrors.checked = "Accept Terms and Conditions!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form Submitted Successfully!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      countryCode: "+91",
      city: "",
      willingToAttend: "",
      enteredCaptcha: "",
      checked: false,
    });
    setGeneratedCaptcha(generateCaptcha());
  };

  return (
    <div
      className="container rounded-4 p-4"
      style={{
        padding: "1rem",
        backgroundImage: "linear-gradient(to top, #1e293b, #60a5fa)",
      }}
    >
      <form
        className="mx-auto text-white"
        onSubmit={handleSubmit}
        style={{
          padding: "1rem",
          maxWidth: "600px",
          backgroundColor: "#172554",
          border: "2px solid white",
          borderRadius: "10px",
        }}
      >
        <div className="mb-3">
          <InputField
            type="name"
            placeholder="Enter Name*"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={errors.name}
          />
        </div>

        <div className="mb-3">
          <InputField
            type="email"
            placeholder="Enter Email Address*"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={() => {
              if (
                formData.email &&
                !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(formData.email)
              ) {
                setErrors((prev) => ({
                  ...prev,
                  email: "Invalid email format!",
                }));
              } else {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
            error={errors.email}
          />
        </div>

        <div className="mb-3 row g-2">
          <div className="col-12 col-md-4">
            <select
              className="form-select"
              style={{ height: "43px" }}
              name="countryCode"
              value={formData.countryCode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  countryCode: e.target.value,
                }))
              }
            >
              <option value="+91">IND +91</option>
              <option value="+1">AUS +1</option>
              <option value="+44">UK +44</option>
              <option value="+61">USA +61</option>
            </select>
          </div>
          <div className="col-12 col-md-8">
            <InputField
              type="number"
              placeholder="Enter Mobile Number*"
              name="mobile"
              value={formData.mobile}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  mobile: e.target.value,
                }))
              }
              onBlur={() => {
                if (formData.mobile && !/^[6-9]\d{9}$/.test(formData.mobile)) {
                  setErrors((prev) => ({
                    ...prev,
                    mobile: "Mobile number must be 10 digits starting with 6-9!",
                  }));
                } else {
                  setErrors((prev) => ({ ...prev, mobile: "" }));
                }
              }}
              error={errors.mobile}
            />
          </div>
        </div>

        <div className="mb-3">
          <InputField
            type="select"
            placeholder="Select City*"
            name="city"
            value={formData.city}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
            options={optArray}
            error={errors.city}
          />
        </div>

        <div className="mb-3">
          <InputField
            type="select"
            placeholder="Want to attend free demo for coding at hisar?*"
            name="willingToAttend"
            value={formData.willingToAttend}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                willingToAttend: e.target.value,
              }))
            }
            options={["Yes", "No"]}
            error={errors.willingToAttend}
          />
        </div>

        <div className="mb-3 row g-2">
          <div className="col-12 col-md-4">
            <input
              className="form-control fw-bold text-dark"
              type="text"
              style={{ height: "44px" }}
              value={generatedCaptcha}
              readOnly
            />
          </div>
          <div className="col-12 col-md-8">
            <InputField
              type="text"
              placeholder="Enter Captcha*"
              name="enteredCaptcha"
              value={formData.enteredCaptcha}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  enteredCaptcha: e.target.value,
                }))
              }
              error={errors.enteredCaptcha}
            />
          </div>
        </div>
        {errors.captcha && <p className="text-danger mb-3">{errors.captcha}</p>}

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="consent"
            name="checked"
            checked={formData.checked}
            onChange={() =>
              setFormData((prev) => ({ ...prev, checked: !prev.checked }))
            }
          />
          <label className="form-check-label" htmlFor="consent">
            I agree to give my consent to receive updates through SMS/Email &amp;
            WhatsApp*.
          </label>
          {errors.checked && (
            <p className="text-danger mt-1">{errors.checked}</p>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
