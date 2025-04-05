const Button = ({ text, onClick, className,icon }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 bg-blue-600 rounded-lg transition-all duration-300 ease-in-out 
                    hover:bg-blue-500 hover:text-black hover:-translate-y-1 active:scale-95 font-semibold flex gap-2 
                    ${className}`}>
        {icon} {text}
      </button>
    );
  };
  
  export default Button;
  
  