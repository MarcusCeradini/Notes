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

*/

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