# Node.js - Aula 07 - Exercício

**user**: [xereda](https://github.com/xereda)

**autor**: Jackson Ricardo Schroeder

**date**: 1458942620128

# Crie um função que entenda de EventEmitter. Nela crie um method chamado init. Ele devera ser chamado toda vez que a sua função for iniciada. Use o código 04 como base.(use ele no prototype).

## model.js

```js

"use strict";

const EventEmitter = require("events").EventEmitter;
const util = require("util");

function User(data) {
  this.data = data;
  this.on("user:init", sendMail);
  this.on("error", sendError);
  EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

User.prototype.init = function() {
  if (this.data.name) {
    this.emit("user:init", this.data);
  } else {
    this.emit("error", new TypeError("Usuário precisa de um nome!"));
  }
}

function sendMail(user) {
  user.pass = Math.floor(Math.random() * 10000);
  //console.log(`${user.pass}`);
  util.log(`\n
  \tOlá ${user.name}!
  \tEstamos inicializando seu perfil em nosso sistema.
  \tSeja bem vindo. Seu pass é ${user.pass}.
  \tVocê tem 24 horas para alterá-lo ou terá que solicitar reenvio.\n`);
}

function sendError(err) {
  throw err;
}

module.exports = User;

```

## app.js

```js

"use strict";

const User = require("./model");

const user = new User({name: "Jackson"});

user.init();

```

## resultado

```

node app.js
16 Jun 23:55:23 -

  	Olá Jackson!
  	Estamos inicializando seu perfil em nosso sistema.
  	Seja bem vindo. Seu pass é 148.
  	Você tem 24 horas para alterá-lo ou terá que solicitar reenvio.


```

# Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

## module.js

```js

"use strict";

const fs = require("fs");

function readDir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, "utf-8", function(err, res) {
      err ? reject(err) : resolve(res);
    });
  });
}

module.exports = readDir;

```

## app.js

```js

"use strict";

const readDir = require("./module");
readDir("./../../").then(sucess, error);

function sucess(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}

```
## Saída:

```

node app.js
[ 'closures',
  'emiter.js',
  'emiter2.js',
  'events.js',
  'exercicios',
  'heranca',
  'promise',
  'resources' ]

```

# Os schemas do mongoose podem usar promises, em alguns de seus method de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

## model/pokemon.js

```js

"use strict";

const mongoose = require("mongoose");
const util = require("util");

function pokemonHadler() {
  let Schema = mongoose.Schema;

  const schema = new Schema({
    name: { type: String, required: "Nome é obrigatório!" },
    attack: { type: Number },
    created: { type: Date, default: Date.now },
    defense: { type: Number},
    height: { type: String },
    speed: { type: Number },
    types: [String]
  });

  schema.pre("find", function(next) {
    this.start = Date.now();
    util.log("[EVENTO PRE FIND] ... ");
    next();
  });

  schema.post("find", function(result) {
    setTimeout(function() {
      console.log("[EVENTO POST FIND] ...");
    }, 0);
  });

  return mongoose.model("Pokemon", schema);

}

module.exports = exports = pokemonHadler();

```

# app-promise-find.js

```js

"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/be-mean-instagram");
const Pokemon = require("./models/pokemon");

let promise = Pokemon.find({name: /charizard-mega-x/i }).exec();
promise.then(sucess, error);

function sucess(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}


```

## Saída:

```
node app-promise-find.js
17 Jun 00:24:03 - [EVENTO PRE FIND] ...
[ { created: 2013-11-03T15:05:42.539Z,
    types: [ 'fire', 'dragon' ],
    speed: 100,
    name: 'Charizard-mega-x',
    hp: 78,
    height: '0',
    defense: 111,
    attack: 130,
    _id: 564b1de625337263280d06b9 } ]
[EVENTO POST FIND] ...

```

## app-promise-findOne.js

```js

"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/be-mean-instagram");
const Pokemon = require("./models/pokemon");

let promise = Pokemon.findOne({name: /charizard /i }).exec();
promise.then(sucess, error);

function sucess(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}


```
## Saída:

```
node app-promise-findOne.js
{ created: 2013-11-03T15:05:41.275Z,
  types: [ 'flying', 'fire' ],
  speed: 100,
  name: 'Charizard',
  hp: 78,
  height: '17',
  defense: 78,
  attack: 84,
  _id: 564b1de325337263280d068d }

```

## app-promise-remove

```js

"use strict";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/be-mean-instagram");
const Pokemon = require("./models/pokemon");

let promise = Pokemon.remove({name: /charizard/i }).exec();
promise.then(sucess, error);

function sucess(data) {
  console.log(data);
}

function error(err) {
  console.log(err);
}

```

## Saída:

```
node app-promise-remove.js
{ result: { ok: 1, n: 3 },
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
       _bytesDispatched: 227,
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
