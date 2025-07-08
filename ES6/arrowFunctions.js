// Arrow Functions : Arrow functions are a way of creating a function in a way which makes it easy to write and also solves the
// problem we had with bind by copying the scope of immediate parent
// arrow functions are written like a lambda expression

//1. Writing Arrow functions using fat arrow
// () =>  ------ fat + arrow => fat arrow function
//console.log(sumArrow(5,6))

function Sum(p1, p2) {
    return p1+p2
}
console.log(Sum(5,6))

var sumArrow = (a,b) => a+b
console.log(sumArrow(5,6))

let printLessThan10 = (a,b) => {
    return a+b < 10 ? a+b : a*b
}

console.log(printLessThan10(5,4))
console.log(printLessThan10(5,6))
//it is an another way of writing "function expression"


//2. Solving problem of scope binding without using bind
// When we use arrowFunction it copies the context of immediate parent in chain - so that the problem of scope is solved exactly as done by bind
// We need to be cautious when we are going to make arrowFunction as the top parent of our nested functions in chain execution

//global object
//this.firstName = "Oscar"

let User = {
    firstName : "Ryan",
    address : "Somewhere in Paris",
    //getUserDetails : () => { //we need to be cautious when we use arrow function as the grand parent as it will copy the scope of global object
    getUserDetails : function() {
        console.log(` Name : ${this.firstName} and Address is : ${this.address}`)

        let that = this //copying parent scope

        // setTimeout(function () {
        //     //console.log(this)
        //     console.log(that)
        //     console.log(`Inside TimeOut - Name : ${that.firstName} and Address is : ${that.address}`)
        //     //console.log(`Inside TimeOut - Name : ${this.firstName} and Address is : ${this.address}`)
        // }, 2000)


        setTimeout(() => {
            console.log(this) //this in the arrow function is a copy of parent scope
            console.log(that)
            console.log(`Inside TimeOut - Name : ${this.firstName} and Address is : ${this.address}`)
        }, 2000)
    }
}

User.getUserDetails()