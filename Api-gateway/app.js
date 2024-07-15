const express= require('express');
const app= express();
const {createProxyMiddleware}= require('http-proxy-middleware');


// define routes and their ports
const routes= {
    '/users': 'http://localhost:3000/users',
    '/orders': 'http://localhost:3001/orders',
    '/products': 'http://localhost:3002/products'
}

// create a proxy for each route
for(const route in routes){
    const target= routes[route];    // konse url ko hme redirect krna hai
    app.use(route, createProxyMiddleware({target}));  
}

const port= 8000;
app.listen(port, ()=>{
    console.log('API gateway started');
})

