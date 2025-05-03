import React from "react";
import ComponentFour from "./ComponentFour";

function ComponentThree() {
  return (
    <>
      <div className="bg-pink-500">
        <p>ComponentThree</p>
        <ComponentFour />
      </div>
    </>
  );
}

export default ComponentThree;
