const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;  




/*
write node server.js to run the server
ctrl + c for closing it.
restart server after every new code added
*/