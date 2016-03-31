# Node.js - Aula 06 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

* 1.2.  para Number: `max` e `min`
```js
const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const meanArr = 'mongodb expressjs angularjs nodejs'.split(' ');
const _schema = {
      stringEnum: { type: String, enum: meanArr }
    , stringMatch: { type: String, match: /node((\.js)|js)?/i }
    , stringMinLength: { type: String, minlength: 5 }
    , stringMaxLength: { type: String, maxlength: 9 }
    , numMin: { type: Number, min: 12 }
    , numMax: { type: Number, max: 14 }
    , dateValue: { type: Date }
    , bufferValue:  Buffer
    , booleanValue:  Boolean
    , mixedValue:   Schema.Types.Mixed
    , objectValue: Schema.Types.ObjectId
    , arrayValue:   [String]
};


const class06Ex1Schema = new Schema(_schema);
const class06Ex1Model = mongoose.model('class06', class06Ex1Schema);
var class06Ex1Object = new class06Ex1Model;

// Inserções válidas
class06Ex1Object.stringEnum = 'nodejs';
class06Ex1Object.stringMatch = 'nodejs';
class06Ex1Object.stringMinLength = '1234567';
class06Ex1Object.stringMaxLength = '1234567';
class06Ex1Object.numMin = 13;
class06Ex1Object.numMax = 13;
class06Ex1Object.dateValue = Date.now();
class06Ex1Object.bufferValue = new Buffer(0);
class06Ex1Object.booleanValue = 1;
class06Ex1Object.mixedValue = 'Mean Stack';
class06Ex1Object.objectValue = new mongoose.Types.ObjectId;
class06Ex1Object.arrayValue.push('Inseriu!!!!');


// Inserções inválidas
class06Ex1Object.stringEnum = 'php';
class06Ex1Object.stringMatch = 'dog';
class06Ex1Object.stringMinLength = '1234';
class06Ex1Object.stringMaxLength = '1234567890';
class06Ex1Object.numMin = 11;
class06Ex1Object.numMax = 15;
class06Ex1Object.dateValue = '11/11/11';
class06Ex1Object.bufferValue = 'buf';
class06Ex1Object.booleanValue = {};
class06Ex1Object.mixedValue = undefined;
class06Ex1Object.objectValue = 'objeto';
class06Ex1Object.arrayValue.push(1);


class06Ex1Object.save(function (err, data) {
    if(err) return console.log(err);
    return console.log('Sucesso: ', data);
});
```

#### Saída
```js
// Inserções válidas
Sucesso:  { arrayValue: [ 'Inseriu!!!!' ],
  _id: 56e2338885ca37d42959fc1c,
  stringEnum: 'nodejs',
  stringMatch: 'nodejs',
  stringMinLength: '1234567',
  stringMaxLength: '1234567',
  numMin: 13,
  numMax: 13,
  dateValue: Thu Mar 10 2016 23:55:04 GMT-0300 (BRT),
  bufferValue:
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 0,
     buffer: <Buffer > },
  booleanValue: true,
  mixedValue: 'Mean Stack',
  objectValue: 56e2338885ca37d42959fc1d,
  __v: 0 }

// Inserções inválidas
{ [ValidationError: class06 validation failed]
  message: 'class06 validation failed',
  name: 'ValidationError',
  errors:
   { objectValue:
      { [CastError: Cast to ObjectID failed for value "objeto" at path "objectValue"]
        message: 'Cast to ObjectID failed for value "objeto" at path "objectValue"',
        name: 'CastError',
        kind: 'ObjectID',
        value: 'objeto',
        path: 'objectValue',
        reason: undefined },
     stringEnum:
      { [ValidatorError: `php` is not a valid enum value for path `stringEnum`.]
        properties: [Object],
        message: '`php` is not a valid enum value for path `stringEnum`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'stringEnum',
        value: 'php' },
     stringMatch:
      { [ValidatorError: Path `stringMatch` is invalid (dog).]
        properties: [Object],
        message: 'Path `stringMatch` is invalid (dog).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'stringMatch',
        value: 'dog' },
     stringMinLength:
      { [ValidatorError: Path `stringMinLength` (`1234`) is shorter than the minimum allowed length (5).]
        properties: [Object],
        message: 'Path `stringMinLength` (`1234`) is shorter than the minimum allowed length (5).',
        name: 'ValidatorError',
        kind: 'minlength',
        path: 'stringMinLength',
        value: '1234' },
     stringMaxLength:
      { [ValidatorError: Path `stringMaxLength` (`1234567890`) is longer than the maximum allowed length (9).]
        properties: [Object],
        message: 'Path `stringMaxLength` (`1234567890`) is longer than the maximum allowed length (9).',
        name: 'ValidatorError',
        kind: 'maxlength',
        path: 'stringMaxLength',
        value: '1234567890' },
     numMin:
      { [ValidatorError: Path `numMin` (11) is less than minimum allowed value (12).]
        properties: [Object],
        message: 'Path `numMin` (11) is less than minimum allowed value (12).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'numMin',
        value: 11 },
     numMax:
      { [ValidatorError: Path `numMax` (15) is more than maximum allowed value (14).]
        properties: [Object],
        message: 'Path `numMax` (15) is more than maximum allowed value (14).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'numMax',
        value: 15 }
        }
    }
```

## Cadastre 3 pokemons **de uma só vez**:
```js
const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const _schema = {
   attack: Number
  , created: { type: Date, default: Date.now }
  , defense: Number
  , height: Number
  , hp: Number
  , name: String
  , speed: Number
  , types: [String]
};


const pokemonsSchema = new Schema(_schema);
var pokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var pokemon1 = {
      name: 'BeboMon'
    , attack: 51
    , defense: 51
    , height: 12.1
}

var pokemon2 = {
      name: 'CodeMon'
    , attack: 42
    , defense: 31
    , height: 6.18
}

var pokemon3 = {
      name: 'SonoMon'
    , attack: 10
    , defense: 09
    , height: 08
}

var novosPokemons = [pokemon1, pokemon2, pokemon3];

pokemonsModel.insertMany(novosPokemons, function(error, docs) {
    if(error) return console.log(error);
    return console.log('Sucesso: ', docs);
});
```

#### Saída
```js
Sucesso:  [ { created: Fri Mar 11 2016 00:38:28 GMT-0300 (BRT),
    types: [],
    _id: 56e23db4bd5799c830b1b07a,
    height: 12.1,
    defense: 51,
    attack: 51,
    name: 'BeboMon' },
  { created: Fri Mar 11 2016 00:38:28 GMT-0300 (BRT),
    types: [],
    _id: 56e23db4bd5799c830b1b07b,
    height: 6.18,
    defense: 31,
    attack: 42,
    name: 'CodeMon' },
  { created: Fri Mar 11 2016 00:38:28 GMT-0300 (BRT),
    types: [],
    _id: 56e23db4bd5799c830b1b07c,
    height: 8,
    defense: 9,
    attack: 10,
    name: 'SonoMon' } ]
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```js
const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const _schema = {
   attack: Number
  , created: { type: Date, default: Date.now }
  , defense: Number
  , height: Number
  , hp: Number
  , name: String
  , speed: Number
  , types: [String]
};


const pokemonsSchema = new Schema(_schema);
const pokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]}

pokemonsModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou: ', data);
});
```

#### Saída
```js
Buscou:  [ { created: Fri Mar 11 2016 00:38:28 GMT-0300 (BRT),
    types: [],
    height: 12.1,
    defense: 51,
    attack: 51,
    name: 'BeboMon',
    _id: 56e23db4bd5799c830b1b07a }
]
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```js
const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const _schema = {
      attack: Number
    , created: { type: Date, default: Date.now }
    , defense: Number
    , height: Number
    , hp: Number
    , name: String
    , speed: Number
    , types: [String]
};


const pokemonsSchema = new Schema(_schema);
const PokemonsModel = mongoose.model('pokemons', pokemonsSchema);

var nerdMon = {
      name: 'Nerdmon'
    , attack: 49
    , defense: 51
}

var nerdMonObj = new PokemonsModel(nerdMon);

nerdMonObj.save(function (err, data) {
    if (err) return console.log('ERRO: ', err);
    console.log('Sucesso: ', data)
});
```

#### Saída
```js
Sucesso:  { created: Fri Mar 11 2016 01:13:49 GMT-0300 (BRT),
  types: [],
  _id: 56e245fd5e430205354d4a4e,
  defense: 51,
  attack: 49,
  name: 'Nerdmon',
  __v: 0 }
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.
```js
const mongoose = require('mongoose');

// Conexão com o mongo
const dbURI = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(dbURI);

const Schema = mongoose.Schema;

// Definição do Schema
const _schema = {
      attack: Number
    , created: { type: Date, default: Date.now }
    , defense: Number
    , height: Number
    , hp: Number
    , name: String
    , speed: Number
    , types: [String]
};
const PokemonsSchema = new Schema(_schema);
const PokemonsModel = mongoose.model('pokemons', PokemonsSchema);
var query = {attack: {$gt: 50} }

PokemonsModel.remove(query, function (err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Excluiu: ', data);
});
```

#### Saída
```js
Excluiu:  { result: { ok: 1, n: 463 },
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
        _bytesDispatched: 231,
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
