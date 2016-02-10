# Node.js - Aula 06 - Exercício

**user:** [DouglasHennrich](https://github.com/DouglasHennrich)

**autor:** Douglas Hennrich


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

* 1.2.  para Number: `max` e `min`

**Schema Correto**
```js
'use strict';

const _schema = {
      validate_match: { type: String, match: /^a/i }
      , validate_enum: { type: String, enum: ['oi', 'tudo', 'bem', 'sim', 'nao'] }
      , validate_maxlength: { type: String, maxlength: 2 }
      , validate_minlength: { type: String, minlength: 2 }
      , validate_max: { type: Number, max: 5 }
      , validate_min: { type: Number, min: 3 }
    }
  , testSchema = new Schema(_schema)
  , TestModel = mongoose.model('testValidate', testSchema)
  ;

let dataModel = {
      validate_match: 'Aloca'
      , validate_enum: 'bem'
      , validate_maxlength: 'eh'
      , validate_minlength: 'nois que voa bruxao'
      , validate_max: 3
      , validate_min: 10
    }
  , testing = new TestModel(dataModel)
  ;

testing.save(function(err, data){
  if(err) return console.log('Error: ', err);
  console.log('Passou nas validações! :D ', data);
});

// Output do terminal \\
Passou nas validações! :D  { _id: 56ba956cc043d716eee48366,
validate_min: 10,
validate_max: 3,
validate_minlength: 'nois que voa bruxao',
validate_maxlength: 'eh',
validate_enum: 'bem',
validate_match: 'Aloca',
__v: 0 }
```

**Schema Incorreto**
```js
{ [ValidationError: testValidate validation failed]
  message: 'testValidate validation failed',
  name: 'ValidationError',
  errors:
   { validate_min:
      { [ValidatorError: Path `validate_min` (1) is less than minimum allowed value (3).]
        properties: [Object],
        message: 'Path `validate_min` (1) is less than minimum allowed value (3).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'validate_min',
        value: 1 },
     validate_max:
      { [ValidatorError: Path `validate_max` (10) is more than maximum allowed value (5).]
        properties: [Object],
        message: 'Path `validate_max` (10) is more than maximum allowed value (5).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'validate_max',
        value: 10 },
     validate_minlength:
      { [ValidatorError: Path `validate_minlength` (`a`) is shorter than the minimum allowed length (2).]
        properties: [Object],
        message: 'Path `validate_minlength` (`a`) is shorter than the minimum allowed length (2).',
        name: 'ValidatorError',
        kind: 'minlength',
        path: 'validate_minlength',
        value: 'a' },
     validate_maxlength:
      { [ValidatorError: Path `validate_maxlength` (`eh nois que voa`) is longer than the maximum allowed length (2).]
        properties: [Object],
        message: 'Path `validate_maxlength` (`eh nois que voa`) is longer than the maximum allowed length (2).',
        name: 'ValidatorError',
        kind: 'maxlength',
        path: 'validate_maxlength',
        value: 'eh nois que voa' },
     validate_enum:
      { [ValidatorError: `incorreto` is not a valid enum value for path `validate_enum`.]
        properties: [Object],
        message: '`incorreto` is not a valid enum value for path `validate_enum`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'validate_enum',
        value: 'incorreto' },
     validate_match:
      { [ValidatorError: Path `validate_match` is invalid (bbbb).]
        properties: [Object],
        message: 'Path `validate_match` is invalid (bbbb).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'validate_match',
        value: 'bbbb' } } }
```

## Cadastre 3 pokemons **de uma só vez**:
```js
const _schema = {
      name: String
    }
  , testSchema = new Schema(_schema)
  , TestModel = mongoose.model('testInsercao', testSchema)
  ;

let dataModel = [
  {
    name: 'Poke-01'
  },
  {
    name: 'Poke-02'
  },
  {
    name: 'Poke-03'
  }
];

TestModel.create(dataModel, function(err, data){
  if(err) return console.log('Error: ', err);
  console.log('Inseriu todos pokemons! :D ', data);
});

// Output do terminal \\
Inseriu todos pokemons! :D  [ { _id: 56bb44b415f642bdf1182962, name: 'Poke-01', __v: 0 },
{ _id: 56bb44b415f642bdf1182963, name: 'Poke-02', __v: 0 },
{ _id: 56bb44b415f642bdf1182964, name: 'Poke-03', __v: 0 } ]
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```js
const _schema = {
      name: String
    }
  , pokemonSchema = new Schema(_schema)
  , PokemonModel = mongoose.model('Pokemon', pokemonSchema)
  ;

function callback(err, data){
  if(err) return console.log('Error: ', err);
  console.log('Resultado: ', data);
}

PokemonModel.find({}).where({ $and:[ { attack: { $gt: 50 }}, { height: { $gt: 0.5}} ]}).exec(callback);

// Output do terminal \\
Resultado:  [ { moves: [ 'Brasas', 'Encarar' ],
height: 0.6,
attack: 52,
type: 'fire',
description: 'Esse é o cão chupando manga de fofinho',
name: 'Charmander',
_id: 566a25407d0b654cdf58b763 } ]
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```js
const _schema = {
      name: String
      , attack: Number
      , defense: Number
      , attacks: Array
    }
  , pokemonSchema = new Schema(_schema)
  , PokemonModel = mongoose.model('Pokemon', pokemonSchema)
  ;

let query = {
      name: /nerdmon/i
    }
  , mod = {
      $setOnInsert: {
        name: 'Nerdemon'
        , attack: 49
        , defense: 444
        , attacks: ['Raio Virginador', 'Friend Zone']
      }
    }
  , options = {
      upsert: true
    }
  ;

function callback(err, data){
  if(err) return console.log('Error: ', err);
  console.log('Resultado: ', data);
}

PokemonModel.update(query, mod, options, callback);

// Output do terminal \\
Resultado:  { ok: 1,
nModified: 0,
n: 1,
upserted: [ { index: 0, _id: 56bb52ca2df027a2c53e7b8e } ] }

{
  "_id": ObjectId("56bb52ca2df027a2c53e7b8e"),
  "name": "Nerdemon",
  "attack": 49,
  "defense": 444,
  "attacks": [
    "Raio Virginador",
    "Friend Zone"
  ]
}
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.
```js
const _schema = {
      attack: Number
    }
  , pokemonSchema = new Schema(_schema)
  , PokemonModel = mongoose.model('Pokemon', pokemonSchema)
  ;

let query = {
  attack: { $gt: 50 }
};

function callback(err, data){
  if(err) return console.log('Error: ', err);
  console.log('Removeu: ', data);
}

PokemonModel.remove(query, callback);
```

**Resposta do terminal**
```js
Removeu:  { result: { ok: 1, n: 2 },
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
     id: 2,
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
        bytesRead: 56,
        _bytesDispatched: 175,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        read: [Function],
        _consuming: true },
     writeStream: null,
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null } }
```
