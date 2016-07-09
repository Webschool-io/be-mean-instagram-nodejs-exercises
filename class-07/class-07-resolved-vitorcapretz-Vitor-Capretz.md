# Node.js - Aula 07 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1468020913295

## 1. Crie um função que extenda EventEmitter, nela crie um method chamado init, ele deverá ser chamado toda vez que a sua função for iniciada. Use o código 04 como base (use ele no prototype).

* Código

```js
'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User(data) {
    this.data = data;
    this.on('user:init', loginUser);
    this.on('error', sendError);
    EventEmitter.call(this);
};

util.inherits(User, EventEmitter);

User.prototype.init = function() {
    if (this.data.name && this.data.pass) {
        this.emit("user:init", this.data);
    } else {
        this.emit("error", new TypeError("Nome e senha requeridos!"));
    }
};

function loginUser(user) {
  util.log(`\n
  \tUsuário ${user.name} logado com a senha ${user.pass}
  \tParabéns.\n`);
}

function sendError(err) {
  throw err;
}

const newUser = new User({'name': 'capretz', 'pass': 'forte'});
newUser.init();
```

* Retorno

```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/promises$ node ex1.js 
8 Jul 20:43:01 - 

  	Usuário capretz logado com a senha forte
  	Parabéns.
```

## 2. Faça um módulo simples para ler diretórios usando módulo FS (`fs.readdir`), usando o exemplo do código 03, esse módulo deve retornar uma Promise.

* Código

```js
"use strict";

const fs = require("fs");

function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, "utf-8", function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
}

module.exports = readDir;
```

* Código app.js

```js
"use strict";

const readDir = require("./module");
readDir("./resources").then(success, error);

function success(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}
```

* Retorno

```
node app.js 
[ 'friends.json', 'people.json' ]

```

## 3. Os schemas do mongoose podem usar promises em seus methods de “crud”, liste 3 methods que usam `Promise` sem a chamada da função exec(), e no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

* Código

```js
"use strict";

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');

const pokemonSchema = new mongoose.Schema({
  name: String,
  attack: Number,
  defense: Number,
  height: String,
  types: [String],
  created: {type: Date, default: Date.now}
});

const PokemonModel = mongoose.model('pokemons', pokemonSchema);

var pokemon = {
  name: 'Capretzmon',
  attack: 99,
  defense: 99,
  height: 1.7,
  types: ['fire', 'poke']
};

PokemonModel.create(pokemon) 
.then((data) => {
    console.log('Pokemon created: ', data);
    return PokemonModel.find({name: pokemon.name}).exec();
})
.then((data) => {
    console.log('Pokemon found: ', data);
    return PokemonModel.update({name: /nodemon/i}, {attack: 200});
})
.then((data) => {
    console.log('Pokemon updated: ', data);
    return PokemonModel.remove({name: /nodemon/i});
})
.then((data) => {
    console.log('Pokemon removed: ', data);
})
.catch((err) => {
    console.log(err);
});
```

* Retorno 1

```
Pokemon created:  { __v: 0,
  name: 'Capretzmon',
  attack: 99,
  defense: 99,
  height: '1.7',
  _id: 57803e148e09558831f21fa0,
  created: 2016-07-08T23:58:12.917Z,
  types: [ 'fire', 'poke' ] }

```

* Retorno 2

```
Pokemon found:  [ { _id: 57803e148e09558831f21fa0,
    name: 'Capretzmon',
    attack: 99,
    defense: 99,
    height: '1.7',
    __v: 0,
    created: 2016-07-08T23:58:12.917Z,
    types: [ 'fire', 'poke' ] } ]

```

* Retorno 3

```
Pokemon updated:  { ok: 1, nModified: 0, n: 0 }

```

* Retorno 4

```
Pokemon removed:  { result: { ok: 1, n: 0 },
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
        connecting: false,
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
        _bytesDispatched: 791,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
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
