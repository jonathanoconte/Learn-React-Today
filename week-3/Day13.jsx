// Day 13: useReducer
// Learn: Reducer pattern
// Tasks:
// Add/delete items in list
// Mini Project: Todo App with useReducer

// Basic Syntax:
// const [state, dispatch] = useReducer(reducer, initialState);
// reducer - func that determines state changes
// initialState - starting state
// dispatch - func send to reducer

// Anatomy on a reducer function
// function reducer(state, action) {
//   switch (action.type) {
//     case "ACTION_TYPE":
//       return newState;
//     default:
//       return state;
//   }
// }

import React, { useReducer, useState } from "react";

const initialState = [
  { id: 1, text: "Coding" },
  { id: 2, text: "Rest" },
  { id: 3, text: "Workout" },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function Day13() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 border-gray-500 mr-2"
            type="text"
            placeholder="Add todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-500 px-2 py-1 rounded-md text-white"
          >
            Add
          </button>
        </form>
        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                className="bg-red-500 px-2 py-1 rounded-md text-white"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Day13;
