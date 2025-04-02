import React, { useState } from "react";
import InputField from "./InputField";

const Form = () => {
  const optArray = [
    "Hisar",
    "Delhi",
    "Rohtak",
    "Chandigarh",
    "Jaipur",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    city: "",
    willingToAttend: "",
    captcha: "",
    enteredCaptcha: "",
    checked: false,
  });

  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.enteredCaptcha !== generatedCaptcha) {
      alert("Captcha is incorrect. Try again!");
      return;
    }
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-gradient-to-t from-gray-400 to-blue-400 p-7 rounded-2xl h-full">
      <form
        className="flex flex-col border-2 p-5 gap-3 bg-blue-950 w-96 text-white"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Enter Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="email"
          placeholder="Enter Email Address *"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Mobile Number with Country Code Selection */}
        <div className="flex gap-2">
          <select
            className="border-2 rounded-md bg-white p-2 text-gray-900 w-40"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+91">🇮🇳 +91 </option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+61">🇦🇺 +61</option>
          </select>
          <InputField
            type="text"
            placeholder="Enter Mobile Number *"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        {/* City Selection */}
        <InputField
          type="text"
          placeholder="Select City *"
          name="city"
          value={formData.city}
          onChange={handleChange}
          options={optArray}
        />

        {/* DM Course Willingness */}
        <InputField
          type="text"
          placeholder="Are you willing to attend the DM course at Hisar location? *"
          name="willingToAttend"
          value={formData.willingToAttend}
          onChange={handleChange}
          options={["Yes", "No", "Maybe"]}
        />

        {/* Captcha Section */}
        <div className="flex gap-2">
          <input
            className="border-2 rounded-md pl-5 bg-gray-200 p-2 w-23 text-black font-bold"
            type="text"
            value={generatedCaptcha}
          />
          <InputField
            type="text"
            placeholder="Enter Text as Shown *"
            name="enteredCaptcha"
            value={formData.enteredCaptcha}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2 ">
          <input
            type="checkbox"
            checked={formData.checked}
            onChange={handleChange}
            className="w-5 h-5 accent-blue-600"
          />
          <p className="pt-5 text-sm sm:text-base w-full">
            I agree to give my consent to receive updates through SMS/Email  &
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
