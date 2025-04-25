function UserCard({ name = "User1", age = 12, gender = "Gay" }) {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error:", error));
  return (
    <>
      <div className="text-center">
        <div className="w-52 h-auto bg-amber-50 rounded-md">
          <h4 className="text-xl font-bold p-2 rounded-t-md bg-indigo-500 text-white">
            UserCard
          </h4>
          <div className="p-2 bg-black rounded-b-md text-white">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ListOfUsres({ users }) {
  // const users = [
  //   { id: 1, name: "Jonathan", age: 25, status: true },
  //   { id: 2, name: "Mica", age: 15, status: true },
  //   { id: 3, name: "Joshua", age: 12, status: false },
  //   { id: 4, name: "Greg", age: 17, status: false },
  //   { id: 5, name: "Jack", age: 21, status: false },
  //   { id: 6, name: "Daisy", age: 18, status: false },
  // ];

  return (
    <>
      {users.map((user) => (
        <p key={user.id}>Name: {user.name}</p>
      ))}
    </>
  );
}

function App() {
  const users = [
    { id: 1, name: "Jonathan", age: 25, status: true },
    { id: 2, name: "Mica", age: 15, status: true },
    { id: 3, name: "Joshua", age: 12, status: false },
    { id: 4, name: "Greg", age: 17, status: false },
    { id: 5, name: "Jack", age: 21, status: false },
    { id: 6, name: "Daisy", age: 18, status: false },
  ];

  return (
    <>
      <UserCard name="Jonathan" age="24" gender="Male" />
      <ListOfUsres users={users} />
    </>
  );
}

export default App;
