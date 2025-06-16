// DataTypes in JavaScript
// JavaScript has dynamic typing, meaning variables can hold any type of data.
// The main data types in JavaScript are:
// 1. Primitive Types: These are the basic data types that are immutable and do not have properties or methods.
//    - Number: Represents both integer and floating-point numbers. 
//    - String: Represents a sequence of characters.
//    - Boolean: Represents a logical entity and can have two values: true or false.            
//    - Undefined: A variable that has been declared but not assigned a value.
//    - Null: Represents the intentional absence of any object value.
//    - Symbol: A unique and immutable value often used as object property keys.
//    - BigInt: Represents integers with arbitrary precision, useful for very large numbers.    
// 2. Reference Types: These are more complex data types that can hold collections of values and more complex entities.
//    - Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any type.    

var myValue; // Declare a variable without assigning a value
console.log(myValue); // Output: undefined
console.log(typeof myValue); // Output: "undefined"

var myValue = 42; // Number

console.log(myValue); // Output: 42
console.log(typeof myValue); // Output: "number"

myValue = 42.420002; // Floating-point Number
console.log(myValue); // Output: 42.420002
console.log(typeof myValue);


myValue = "Hello, World!"; // String

console.log(myValue);
console.log(typeof myValue); //string 


myValue = 1==1; // Boolean (true)

console.log(myValue);
console.log(typeof myValue); //boolean
myValue = 1==2; // Boolean (false)
console.log(myValue);
console.log(typeof myValue); //boolean


//undefined - is the default value of a variable that has been declared but not assigned a value.

myValue = undefined; // Undefined
console.log(myValue);
console.log(typeof myValue); // Output: "undefined"

myValue = null; // Null
console.log(myValue);
console.log(typeof myValue); // Output: "object" (this is a historical quirk in JavaScript)


//ES6 introduced the Symbol data type, which is a unique and immutable value often used as object property keys.

// Symbol - a unique and immutable value, often used as object property keys.
myValue = Symbol("unique"); // Symbol
console.log(myValue);   
console.log(typeof myValue); // Output: "symbol"

// BigInt - represents integers with arbitrary precision, useful for very large numbers.
myValue = BigInt(123456789012345678901234567890); // BigInt     
console.log(myValue);
console.log(typeof myValue); // Output: "bigint"



myValue = { name: "John", age: 30 }; // Object
console.log(myValue);
console.log(typeof myValue); // Output: "object"
myValue = [1, 2, 3, 4, 5]; // Array (which is a type of object)