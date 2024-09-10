const express = require('express'); //Correct
const app = express(); //Correct
const ProductController = require('../src/controllers/productController');
const UserController = require('../src/controllers/UserController');
const RegInvController = require('../src/controllers/RegInvController');

const puerto = 80;

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Lets goo');
});

app.get('/user', UserController.indexGet);
app.get('/user/:id([0-9]+)', UserController.itemGet);
app.post('/user', UserController.indexPost);
app.put('/user/:id([0-9]+)', UserController.itemPut);
app.patch('/user/:id([0-9]+)', UserController.itemPatch);
app.delete('/user/:id([0-9]+)', UserController.itemDelete);

app.get('/product', ProductController.indexGet);
app.get('/product/:id([0-9]+)', ProductController.itemGet);
app.post('/product', ProductController.indexPost);
app.put('/product/:id([0-9]+)', ProductController.itemPut);
app.patch('/product/:id([0-9]+)', ProductController.itemPatch);
app.get('/product/:id([0-9]+)/reginv', RegInvController.productRegInvGet);
app.delete('/product/:id([0-9]+)', ProductController.itemDelete);


app.get('/reginv', RegInvController.indexGet);
app.get('/reginv/:id([0-9]+)', RegInvController.itemGet);
app.post('/reginv', RegInvController.indexPost);
app.put('/reginv/:id([0-9]+)', RegInvController.itemPut);
app.patch('/reginv/:id([0-9]+)', RegInvController.itemPatch);
app.delete('/reginv/:id([0-9]+)', RegInvController.itemDelete);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});