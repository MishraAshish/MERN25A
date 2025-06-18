//Overloading - JavaScript does not support function overloading in the traditional sense like some other languages (e.g., Java, C++). However, you can achieve similar behavior by using default parameters, rest parameters, or checking the types and number of arguments within a single function.

// javascript has concept of over-writing functions, which means you can define a function with the same name multiple times. 
// The last defined function will overwrite the previous ones. This is not true overloading, but it allows you to create functions that can handle different numbers of parameters or types of arguments.

console.log(add(1, 2, 3, 4)); // Output: 10

function add(a, b) {
    console.log("Adding two numbers");
    return a + b; 
}

console.log(add(1, 2)); // Output: 3

function add(a, b, c) {
    console.log("Adding three numbers");
    return a + b + c; 
}

console.log(add(1, 2, 3)); // Output: 6 

function add(a, b, c, d) {
    console.log("Adding four numbers");
    return a + b + c + d; 
}

console.log(add(1, 2, 3, 4)); // Output: 10

// Function expressions can also be used to achieve similar behavior, but they are not hoisted like function declarations.
var add = function(a, b, c, d, e) {
    console.log("Adding five numbers using function expression");
    return a + b + c + d + e; 
}

console.log(add(1, 2, 3, 4, 5)); // Output: 10



///////////////////////
//- Implement all data types including symbol and bigInt
//- Implement all types of functions at least one example each
//- Try exploring overloading in functions changing number of parameters but keeping function name same
//- See how we are able to access a function even before its definition