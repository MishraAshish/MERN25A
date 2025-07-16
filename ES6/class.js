// Class - are a template for creating objects
// Class - is a type of function

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let userObj = new User("John", 30);
userObj.greet(); // Output: Hello, my name is John and I am 30 years old.



class Area { //scope of the class { < --- --- >}
    
    // constructor is used to initialized the properties
    constructor(length = 0, breadth = 0){
        this.length = length //properties
        this.breadth = breadth
    }

    Square = ()=> this.length*this.length

    SquareB = ()=> this.breadth*this.breadth

    Rectangle = ()=> this.length*this.breadth

    Circle = (radius,constantPie)=> constantPie*radius*radius

}

let areaObj = new Area(5,6)

console.log(areaObj.Square())
console.log(areaObj.SquareB())
console.log(areaObj.Rectangle())

console.log(areaObj.Circle(10, 3.1412))


// Task - create a class named as account accepting 3 or more params  like - name, acct type etc and
// has three methods to show balance, user details and account offers