import Button from "./Button";

export default {
  title: "products/buttons",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// Renaming stories
Primary.storyName = "Blue Button";
Secondary.storyName = "Green Button";
Danger.storyName = "Red Button";
