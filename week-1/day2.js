// Day 2: Array Methods
// Learn: .map(), .filter(), .reduce(), .find()
// Tasks:
// Create an array of users and use all methods
// Calculate average age with .reduce()
// Mini Project: Filter active users and display them in cards

//task 1: Create an array of users and use all methods
//since the instructions is array. We are using arrays of object for this and destucture from the week 1 day 1 lesson

const users = [
    {id: 1 , name: "Jonathan", age: 25, status: true},
    {id: 2 , name: "Mica", age: 15, status: true},
    {id: 3 , name: "Joshua", age: 12, status: false},
    {id: 4 , name: "Greg", age: 17, status: false},
    {id: 5 , name: "Jack", age: 21, status: false},
    {id: 6 , name: "Daisy", age: 18, status: false},

];

//destructing users object
const {id, name, age, status} = users;


//////////////////////////////////////////////////////////////////////////////////////////////////
//reference: https://www.w3schools.com/jsref/jsref_map.asp
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//using map() method
const fetchUsersName = users.map(({name}) => name);
console.log(fetchUsersName);
//////////////////////////////////////////////////////////////////////////////////////////////////

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

//using filter() method
const removeUsers = users.filter(({name}) => name !== "Joshua");
console.log(removeUsers);

//////////////////////////////////////////////////////////////////////////////////////////////////

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
//find is for locate a single, specific element based on array
const searchByName = users.find(({name}) => name === "Daisy");
console.log(searchByName);
const searchByIndex = users.find(({id}) => id === 2);
console.log(searchByIndex);

//task 2: Calculate average age with .reduce()
//to get avarage age, need to get total age and divided by the total number person.
const totalAge = users.reduce((storeAge, {age}) => {
    return storeAge + age;
}, 0)
const averageAge = totalAge / users.length;
console.log(averageAge)

//lesson: needs to intialize the accumulators value to 0, instead the accumulator(storeAge) will treat as object
//One reason why typescript has advantage.

// Mini Project: Filter active users and display them in cards
const filterActiveUsers = (isOnline) => {
const activeUsers = users.filter(({status}) => status === isOnline);
return activeUsers;
}
console.log(filterActiveUsers(true));