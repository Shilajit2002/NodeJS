// Import OS ( Operating System Module )
const os = require("os");

// Print Operating System Architecture
console.log("OS Architecture is : " + os.arch());

// OS Hostname
console.log("OS Hostname is : " + os.hostname());

// OS Platform
console.log("OS Platform is : " + os.platform());

// OS Version
console.log("OS Version is : " + os.version());

// Temp Directory
console.log("OS Temp Directory is : " + os.tmpdir());

// Print OS Type
console.log("OS Type is : " + os.type());

// Free Memory in OS
console.log("Free Memory in RAM is : " + os.freemem() + " byte");
console.log("Free Memory in RAM is : " + os.freemem() / 1024 / 1024 / 1024 + " GB");

// Total Memory in OS
console.log("Total Memory in RAM is : " + os.totalmem() + " byte");
console.log("Total Memory in RAM is : " + os.totalmem() / 1024 / 1024 / 1024 + " GB");