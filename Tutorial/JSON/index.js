const Data = {
    name: "Shilajit Acharjee",
    roll: 16500120028,
    age: 20,
    bloodGrp: "B+",
    college: "CIEM"
}

// Actual Data
console.log("Actual Object Data");
console.log(Data);

console.log("--------------------------");

// Convert to JSON format
const jsonObj = JSON.stringify(Data);
// JSON Data
console.log("JSON Data");
console.log(jsonObj);

console.log("--------------------------");

// Convert to JSON format to OBJ format
const parseObj = JSON.parse(jsonObj);
// JSON Parse OBJ Data
console.log("JSON Parse OBJ Data");
console.log(parseObj);

console.log("--------------------------");

// Create JSON File with jsonObj data
const fs = require("fs");
fs.writeFileSync("index.json", jsonObj);

console.log("index.json created");
