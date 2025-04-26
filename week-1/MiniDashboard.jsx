// Day Off (5 hrs)
// Project: Mini Dashboard
// Show user list from API
// Input to filter users
// Count number of users displayed
// Stretch: Clean code and GitHub push

import React, { useEffect, useState } from "react";

export default function MiniDashboard() {
  const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [inputNames, setInputNames] = useState("");

  useEffect(() => {
    fetch(API_URL_USERS)
      .then((response) => response.json())
      .then((json) => {
        console.log("Data", json);
        setUsers(json);
      })
      .catch((err) => console.error(err));
  }, []);
  //Leanne Graham
  // const filterUsers = users.filter((user) => user.name === inputNames);

  //includes = check if the string contains the search term anywhere inside it
  //startsWith = check if the string starts with search term

  const filterUsers = inputNames
    ? users.filter((user) =>
        user.name.toLowerCase().includes(inputNames.toLowerCase())
      )
    : users;
  // console.log("Check filter:", filterUsers);

  return (
    <>
      <div className="max-w-sm pl-4">
        <header className="max-w py-4 text-xl font-bold">
          Mini Dashboard With Realtime Search
        </header>

        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-500 rounded-md pl-1"
            placeholder="Search name..."
            value={inputNames}
            onChange={(e) => setInputNames(e.target.value)}
          />

          <p>Users: {filterUsers.length}</p>
        </div>

        <section className="pt-2">
          <table className="table-auto w-sm border border-black">
            <thead>
              <tr>
                <th className="border p-2 border-black">ID</th>
                <th className="border p-2 border-black">Name</th>
              </tr>
            </thead>
            <tbody>
              {filterUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border p-2 border-black">{user.id}</td>
                  <td className="border p-2 border-black">{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
