import Button from "../Button";

const Card = ({ title, description, buttonText, className, icon, onClick, img }) => {
  const isImageCard = !!img;

  return (
    <div
      className={
        buttonText
          ? "text-white shadow-lg rounded-4 pt-4 pb-4 px-4 d-flex flex-column justify-content-between mt-5 position-relative"
          : className
          ? `bg-slate-800 text-white shadow p-4 rounded-4 mt-4 position-relative ${className}`
          : "text-white rounded-4 p-4 d-flex flex-column justify-content-between mt-5 position-relative"
      }
      style={{
        background: !isImageCard
          ? buttonText
            ? "linear-gradient(to bottom right, #1e293b, #334155)"
            : className
            ? "#1e293b"
            : "linear-gradient(to right, #3b82f6, #10b981)"
          : undefined,
        transform: buttonText && !isImageCard ? "scale(1)" : undefined,
        transition: buttonText ? "transform 0.3s ease-in-out" : undefined,
        maxWidth: "2950px",
        minHeight: "220px",
        width: "100%",
        cursor: isImageCard ? "pointer" : "default",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (buttonText && !isImageCard) e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        if (buttonText && !isImageCard) e.currentTarget.style.transform = "scale(1)";
      }}
      onClick={isImageCard ? onClick : undefined}
    >
      {/* Image Background with Padding */}
      {isImageCard && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            padding: "1rem",
            zIndex: 2,
          }}
        >
          <img
            src={img}
            alt="background"
            style={{
              width: "300px",
              height: "180px",
              borderRadius: "14px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      )}

      {/* Dark Overlay to Ensure Readability */}
      {isImageCard && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "14px",
            zIndex: 1,
          }}
        />
      )}

      {/* Card Content */}
      <div className="position-relative" style={{ zIndex: 2 }}>
        {!isImageCard && (
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
        )}

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
      {buttonText && !isImageCard && (
        <div className="d-flex justify-content-center mt-4 position-relative" style={{ zIndex: 2 }}>
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
