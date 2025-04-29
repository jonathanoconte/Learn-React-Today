import LoadingSpinner from "../pages/LoadingSpinner";
import { Link } from "react-router-dom";

export default function BlogList({ posts, loading }) {
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center my-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              Simple Blog Post App
            </h1>
            <span className="text-lg md:text-xl text-center text-gray-500">
              A collection of random post using JSONPlaceholder API
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="px-8 py-8 mx-4 rounded-md shadow-md border border-gray-300 hover:border-r-4 hover:border-b-4 hover:border-gray-200"
              >
                <div>
                  <div>Post: {post.id}</div>
                  <div>Title: {post.title}</div>
                </div>
                <div className="flex justify-end mt-2">
                  <Link
                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 "
                    to={`/blogs/${post.id}`}
                  >
                    View Post
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
