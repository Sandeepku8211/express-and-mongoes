const express = require('express');
const app= express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("<h1>sandeedsap ji</h1. ");

})

app.listen(3000,function(){
    console.log("listing the port")
})

app.post("/api/car",function(req, res){
    const {name,brand}= req.body;
    console.log(name);
    console.log(brand);
   res.send("car is submitted")
})

const mongoes =require("mongoose")

try {
    mongoes.connect('mongodb+srv://Sandeepku821110:AdU33Tt6DYhBa69x@cluster95.0qznq3u.mongodb.net/userdata')
    console.log("database is connected");
    
} catch (error) {

    console.log(error);
    
}
