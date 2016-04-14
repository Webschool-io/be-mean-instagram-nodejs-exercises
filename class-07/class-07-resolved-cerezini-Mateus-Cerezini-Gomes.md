# Node.js - Aula 07 - Exercício

**User:** [Cerezini](https://github.com/Cerezini)

**Autor:** Mateus Cerezini Gomes

## 1. Crie um função que extenda EventEmitter, nela crie um method chamado init, ele deverá ser chamado toda vez que a sua função for iniciada. Use o código 04 como base (use ele no prototype).

```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function Potato() {
  this.on('event:init', init);
  EventEmitter.call(this);
}

util.inherits(Potato, EventEmitter);

Potato.prototype.init = function () {
  this.emit('event:init');
};

function init() {
  console.log('Objeto Potato iniciado');
}

// Executando
var potato = new Potato();
potato.init();
```

```shell
Objeto potato iniciado
```

## 2. Faça um módulo simples para ler diretórios usando módulo FS (fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

```js
'use strict';

const fs = require('fs');

function readDir(path) {
  return new Promise( function (resolve, reject) {
    fs.readdir(path, function (err, data) {
      err ? reject(err) : resolve(data);
    });
  });
}

// Executing
readDir('node_modules').then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
});

// Test error
readDir('modules').then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
});
```

```shell
[ '.bin',
  'async',
  'bluebird',
  'bson',
  'core-util-is',
  'debug',
  'es6-promise',
  'hooks-fixed',
  'inherits',
  'isarray',
  'kareem',
  'mongodb',
  'mongodb-core',
  'mongoose',
  'mpath',
  'mpromise',
  'mquery',
  'ms',
  'muri',
  'readable-stream',
  'regexp-clone',
  'require_optional',
  'resolve-from',
  'semver',
  'sliced',
  'string_decoder' ]
  { [Error: ENOENT: no such file or directory, scandir 'modules'] errno: -2, code: 'ENOENT', syscall: 'scandir', path: 'modules' }
```

## 3. Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, liste 3 methods que usam promise, se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

```js
'use strict';

const mongoose = require('mongoose');

// Connect to MongoDb
mongoose.connect('mongodb://localhost/be-mean-instagram');

// Create Pokemon Model
const pokemonSchema = new mongoose.Schema({
  name: String,
  attack: Number,
  defense: Number,
  hp: Number,
  speed: Number,
  height: String,
  types: [String],
  created: {type: Date, default: Date.now}
});

const PokemonModel = mongoose.model('pokemons', pokemonSchema);

// Executing
var pokemon = {
  name: 'Nodemon',
  attack: 100,
  defense: 100,
  hp: 5000,
  speed: 100,
  height: 3,
  types: ['fire', 'mean']
};

PokemonModel.create(pokemon) //Create
  .then((data) => {
    console.log('Created: ', data);
    return PokemonModel.find({name: pokemon.name}).exec(); //Find
  })
  .then((data) => {
    console.log('Found: ', data);
    return PokemonModel.update({name: /nodemon/i}, {attack: 200}); //Update
  })
  .then((data) => {
    console.log('Updated: ', data);
    return PokemonModel.remove({name: /nodemon/i}); //Remove
  })
  .then((data) => {
    console.log('Removed: ', data);
  })
  .catch((err) => {
    console.log(err);
  });
```

```shell
Created:  { types: [ 'fire', 'mean' ],
  created: Thu Apr 14 2016 01:05:49 GMT-0300 (BRT),
  _id: 570f171d3493e0f51df0649a,
  height: '3',
  speed: 100,
  hp: 5000,
  defense: 100,
  attack: 100,
  name: 'Nodemon',
  __v: 0 }
Found:  [ { types: [ 'fire', 'mean' ],
    created: Thu Apr 14 2016 01:05:49 GMT-0300 (BRT),
    __v: 0,
    height: '3',
    speed: 100,
    hp: 5000,
    defense: 100,
    attack: 100,
    name: 'Nodemon',
    _id: 570f171d3493e0f51df0649a } ]
Updated:  { ok: 1, nModified: 1, n: 1 }
Removed:  { result: { ok: 1, n: 1 }
```
