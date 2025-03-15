import Button from "./Button";

export default {
  title: "products/buttons",
  component: Button,
  argTypes: {
    bgColor: { control: "color" },
    size: { control: "select", options: ["small", "medium", "large"] },
    radius: { control: "number", min: 0, max: 20, step: 1 },
    fontSize: { control: "text" },
    textColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    label: "Button",
    bgColor: "blue",
    size: "medium",
    radius: 4,
    fontSize: "16px",
    textColor: "#ffffff",
  },
};

export const Secondary = {
  args: {
    label: "Button",
    bgColor: "green",
    size: "medium",
    radius: 4,
    fontSize: "16px",
    textColor: "#ffffff",
  },
};
