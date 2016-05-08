# Node.js - Aula 07 - Exercício 

**user:** [fauker](http://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

```
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function User(data) {
  this.name = data.name;
  this.on('user:init', sayName);
  EventEmitter.call(this);
};

util.inherits(User, EventEmitter);

User.prototype.init = function() {
  this.emit('user:init', this.name);
};

function sayName(name) {
  console.log('Iniciando... Olá, humano! Você me deu o nome de', name);
};

var User = new User({name: 'Lucas'});
User.init();
```

Resultado:

```
node arquivos/events-e-promise/eventEmitter.js
Iniciando... Olá, humano! Você me deu o nome de Lucas
```

2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

```
var fs = require('fs');

function readdir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path,function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
};

readdir('.').then(function(data) {
  console.log('Arquivos:', data);
}, function(error) {
  console.log('ERROR', error);
});
```

Resultado:

```
node readDirPromise.js
Arquivos: [ 'arquivo.txt', 'eventEmitter.js', 'readDirPromise.js' ]
```

3 - Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

Schema

```
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/be-mean-instagram', function() {
  console.log('MongoDB conectado!');
});
var Schema = mongoose.Schema;

var _schema = {
  name:  String,
  description: String,
  type:   String,
  attack:   Number,
  defense:   Number,
  height:   Number
};

var pokemonSchema = new Schema(_schema);
var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
```

find

```
var mongoose = require('mongoose');
var Pokemon = require('./pokemon');

var promise = Pokemon.find({name: /nerdmon/i}).exec();
promise.then(function(data) {
  console.log(data);
}, function(error) {
  console.log(data);
});

node findPromise.js
MongoDB conectado!
[ { height: 100,
    defense: 50,
    attack: 49,
    type: 'fogo',
    description: 'Pokemon mt nerd',
    name: 'Nerdmon',
    _id: 57297a013b4cb9a31a868f50 } ]
```

findOne

```
var mongoose = require('mongoose');
var Pokemon = require('./pokemon');

var promise = Pokemon.findOne({_id: "57297a013b4cb9a31a868f50"}).exec();
promise.then(function(data) {
  console.log(data);
}, function(error) {
  console.log(data);
});

node findOnePromise.js
MongoDB conectado!
{ height: 100,
  defense: 50,
  attack: 49,
  type: 'fogo',
  description: 'Pokemon mt nerd',
  name: 'Nerdmon',
  _id: 57297a013b4cb9a31a868f50 }
```

remove

```
var mongoose = require('mongoose');
var Pokemon = require('./pokemon');

var promise = Pokemon.remove({_id: "57297a013b4cb9a31a868f50"}).exec();
promise.then(function(data) {
  console.log(data);
}, function(error) {
  console.log(data);
});

node removePromise.js
MongoDB conectado!
{ result: { ok: 1, n: 1 },
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
        wireProtocolHandler: [Object] },
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
        bytesRead: 250,
        _bytesDispatched: 226,
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
