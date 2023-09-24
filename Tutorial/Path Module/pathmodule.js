const path = require('path');

// Print Directory Name
console.log("pathmodule.js file directory is : " + path.dirname("E:\\BackEnd WebDev\\NodeJs\\Code\\Tutorial\\Path Module\\pathmodule.js"));

// Print File Extension Name
console.log("pathmodule.js file extension is : " + path.extname("E:\\BackEnd WebDev\\NodeJs\\Code\\Tutorial\\Path Module\\pathmodule.js"));

// Print File Name
console.log("pathmodule.js file name is : " + path.basename("E:\\BackEnd WebDev\\NodeJs\\Code\\Tutorial\\Path Module\\pathmodule.js"));

// Print Parse of the File
const mypath = path.parse("E:\\BackEnd WebDev\\NodeJs\\Code\\Tutorial\\Path Module\\pathmodule.js")
console.log(mypath);

console.log(mypath.name);
console.log(mypath.base);
console.log(mypath.dir);
console.log(mypath.root);
console.log(mypath.ext);