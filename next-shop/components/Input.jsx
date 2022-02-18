import React from "react";

const Input = ({ type, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="border outline-none px-2"
      required
    />
  );
};

export default Input;
