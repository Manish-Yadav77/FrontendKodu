import Button from "../Button";

const Card = ({ title, description, buttonText,className,icon }) => {
    return (
      <div className={buttonText? `bg-white shadow-lg rounded-lg p-6 w-80 flex flex-col justify-between h-40 mt-12` : className? `shadow-lg p-6 w-150 rounded-xl mt-7 bg-transparent ${className}`: `bg-gradient-to-r from-blue-600 to-green-600 shadow-lg rounded-lg p-6 w-150 flex flex-col justify-between h-40 mt-12`}>
        {/* Card Content */}
        <div className="text-left">
          <h3 className={buttonText? `text-2xl mb-2 font-bold bg-purple-600 bg-clip-text text-transparent` : className? `ml-3 mt-3 font-bold text-2xl` : `text-2xl mb-2 font-bold bg-purple-600 bg-clip-text text-white flex flex-row gap-3`}>{icon} {title}</h3>
          <p className={buttonText? `bg-clip-text text-white font-semibold ` : className? `font-semibold w-125 ml-3 mt-3` : `bg-clip-text text-white font-semibold mt-3`}>{description}</p>
        </div>
  
        {/* Centered Button */}
        {
          buttonText &&
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-2xl" text={buttonText}/>
        </div>
        }
      </div>
    );
  };
  
  export default Card;
  