import Button from "../Button";

const Card = ({ title, description, buttonText, className, icon, onClick }) => {
  return (
    <div
      className={
        buttonText
          ? `bg-gradient-to-br from-[#1e293b] to-[#334155] shadow-2xl rounded-2xl pt-6 pb-6 px-5 w-72 md:w-60 lg:w-80 flex flex-col justify-between mt-12 text-white transition-all duration-300 hover:scale-[1.02]`
          : className
          ? `shadow-xl p-6 w-150 rounded-2xl mt-7 bg-slate-800 text-white ${className}`
          : `bg-gradient-to-r from-[#3b82f6] to-[#10b981] shadow-lg rounded-2xl p-6 w-150 flex flex-col justify-between mt-12 text-white`
      }
    >
      {/* Card Content */}
      <div className="text-left ml-20 md:ml-0 mr-12">
        <h3
          className={
            buttonText
              ? `text-xl md:text-2xl mb-2 font-extrabold text-cyan-300`
              : className
              ? `ml-3 mt-3 font-bold text-2xl text-white`
              : `text-2xl mb-2 font-bold flex flex-row gap-3 pl-5 md:pl-0 text-white`
          }
        >
          {icon} {title}
        </h3>

        {description && (
          <p
            className={
              buttonText
                ? `text-gray-300 font-medium`
                : className
                ? `font-medium md:w-125 ml-3 mt-3 w-fit mr-15 md:mr-0 text-gray-300`
                : `font-medium mt-3 w-full md:w-4/5 lg:w-3/4 pr-16 pl-5 md:pr-0 md:pl-0 text-gray-200`
            }
          >
            {description}
          </p>
        )}
      </div>

      {/* Button */}
      {buttonText && (
        <div className="flex justify-center mt-5">
          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-400 text-white py-2 px-4 rounded-lg shadow-md hover:brightness-125 text-lg md:text-xl transition-all duration-300"
            text={buttonText}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
