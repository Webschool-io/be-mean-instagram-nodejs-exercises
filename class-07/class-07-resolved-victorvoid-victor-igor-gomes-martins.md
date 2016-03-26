# Node.js - Aula 07 - Exercício

**user**: [victorvoid](https://github.com/victorvoid)

**autor**: Victor Igor Gomes Martins

**date**: 1458942620128

# Crie um função que entenda de EventEmitter, nela crie um method, um chamado init, ele devera ser chamado toda vez que a sua função foi iniciada. Use o código 04 Como base.(use ele no prototype).

```js

'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User (data) {
  this.data = data;
  this.on('user:init', olaUser);
  this.on('error', sendError);
  EventEmitter.call(this);
}

User.prototype.init = function () {
  if(this.data.name){
    this.emit('user:init',this.data);
  }
  else {
    this.emit('error', new TypeError('User need an name'));
  }
};

util.inherits(User, EventEmitter);

function olaUser(user) {
  console.log('Olá', user.name);
}

function sendError(err) {
  throw err;
}

const user = new User({name: 'Victor'});
user.init();

```
saida:
```
node app-1.js
Olá Victor

```

# Faça, um modulo simples para ler diretórios usando modulo FS(fs.readdir), usando o exemplo do código 03, esse modulo deve retornar uma Promise.

- fs-promise.js

```js
'use strict';

const fs = require('fs');

module.exports = (path)=>{
  return new Promise((resolve, reject)=>{
    fs.readdir(path, (err, files)=>{
      err ? reject(err) : resolve(files);
    });
  });
}
```

- app.js

```js

'use strict';

const readdir = require('./fs-promise');

readdir('./').then(sucess, failed);

function sucess(data){
  console.log(data);
}
function failed(err) {
  console.log(err);
}

```
saida:

```
 node app.js
[ 'app.js', 'carros.txt', 'fs-promise.js' ]

```



# Os schemas do mongoose podem usar promises, em seus alguns methods, de “crud”, list 3 methods que usam promise , se chamada da função exec(), no final e 3 que usam exec(), mostre ao menos um exemplo de cada.

- pokemon.js

```js

'use strict';

const mongoose = require('mongoose');
const util = require('util');

function pokemonHandler() {
  let Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const schema = new Schema({
    id          : ObjectId,
    name        : {type : String, trin : true},
    type        : {type : String, trin : true},
    attack      : {type : Number},
    defence     : {type : Number},
    height      : {type : Number},
    description : {type : String, trin : true}
  });

  return mongoose.model('Pokemons', schema);
}

module.exports = exports = pokemonHandler();
```

- Find

```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon  =  require('./pokemon');

let poke = Pokemon.find({name: 'pikachu'}).exec();
poke.then(success, failed);

function success(data) {
  if(data.length <= 0)
    console.log('Nada encontrado');
  else
    console.log(data);
}

function failed (err) {
  console.log(err);
}
```

saida:

```js
node app.js
Nada encontrado

```

- FindOne

```js
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon  =  require('./pokemon');

let poke = Pokemon.findOne({_id: "56f484bffcbb4f03287baa27"}).exec();
poke.then(success, failed);

function success(data) {
  console.log(data);
}

function failed (err) {
  console.log(err);
}
```
saida:

```js

node app.js
{ __v: 0,
  created_at: Thu Mar 24 2016 20:22:23 GMT-0400 (AMT),
  height: 0.7,
  defense: 96,
  attack: 69,
  type: 'terra',
  description: 'Vai que vai',
  name: 'Atomicmon',
  _id: 56f484bffcbb4f03287baa27 }


```

- Remove

```js

'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mean-instagram');
const Pokemon  =  require('./pokemon');

let poke = Pokemon.remove({_id: '56f5ac6eddb43dbb52c3e58b'}).exec();
poke.then(success, failed);

function success(data) {
  console.log(data);
}

function failed (err) {
  console.log(err);
}

```

saida:

```js
node app.js
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
