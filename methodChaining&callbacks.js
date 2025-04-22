// // Chaining = Calling one method after another in one continuous line of code

// // Uses Method Chaining
// let username = window.prompt("Enter your username")

// username = username.trim()
// let letter = username.charAt(0)
// letter = letter.toUpperCase()

// let extraChars = username.slice(1)
// extraChars = extraChars.toLowerCase()
// username = letter + extraChars

// console.log(username)

// // Does not use Chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

// console.log(username)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CALLBACKS = a function that is passed as an argument to another function

// hello()
// goodbye()

// hello(goodbye)

// function hello(){
//     console.log("Hello")
//     callback()
// }

// function wait() {
//     console.log("Wait")
// }

// function leave(){
//     console.log("LEAVE")
// }

// function goodbye() {
//     console.log("Goodbye")
// }


// sum(displayConsole, 1, 2)

// function sum(callback, x, y) {
//     let result = x + y
//     callback(result)
// }

// function displayConsole(result) {
//     console.log(result)
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result
// }

// Synchronous = Executes line by line continuously in a sequential order



// Asynchronous = Allow multiple operations to be performed concurrently

// function func1(callback) {
//     setTimeout(() => {console.log("Task 4");
//                         callback()}, 3000)
// }

// setTimeout(() => console.log("Task 1"), 3000)

// console.log("Task 1")
// console.log("Task 2")
// console.log("Task 3")

//Callback Hell =  CallBacks are nested within other callbacks

// function task1(callback) {
//     setTimeout(()=> {console.log("Task 1 Complete"); callback()}, 2000)
// }

// function task2(callback) {
//     setTimeout(()=> {console.log("Task 2 Complete"); callback()}, 2000)
// }

// function task3(callback) {
//     setTimeout(()=> {console.log("Task 3 Complete"); callback()}, 2000)

// }

// function task4(callback) {
//     setTimeout(()=> {console.log("Task 4 Complete"); callback()}, 2000)
// }

// // task1()
// // task2()
// // task3()
// // task4()
// // console.log("All tasks complete")

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5(() => console.log("All tasks complete"))
//             })
//         })
//     })
// })


// Promise = An Object that manages asynchronous operations. Wrap a Promise Object around (asynchronous code), "promise to return a value"

// function walkDog() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("You walked the dog")
//             } else{
//                 reject("You did not walk the dog")
//             }
//             console.log("You walked the dog")
//         }, 1500)
//     })
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         console.log("You cleaned the Kitchen")
//     }))
// }

// function takeoutTrash() {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         console.log("You took out the trash")
//     }, 500))
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeoutTrash()}).then(value => {console.log(value); console.log("You finished all the Chores")})
//     .catch(error => console.log(error()))

// Async/Await = Async = makes a function return promise
//              Await = makes an async function wait for a promise

//              Allows you to write

function walkDog(){

}

function cleanKitchen(){

}
function takeoutTrash(){

}

async function doChores(){
    try{
        const walkDogResult = await walkDog()
        console.log(walkDogResult)
    
        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)
    
        const takeoutTrashresult = await takeoutTrash()
        console.log(takeoutTrashresult)
    
        console.log("You finished all chores")
    }
    catch(error) {
        console.log(error)
    }
}

doChores()