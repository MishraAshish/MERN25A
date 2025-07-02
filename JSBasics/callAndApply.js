// call and apply - are used to call a function with a specific `this` context and arguments.

// MyClass mCls = new MyClass();
// mCls.callMethod("Hello", 42); 

// name = "Global Context";
// age = 50;

var user1 = {
    name: "Alice",
    age: 30
};

var user2 = {
    name: "Bob",    
    age: 25
};


function printInfo(greeting, number) {    
    console.log(`name is : ${this.name}, age: ${this.age}`);
    console.log(`${greeting}, the number is ${number}. This is called with 'this' context:`, this);
}

//printInfo(); // this function is called without any context, so `this` will be undefined or the global object in non-strict mode.

//to change the context of `this`, we can use `call` or `apply` methods.
printInfo.call(user1, "Hello", 42); // call with user1 context
printInfo.call(user2, "Hi", 18); // call with user2 context




// When we have a function that takes multiple arguments, we can use `apply` to pass an array of arguments.


function Sum(p1, p2, p3, p4, p5, p6) {
    console.log(`Sum of ${p1}, ${p2}, ${p3}, ${p4}, ${p5} is:`, p1 + p2 + p3 + p4 + p5 + p6);
}

var numbers = [1, 2, 3, 4, 5, 6];
Sum.apply(null, numbers); // apply with null context and an array of arguments

function VehicleSpecifications(name, type, year, color, legspace, groundClearance, price) {
    console.log(`This is ${this.segment}, ${this.vehicleType} having ${this.capacity} with the following specifications:`);
    
    console.log(`Vehicle Specifications:
        Name: ${name}
        Type: ${type}
        Year: ${year}
        Color: ${color}
        Legspace: ${legspace}
        Ground Clearance: ${groundClearance}
        Price: ${price}`);    
}

var Car = {
    segment: "C Segment",
    vehicleType: "Car",
    capacity: 5 // capacity in terms of number of passengers
}

var Traveller = {
    segment: "B Segment",
    vehicleType: "Traveller",   
    capacity: 12 // capacity in terms of number of passengers
}


VehicleSpecifications.apply(Car, ["Toyota", "Sedan", 2022, "Red", "1.5m", "0.2m", "$20,000"]); // apply with Car context and an array of arguments

VehicleSpecifications.apply(Traveller, ["Mercedes", "Van", 2023, "White", "2.0m", "0.3m", "$50,000"]); // apply with Traveller context and an array of arguments



//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases