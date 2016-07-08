# Node.js - Aula 06 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1466382355764

## 1. Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:
### 1.1 Para String: `enum`, `match`, `maxlength` e `minlength`
### 1.2 Para Number: `max` e `min`

* Código

```js
'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    address: {type: String, match: /^av.*\,\s[0-9]+$/i},
    state: {type: String, enum: ['SP', 'RJ', 'MG', 'RS', 'AM']},
    course: {type: String, minlength: 5},
    type: {type: String, maxlength: 10},
    age: {type: Number, max: 99},
    course_hours: {type: Number, min: 10}
};

const data = {
    address: 'Avenida 9 de julho, 8872',
    state: 'SP',
    course: 'Be MEAN',
    type: 'student',
    age: 20,
    course_hours: 15
};

const validationSchema = new Schema(_schema);
const validationModel = mongoose.model('Validation', validationSchema);

const val = new validationModel(data);
val.save((err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('inseriu: ', data);
});

module.exports = validationSchema;
```

* Retorno sem erros

```
inseriu:  { _id: 57673c54d4e6f1a92646cb0a,
  course_hours: 15,
  age: 20,
  type: 'student',
  course: 'Be MEAN',
  state: 'SP',
  address: 'Avenida 9 de julho, 8872',
  __v: 0 }
```

* Retorno com erros

```
ERRO:  { ValidationError: Validation validation failed
    at MongooseError.ValidationError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validation.js:22:11)
    at model.Document.invalidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1399:32)
    at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1275:17
    at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:701:7)
    at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
    at Array.forEach (native)
    at SchemaNumber.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
    at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Function.Module.runMain (module.js:577:11)
    at startup (node.js:160:18)
    at node.js:456:3
  message: 'Validation validation failed',
  name: 'ValidationError',
  errors: 
   { course_hours: 
      { ValidatorError: Path `course_hours` (2) is less than minimum allowed value (10).
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaNumber.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: 'Path `course_hours` (2) is less than minimum allowed value (10).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'min',
        path: 'course_hours',
        value: 2 },
     age: 
      { ValidatorError: Path `age` (450) is more than maximum allowed value (99).
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaNumber.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: 'Path `age` (450) is more than maximum allowed value (99).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'max',
        path: 'age',
        value: 450 },
     type: 
      { ValidatorError: Path `type` (`student_teacher`) is longer than the maximum allowed length (10).
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: 'Path `type` (`student_teacher`) is longer than the maximum allowed length (10).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'maxlength',
        path: 'type',
        value: 'student_teacher' },
     course: 
      { ValidatorError: Path `course` (`MEAN`) is shorter than the minimum allowed length (5).
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: 'Path `course` (`MEAN`) is shorter than the minimum allowed length (5).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'minlength',
        path: 'course',
        value: 'MEAN' },
     state: 
      { ValidatorError: `PR` is not a valid enum value for path `state`.
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: '`PR` is not a valid enum value for path `state`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'state',
        value: 'PR' },
     address: 
      { ValidatorError: Path `address` is invalid (9 de julho, 8872).
          at MongooseError.ValidatorError (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidate (/var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /var/www/html/workshop-be-mean/nodejs/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:456:3
        message: 'Path `address` is invalid (9 de julho, 8872).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'regexp',
        path: 'address',
        value: '9 de julho, 8872' } } }
```

## 2. Cadastre 3 pokemóns de uma só vez:

* Código

```js
'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    name: String,
    descripion: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const data = [
    {
        name: 'Spearow',
        descripion: "Pombo sem doença",
        type: 'normal',
        attack: 60,
        defense: 30,
        height: 0.3
    },
    {
        name: 'Oddish',
        descripion: "Beterraba?",
        type: 'grass',
        attack: 50,
        defense: 55,
        height: 0.51
    },
    {
        name: 'Psyduck',
        descripion: "quase que perry o ornitorrinco",
        type: 'water',
        attack: 52,
        defense: 48,
        height: 0.79
    }
];

pokeModel.create(data, (err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('inseriu: ', data);
});

module.exports = pokemonSchema;
```

* Retorno

```
inseriu:  [ { _id: 57673f314ea09c7a296db64c,
    height: 0.3,
    defense: 30,
    attack: 60,
    type: 'normal',
    descripion: 'Pombo sem doença',
    name: 'Spearow',
    __v: 0 },
  { _id: 57673f314ea09c7a296db64d,
    height: 0.51,
    defense: 55,
    attack: 50,
    type: 'grass',
    descripion: 'Beterraba?',
    name: 'Oddish',
    __v: 0 },
  { _id: 57673f314ea09c7a296db64e,
    height: 0.79,
    defense: 48,
    attack: 52,
    type: 'water',
    descripion: 'quase que perry o ornitorrinco',
    name: 'Psyduck',
    __v: 0 } ]
```
## 3. Busque todos os Pokemons com `attack` > 50 e `height` > 0.5

* Código

```js
'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    name: String,
    descripion: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const query = {$and: [
    {height: {$gt: 0.5}}, 
    {attack: {$gt: 50}}
]};

const callback = (err, data) => {
    if(err) return consol.log('erro:', err);
    console.log('busca: ', data);
};

pokeModel.find(query, callback);

module.exports = pokemonSchema;
```

* Retorno

```
busca:  [ { height: 0.6,
    defense: 43,
    attack: 52,
    type: 'Fogo',
    description: 'o que vira o charizard (fodelao)',
    name: 'Charmander',
    _id: 57672ddd23aa7f10362224f7 },
  { __v: 0,
    height: 0.79,
    defense: 48,
    attack: 52,
    type: 'water',
    descripion: 'quase que perry o ornitorrinco',
    name: 'Psyduck',
    _id: 57673f314ea09c7a296db64e } ]
```

## 4. Altere, inserindo, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

* Código

```js
'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    name: String,
    descripion: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /Nerdmon/i};
const mod = {
    $setOnInsert: {
        name: 'Nerdmon',
        attack: 49,
        defense: 70,
        height: 1.6
    }
};

const options = {upsert: true};

pokeModel.update(query, mod, options, (err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('alterou: ', data);
});
module.exports = pokemonSchema;
```

* Retorno

``` 
alterou:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 576765cdb8050d654c17a2b5 } ] }
```
## 5. Remova todos os Pokemons com `attack` acima de 50.

* Código

```js
'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    name: String,
    descripion: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const query = {attack: {$gt: 50}};

pokeModel.remove(query, (err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('removeu: ', data);
});
module.exports = pokemonSchema;
```

* Retorno

```
removeu:  { result: { ok: 1, n: 4 },
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
        _bytesDispatched: 230,
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
