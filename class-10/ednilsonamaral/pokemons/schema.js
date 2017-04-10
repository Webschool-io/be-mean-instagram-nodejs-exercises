'use strict';

const mongoose = require('mongoose');

const _schema = {
    name: {type: String, required: true},
    attack: {type: Number, default : 0},
    defense: {type: Number},
    height: {type: Number },
    created: {type: Date},
    hp: {type: Number},
    speed: {type: Number},
    types: []
};

const PokemonSchema = new mongoose.Schema(_schema);

module.exports = PokemonSchema;
