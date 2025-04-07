import React, { useState } from "react";
import { ArrowDownCircle } from "lucide-react";

function QuestionCard({ title, discription }) {
  const [disc, setDisc] = useState(false);

  const toggleDisc = () => {
    setDisc((prev) => !prev);
  };

  return (
    <div className="card shadow-lg mb-4 rounded-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h4 className="mb-0 text-dark">{title}</h4>
        <button onClick={toggleDisc} className="btn btn-light">
          <ArrowDownCircle />
        </button>
      </div>
      <div
        className={`card-body transition-all ${
          disc ? "d-block" : "d-none"
        } text-dark`}
      >
        <p className="mb-0">{discription}</p>
      </div>
    </div>
  );
}

export default QuestionCard;