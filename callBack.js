// Callback - A function that is passed as an argument to another function and is executed after the completion of that function.

// callback function give us re-usability and flexibility in our code.

// a common function is created to print data
// this function can be used as a callback function in other functions

var globalValue = "Learning Callbacks in JavaScript";

function PrintData(p1, p2) {
    console.log("Data : " + p1 + ", " + p2 + ", " + "is printed");
    console.log("Global Value : " + globalValue); //callback function holds the context of the global variable
    console.log("--------------------------------------------------");
}


// passing PrintData as a callback function
function Sum(p1, p2, callbackFunc) {
    callbackFunc("For Summation ", (p1 + p2), "is");   
}

Sum(10, 20, PrintData);
// Output: Data : For Summation , 30, is printed

// passing PrintData as a callback function for multiplication
function Multiply(p1, p2, callbackFunc) {
    callbackFunc("For Multiplication ", (p1 + p2), "is");   
}

Multiply(10, 20, PrintData);


//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day