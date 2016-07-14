'use strict';

require('./db/config');
const express = require('express');
const app = express();
const Pokemon = require('./find');

app.get('/pokemons', function(req, res) {
    const query = {};
    let numPage = req.query.page;

    if (numPage === undefined) numPage = 1;
    //console.log(numPage);
    Pokemon.find(res, query, numPage);
});

app.listen(3000, function() {
    console.log('Servidor rodando em http://localhost:3000');
});
