import { FaHome } from "react-icons/fa";
import Button from "./Button";

export default {
  title: "products/buttons",
  component: Button,
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
    onClick: () => alert("You Clicked This"),
    loading: false,
    size: "medium",
    color: "#007bff",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "primary-button",
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: "Button",
    onClick: () => alert("You Clicked This"),
    loading: false,
    size: "medium",
    color: "green",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "secondary-button",
  },
};

export const Danger = {
  args: {
    primary: false,
    label: "Button",
    onClick: () => alert("You Clicked This"),
    loading: false,
    size: "medium",
    color: "red",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "danger-button",
  },
};
