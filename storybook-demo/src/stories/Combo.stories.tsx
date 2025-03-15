import { Primary } from "./Button.stories";
import { MediumInput } from "./MyInput.stories";

export default {
  title: "Combo/Components",
};

export const Combo = () => {
  return (
    <>
      <MediumInput />
      <Primary />
    </>
  );
};
