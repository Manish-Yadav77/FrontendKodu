import React, { useEffect, useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const pdfUrl = 'https://drive.google.com/file/d/1OiYkDwwWBhU5KCY699GokvSBnKEloSi1/view?usp=drivesdk';

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
    console.log("Form Data:", formData);
    onClose();
    setFormData({ name: "", phone: "", city: "", profession: "" });
    window.open(pdfUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-gradient-to-l from-blue-400 to-purple-500 p-6 rounded-lg w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
        >
          ×    
        </button>
        <h2 className="text-xl font-semibold mb-4 m-7 mt-0 text-center text-black">Join Kodu Institute & Land Your Dream Tech Job!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded text-black"
          />
          <input
            type="text"
            name="profession"
            placeholder="What do you do?"
            value={formData.profession}
            onChange={handleChange}
            className="border p-2 rounded text-black"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
