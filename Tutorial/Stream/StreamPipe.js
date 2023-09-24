const fs=require('fs');
const http=require('http');

const server=http.createServer();

// Request the Server
server.on("request",(req,res)=>{
    // Read Stream the File
    const rstream=fs.createReadStream("./img.jpg");

    // Using Pipe Method Easy Way
    rstream.pipe(res);
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server Running at http://127.0.0.1:8000")
});