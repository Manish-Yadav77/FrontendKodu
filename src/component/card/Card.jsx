import Button from "../Button";

const Card = ({ title, description, buttonText, className, icon, onClick }) => {
  return (
    <div
  className={
    buttonText
      ? "text-white shadow-lg rounded-4 pt-4 pb-4 px-4 d-flex flex-column justify-content-between mt-5"
      : className
      ? `bg-slate-800 text-white shadow p-4 rounded-4 mt-4 ${className}`
      : "text-white rounded-4 p-4 d-flex flex-column justify-content-between mt-5"
  }
  style={{
    background: buttonText
      ? "linear-gradient(to bottom right, #1e293b, #334155)"
      : className
      ? "#1e293b"
      : "linear-gradient(to right, #3b82f6, #10b981)",
    transform: buttonText ? "scale(1)" : undefined,
    transition: buttonText ? "transform 0.3s ease-in-out" : undefined,
    maxWidth: "280px",
    minHeight: "220px",
    width: "100%",
  }}
  onMouseEnter={(e) => {
    if (buttonText) e.currentTarget.style.transform = "scale(1.02)";
  }}
  onMouseLeave={(e) => {
    if (buttonText) e.currentTarget.style.transform = "scale(1)";
  }}
>
  {/* Card Content */}
  <div className="text-start ms-5 me-3 ms-md-0">
    <h3
      className={
        buttonText
          ? "fs-4 fw-bold text-info mb-2"
          : className
          ? "ms-2 mt-2 fw-bold fs-4"
          : "fs-4 fw-bold d-flex gap-2 ps-3 ps-md-0"
      }
    >
      {icon} {title}
    </h3>

    {description && (
      <p
        className={
          buttonText
            ? "text-secondary fw-medium"
            : className
            ? "fw-medium mt-2 ms-2 text-secondary"
            : "fw-medium mt-2 text-secondary pe-4 ps-3 ps-md-0"
        }
      >
        {description}
      </p>
    )}
  </div>

  {/* Button */}
  {buttonText && (
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn text-white fs-5 px-4 py-2 rounded"
        style={{
          background: "linear-gradient(to right, #06b6d4, #22c55e)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  )}
</div>


  );
};

export default Card;
