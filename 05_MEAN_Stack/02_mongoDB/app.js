const express = require('express');

// init app and middleware
const app = express();

const port = 3000; // port Number


app.listen(port,()=>{
    console.log(`Listening to localhost:${port}`);
});


app.get("/books",(req,res)=>{
    res.json({Msg: "Welcome to my API"})
})


// routes

