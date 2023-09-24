// Import events module
const EventEmitter = require("events");

// Create EventEmitter Object
const event = new EventEmitter();

// listen that event
event.on("checkpage", (st, msg) => {
    console.log(`Status Code is ${st} & the Page is ${msg}`);
});

// Emit the checkpage or any thing event you want to emit
event.emit("checkpage", 200, "ok");