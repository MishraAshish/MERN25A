// Vehicle (class) ? - GetCost, GetFeatures, GetType, GetName (methods)
// What is expected from a class to perform is defined by methods ?
// methods - behavior of the class, what it can do.

// Vehicle vh = new Vehicle("Car", "Sedan", 20000, ["Air Conditioning", "Navigation System"]);
// vh.GetCost(); // Output: 20000
// vh.GetFeatures(); // Output: ["Air Conditioning", "Navigation System"]

//in javascript, functions are first-class citizens, meaning they can be treated like any other value.
// They can be assigned to variables, passed as arguments, and returned from other functions.
//function - keyword used to define a function in JavaScript.
// A function is a reusable block of code that performs a specific task.

// all functions are pure functions in JavaScript, meaning they do not have side effects and do not modify the state of the program.
// it must return a value, and it can take parameters as input.

// 1. Named Function Declaration
// A named function declaration is a function that has a name and can be called by that name
function add(a, b) {
    // if nothing retunr it will return undefined as default
    return a + b; //function definition
}

//can be executed by calling it with arguments
console.log(add(5, 3)); // Output: 8
console.log(add(4, 6)); // Output: 10
console.log(add(7, 9)); // Output: 16

// 2. Anonymous Function Expression
// An anonymous function expression is a function that does not have a name and is often assigned to
var multiply = function(a, b) {
    return a * b; //function expression
}

console.log(multiply(5, 3)); // Output: 15

// 3. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is executed immediately after it is defined

(function(counter) {
    console.log("This is an IIFE! "+ counter); // Output: This is an IIFE!
})(1001); // Passing an argument to the IIFE

//IIFEFunc() - executes only once and does not need to be called again

// 4. Constructor Function
// A constructor function is used to create objects and is called with the `new` keyword
// this function is used as a blueprint to create objects and classes in JavaScript
function Person(name, age) {
    this.name = name; // `this` refers to the new object being created
    this.age = age;
    // `this` keyword is used to refer to the current instance of the object
    // Method to get person's data
    this.getInfo = function() {
        return `${this.name} is ${this.age} years old.`; // Method to get person's info
    };
}

// Creating a new object using the constructor function
var person1 = new Person("Alice", 30);

console.log(person1.getInfo()); // Output: "Alice is 30 years old."


// prototype - is a property of a function that allows you to add methods and properties to all instances of that function
// It is used to share methods and properties across all instances of an object created by a constructor

//person1.__proto__.address = "123 Main St"; // Adding a new property to the person1 object - which is Person itself
// person1.address is now available to all instances of Person

person1.address = "123 Main St";
console.log(person1.address); // Output: "123 Main St"

person1.getInfo = function() {
    return `${this.name} is ${this.age} years old. Address: ${this.address}`; // Overriding the getInfo method`;
}

console.log(person1.getInfo()); // Output: "Alice is 30 years old. Address: 123 Main St"


var person2 = new Person("Adam", 40);
console.log(person2.getInfo()); // Output: "Adam is 40 years old."
console.log(person2.address); // Output: "123 Main St" (inherited from person1's prototype)

// 5. Nested Functions
// A nested function is a function defined inside another function  

var initialVal = 10
// This is an example of a nested function where the inner function can access variables from the outer function's scope
// This is called closure in JavaScript, where the inner function retains access to the outer function
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This allows for partial application of functions, making it easier to create specialized functions from a general
function A(a) {
    console.log(initialVal)
    //console.log(d) //can't be accessed in parent - scope accessibility becomes zero when we move up to the parent function

    return function B(b) {
        console.log(a)
        return function C(c) {
            console.log(b)
            return function D(d) {
                console.log(c)
                //
                return a+b+c+d+initialVal //ultimate outcome of nested functions
            }
        }
    }   
}

var objB = A(5); // Call the outer function with argument 5
var objC = objB(10); // Call the next inner function with argument 10  
var objD = objC(15); // Call the next inner function with argument 15
var result = objD(20); // Call the innermost function with argument 20
console.log(result); // Output: 60 (5 + 10 + 15 + 20 + 10)

//chain execution of functions
// A(5)(10)(15)(20) - this is called currying, where each function returns the next function in the chain
var chainResult = A(5)(10)(15)(20);
console.log(chainResult); // Output: 60 (5 + 10 + 15 + 20 + 10)