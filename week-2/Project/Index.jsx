import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./blog/BlogDetails";
import BlogList from "./blog/BlogList";
import NoPage from "./pages/NoPage";
import BlogComments from "./blog/BlogComments";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="py-4 w-full bg-blue-500 text-white text-center">
            <Link to={"/"}>Home |</Link>
            <Link to={"/about"}> About |</Link>
            <Link to={"/contact"}> Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path="/" element={<BlogList />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/:id/comments" element={<BlogComments />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
