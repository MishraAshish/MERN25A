// The new variables have been designed in ES6 to be block-scoped, meaning they are only accessible within the block they are defined in.
// This is different from the var keyword, which is function-scoped or globally scoped.

//1. var is functional scoped,  let and const are - block-scoped
// {
//     var x = 1; 
//     let y = 2;
//     const z = 3;     
// }

// console.log(x); // 1 - can be accessed outside the block
//console.log(y); // ReferenceError: y is not defined      
//console.log(z); // ReferenceError: z is not defined

//2. var can be redeclared, let and const cannot
var x = 1; 
let y = 2;
const z = 3;

var x = 4; // redeclaring var is allowed
console.log(x); // 4
//let y = 5; // SyntaxError: Identifier 'y' has already been declared
//const z = 6; // SyntaxError: Identifier 'z' has already been declared

//3. var can be updated, let can be updated, const cannot
x = 5; // updating var is allowed
y = 6; // updating let is allowed
//z = 7; // TypeError: Assignment to constant variable

console.log(x); // 5
console.log(y); // 6
console.log(z); // 3

//constant can be update via its properties if it is an object
const obj = { a: 1 };
console.log(obj.a); // 1
obj.a = 2; // updating property of const object is allowed
console.log(obj.a); // 2

//obj = { b: 2 }; // TypeError: Assignment to constant variable (cannot reassign the object itself)


//4. Const must be initialized at the time of declaration, let can be declared without initialization
var aa; // var can be declared without initialization
let bb; // let can be declared without initialization           
//const cc; // SyntaxError: Missing initializer in const declaration


//5. Hoisting behavior
//variable can be hoisted, but not initialized
console.log(hoistedVar); // undefined

var hoistedVar = 'I am hoisted'; // hoisted to the top of the function or global scope

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// let hoisted = "I am not hoisted"; // let is not hoisted in the same way as var

// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
// const hoistedConst = "I am also not hoisted"; // const is not hoisted in the same way as var


//6. Temporal Dead Zone (TDZ)
// The TDZ is the time between the start of the block and the declaration of the variable       
// console.log(tdzLet); // ReferenceError: Cannot access 'tdzLet' before initialization

// let tdzLet = 'I am in TDZ'; // let is in TDZ until it is declared
// console.log(tdzLet); // 'I am in TDZ'


//7. let and const scope are resolved at the block level, immediately

// for (var index = 0; index < 5; index++) {
//     setTimeout(function(i){
//         console.log(`Element at index ${i} is ${i}`); // 
//     }.bind(null, index), 1000);
// }

//console.log(`Final index is ${index}`); // will log 5

for (let index = 0; index < 5; index++) {
    setTimeout(function(){
        console.log(`Element at index ${index} is ${index}`); // will log 0, 1, 2, 3, 4
    }, 1000);
}

//console.log(`Final index is ${index}`); // index is not defined here, as it is block scoped

//try making it work by using iife in callback function
// for (var index = 0; index < 5; index++) {       
//     (function(i) {
//         setTimeout(function() {
//             console.log(`Element at index ${i} is ${i}`); // will log 0, 1, 2, 3, 4
//         }, 1000);
//     })(index);
// }


var myName = "John";
let myName = "Adam";

console.log(myName); 