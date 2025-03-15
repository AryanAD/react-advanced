type ButtonProps = {
  label: string;
  disabled: boolean;
  onClick?: () => void;
  color: string;
};

const Button = ({ label, disabled, onClick, color }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "40px",
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
