const express= require('express');
const app= express();
const port= 3001;

app.get('/orders', (req,res)=>{
    res.send('Message from order service')
})

app.listen(port, ()=>{
    console.log('Order service started');
})