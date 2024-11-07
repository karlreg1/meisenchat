const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('public'));


app.get("/",(req, res, next) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
    console.log("home");
});

app.get("/login/",(req, res)=>{
    res.sendFile(path.join(__dirname + "/login.html"));
    console.log("login");
});


app.listen(8080);