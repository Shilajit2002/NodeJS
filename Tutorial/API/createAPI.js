// Here we create an API

// In the api.json file we create random Student data as a json format for using as a api
const http = require('http');
const hostname = '127.0.0.1';
const port = 80;
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('./api.json');
    res.statusCode = 200;
    // Allow Access Control for Allow Origin the Root Host other wise show this below Error
    /*
        Access to fetch at 'http://127.0.0.1/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'http://127.0.0.1:80' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    */
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.end(data);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});