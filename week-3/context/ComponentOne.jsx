import React from "react";
import ComponentTwo from "./ComponentTwo";

function ComponentOne() {
  return (
    <>
      <div className="bg-blue-500">
        <p>ComponentOne</p>

        <ComponentTwo />
      </div>
    </>
  );
}

export default ComponentOne;
