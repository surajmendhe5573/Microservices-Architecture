const express= require('express');
const app= express();
const port= 3000;

app.get('/users', (req,res)=>{
    res.send('Message from user service')
})

app.get('/users/me', (req,res)=>{
    res.send('Jai Shree Ram')
})


app.listen(port, ()=>{
    console.log('User service started');
})