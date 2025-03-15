type ButtonTypes = {
  label: string;
  bgColor: string;
  size: "small" | "medium" | "large";
  radius: number;
  fontSize: string;
  textColor: string;
};

const Button = ({
  label,
  bgColor,
  size,
  radius,
  fontSize,
  textColor,
}: ButtonTypes) => {
  const sizeStyles = {
    small: "5px 10px",
    medium: "10px 20px",
    large: "15px 30px",
  };
  return (
    <button
      style={{
        backgroundColor: bgColor,
        padding: sizeStyles[size],
        borderRadius: `${radius}px`,
        fontSize: fontSize,
        color: textColor,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
