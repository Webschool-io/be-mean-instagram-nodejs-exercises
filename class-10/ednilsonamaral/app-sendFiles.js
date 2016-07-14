'use strict';

const express = require('express');
const app = express();
const SendFiles = require('./modules/SendFiles');

app.get('/file/:name/:type', function(req, res, next) {
    return SendFiles(req, res);
});

app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
