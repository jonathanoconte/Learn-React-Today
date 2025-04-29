import React from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogComments() {
  const { id } = useParams();
  return (
    <>
      <div>
        <div className=" m-4">
          <Link
            to={`/blogs/${id}`}
            className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Back
          </Link>
        </div>
        <div className="px-8 py-8 m-4 rounded-md border border-gray-300 shadow-md hover:border-r-5 hover:border-b-4 hover:border-gray-200">
          Blog Post Comments Sample for Post {id}
        </div>
      </div>
    </>
  );
}
