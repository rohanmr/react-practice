import React, { useState } from "react";
import { Router } from "react-router-dom";

const Calculator = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState("0");
  const addition = () => {
    setResult(Number(num1) + Number(num2));
  };
  const substraction = () => {
    setResult(Number(num1) - Number(num2));
  };
  const division = () => {
    setResult(Number(num1) / Number(num2));
  };
  const multiplication = () => {
    setResult(Number(num1) * Number(num2));
  };
  const resetValue = () => {
    setNum1("");
    setNum2("");
    setResult("0");
  };

  return (
    <>
      <div className="m-5 text-center display-3">Calculator</div>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <div className="card w-25 fs-3 p-2 shadow-lg">{result}</div>
      </div>
      <div className="d-flex gap-1 justify-content-center m-3 ">
        <input
          className="p-1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          className="p-1"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2 m-3">
        <button className="btn btn-outline-dark" onClick={addition}>
          +
        </button>
        <button className="btn btn-outline-dark" onClick={substraction}>
          -
        </button>
        <button className="btn btn-outline-dark" onClick={multiplication}>
          *
        </button>
        <button className="btn btn-outline-dark" onClick={division}>
          /
        </button>
        <button className="btn btn-outline-danger" onClick={resetValue}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Calculator;
