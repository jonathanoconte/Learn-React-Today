import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./blog/BlogDetails";
import BlogList from "./blog/BlogList";
import NoPage from "./pages/NoPage";
import BlogComments from "./blog/BlogComments";

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";

  async function fetchData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await res.json();
      setPosts(data);
      setloading(false);
    } catch (error) {
      console.error("Opss, Somethings working on fetching!", error);
    }
  }

  useEffect(() => {
    fetchData(API_URL);
  }, []);

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
            <Route
              path="/"
              element={<BlogList posts={posts} loading={loading} />}
            />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/blogs/:id"
            element={<BlogDetails posts={posts} loading={loading} />}
          />
          <Route path="/blogs/:id/comments" element={<BlogComments />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
