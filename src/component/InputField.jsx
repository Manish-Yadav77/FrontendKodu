const InputField = ({ type, placeholder, value, onChange, options }) => {
    return options ? (
      <select className="border-2 rounded-md pl-5 bg-white p-2 text-black" value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
    ) : (
      <input
        className="border-2 rounded-md pl-5 bg-white p-2 text-black font-bold"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  };

  export default InputField;
  