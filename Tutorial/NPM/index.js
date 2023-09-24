console.log("This is NPM => Node Package Manager");

// npm i chalk@4.1.2 install this version for chalk otherwise require not working
const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail("shilajit.acharjee@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));