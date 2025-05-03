import React, { createContext, useState } from "react";
import ComponentOne from "./ComponentOne";

const NameContext = createContext();

export function Index() {
  //createContext is like a portal and our portal named to NameContext

  const [name] = useState("Jonathan");
  return (
    <>
      <NameContext.Provider value={name}>
        <ComponentOne />
      </NameContext.Provider>
    </>
  );
}

export default NameContext;
