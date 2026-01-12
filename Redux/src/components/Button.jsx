import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, resetValue } from "../redux/counterSlice";

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetValue())}>Reset</button>
    </div>
  );
};

export default Button;
