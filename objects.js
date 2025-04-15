// let user = new Object() // "object constructor"
// let user = {} // "object literal"
// let user = {
// key: value, //key: value pairs
// property-name: value, // property name is the same 
// }

// let user = {
//      name: "Karim",
//      age: 30,
// }
// console.log(user)

// //object.key=123
// user.isStudent = true;
// console.log(user)

// delete user.age
// console.log(user)

// // 2 notation styles for referencing keys
// // object.key
// object[multi-word key]

// user["likes birds"] = true
// console.log(user)

// let newUser = {}
// newUser["likes roblox"] = true

// // get
// alert(newUser["likes roblox"])

// // delete
// delete newUser["likes roblox"];

//  console.log(newUser)

//  let fruit = prompt("Which fruit do you want to buy")
//  let bag = {
//      [fruit]: 5,
// }
// alert(bag.fruit)

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5
// }
// console.log(bag)

// function makeUser(name, age){
//     return {
//         name,
//         age: 30 //take charge over variable value (line 58 age does not work)
//     };
// }

// let user = makeUser("Marcus", 54);
// alert(user.name);

// let student = {
//     name: "Quint",
//     age: 21,
// }
// alert("age" in student);
// alert("gamer" in student);

// CHECK FOR DATA
// let newStudent = {
//     age: 35
// }
// let key = "age";
// alert(key in newStudent)

// Syntax:
// for (key in object) {
//     //code to run
// }

let user = {
    name: "Bianca",
    age: 29,
    insStudent: false,
}
console.log(user)

for (let key in user) {
    // keys
    alert(key)
    // grabs values for the keys
    alert(user[key]);
}

// let user = {}
// user.name = "Biruk"
// user.surname = "I don't know how to spell this last name"
// user.name = "help"
// delete user.name
// console.log(user)

// OBJECTS
// A collection of related
// data (properties) and
// functions (methods)
//Often represents real-world entity
// ex. book, movie, person

const steve = {
    // OBJECTS STATES
    // These properties describe
    // the state of an object
    // or its characteristics
    firstName: "Steve",
    lastName: "Minecraft",
    age: 55,
    isEmployed: true,
    //OBJECT BEHAVIORS (methods)
    sayHello: function() {
        console.log("I....AM STEVE")
    },
    action: function(){
        console.log("CHICKEN JOCKEY")
    }
}

console.log(steve.lastName)
steve.sayHello()
steve.action()

const spongebob = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 26,
    isEmployed: true,
    sayHello: function(){
        console.log("HI! I am spongebob")
    },
    action: function(){
        console.log("Krabby Patty")
    }
}

spongebob.sayHello()
spongebob.action()

let book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    displayInfo: function(){
        console.log(`${this.title} by ${this.author}`)
    }
}
book.displayInfo();

class Book{
    constructor(title,author,genre) {
        this.title = title,
        this.author = author,
        this.genre = genre;
    }
    displayInfo(){
        console.log(`${this.title} by ${this.author}, - Genre: ${this.genre}`)
    }
}


newBook = new Book("The Hobbit", "J.R.R Tolkien", "Fantasy")
newBook.displayInfo()
let mysecondbook = new Book("Dune", "Frank Herbert", "Sci-Fi")
mysecondbook.displayInfo()

console.log(typeof Book)

newerbook = new Book (prompt("New book"), prompt("Author"), prompt("Genre"))
newerbook.displayInfo()