import React, { useState } from "react";
import { ArrowDownCircle } from "lucide-react";

function QuestionCard({ title, discription }) {
  const [disc, setDisc] = useState(false);

  const toggleDisc = () => {
    setDisc((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center bg-white w-90 mr-4 md:mr-0 md:w-265 rounded-2xl">
      <h4 className="text-black font-semibold md:text-2xl bg-white shadow-2xl text-center pt-3 pl-3 w-full rounded-2xl flex flex-row h-full pb-2 md:pb-0 md:h-16 gap-3 items-center justify-between px-4">
        {title}
        <button onClick={toggleDisc} className="ml-auto">
          <ArrowDownCircle className="mb-1" />
        </button>
      </h4>
      <p
        className={`font-serif text-black text-center mt-5 transition-all duration-800 ease-in-out ${
          disc ? "opacity-500 h-full pb-5 text-balance" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        {discription}
      </p>
    </div>
  );
}

export default QuestionCard;
