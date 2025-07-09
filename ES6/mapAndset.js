// Map - is the data structure which stores values in key : value format and allows a set of methods and properties to fetch
// store, update and delete the value present in Map
// There are mainly two types of Maps created
// Strong Map - when our keys are of string type or alphanumeric type
// Weak Map - this allows us to create keys such as numbers, functions, objects etc

//[{key : value}]

let myMap = new Map();

//creating multiple types of keys, to build a weak

let myString = "key is string", objectKey = {}, functionKey = function () {}, numberKey = 2025;

myMap.set(myString, "This is a string key")
myMap.set(objectKey, "This is an object key")
myMap.set(functionKey, "This is a functionKey ")
myMap.set(numberKey, "This is a numberKey")

//console.log(myMap.entries())

//console.log(myMap.get(myString)) //"This is a string key"

console.log(myMap.get({}))
console.log(myMap.get(objectKey))

//console.log(myMap.get(function () {}))
console.log(myMap.get(2025))

console.log(myMap.has(functionKey))
console.log(myMap.delete(2025))

console.log(myMap.size)

console.log(myMap.entries())


//Set - is used to create list with unique data

let mySet = new Set(["Himavan","Oscar","Ryan","Mitchell","Json"]);
// let mySet = new Set();
// mySet.add("Himavan")
// mySet.add("Oscar")
// mySet.add("Ryan")
// mySet.add("Mitchell")


console.log(mySet.entries())
console.log(mySet.add("Himavan"))

console.log(mySet.delete("Himavan"))
console.log(mySet.entries())

console.log(mySet.size)
console.log(mySet.values())



// Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favrourite country you wish to visit on world tour