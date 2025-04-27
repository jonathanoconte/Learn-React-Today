// Day 9: React Router Intro
// Learn: BrowserRouter, Routes, Link
// Tasks:
// Set up 2 pages
// Navigate using <Link>
// Mini Project: Home / About / Contact pages

// To add React Router in your application, run this in the terminal from the root directory of the application:
//npm i -D react-router-dom@latest
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="py-4 bg-blue-500 text-white text-center">
            <Link to={"/"}>Home |</Link>
            <Link to={"/about"}> About |</Link>
            <Link to={"/contact"}> Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-4 bg-blue-500 text-white text-center">
          Footer @{new Date().getFullYear()}
        </footer>
      </BrowserRouter>
    </>
  );
}
