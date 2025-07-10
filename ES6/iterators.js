// Iterators are pointers to the Iterable collections which allows us to run through the each object and extract, update/mutate the subset
// with these Iterators we are allowed to have preservation of immutability principal alive.

// Filter, Map, Some and Reduce - methods/iterators added to each array of objects or array of data
// Four new Iterators are included to achieve these funcationalities
// 1. Filter, 2. Map, 3. Some , 4. Reduce

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "SpiderMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
]

//1. Give me a list of the Person savedby SpiderMan

//let prsnSvdBySpiderMan = personsList.filter((personObj)=> personObj.savedby == "SpiderMan")

//console.log(prsnSvdBySpiderMan)
//console.log(personsList) //original list remains unchange, hence preservation immutability follows

//2. Give me a list of the Person Names savedby SpiderMan

// let prsnNamesSvdBySpiderMan = personsList.map((personObj)=> personObj.savedby == "SpiderMan" ? personObj.name : "").filter(p=>p!="")

// console.log(prsnNamesSvdBySpiderMan)


// let newPrsnSvdBySpiderMan = personsList.map((personObj)=> {
//                     if(personObj.savedby == "SpiderMan")
//                         return {"Saved Person " : "Mr/Mrs " + personObj.name}
//                     }).filter(p=>p!=undefined)

// console.log(newPrsnSvdBySpiderMan)

//3. Is there anyone saved by Hulk - (Short Circuit - some)

// let anyOneSavedByHulk = personsList.some((personObj)=> personObj.savedby == "Hulk")
// console.log(anyOneSavedByHulk)

// let anyOneSavedByIronMan = personsList.some((personObj)=> personObj.savedby == "IronMan")
// console.log(anyOneSavedByIronMan)


//4. List the unique set of persons saved by each superhero - 

let uniqueSuperHeroes =  personsList.reduce((prevVal, currVal, index, list)=>{
                                    // console.log("currVal", currVal)
                                    // console.log("prevVal", prevVal)

                                    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1

                                return prevVal;
                        }, new Set())//[]) //initialization of prevVal or currVal


console.log(uniqueSuperHeroes)