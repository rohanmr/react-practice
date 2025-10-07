import React, { useState } from "react";

const HeadingChange = () => {
  const [heading, setHeading] = useState("Heading Change");
  return (
    <>
      <div className="display-1 text-center">{heading}</div>
      <div className="d-flex justify-content-center gap-2 m-5">
        <button
          className="btn  btn-outline-danger"
          onClick={() => setHeading("Heading Changes done")}
        >
          Change-Heading
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => setHeading("Heading Change")}
        >
          Change-Back
        </button>
      </div>
    </>
  );
};

export default HeadingChange;
