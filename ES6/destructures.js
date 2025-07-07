// Destructuring assignment in JavaScript allows unpacking values from arrays or properties from objects into distinct variables.
// It provides a more concise and readable way to extract values from complex data structures.

//1. Array Destructuring
const arr = [1, 2, 3, 4, 5];

//a. Assignment of elements to variables 
// const first = arr[0]; // 1
// const second = arr[1]; // 2
// const third = arr[2]; // 3

// Destructuring assignment allows you to unpack values from arrays into distinct variables.
// const [first, second, third] = arr;

// console.log(first); // 1
// console.log(second); // 2   

//b. Skipping elements 
// const [, , third] = arr; // Skips the first two elements
// console.log(third); // 3

//c. Default values
const [firstValue = 10, secondValue = 20, thirdValue] = []; // If the array has fewer elements, default values are used

console.log(firstValue); // 10
console.log(secondValue); // 20 
console.log(thirdValue); // 2 

//d. Rest operator 
const [firstElement, ...restElements] = arr; // The rest operator collects the remaining elements into an array
console.log(firstElement); // 1
console.log(restElements); // [2, 3, 4, 5]

//e. Nested arrays
const nestedArr = [1, [2, 3], 4];
const [firstNested, [secondNested, thirdNested], fourthNested] = nestedArr;

console.log(firstNested); // 1
console.log(secondNested); // 2

//f. Swapping variables
// Using destructuring to swap values
let x = 1;  
let y = 2;
[x, y] = [y, x]; // Swapping values using destructuring

//2. Object Destructuring 
let User = {
    firstName : "Mitchell",
    lastName : "Morgan",
    webCertification : "first year 8.0",
    javaCertification : "final year 9.0",
    cPlusPlus : "second year 8.5"
}

//let firstName = User.firstName

let {firstName, webCertification, availability = "This week onwards"} = User

console.log(firstName)
console.log(webCertification)
console.log(availability)

//nested object destructuring
let Student = {
    name : "Oscar",
    programme : "Information Technology",
    marks : {
        web : "8.5",
        java : "9.0",
        javascript : "9.0"
    }
}

let {name, programme, marks: { web, java, javascript, react = "9.5" }} = Student

console.log(name)
console.log(programme)
//console.log(marks)
console.log(web)
console.log(java)
console.log(javascript)
console.log(react)



//Questions for practice

//Create an object with studentInfo, print firstname, total marks and Individual Subject Marks, using object and nested destructuring 
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

//create an array of your aspirations, print first three to achieve in 2025,26,27 and keep others in ...rest operator, using array destructuring 
//create an example of swapping, default value and other explained features of array destructuring
