const express=require("express");
const app=express();
const PORT=5000;

const sendMail=require("./controller/sendMail")

app.get("/",(req,res)=>{
    res.send("I am Server");
});

app.get("/email",sendMail);

const start=async()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server Running at Port no. ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();