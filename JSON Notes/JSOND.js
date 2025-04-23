// JSON.stringify() = converts a JS object to JSON string

// JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
console.log(names)

const jsonStringNames = JSON.stringify(names)
console.log(jsonStringNames)

//JSON.stringify on an array
const person = 
{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}
console.log(person)

const jsonStringPerson = JSON.stringify(person)
console.log(jsonStringPerson)

// JSON.stringify an array of objects
const bikiniBottom = 
[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]
console.log(bikiniBottom)

const jsonStringBikiniBottom = JSON.stringify(bikiniBottom)
console.log(jsonStringBikiniBottom)

// JSON.parse()

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
const jsonPerson = 
`{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`
const jsonBikiniBottom =
`[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]`

console.log(jsonNames)
const parseNames = JSON.parse(jsonNames)
console.log(parseNames)

console.log(jsonPerson)
const parsePerson = JSON.parse(jsonPerson)
console.log(parsePerson)

console.log(jsonBikiniBottom)
const parseBikiniBottom = JSON.parse(jsonBikiniBottom)
console.log(parseBikiniBottom)

// Fetch()
fetch("person.json")
    .then(response => response.json())
    .then(value => (console.log(value)))

// Iterate through an array of objects with fetch using for each

fetch("bikini-bottom.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log(error))