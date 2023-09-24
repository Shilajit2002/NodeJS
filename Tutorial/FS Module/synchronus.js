// Importing Fs(File Systems) Module
const fs = require('fs');

// readFileSync means its reads the file synchronusly
// First Parameter is File Name => "Hello.txt" & Second Parameter is Encoding Part => "utf-8";
let text = fs.readFileSync("./Hello.txt", "utf-8");

console.log("Hello.txt is : ");
console.log(text);
console.log("-------------------------");

// Replace any text in Hello.txt File
// First Parameter is Old Text & Second Parameter is new Text
text = text.replace("World", "Earth");

console.log("Hello.txt is after Replace : ");
console.log(text);
console.log("-------------------------");

// Create a new file and Write Text in the file
// Create "Jit.txt" file and write the data in the file.The data is text=>"hello Earth this is Common Basic Print Statement"
fs.writeFileSync("./Jit.txt", text);

console.log("Creating Jit.txt");
console.log("-------------------------");
console.log("./Jit.txt is : ");

let newText = fs.readFileSync("./Jit.txt", "utf-8");
console.log(newText);

console.log("-------------------------");

// Append File Sync
fs.appendFileSync("./Jit.txt", "\nHello I am Appending Now");

console.log("Appending Jit.txt is : ");

let newText1 = fs.readFileSync("./Jit.txt", "utf-8");
console.log(newText1);

console.log("-------------------------");

// Rename File
fs.renameSync("./Jit.txt", "./Shilajit.txt");
console.log("Renamed Jit.txt to Shilajit.txt");

console.log("-------------------------");

// Create Directory
fs.mkdirSync('./New Directory');
console.log("New Directory Created");

console.log("-------------------------");

// Delete File
fs.unlinkSync("./Shilajit.txt")
console.log("Shilajit.txt deleted");

console.log("-------------------------");

// Delete Folder
fs.rmdirSync("./New Directory");
console.log("New Directory deleted");

console.log("-------------------------");

