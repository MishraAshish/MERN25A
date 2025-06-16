console.log("Hello MERN World")
// things needed to run this code
// compiler or interpreter or runtime environment
// Node.js is a runtime environment for JavaScript
// Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.

//1. Variables - are case sensitive
var name = "John Doe"; 
var Name = "Jane Doe 1"; // this is a different variable
 console.log(name)
console.log(Name)

//2. Var is the oldest way to declare a variable

//3. Code is complied as well as partially interpreted - hoisting

//4. Commenting - 
// Single line comment
/*
Multi-line comment
*/

// select the line to comment and use Ctrl + / and toggle the comment

//5. Semicolons - not mandatory but good practice to use them

//6. All predefined loops like for, while, do-while, for-in, for-of are available

//7. space not allowed, special chars apart from _,$ , others are not allowed

var $myname = "Dollar Name",
 _myname = "underscore Name",
my_Name5 = "Numeric Name"
 //5myname = "starting from number is not allowed"

console.log($myname, _myname , my_Name5)

//8. Operators - arithmetic, assignment, comparison, logical, bitwise, ternary, etc.
// Arithmetic Operators: +, -, *, /, %, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !
// Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// Ternary Operator: condition ? expr1 : expr2

//9. Dynamic typing - no need to declare the type of variable, it is determined at runtime

//10. Autocasting - JavaScript automatically converts types when needed
// Example of dynamic typing and autocasting
var num = 10; // number
var str = "20"; // string
var result = num + str; // string concatenation
console.log(result); // Output: "1020" (string)


//11. cls - can be used to clear terminal data
//12. ctrl + c - to stop indefinite execution

for (let i = 0; i < 500000; i++) {
    console.log("Loop iteration: " + i);
}


function Sum(a,b) {
    return a+b
}

console.log(Sum(5,6))

//




// Non-Primitive data types
// 1. Object: A collection of key-value pairs.
//    - Array: A special type of object used to store ordered collections of values.
//    - Function: A callable object that can be invoked to perform actions or calculations.
//    - Date: Represents dates and times.
//    - RegExp: Represents regular expressions for pattern matching in strings.
//    - Map: A collection of keyed data items, similar to an object but with keys of any type.
//    - Set: A collection of unique values, where each value can only occur once.
//    - WeakMap: Similar to Map, but keys are weakly referenced, allowing for garbage collection.

//    - WeakSet: Similar to Set, but values are weakly referenced, allowing for garbage collection.
//    - ArrayBuffer: A generic, fixed-length binary data buffer.
//    - Typed Arrays: Arrays that provide a mechanism for reading and writing raw binary data in memory buffers.
//    - Promise: Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.