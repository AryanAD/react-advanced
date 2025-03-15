import MyInput from "./MyInput";

export default {
  title: "Inputs/My Input",
  component: MyInput,
};

export const SmallInput = () => {
  return <MyInput placeholder="Enter Your Name" size="10rem" />;
};

export const MediumInput = () => {
  return <MyInput placeholder="Enter Your Name" size="20rem" />;
};

export const LargeInput = () => {
  return <MyInput placeholder="Enter Your Name" size="40rem" />;
};
