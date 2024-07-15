const express= require('express');
const app= express();
const axios= require('axios')
const port= 3002;

app.get('/products', async(req,res)=>{

    const userData= await axios.get('http://localhost:3000/users')

    res.send('Message from product service '+ userData.data)
})

app.listen(port, ()=>{
    console.log(`Product service started`);
})