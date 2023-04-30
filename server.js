const express = require('express');
const http = require('http'); 

const app = express();

const PORT = 3000 || process.env.PORT;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
})