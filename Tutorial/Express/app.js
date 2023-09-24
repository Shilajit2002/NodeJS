const express = require('express');
const path=require('path');

const app = express();
const port = 80;

// For serving static files
app.use('/static',express.static('static'));

// Set the template engine as pug
app.set('view engine','pug');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

// Pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:"Hello World",message:"Hello Boss!How are you?"});
});

app.get('/', (req, res) => {
    res.status(200).send("This is Home Page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.post('/about', (req, res) => {
    res.send("This is Post About Page");
});

app.get('/this', (req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});