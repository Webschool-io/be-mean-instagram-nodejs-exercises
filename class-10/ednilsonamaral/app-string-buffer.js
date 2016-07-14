'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.set({'Content-Type': 'text/html'});
    res.send(new Buffer('Oi, bufferzinho! :)'));
});

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
