// DOM TECHNIQUES

// Add ELEMENTS

// Set Variable to element we want to const
const body = document.body
console.log(body)

// Append = ADD to page
// append() & appendChild()
// append() = you can append string
// appendChild() = Errors when appending strings. only work with appending elements
// Only work with appending elements.

body.append("Hello World")

// Create Elements
const div = document.createElement('div')
console.log(div)
body.append(div)

// 2 ways to add text to this div
div.innerText = "Hello again"
console.log('div')
div.textContent = "Hello again again"

// Modify HTML
//div.innerText = "<strong>Hello World 2 </strong>" - no work properly
div.innerHTML = "<strong> Hello World 2 </strong>"

// You can also do this:
const strong = document.createElement("strong")
strong.innerText = "This is SO BOLD"
console.log(strong)
div.append(strong)


// Target by Class or element
const div2 = document.querySelector('div')
console.log(div2)

const span = document.querySelector('span')
console.log(span)
const spans = document.querySelectorAll('span')
console.log(spans)

const spanHi = document.querySelector('#Hello')
console.log(spanHi)
const spanBye = document.querySelector('#Bye')
console.log(spanBye)

// spanBye.remove() // removeChild also works
// spanHi.append(spanBye) // adds to end


const myList = document.getElementById("myList")
console.log(myList)
const CssListItem = myList.children[1]
console.log(CssListItem)

const newListElement = document.createElement("li") // Creates  a list
newListElement.textContent = "Python"
console.log(newListElement)
// .replaceChild() syntax = .replaceChild(newChild, oldChild)
myList.replaceChild(newListElement, CssListItem)

// Modifying Element Attributes

console.log(spanHi.getAttribute('id')) // OR...
console.log(spanHi.id)

//set their ID
console.log(spanBye.id)
spanBye.setAttribute("id", "newGoodBye")
console.log(spanBye.id)
