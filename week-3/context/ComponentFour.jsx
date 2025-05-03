import React, { useContext } from "react";
import { NameContext } from "./Index";

function ComponentFour() {
  const nameHolder = useContext(NameContext);
  return (
    <>
      <div className="bg-green-700">
        <p>name: {nameHolder}</p>
        <h1>ComponentFour</h1>
      </div>
    </>
  );
}

export default ComponentFour;
