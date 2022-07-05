import React from "react";
import "./input.css"

const Input = ({ type, placeholder, val, set, control, input }) => {
  return (
    <>
      <input
        type={type}
        className={` ${input} `}
        placeholder={placeholder}
        val={val}
        onChange={(e)=> set(e.target.value)}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
