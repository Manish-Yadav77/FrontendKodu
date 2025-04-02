const InputField = ({ type, placeholder, value, onChange, options }) => {
  return options ? (
    <select
      className="border-2 rounded-md pl-5 bg-white p-2 text-black w-full"
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>{opt}</option>
      ))}
    </select>
  ) : (
    <input
      className="border-2 rounded-md pl-5 bg-white p-2 text-black font-bold w-full"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;