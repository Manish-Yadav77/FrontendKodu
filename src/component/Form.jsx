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
    if (!formData.email) newErrors.email = "Email Format is Wrong!";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required!";
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
    <div className="bg-gradient-to-t from-gray-400 to-blue-400 p-7 rounded-2xl h-full mb-8 md:mb-0 md:mt-0 ">
      <form
        className="flex flex-col border-2 p-5 gap-3 bg-blue-950 w-full max-w-lg mx-auto text-white"
        onSubmit={handleSubmit}
      >
        <InputField
          type="name"
          placeholder="Enter Name*"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, name: e.target.value }));
          }}
          error={errors.name}
        />
        <InputField
          type="email"
          placeholder="Enter Email Address*"
          name="email"
          value={formData.email}
          onChange={(e) => {
            const value = e.target.value;
            setFormData((prev) => ({ ...prev, email: value }));
          }}
          onBlur={() => {
            if (
              formData.email &&
              !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) ) {
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

        <div className="flex gap-2">
          <select
            className="border-2 rounded-md bg-white p-2 text-gray-900 w-1/3"
            name="countryCode"
            value={formData.countryCode}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, countryCode: e.target.value }));
            }}
            error={errors.countryCode}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
          <InputField
            type="number"
            placeholder="Enter Mobile Number*"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, mobile: e.target.value }));
            }}
            error={errors.mobile}
          />
        </div>
        <InputField
          type="select"
          placeholder="Select City*"
          name="city"
          value={formData.city}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, city: e.target.value }));
          }}
          options={optArray}
          error={errors.city}
        />
        <InputField
          type="select"
          placeholder="Willing to attend Free course at Hisar?*"
          name="willingToAttend"
          value={formData.willingToAttend}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              willingToAttend: e.target.value,
            }));
          }}
          options={["Yes", "No"]}
          error={errors.willingToAttend}
        />
        <div className="flex gap-2">
          <input
            className="border-2 rounded-md pl-5 bg-gray-200 p-2 md:w-1/3 text-black font-bold w-full"
            type="text"
            value={generatedCaptcha}
            readOnly
          />
          <InputField
            type="text"
            placeholder="Enter Captcha*"
            name="enteredCaptcha"
            value={formData.enteredCaptcha}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                enteredCaptcha: e.target.value,
              }));
            }}
            error={errors.enteredCaptcha}
          />
        </div>
        {errors.captcha && <p className="text-red-500">{errors.captcha}</p>}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="checked"
            checked={formData.checked}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, checked: !formData.checked }));
            }}
            className="w-5 h-5 accent-blue-600"
          />
          <p className="pt-5 text-sm sm:text-base w-full">
            I agree to give my consent to receive updates through SMS/Email &
            WhatsApp*.
          </p>
        </div>
        <button
          type="submit"
          className="bg-green-500 p-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
