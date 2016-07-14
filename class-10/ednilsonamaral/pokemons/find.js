'use strict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'Pokemons');
const Pagination = require('./pagination');

const findPokemon = function(req, res, query){
    Model.count({}, (err, count) => {
        const maxPages = Math.ceil(count/3);
        Model.find(query,  (err, data) =>
        Pagination(err,data, res, Number.parseInt(numPage), Number.parseInt(maxPages))).limit(3).skip(3 * (numPage - 1));
    });
};

const CRUD = {
    findPokemon
}

module.exports = CRUD;
