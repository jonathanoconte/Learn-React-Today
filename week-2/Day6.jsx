// Day 6: useEffect Basics
// Learn: useEffect, side effects
// Tasks:
// Fetch data on mount
// Add loading state
// Mini Project: Show users with a spinner while loading

import React, { useEffect, useState } from "react";

function Day6() {
  const API_URL_USERS = "https://jsonplaceholder.typicode.com/users/";
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          //temporary delay
          setUsers(data);
          setloading(false);
        }, 5000);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  console.log("Data:", JSON.stringify(users));

  return (
    <>
      <div className="p-6">
        {loading ? (
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg
              className="w-8 h-8 text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <table className="min-w-full table-auto divide-y divide-gray-200 rounded-lg ">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-2 text-left text-gray-600">Id</th>
                <th className="px-6 py-2 text-left text-gray-600">Name</th>
                <th className="px-6 py-2 text-left text-gray-600">Email</th>
                <th className="px-6 py-2 text-left text-gray-600">Location</th>
                <th className="px-6 py-2 text-left text-gray-600">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-1 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-1 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-1 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-1 whitespace-nowrap">
                    {user.address.city}
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Day6;
