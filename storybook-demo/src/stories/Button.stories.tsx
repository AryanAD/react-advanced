import Button from "./Button";

export default {
  title: "products/buttons",
  component: Button,
  argTypes: {
    bgColor: { control: "color", description: "Background Colour" },
    size: {
      control: "select",
      description: "Size of Button",
      options: ["small", "medium", "large"],
    },
    radius: {
      control: "number",
      description: "Rounding of Button",
      min: 0,
      max: 20,
      step: 1,
    },
    fontSize: { control: "text", description: "Text Size" },
    textColor: { control: "color", description: "Color of text in button" },
  },
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
        { name: "gray", value: "#cccccc" },
        { name: "pink", value: "#ff00ff" },
        { name: "purple", value: "#800080" },
        { name: "orange", value: "#ff8000" },
        { name: "yellow", value: "#ffff00" },
      ],
    },
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
