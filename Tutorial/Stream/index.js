const fs=require('fs');
const http=require('http');

const server=http.createServer();

// Request the Server
server.on("request",(req,res)=>{
    // Read Stream the File
    const rstream=fs.createReadStream("./img.jpg");

    // Write the Data
    rstream.on('data',(data)=>{
        res.write(data);
    })

    // End the Data
    rstream.on('end',()=>{
        res.end();
    })

    // Error the Data
    rstream.on('error',()=>{
        res.end("An Error Occurred !!");
    })
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server Running at http://127.0.0.1:8000")
});