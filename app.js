const fs = require('fs');
const express = require('express')
const app = express();

app.get("/",(req, res) =>{
    console.log("home");
});

app.get("/login/",(req, res)=>{
    console.log("login");
});


app.listen(8080);