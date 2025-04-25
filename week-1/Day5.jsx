// Day 5: useState + Event Handling
// Learn: useState, onClick/onChange events
// Tasks:
// Create a counter with + and - buttons
// Handle form input
// Mini Project: Live greeting form ("Hello, [name]")

import React, { useState } from "react";

function Task1() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <>
      {/* task 1: Create a counter with + and - buttons */}
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 px-2 py-1 text-white rounded-md"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-blue-500 px-2 py-1 text-white rounded-md"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}

function Task2() {
  const [inputName, setInputName] = useState("");
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="">Name: {inputName}</label>
        <input
          type="text"
          className="border-2 border-gray-600 rounded-md max-w-sm"
          placeholder="Enter name..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
    </>
  );
}

function MiniProject() {
  const [inputName, setInputName] = useState("");
  const [name, setName] = useState("User");

  const greetUser = (e) => {
    e.preventDefault();
    if (inputName === "") {
      alert("Please enter name!");
      return;
    } else {
      setName(inputName);
      console.log(inputName);
      setInputName("");
    }
  };

  return (
    <>
      <form
        action=""
        className="border max-w-sm px-2 py-4 "
        onSubmit={greetUser}
      >
        <h1 className="text-center text-4xl">Hello, {name}</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            className="border-2 border-gray-600 rounded-md max-w-sm"
            placeholder="Enter name..."
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 px-2 py-1 rounded-md mt-3 text-white"
          type="submit"
        >
          Greet
        </button>
      </form>
    </>
  );
}

export default function Day5() {
  return (
    <>
      <Task1 />
      <Task2 />
      <div className="mt-4">
        <MiniProject />
      </div>
    </>
  );
}
