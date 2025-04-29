import React from "react";
// import BlogList from "../blog/BlogList";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Outlet />
    </>
  );
}
