const express = require('express');
const app = express();
const port = 3000;
const product  = require('./products.json');

//middelare to paser data

app.use(express.json());

// GET request to get all products

app.get('/products',(req,res)=>{
    res.json(product);
});

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
});