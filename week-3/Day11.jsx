// Day 11: useContext Basics
// Learn: Create and provide context
// Tasks:
// Theme toggle with context
// Mini Project: Dark mode toggle app

// Today
// useContext basics
// useContext is a React hook that lets you access values from a context without having to pass props manually through multiple levels of a component tree. Here's a quick breakdown:

// Basic Steps to Use useContext
// Create a Context – Use React.createContext to create a context object.
// Provide Context Values – Wrap components in a Provider component to supply values.
// Consume Context Values – Use useContext inside a component to access the provided values.

import React, { useState, createContext, useContext } from "react";

// Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default function Day11() {
  return (
    <>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </>
  );
}
