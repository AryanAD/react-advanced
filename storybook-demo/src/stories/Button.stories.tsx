import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (Story: any) => {
      return (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#F0F0F0",
            borderRadius: "8px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const Default = {
  args: {
    label: "Button",
    color: "blue",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    color: "gray",
    disabled: true,
  },
};
