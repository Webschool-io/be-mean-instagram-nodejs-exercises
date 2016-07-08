# Node.js - Aula 07 - Exercício

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

**Data:** 1465801860

## Índice

##### [Exercício-01](#1-crie-um-função-que-extenda-eventemitter-nela-crie-um-method-chamado-init-ele-deverá-ser-chamado-toda-vez-que-a-sua-função-for-iniciada-use-o-código-04-como-base-use-ele-no-prototype)

* [Resultado 01](#resultado-01)

##### [Exercício-02](#2-faça-um-módulo-simples-para-ler-diretórios-usando-módulo-fs-fsreaddir-usando-o-exemplo-do-código-03-esse-modulo-deve-retornar-uma-promise)

* [Resultado 02](#resultado-02)

##### [Exercício-03](#3-os-schemas-do-mongoose-podem-usar-promises-em-seus-alguns-methods-de-crud-liste-3-methods-que-usam-promise-se-chamada-da-função-exec-no-final-e-3-que-usam-exec-mostre-ao-menos-um-exemplo-de-cada)

* [Resultado 03](#resultado-03)

<br>
## 1. Crie um função que extenda EventEmitter, nela crie um method chamado init, ele deverá ser chamado toda vez que a sua função for iniciada. Use o código 04 como base (use ele no prototype).

```js
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function User(data) {
  this.name = data.name;
  this.on('user:init', Name);
  EventEmitter.call(this);
};

util.inherits(User, EventEmitter);

User.prototype.init = function() {
  this.emit('user:init', this.name);
};

function Name(name) {
  console.log('Tá tranquilo, tá compilado. Meu nome é MC', name);
};

var User = new User({name: 'Pokémon'});
User.init();
```
## Resultado 01
```shell
$ node rogue.js
Tá tranquilo, tá compilado. Meu nome é MC Pokémon
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

// Executando
readDir('node_modules').then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err);
});

```
## Resultado 02
```shell
$ node rogue.js
[ 'mongoose' ]
```

## 3. Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, liste 3 methods que usam promise, se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');

// Aqui criarei um schema de um Pokémon
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

// Aqui está os dados do schema do meu Pokémon
var pokemon = {
  name: 'Bulbasaur',
  attack: 100,
  defense: 100,
  hp: 5000,
  speed: 100,
  height: 3,
  types: ['fire', 'poke']
};

PokemonModel.create(pokemon) 
    // Create
  .then((data) => {
    console.log('Foi criado: ', data);
    return PokemonModel.find({name: pokemon.name}).exec();
  })
    // Find
  .then((data) => {
    console.log('Foi Encontrado: ', data);
    return PokemonModel.update({name: /nodemon/i}, {attack: 200});
  })
    // Update
  .then((data) => {
    console.log('Foi atualizado: ', data);
    return PokemonModel.remove({name: /nodemon/i});
  })
    // Remove
  .then((data) => {
    console.log('Foi removido: ', data);
  })
  .catch((err) => {
    console.log(err);
  });
```
## Resultado 03
```shell
Foi criado:  { types: [ 'fire', 'poke' ],
  created: Sat Jun 11 2016 11:47:07 GMT+0000 (UTC),
  _id: 575bfa3b824396e6061182e5,
  height: '3',
  speed: 100,
  hp: 5000,
  defense: 100,
  attack: 100,
  name: 'Bulbasaur',
  __v: 0 }
Foi Encontrado:  [ { types: [ 'fire', 'poke' ],
    created: Sat Jun 11 2016 11:47:07 GMT+0000 (UTC),
    __v: 0,
    height: '3',
    speed: 100,
    hp: 5000,
    defense: 100,
    attack: 100,
    name: 'Bulbasaur',
    _id: 575bfa3b824396e6061182e5 } ]
Foi atualizado:  { ok: 1, nModified: 0, n: 0 }
Foi removido:  { result: { ok: 1, n: 0 },
  connection: 
   EventEmitter {
     domain: null,
     _events: 
      { close: [Object],
        error: [Object],
        timeout: [Object],
        parseError: [Object],
        connect: [Function] },
     _eventsCount: 5,
     _maxListeners: undefined,
     options: 
      { socketOptions: {},
        auto_reconnect: true,
        host: 'localhost',
        port: 27017,
        cursorFactory: [Object],
        reconnect: true,
        emitError: true,
        size: 5,
        disconnectHandler: [Object],
        bson: {},
        messageHandler: [Function],
        wireProtocolHandler: {} },
     id: 0,
     logger: { className: 'Connection' },
     bson: {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'localhost',
     keepAlive: true,
     keepAliveInitialDelay: 0,
     noDelay: true,
     connectionTimeout: 0,
     socketTimeout: 0,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     cert: null,
     key: null,
     passphrase: null,
     ssl: false,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions: { promoteLongs: true },
     flushing: false,
     queue: [],
     connection: 
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: 'localhost',
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: false,
        destroyed: false,
        bytesRead: 575,
        _bytesDispatched: 806,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        read: [Function],
        _consuming: true },
     writeStream: null,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null } }
```
