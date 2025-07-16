// Async and Await - keywaords are used to create multi threaded code, in node js 
// this helps by createing a non-blocking code, a function with async keyword
// will always return a promise, and await keyword is used to wait for the promise to resolve

// async - keyword is used to specify the function which you want to execute on separate thread
// await - keyowrd is used to fetch the information done via async function and show result on main stack
// each or multiple operations on a separate thread will be synchronous


//multi-threading

//main thread - 200 req/sec

// if it rises from 200 to 300 req/sec <responses will be slowed by 50%>

// main thread => 200 req/sec <100 req/sec start redirecting to other threads>

// thread1 => to handle 50 req/sec  --> 100-150
// thread2 => to handle 50 req/sec  --> 150-200
// thread3 => to handle 50 req/sec  --> 200-250
// thread4 => to handle 50 req/sec  --> 250-300


//example of async await

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}


console.log("async Execution starts");

// async function to handle the promise
// async function is used to create a separate thread for execution
async function asyncCall() {
    console.log("async function started");
    const result = await resolveAfter2Seconds(); //will wait for the promise to resolve and works in a synchronous manner
    console.log(result);

    console.log("async function middle");

    const result2 = await resolveAfter2Seconds(); //will wait for the promise to resolve and works in a synchronous manner
    console.log(result2);

    console.log("async function ended");
}

asyncCall().then(() => {
    console.log("async function completed"); })   

console.log("async Execution ends");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)
