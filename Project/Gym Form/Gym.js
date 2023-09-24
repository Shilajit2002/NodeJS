const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'Pug'));

// ENDPOINTS
app.get('/', (req, res) => {
    const para = { 'title': 'Gym - Dream' };
    res.status(200).render('gym.pug', para);
});

// POST THE FORM
app.post('/', (req, res) => {
    console.log("Form is Submitted");

    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    console.log(name);

    let output = `The name of the Client is ${name},
                \n Age : ${age},
                \n Gender : ${gender},
                \n Address : ${address},
                \n More about Client : ${more}`;

    fs.writeFileSync('./Output.txt',output);
    const para={'message':'Your form has been submitted successfully'};

    res.status(200).render('post.pug',para);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`Server Running On the Port : http://127.0.0.1:${port}`);
});