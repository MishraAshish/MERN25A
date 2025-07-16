// Generator functions - are a special type of function that can be paused and resumed, allowing for asynchronous programming patterns similar to async/await.

//we use the function* syntax to define a generator function
function* Generator(params) {
    yield params; //yield is used to pause the function and return a value
    
    yield params + "1"; //you can yield multiple values 
    
    yield params + "2"; //each yield will pause the function and return a value
    
    return params + "3"; //return will end the generator function

}

let gen = Generator("Hello"); //initialize the generator function
//console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next().value);
console.log(gen.next()); // { value: 'Hello1', done: false }    
console.log(gen.next()); // { value: 'Hello2', done: false }
console.log(gen.next()); // { value: 'Hello3', done: true } - done indicates that the generator function has ended
console.log(gen.next()); // { value: undefined, done: true } - no more values


//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));

    yield console.log("Subtraction : " + (num1-num2));
    
    yield console.log("Multiply : " + (num1*num2));
    
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}

let calObj = arithmetic(6,2);

calObj.next() //addition
calObj.next() //subtraction
calObj.next() //multiplication
calObj.next() //division
// calObj.next() //done - will not yield anything as the generator function has ended
console.log(calObj.next())
console.log(calObj.next())


//create an example of a generator function that yields user details like name, age, address
//for each yield, it should return a user object with the respective details