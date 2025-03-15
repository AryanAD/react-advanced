import { ReactNode } from "react";
import "./style.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  primary?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  loading,
  size,
  color,
  fullWidth = false,
  icon,
  iconPosition,
  ariaLabel,
  primary = false,
  onClick,
}) => {
  const buttonClass = `
  button
  ${primary ? "button--primary" : "button--secondary"}
  ${size ? `button-${size}` : "button--medium"}
  ${color ? `button--custom-color` : ""}
  ${fullWidth ? `button-fullWidth` : ""}
  ${loading ? `button--loading` : ""}
  `;

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      aria-label={ariaLabel}
      style={color ? { backgroundColor: color, color: "white" } : {}}
    >
      {loading && <span className="button__loading-spinner">Loading...</span>}
      {icon && iconPosition === "left" && (
        <span className="button__icon">{icon}</span>
      )}
      <span className="button__label">{label}</span>
      {icon && iconPosition === "right" && (
        <span className="button__icon">{icon}</span>
      )}
    </button>
  );
};

export default Button;
