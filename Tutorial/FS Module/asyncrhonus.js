// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs=require('fs');

// Read File use a callback function with error and data..if any error found then print the error
// If no error found print null and also print data
fs.readFile("Hello.txt","utf-8",(err,data)=>{
    console.log("Error = "+err+"\nData = "+data);
})

// This print first after that the call back function is print
console.log("This is a Massage");

// Because readFile is an Asyncrhonus so when file content reading other statement is working
// When the file read complete then call back function called and execute the statement

