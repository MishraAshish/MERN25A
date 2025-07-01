// single threaded execution happens in javascript
// call stack is a data structure that keeps track of function calls 

// console.log("Execution started");
// // LIFO (Last In First Out) principle is followed in call stack

// function foo(params) {
//     throw new Error("Eexcution happens in callstack as LIFO");
// }

// function bar() {
//     foo()
// }

// function baz(params) {
//     bar()
// }

// baz(); //function execution
// console.log("Execution finished");


// blow up the call stack
function recursiveFunction() {
    recursiveFunction(); // this will keep calling itself indefinitely
}

recursiveFunction(); // this will cause a stack overflow error