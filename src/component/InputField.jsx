import React from "react";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  options,
  error,
  onBlur,
  style,
}) => {
  if (options) {
    return (
      <select
        className={`form-select border border-2 rounded px-3 py-2 bg-white text-dark w-100 ${
          error ? "border-danger" : ""
        }`}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      className={`form-control border border-2 rounded px-3 py-2 bg-white text-dark fw-bold w-100 ${
        error ? "border-danger" : ""
      }`}
      style={style}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputField;