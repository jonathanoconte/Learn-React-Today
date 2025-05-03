import React from "react";
import ComponentThree from "./ComponentThree";

function ComponentTwo() {
  return (
    <>
      <div className="bg-yellow-500">
        <p>ComponentTwo</p>

        <ComponentThree />
      </div>
    </>
  );
}

export default ComponentTwo;
