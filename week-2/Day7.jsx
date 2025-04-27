// Day 7: Forms Basics
// Learn: Controlled components
// Tasks:
// Create controlled input fields
// Bind to state
// Mini Project: Name + Email form with submit button

import React, { useState } from "react";

export default function Day7() {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const clearInputs = () => {
    setInputs({
      fname: "",
      lname: "",
      email: "",
    });
  };

  // One dynamic handleChange for multiple inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //code here
    alert(`INFORMATION SUBMITTED FROM FORM:\n
        Name: ${inputs.fname} ${inputs.lname}\n
        Email: ${inputs.email}`);
    clearInputs();
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 w-full max-w-md rounded-lg"
        >
          <div className="flex flex-col mb-2">
            <label htmlFor="name" className="text-gray-700">
              Name:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="name"
                placeholder="First Name"
                name="fname"
                value={inputs.fname}
                onChange={handleChange}
              />
              <input
                type="text"
                className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="name"
                placeholder="Last Name"
                name="lname"
                value={inputs.lname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col  mb-3">
            <label htmlFor="email" className="text-gray-700">
              Email:
            </label>
            <input
              className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="name@example.com"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500  px-2 py-1 text-white rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
