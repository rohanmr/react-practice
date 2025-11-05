import React, { useReducer } from "react";
import { counterReducer, initialState } from "../reducer/CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="text-center">
      <h1>Counter using Reducer Hook</h1>
      <div className="display-2">{state.count}</div>
      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
