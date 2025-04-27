// Day 8: Form Validation
// Learn: Manual validation
// Tasks:
// Check for empty fields
// Show error messages
// Mini Project: Simple Login Form

import React, { useState } from "react";

export default function Day8() {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [isEmptyEmail, setIsEmptyEmail] = useState(false); // if input empty
  const [isEmptyPass, setIsEmptyPass] = useState(false); // if input empty

  const clearInputs = () => {
    setInputs({
      email: "",
      pass: "",
    });
  };

  // One dynamic handleChange for multiple inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));

    //hide the error if starts typing
    if (name === "email" && value.trim() !== "") {
      setIsEmptyEmail(false);
    }
    if (name === "pass" && value.trim() !== "") {
      setIsEmptyPass(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEmptyEmail(false);
    setIsEmptyPass(false);

    let hasError = false;

    //Issue incountered, only shows the error on email, even both of field are empty due to early return on email validation
    //If the return and on pass, both now showing the error if both empty but the problem if the email if empty and pass are not it now submitting

    //To fix, declare hasError that handle empty validation for both, if any on email and pass has emapty field, its not sumbitting
    if (inputs.email.trim() === "") {
      console.warn("email is empty");
      setIsEmptyEmail(true);
      // return; stop here, never check pass
      hasError = true;
    }
    if (inputs.pass.trim() === "") {
      console.warn("password is empty");
      setIsEmptyPass(true);
      // return; //proceed on submit even email is empty
      hasError = true;
    }

    //Only submit if both valid
    if (hasError) {
      return; //block submition if any field invalid
    }

    console.log("Both field have value: Login Success");
    setIsEmptyEmail(false);
    setIsEmptyPass(false);
    alert(`Login Successfully!`);

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
            <label htmlFor="email" className="text-gray-700">
              Email Address<span className=" text-red-500">*</span>
            </label>

            <input
              type="text"
              className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              id="email"
              placeholder="Enter email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <div>
              <span
                className={`flex ${
                  isEmptyEmail ? "block" : "hidden"
                } justify-end text-sm text-red-500`}
              >
                Email is required.
              </span>
            </div>
          </div>
          <div className="flex flex-col  mb-4">
            <label htmlFor="pass" className="text-gray-700">
              Password<span className=" text-red-500">*</span>
            </label>
            <input
              className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="password"
              id="pass"
              placeholder="Password"
              name="pass"
              value={inputs.pass}
              onChange={handleChange}
            />
            <div>
              <span
                className={`flex ${
                  isEmptyPass ? "block" : "hidden"
                } justify-end text-sm text-red-500`}
              >
                Password is required.
              </span>
            </div>
          </div>
          <div className="flex justify-start">
            <button className="bg-blue-500  px-2 py-1 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
