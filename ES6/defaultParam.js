// Default Param is used to set a default value for a parameter if no value or undefined is passed.


function greet(name = 'Himavan') {
    console.log(`Hello, ${name}!`);
}

console.log(greet()); // Hello, undefined!


function Sum(p1 = 0, p2 = 0, p3 = 0, p4) {
    // If p2 and p3 are not provided, they will be undefined
    return p1 + p2 + p3 + p4;    
}

console.log(Sum(1, 2, 3, 4)); // 6
console.log(Sum(1, 2)); // NaN


//Create a function that takes an object with default values
//Create a multiplication function that takes two parameters with default values