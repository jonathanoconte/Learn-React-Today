// Day 3: Async JavaScript
// Learn: Promises, async/await, fetch()
// Tasks:
// Fetch users from JSONPlaceholder
// Handle loading/error states
// Mini Project: Show user names and emails from API

// fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.error('Error:', error));

console.log("Loading...");
const API_URL_USERS = 'https://jsonplaceholder.typicode.com/users/';

async function fetchUsers() {
      try {
            const res = await fetch(API_URL_USERS);
            if(!res.ok){
                  throw new Error("Failed to fetch users!")
            }
            const users = await res.json();
            console.clear()
            const usersNameEmail = users.map((user) => ({
                  name: user.name,
                  email: user.email,
            }))
            console.log(`Users (name & email)`, usersNameEmail);
      } catch (error) {
            console.log("Error: ", error.message);
      }
}

fetchUsers()