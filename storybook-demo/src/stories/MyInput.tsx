const MyInput = (props: any) => {
  return (
    <input
      placeholder={props.placeholder}
      style={{
        width: props.size,
      }}
      {...props}
    />
  );
};

export default MyInput;
