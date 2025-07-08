//Shorthand : Removes the redundant variable, name used as key
//in a json object if the key name and the value for that key if we wish to read both are same then
//shorthand allows us to use just the variable to create complete object

let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark"; 

let animalSound = {
    lion : lion,
    birds : birds,
    cow : cow,
    dogs : dogs
}

//in case of redundancy we can use only the variable name and it will act as key in ES6

let animalSoundES6 = {
    lion,
    birds,
    cow,
    dogs
}

//log method converts JSON object to string json by its self when we pass json object as parameter - implicit JSON.stringify()
console.log("Animal Sound using js way ", animalSound)

console.log("Animal Sound using ES6 way ", animalSoundES6)

//console.log("Animal Sound using ES6 way "+ animalSoundES6.toString()) //Animal Sound using ES6 way [object Object]

console.log("Animal Sound using ES6 way "+ JSON.stringify(animalSoundES6))


module.exports = animalSoundES6;