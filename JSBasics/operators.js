// Operators - arithmetic, assignment, comparison, logical, bitwise, ternary, etc.
// Arithmetic Operators: +, -, *, /, %, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !
// Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// Ternary Operator: condition ? expr1 : expr2


var age = "18";
var validVoter = true;

// ==  // This checks for value equality, but not type equality
// === // This checks for both value and type equality

if (age === 18 && validVoter) {
    console.log("Eligible to vote");
} else {
    console.log("Not Eligible to vote");
}

// Ternary operator example

// comparison ? if result if true : result if false

age === 18 && validVoter ? console.log("Eligible to vote") : console.log("Not Eligible to vote");
