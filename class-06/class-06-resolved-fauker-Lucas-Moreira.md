# Node.js - Aula 06 - Exercício

**user:** [fauker](http://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

* 1.2.  para Number: `max` e `min`

**Objeto com erros de validação**:

```
require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
  nome: {type: String, minlength: 5},
  sobrenome: {type: String, maxlength: 5},
  tecnologias: {type: String, enum: ['Node.js', 'MongoDB', 'Express', 'Angular.js']},
  telefone: {type: String, match: /^[1-9]/},
  idade: {type: Number, max: 2},
  amigos: {type: Number, min: 5}
};

var pessoaSchema = new Schema(_schema);
var PessoaModel = mongoose.model('Pessoa', pessoaSchema);
var dataModel = {
  nome: 'José',
  sobrenome: 'Moreira',
  tecnologias: 'php',
  telefone: 'a3333-3333',
  idade: 10,
  amigos: 2
};

var Jose = new PessoaModel(dataModel);
Jose.save(function(err, data) {
  if (err) return console.log('DEU PAU: ' + err);
  return console.log('Salvou a pessoa: ' + data);
});

//resultado
DEU PAU: ValidationError: Path `amigos` (2) is less than minimum allowed value (5)., Path `idade` (10) is more than maximum allowed value (2)., Path `telefone` is invalid (a3333-3333)., `php` is not a valid enum value for path `tecnologias`., Path `sobrenome` (`Moreira`) is longer than the maximum allowed length (5)., Path `nome` (`José`) is shorter than the minimum allowed length (5).
```

**Inserindo um objeto correto**:

```
require('./config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
  nome: {type: String, minlength: 5},
  sobrenome: {type: String, maxlength: 5},
  tecnologias: {type: String, enum: ['Node.js', 'MongoDB', 'Express', 'Angular.js']},
  telefone: {type: String, match: /^[1-9]/},
  idade: {type: Number, max: 2},
  amigos: {type: Number, min: 5}
};

var pessoaSchema = new Schema(_schema);
var PessoaModel = mongoose.model('Pessoa', pessoaSchema);
var dataModel = {
  nome: 'Francisco',
  sobrenome: 'Silva',
  tecnologias: 'Node.js',
  telefone: '3333-3333',
  idade: 1,
  amigos: 6
};

var Jose = new PessoaModel(dataModel);
Jose.save(function(err, data) {
  if (err) return console.log('DEU PAU: ' + err);
  return console.log('Salvou a pessoa: ' + data);
});

//resultado
Salvou a pessoa: { _id: 5729623d0c29593454bd65f7,
  amigos: 6,
  idade: 1,
  telefone: '3333-3333',
  tecnologias: 'Node.js',
  sobrenome: 'Silva',
  nome: 'Francisco',
  __v: 0 }
```

## Cadastre 3 pokemons **de uma só vez**:

```
require('./config');

var mongoose = require('mongoose');
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
var PokemonModel = mongoose.model('Pokemon', pokemonSchema);
var dataModel = [{
  name: 'LucasMon',
  description: 'Um pokemon muito bolado',
  type: 'fogo',
  attack: 100,
  defense: 50,
  height: 1
}, {
  name: 'AmigoMon',
  description: 'Um brother',
  type: 'agua',
  attack: 200,
  defense: 10,
  height: 0.4
}, {
  name: 'NodeMon',
  description: 'Sinixtro',
  type: 'fogo',
  attack: 50,
  defense: 50,
  height: 20
}];

PokemonModel.create(dataModel, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemons Inseridos: ', data);
});
```

Resultado:

```
Pokemons Inseridos:  [ { _id: 572974fec3c044ae57196a32,
    height: 1,
    defense: 50,
    attack: 100,
    type: 'fogo',
    description: 'Um pokemon muito bolado',
    name: 'LucasMon',
    __v: 0 },
  { _id: 572974fec3c044ae57196a33,
    height: 0.4,
    defense: 10,
    attack: 200,
    type: 'agua',
    description: 'Um brother',
    name: 'AmigoMon',
    __v: 0 },
  { _id: 572974fec3c044ae57196a34,
    height: 20,
    defense: 50,
    attack: 50,
    type: 'fogo',
    description: 'Sinixtro',
    name: 'NodeMon',
    __v: 0 }]
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

```
require('./config');
var mongoose = require('mongoose');
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
var PokemonModel = mongoose.model('Pokemon', pokemonSchema);
var query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});
```

Resultado:

```
Buscou: [ { __v: 0,
    height: 1,
    defense: 50,
    attack: 100,
    type: 'fogo',
    description: 'Um pokemon muito bolado',
    name: 'LucasMon',
    _id: 572974fec3c044ae57196a32 } ]

 lucasmore
```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

Resultado:

```
require('./config');

var mongoose = require('mongoose');
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
var PokemonModel = mongoose.model('Pokemon', pokemonSchema);

var query = {name: 'Nerdmon'};
var mod = {
  $setOnInsert: {
    name: 'Nerdmon',
    description: 'Pokemon mt nerd',
    type: 'fogo',
    attack: 49,
    defense: 50,
    height: 100
  }
};
var options = {upsert: true};

PokemonModel.update(query, mod, options, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemon Inserido com Upsert: ', data);
});
```

```
Pokemon Inserido com Upsert:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 57297a013b4cb9a31a868f50 } ] }
```

Consulta no MongoDB:

```
var query = {name: 'Nerdmon'}

db.pokemons.find(query)
{
  "_id": ObjectId("57297a013b4cb9a31a868f50"),
    "name": "Nerdmon",
    "description": "Pokemon mt nerd",
    "type": "fogo",
    "attack": 49,
    "defense": 50,
    "height": 100
}
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.

```
require('./config');

var mongoose = require('mongoose');
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
var PokemonModel = mongoose.model('Pokemon', pokemonSchema);
var query = {attack: {$gt: 50}};

PokemonModel.remove(query, function(err, data) {
  if (err) return console.log(err);
  console.log('Pokemon Excluídos: ', data);
});
```

Resultado:

```
Pokemon Excluídos:  { result: { ok: 1, n: 2 },
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
