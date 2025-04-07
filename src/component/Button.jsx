const Button = ({ text, onClick, className, icon, style }) => {
  return (
    <button
      onClick={onClick}
      className={`d-flex align-items-center gap-2 fw-semibold ${className}`}
      style={style?style:{
        backgroundColor: "#2563eb",
        border: "none",
        transition: "all 0.9s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#3b82f6";
        e.currentTarget.style.color = "#000";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#2563eb";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.95)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
