"use stricts"; // ___ errors that are normally ignores get flagged
// 



/*
// DEBUGGING IN JAVASCRIPT //

// 4 TYPES OF ERRORS //

1. Load-time ERRORS (a.k.a Syntax Errors)
    Occurs when programis loaded by browser
    Grammar, Spelling mistakes, missing parentheses, Incomplete brackets

2. Run-time Errors
    - Occurs when interpreter is unable to run the code
    - Syntax is correct, but execution is broken
    - ex. Reference an undeclared variable. Illegal math operations


3. Logic Errors
    - When code runs unexpectedly.
    
4. User Error
    - When user does something unexpected to the dev







// DEBUGGING METHODS & TOOLS //
1. Tracing: The examination of indiviual statements in an executing program,
            Dispaying alert boxes at diff. points to show results intermitttenly

2. Logging

3. Commenting Out Code

4. Break Mode and Break points
    Break Mode: Mode for running a program in which execution is ______ to allow you to review the current state of ____ and _____.

5. _____ Window
6. Watch _____


// IF STATEMENTS //

let age = 25;
let hasLicense = false

if(age >= 21){
    console.log("You are a legal adult.")
}
else{
    console.log("you are a minor.")
}
if(age >= 16){
    if(hasLicense == true){
        console.log("You are old enough to drive and have a license")
    }
    else{
        console.log("You may be old enough to drive, but GET OFF THE DAMN ROAD YOU LICENLESS BASTARD")
    }
}
else{
    console.log("You are not old enough to drive, SO GET OFF THE DAMN ROAD")
}

// else if statement. Enter a social media site. Gotta be 13+

age = 101

if(age >= 13){
    console.log("You are old enough to doom scroll the rest of your life away")
}
else if(age < 0){
    console.log("You physically can not be younger than 0")
}
else if(age == 0){
    console.log("You and your parents are a disgrace to humaity")
}
else if(age >= 100){
    console.log("Go die already")
}
else{
    console.log("You must be 13+ to doom scroll")
}

// Function are reusable sections of code.
// Declare code once, use it whatever you want after that
// Call the function to exacute code


function functionname(parameters, parameters){
    // function code goes here
}



function happyBirthday(username, bage){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you");
    console.log(`You are ${bage} years old`)
}

happyBirthday("Evan", age)
happyBirthday("Mr. Gardner", 38)
happyBirthday("Marcus Prado", 56);


function add(x,y){
    let result = x + y
    return result
}

let subtactAnswer = subtract(8,5);
console.log(subtractAnswer)



function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}



function isEven(number){
    return number % 2 === 0 ? true : false; //Ternary Operator
}

let username = "";

if(username === ""){
    console.log(`You didn't enter your name.`)
}
else{
    console.log(`Hello ${username}`)
}

let myUsername = "";

while(myUsername === ""){
    console.log(`Name not found`)
    myUsername = window.prompt('Enter your name');
}

console.log("While loop finished.");
console.log(`Hello ${myUsername}`);

let myName;

do{
    myName = window.prompt('Enter your name');
}while(myName === "" || myName === null);



let loggedIn = false;
let myNewUserName;
let myPassword

while(!loggedIn){
    myNewUserName = window.prompt("Enter you Username");
    myPassword = window.prompt("Enter you Password");
    if(myNewUserName === "username" && myPassword === "password"){
        loggedIn = true;
        console.log("Log in success")
    }
    else{
        console.log("Invalid credentials. Try again")
    }
}



// FOR LOOPS //
// Repeat some code a LIMITED amount of times.
for(let i = 2; i <= 20; i+=2){
    console.log("Hello");
    console.log(i)
}
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break; //continue;
    }
    console.log(i)
}



let fruits = ["apple", "banana", "orange"]
console.log(fruits[0])
fruits[3] = "coconut"
console.log(fruits[3])

fruits.push("coconut")
fruits.pop()
fruits.unshift("mango")
fruits.shift()

let numoffruits = fruits.length
console.log(numoffruits)
console.log(fruits.length)

let index = fruits.indexOf("starfruit")
console.log(index)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

for(let i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i])
}

for(let fruit of fruits){
    console.log(fruit)
}

//Sort method
fruits.sort()
console.log(fruits)
//Reverse sort
fruits.reverse()
console.log(fruits)

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];
console.log(matrix)

for(let row of matrix){
    const rowString = row.join(' ') // .join adds something between each row element or array element
    console.log(rowString)
}

//matrix [row][column]
matrix[0][0] = 'X'
matrix[0][1] = 'O'
matrix[0][2] = 'O'
matrix[1][0] = 'X'
matrix[1][1] = 'O'
matrix[1][2] = 'X'
matrix[2][0] = 'O'
matrix[2][1] = 'X'
matrix[2][2] = 'O'

for(let row of matrix){
    const rowString = row.join(' ') // .join adds something between each row element or array element
    console.log(rowString)
}


const numpad = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
                ["*", 0, "#"]];
console.log(numpad)

// Object = like python dictionary
// NOT the same as "Objects" from object oriented programming

let person = {
    // Name/Value pairs
    firstName: "John",
    lastName: "Smith",
    age: 46,
    email: "johnsmith@email.com"
}

console.log(person)
// dot notation
console.log(person.lastName)

// Bracket Notation

// console.log(person[age]) <-- Will NOT work
console.log(person["age"]) // Assuming a variable
console.log(person["age"] + 10)

// Looping through Objects
for (i in person){
    // console.log[i] <-- Will not work
    //console.log(person.i) <-- Will not work
    console.log(person[i]) // <-- THIS WORKS!!!
}

for(i in person){
    console.log(i + ": " + person[i])
}



// MATH Object = a built-in object that provides a collection of properties & methods

let x = 1.99
let y = 4
let z = 8.2


console.log(Math.PI) // Gives the value of PI
console.log("The minimum is: " + Math.min(x, y, z)) //find minimum
console.log("The maximum is: " + Math.max(x, y, z)) //find maximum

console.log(Math.sqrt(y))// finds square root of number
console.log(Math.round(z))// general round
console.log(Math.floor(x))// round down
console.log(Math.ceil(x))// round up

console.log(Math.trunc(z)) // remove decimal portion
console.log(Math.pow(x,y)) // x to the power of y

console.log(Math.sign(5))
// returns whether x is NEGATIVE (-1), NULL (0), or POSITIVE (1)

console.log(Math.random)// returns number between 0 and 1
console.log(Math.random() * 10)// returns number between 0 and 9
console.log(Math.random() * 11)// returns number between 0 and 10
console.log(Math.random() * 101)// returns number between 0 and 100

let min = 1
let max = 10

// This JS function always returns a random number between min (included) and max (excluded)

// Returns random number that could be 1-99
function getRndIntegerExclusive(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

// This JS function always return a random number between min and max (both included) (1-100)

function getRndIntegerInclusive(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min
}

// SPREAD OPERATOR = allows an iterable items such as an [array] or "string" to be expanded into separate elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5]

// cannot pass array the Math.max. Returns NaN
let maximum = Math.max(numbers)

// use spread operator on [numbers]
let newMaximum = Math.max(...numbers)

console.log(maximum)
console.log(newMaximum)

let minimum = Math.min(numbers)
console.log(minimum)

// Spread string

let username = "Mr. Gardner"
let letters = [...username]
console.log(username)

console.log(letters) // unpacks the string into individual letters

// All one string, but dash between each letter
let assembledUsername = [...username].join("-")
console.log(assembledUsername)




// Combining arrays with spread operator

let fruitsAgain = ["apple", "orange", "banana", "mango"]

let vegetables = ["carrots", "peppers", "broccoli"];
// combines fruitsAgain + vegetables
let foods = [...fruitsAgain, ...vegetables]
console.log(foods)
// combines fruitsAgain + vegetables
foods = [...fruitsAgain, ...vegetables, "eggs", "milk"]
console.log(foods);



let x = true
let y = false
let z = true

// Simple boolean check

if(y){
    console.log("this is true")
}else{
    console.log("this is false")
}

// The AND && operator
if (x && y){
    console.log("x and y are true")
}else{
    console.log("x and y together are not true")
}

// The OR || operator

if(x || y){
    console.log("x or y is true")
}else{
    console.log("Neither x nor y are true")
}

// The NOT ! operator
if(!x){
    console.log("x is not true")
}else{
    console.log("x is true")
}

const temp = 35

if(temp > 0){
    console.log("The weather is above 0")
}else if(temp == 32){
    console.log("The temp has just hit freezing")
}else{
    console.log("The temp is below 0")
}

// Check range of numbers with logical operators

if(temp > 70 && temp < 80){
    console.log("The temp is ideal")
}else{
    console.log("The temp is not ideal")
}

// Check range with OR operator

if (temp > 90 || temp < 60){
    console.log("The temp is extreme (either hot or cold)")
}else{
    console.log("The temp is within an acceptable range")
}

//if operator number range check

if(!(temp > 100 || temp < 50)){
    console.log("Temp is acceptable")
}else{
    console.log("Temp is extreme (either too hot or too cold)")
}

// Equality & Strict Equality
/*
   = assignment operator
   == comparison operator (check if values are equal)\
   === strict equality operator (compares if values AND the datatype are equal)
   != inequality operator
   !== STRICT inequality operator


const PI = 3.14
console.log(typeof PI)

if(PI == "3.14"){
    console.log("That is Pi")
}else{
    console.log("That is NOT PI")
}

// The string of 3.14 is == the number 3.14 in JavaScript

if(PI === "3.14"){
    console.log("That is Pi")
}else{
    console.log("That is NOT PI")
}


// If the 2 are not equal this should evaluate to true and trigger the if statement, but in this one it didn't since they were different types
if(PI != "3.14"){
    console.log("That is NOT Pi")
}else{
    console.log("That is PI")
}

// Here the two are STRICTLY NOT equal, evaluating the if statement
if(PI !== "3.14"){
    console.log("That is NOT Pi")
}else{
    console.log("That is PI")
}

*/

function changeText() {
    this.innerHTML = "Clicked"
}
document.getElementById("myButton").addEventListener("click", changeText);


// Create task display area
let taskContainer = document.createElement("div")
taskContainer.id = "taskmanager"
document.body.appendChild(taskContainer)

// Submit handler
form.addEventListener("submit", function (i) {
    i.preventDefault()

    let text = document.getElementById("textinput").value.trim() // moved inside to get latest input

    if (text === "") {
        alert("Task name cannot be empty.")
        return;
    }

    const task = {
        id: ++number,
        name: text,
        priority: dropdown.value,
        isImportant: checkbox.checked,
        isCompleted: false,
        date: new Date().toLocaleString()
    };

    tasks.push(task)
    logTasks()
    renderTasks()
    form.reset()
});

// Render tasks
function renderTasks() {
    taskContainer.innerHTML = ""

    tasks.forEach(task => {
        let rimportant = document.createElement("div")
        rimportant.className = "task"

        if (task.isImportant) {
            rimportant.style.borderLeft = "5px solid red"
            rimportant.style.backgroundColor = "#ffe5e5"
        }
        if (rimportant.isCompleted) {
            rimportant.style.textDecoration = "line-through"
            rimportant.style.opacity = 0.6
        }

        rimportant.innerHTML = `
            <strong>${task.name}</strong>
            <em> (${task.priority})</em><br>
            <small>Added: ${task.date}</small><br>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `

        rimportant.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                deleteTask(task.id)
            } else {
                toggleCompletion(task.id)
            }
        })

        taskContainer.appendChild(rimportant)
    })
}

// Toggle completion
function toggleCompletion(id) {
    let task = tasks.find(t => t.id === id)
    if (task) {
        task.isCompleted = !task.isCompleted
        logTasks()
        renderTasks()
    }
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id)
    logTasks()
    renderTasks()
}

// Log tasks
function logTasks() {
    console.log(JSON.stringify(tasks, null, 2))
}