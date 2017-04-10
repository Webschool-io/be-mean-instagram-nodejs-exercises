'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hey, YOW!!');
});

// page de not found
app.get('/not-found', function(req, res) {
    res.status(404).send('Sorry, page not found! =(');
});

// enviando not found para a página de não encontrado
app.get('/*', function(req, res) {
    res.redirect('/not-found');
})

app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000/');
});
