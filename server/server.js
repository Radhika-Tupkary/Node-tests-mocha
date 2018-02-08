const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Hi there!");
});

app.get('/users', (req,res) => {
   res.send([{name:"Radhika Tupkary", age:27}, {name:"Sam Goel", age:29}, {name:"Justin Beiber", age:21}])
});

app.listen(3000, () => {
    console.log("server is up and running");
});

module.exports.app = app;