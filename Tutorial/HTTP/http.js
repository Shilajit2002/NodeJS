// Import HTTP (Hyper Text Transfer Protocol)
const http = require('http');

// Import Files System Module
const fs = require('fs');

const fileContent = fs.readFileSync('index.html');

// Creater the http server
// req = request , res = response
// We send the request to the server and server response us
const server = http.createServer((req, res) => {
    // respond 200 port with file content text/html
    res.writeHead(200, { 'Content-type': 'text/html' });
    // ending the response with fileContent
    res.end(fileContent);
})

// 80 port is default so its use commonly
// If other port will used eg- 8000 then write in the browser 127.0.0.1:8000
// Listen the Server port that mean send a request to the server so the server can send the response
server.listen(80, '127.0.0.1', () => {
    console.log("Listenimg on Port 80");
    console.log("Server Running at http://127.0.0.1:80")
})
