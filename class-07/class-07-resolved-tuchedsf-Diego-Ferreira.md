# Node.js - Aula 07 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira


## 1 - Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 como base (use ele no prototype).  
 
```js  
'use strinct';

//declarando modulo events/eventemitter
const EventEmitter = require('events').EventEmitter;

//requendo modulo util para implementaçao herança Prototype
const util = require('util');

//definindo função com os metodos de disparo do eventEmitter
function Autenticar(data) {
  this.data = data;
  this.on('autenticar.init', sendMessageOK);
  this.on('error', sendError);
  EventEmitter.call(this);
}

//instanciando prototype
Autenticar.prototype.init = function () {
  if (this.data.login){
    this.emit('autenticar.init', this.data);
  } else {
    this.emit('error', new TypeError('Erro ao autenticar o usuário'));
  }
}

//utilizando o uitl para fazer a herança, dizendo que antenticar é um tipo de eventEmitter.
util.inherits(Autenticar, EventEmitter);

function sendMessageOK(data) {
  console.log(data.login);
}

function sendError( err ) {
  throw err;
}

//Uso passando um login como parametro
const message = new Autenticar({login: 'tuchedsf'});  
message.init(); 
```


Saída no terminal:  
```  
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node eventsEmitter.js 
tuchedsf 
```


## 2 - Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.  
Módulo ler diretórios:fs-readdir.js

```js
'use strict';

const fs =  require('fs');

function readDir (path) {
    return new Promise(function(resolve, reject) {
            fs.readdir(path,function(err, files) {
                    err ? reject(err) : resolve(files);
                });    
            });
}

module.exports = readDir;
```

Uso do módulo:
```js
'use strict';

const readDir = require('./fs-readdir');

let dir = '../filesync/dirNode2';

readDir(dir).then(success , error);

function success (data) {
    console.log(data);
}

function error (err) {
    console.error(err);
}
```

Resultado:
```
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node fs-readDir-call.js 
[ 'helloWorld.txt', 'hiWorld.txt' ]
```

## 3 - Os schemas do mongoose podem usar promises, em alguns dos seus methods, de “crud”, list 3 methods que usam promise , sem chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada. 

- Métodos sem chamada a exec()
  + create
  + remove
  + find //sem exec
- Métodos com chamada exec()
  + update
  + find //com exec
  + findOne

- Arquivo definição Modelo
  + PokemonModel
```js 
'use strict';

const mongoose = require('mongoose');

const uriDB = 'mongodb://localhost/be-mean-instagram';
//criar uma conexão com mongo
mongoose.connect(uriDB);

const _schema = {
  name: {type : String, required:true},
  description: {type: String,  minlength : 5, maxlength : 50},
  attack: {type: Number, min: 40, max: 95},
  defense : {type : Number, match: /\d/g },
  height : Number,
  cor: {type: String, enum: ['Red', 'Blue', 'Green'], required:true},
  created_at: { type: Date, default: Date.now }
}

const PokemonSchema = new mongoose.Schema(_schema);
const PokemonModel = mongoose.model('pokemons', PokemonSchema);

module.exports = PokemonModel;
```

  + Create
```js
  'use strict';

const pokemonModel = require('./PokemonsModel.js');

const pokemon = {
  name: "Poke Promisse",
  description: "Pokemon criador de promisses",
  attack: 95,
  defense : 84,
  height : 2,
  cor: 'Blue'
  };

pokemonModel.create(pokemon).then(success , error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

  Resultado:
```
  diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node createPoke_promisse.js 
{ created_at: Sun May 08 2016 11:16:34 GMT-0300 (BRT),
  _id: 572f4a42cf4c206bfcaa7480,
  cor: 'Blue',
  height: 2,
  defense: 84,
  attack: 95,
  description: 'Pokemon criador de promisses',
  name: 'Poke Promisse',
  __v: 0 }
```

  + remove
```js
'use strict';

const pokemonModel = require('./PokemonsModel.js');

const query = {"_id" : "572f4a42cf4c206bfcaa7480"}

pokemonModel.remove(query).then(success , error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

  Resultado
```
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node remove_promise.js 
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


  + find //sem exec
```js
'use strict';

const pokemonModel = require('./PokemonsModel.js');

const query = {$and :[{attack : 40}, {defense : 40}]}

pokemonModel.find(query).then(success,error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

  Resultado
```
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node find_promise.js 
[ { created_at: Sun May 08 2016 11:58:03 GMT-0300 (BRT),
    cor: 'Blue',
    height: 0.7,
    defense: 40,
    attack: 40,
    description: 'Pokemon que altera inserindo',
    name: 'Nerdmon',
    _id: 57294fe05daea5abb1cb1c4f } ]
```
  

  + update
```js
'use strict';

const pokemonModel = require('./PokemonsModel.js');

const query = {"_id" : "572f4a42cf4c206bfcaa7480"}
const mod = {name: "Poke Promise", defense : 50}


let promise = pokemonModel.update(query,mod).exec();

promise.then(success, error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```
  
  Resultado
```
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node update_promise.js 
{ ok: 1, nModified: 1, n: 1 }
```

  + findOne
```js
'use strict';

const pokemonModel = require('./PokemonsModel.js');

let promise = pokemonModel.findOne({}).exec();

promise.then(success, error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

  Resultado
```
iego@MacBook-Air-Diego ~/M/n/7EventPromisses> node find_promise.js 
{ created_at: Sun May 08 2016 11:43:51 GMT-0300 (BRT),
  __v: 0,
  attack: 0,
  height: 20,
  defense: 75,
  type: 'reptile',
  description: 'Tartaruga tuche',
  name: 'Tuchemon',
  _id: 57256689b8b229d6b6b14df7 }
```

  + find
```js
'use strict';

const pokemonModel = require('./PokemonsModel.js');

const query = {defense : {$lt: 90}}

let promise = pokemonModel.find(query).exec();

promise.then(success, error);

function success(data) {
    console.log(data);
}

function error (err) {
    console.log(err);
}
```

  Resultado
```
diego@MacBook-Air-Diego ~/M/n/7EventPromisses> node find_promise.js 
[ { created_at: Sun May 08 2016 11:46:04 GMT-0300 (BRT),
    __v: 0,
    attack: 0,
    height: 20,
    defense: 30,
    type: 'reptile',
    description: 'Tartaruga tuche',
    name: 'Tuchemon',
    _id: 57256bacb6315cbdb70fc87e },
  { created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
    __v: 0,
    cor: 'Green',
    height: 0.4,
    defense: 30,
    attack: 40,
    description: 'Pokemon especialista em grama',
    name: 'Gramosauro',
    _id: 57294bdfb6de032bd6811516 },
  { created_at: Sun May 08 2016 11:46:04 GMT-0300 (BRT),
    cor: 'Blue',
    height: 0.7,
    defense: 40,
    attack: 40,
    description: 'Pokemon que altera inserindo',
    name: 'Nerdmon',
    _id: 57294fe05daea5abb1cb1c4f } ]
```
