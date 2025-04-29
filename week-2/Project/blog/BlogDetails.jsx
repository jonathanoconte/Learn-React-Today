import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoPage from "../pages/NoPage";
import LoadingSpinner from "../pages/LoadingSpinner";

export default function BlogDetails({ posts, loading }) {
  const { id } = useParams();

  if (loading) {
    return <LoadingSpinner />;
  }
  //console.log(typeof id);
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <NoPage />;
  }

  return (
    <>
      <div>
        <div className=" m-4">
          <Link
            to={`/`}
            className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Back
          </Link>
        </div>

        <div className="px-8 py-8 m-4 rounded-md border border-gray-300 shadow-md hover:border-r-5 hover:border-b-4 hover:border-gray-200">
          <h1>post {post.id}</h1>
          <h1 className="text-xl font-bold">Title: {post.title}</h1>
          <p>Body: {post.body}</p>
          <div className="mt-2">
            <Link
              className="px-2 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-600 "
              to={`/blogs/${post.id}/comments`}
            >
              View Comment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
