//OOPS - object Oriented Programming in JavaScript
// JavaScript is a prototype-based language, which means that objects can inherit properties and methods from other objects. 
// This is different from class-based languages like Java or C#, where classes define the structure and behavior of objects.

// Inheritance - in JavaScript is achieved through prototypes. Every object has a prototype, which is another object from which it can inherit properties and methods.
// Polymorphism - Overloading is not supported as parameter types are not checked in JavaScript.
//                Overriding is supported, as you can define a method in a child object that has the same name as a method in the parent object.
//                Polymorphism is achieved through method overriding, where a child object can provide a specific
// Abstraction - is achieved through the use of objects and functions. You can create objects that represent real-world entities and define methods that operate on those objects.
// Encapsulation - is achieved through closures, which allow you to create private variables and methods that are not accessible from outside the function.         
// Access Modifiers (public, private, protected, internal etc) used in Java and C# to achive encapsulation are not available in JavaScript. 

// Closures - are functions that have access to their own scope, the outer function's scope, and the global scope.

function outerFunction(accountName, accuntType) {
    var accountName = accountName || "Default Account"; //Public variable
    var accuntType = accuntType || "Default Type"; //Public variable
    var balance = 1000; // Private variable
    var password = "secret"; // Private variable

    function innerFunction(passcode) {
        if (passcode === password) {
            return{
                accountName: accountName,
                accuntType: accuntType,
                balance: balance
            }            
        } else {
            return {
                error: "Access Denied: Incorrect Password"
            }
        }
    }

    return innerFunction; // Returning the inner function
}

var myAccount = outerFunction("John Doe", "Savings");
console.log(myAccount("secret")); // { accountName: 'John Doe', accuntType: 'Savings', balance: 1000 }
console.log(myAccount("wrongpassword")); // { error: 'Access Denied: Incorrect Password


// create a closure that maintains a private counter