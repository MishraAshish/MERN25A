// Hoisting in JavaScript - gives us a feature where variable and function declarations are moved to the top 
// of their containing scope during the compile phase.

//1. Variable Hoisting - variables get hoisted with default value of undefined
//2. Function Hoisting - function declarations get hoisted with their definition

Print() // it will execute Print function before its declaration due to hoisting
console.log(Print) // [Function: Print]

console.log(_name) // undefined - is defualt value for variables
var _name = "Some Name"

console.log(_name) // Some Name

Print();

function Print() {
    //_name is hoisted to the top of the function scope
    console.log(_name) // Local Name // Some Name
    console.log("Print Function is executed")
    //if we uncomment the line below it will hoist _name for line#12 hence that will be undefined
    // var _name = "Local Name"
    
    // console.log(_name) // Local Name
}
Print() //global scope

console.log(PrintMyName); // undefined - function expression is not hoisted
//PrintMyName(); // TypeError: PrintMyName is not a function - as it is hoisted as a variable with value undefined

var PrintMyName = function() {
    console.log("PrintMyName Function is executed");
}


//try creating some examples to understand hoisting better










//this - scope
