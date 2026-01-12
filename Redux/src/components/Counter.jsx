import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  return <div style={{ fontSize: "20px" }}>Counter: {count}</div>;
};

export default Counter;
