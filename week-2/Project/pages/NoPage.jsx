import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center my-4">
        <h1 className="text-3xl font-bold">Route not found (404)</h1>
        <p className="text-xl text-gray-500">
          Seems your lost.{" "}
          <Link
            className="bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-md"
            to={`/`}
          >
            Click here
          </Link>{" "}
          to back Home.
        </p>
      </div>
    </>
  );
}
