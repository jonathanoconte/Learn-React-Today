const user = {
    name: "Jonathan",
    age: 25,
    gender: "Male"
}

//destructing user object
const {name, age, gender} = user;

// const userCardDesctuctured = `
// ---User Card Desctuctured---
// Name:   :   ${name}
// Age:    :   ${age}
// Gende:  :   ${gender}
// `

// const userCardNotDesctuctured = `
// ---User Card Not Desctuctured---
// Name:   :   ${user.name}
// Age:    :   ${user.age}
// Gende:  :   ${user.gender}
// `

//Lets used arrow function
const userCard = (isDestructured, name, age, gender) => {
    //using template literals on displaying 
    console.log(`
---User Card Decstructed ${isDestructured}---
Name:   :   ${name}
Age:    :   ${age}
Gende:  :   ${gender}
`)
}


userCard(true, name, age, gender)
userCard(false, user.name, user.age, user.gender)
//same result but destructuring are more cleaner
