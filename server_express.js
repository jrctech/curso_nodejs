const express = require('express');
const server= express();

const colors = require('colors');

server.get('/', function(req,res){
    res.send('<h1>Hola desde Express y Node.js</h1>');
});
server.listen(3000, function (){
    console.log('Server listening on port 3000...'.blue);
});