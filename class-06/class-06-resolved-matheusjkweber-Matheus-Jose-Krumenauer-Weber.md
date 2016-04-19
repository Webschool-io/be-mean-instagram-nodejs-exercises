# Node.js - Aula 06 - Exercícios

**User:** [matheusjkweber](https://github.com/matheusjkweber)

**Autor:** Matheus Jose Krumenauer Weber

**Date:** 1457207231956

## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

### Com erros:
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, match: /^S/, minlength: 3, maxlength:10},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 5},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

console.log("Schema created.");

const buf3 = new Buffer('test');

const attacks = {name: "Thundershock", power: 50}
const pokemonModel ={
	name: "pi",
	picture: buf3,
	description: "lalala",
	type: "Fire",
	attak: 120,
	defense: -20,
	heigth: 120,
	gender: "none",
	atacks: attacks,
	other_type: ["leaf"],
	active: 1
}

var model = mongoose.model('pokemons', pokemonSchema);

var poke = new model(pokemonModel);

poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})



module.exports = pokemonSchema;
```
```
Schema created.
ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors: 
   { gender: 
      { [ValidatorError: `none` is not a valid enum value for path `gender`.]
        properties: [Object],
        message: '`none` is not a valid enum value for path `gender`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'gender',
        value: 'none' },
     defense: 
      { [ValidatorError: Path `defense` (-20) is less than minimum allowed value (0).]
        properties: [Object],
        message: 'Path `defense` (-20) is less than minimum allowed value (0).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'defense',
        value: -20 },
     type: 
      { [ValidatorError: Path `type` (`Fire`) is shorter than the minimum allowed length (5).]
        properties: [Object],
        message: 'Path `type` (`Fire`) is shorter than the minimum allowed length (5).',
        name: 'ValidatorError',
        kind: 'minlength',
        path: 'type',
        value: 'Fire' },
     name: 
      { [ValidatorError: Path `name` is invalid (pi).]
        properties: [Object],
        message: 'Path `name` is invalid (pi).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'pi' } } }
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons
Mongoose default connection is open
```

### Sem erros de validação:
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, minlength: 3, maxlength:20},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 3},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

console.log("Schema created.");

const buf3 = new Buffer('test');

const attacks = {name: "Thundershock", power: 50}
const pokemonModel ={
	name: "charmanders",
	picture: buf3,
	description: "Pokemon de fogo lindao.",
	type: "Fire",
	attak: 17,
	defense: 8,
	heigth: 5,
	gender: "male",
	atacks: attacks,
	other_type: ["leaf"],
	active: 1
}

var model = mongoose.model('pokemons', pokemonSchema);

var poke = new model(pokemonModel);

poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})



module.exports = pokemonSchema;
```

```
Schema created.
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons
Mongoose default connection is open
Inseriu:  { create_at: Sat Mar 05 2016 17:17:20 GMT-0300 (BRT),
  other_types: [],
  _id: 56db3ed040db47d213d901eb,
  active: true,
  atacks: { name: 'Thundershock', power: 50 },
  gender: 'male',
  defense: 8,
  type: 'Fire',
  description: 'Pokemon de fogo lindao.',
  picture: 
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 4,
     buffer: <Buffer 74 65 73 74> },
  name: 'charmanders',
  __v: 0 }

```
## Cadastre 3 pokemons de uma só vez. (pesquisar).
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, minlength: 3, maxlength:20},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 3},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

console.log("Schema created.");

const buf3 = new Buffer('test');

const attacks = {name: "Thundershock", power: 50}
const pokemonModel =[ {
	name: "Pikachu",
	picture: buf3,
	description: "Pokemon eletrico lindao.",
	type: "Eletric",
	attak: 20,
	defense: 5,
	heigth: 7,
	gender: "female",
	atacks: attacks,
	other_type: ["rat"],
	active: 1
}, {
	name: "Raichu",
	picture: buf3,
	description: "Pokemon eletrico lindao.",
	type: "Eletric",
	attak: 37,
	defense: 22,
	heigth: 15,
	gender: "female",
	atacks: attacks,
	other_type: ["rat"],
	active: 1
}, {
	name: "Pichu",
	picture: buf3,
	description: "Pokemon eletrico lindao.",
	type: "Eletric",
	attak: 12,
	defense: 5,
	heigth: 3,
	gender: "female",
	atacks: attacks,
	other_type: ["rat"],
	active: 1
}]

var model = mongoose.model('pokemons', pokemonSchema);

pokemonModel.forEach(function(data){
	console.log(data);

	var poke = new model(data);

	poke.save(function (err, data) {
	  if (err) return console.log('ERRO: ', err);
	  console.log('Inseriu: ', data)
	})
});

/*var poke = new model(pokemonModel);

poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})*/



module.exports = pokemonSchema;
```
```
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons
Mongoose default connection is open
Inseriu:  { create_at: Sat Mar 05 2016 17:22:16 GMT-0300 (BRT),
  other_types: [],
  _id: 56db3ff878d92438145403d7,
  active: true,
  atacks: { name: 'Thundershock', power: 50 },
  gender: 'female',
  defense: 5,
  type: 'Eletric',
  description: 'Pokemon eletrico lindao.',
  picture: 
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 4,
     buffer: <Buffer 74 65 73 74> },
  name: 'Pikachu',
  __v: 0 }
Inseriu:  { create_at: Sat Mar 05 2016 17:22:16 GMT-0300 (BRT),
  other_types: [],
  _id: 56db3ff878d92438145403d8,
  active: true,
  atacks: { name: 'Thundershock', power: 50 },
  gender: 'female',
  defense: 22,
  type: 'Eletric',
  description: 'Pokemon eletrico lindao.',
  picture: 
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 4,
     buffer: <Buffer 74 65 73 74> },
  name: 'Raichu',
  __v: 0 }
Inseriu:  { create_at: Sat Mar 05 2016 17:22:16 GMT-0300 (BRT),
  other_types: [],
  _id: 56db3ff878d92438145403d9,
  active: true,
  atacks: { name: 'Thundershock', power: 50 },
  gender: 'female',
  defense: 5,
  type: 'Eletric',
  description: 'Pokemon eletrico lindao.',
  picture: 
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 4,
     buffer: <Buffer 74 65 73 74> },
  name: 'Pichu',
  __v: 0 }

```
## Busque todos os Pokemons com attack > 50 e height > 0.5:
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, minlength: 3, maxlength:20},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 3},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

var model = mongoose.model('pokemons', pokemonSchema);

const query = {attack: {$gt:50}, height: {$gt: 0.5}};

model.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})



module.exports = pokemonSchema;
```
```
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons
Mongoose default connection is open
Inseriu:  [ { create_at: Sat Mar 05 2016 17:25:32 GMT-0300 (BRT),
    other_types: [],
    moves: [ [Object] ],
    height: 5.2,
    attack: 100,
    type: 'fire',
    description: 'Salamandra de fogo evoluida',
    name: 'Charmeleon',
    _id: 56478345771dc8af7806b25f },
  { create_at: Sat Mar 05 2016 17:25:32 GMT-0300 (BRT),
    other_types: [],
    moves: [ [Object] ],
    height: 17,
    attack: 160,
    type: 'fire',
    description: 'Salamandra de fogo evoluida suprema',
    name: 'Charizard',
    _id: 56478346771dc8af7806b260 },
  { create_at: Sat Mar 05 2016 17:25:32 GMT-0300 (BRT),
    other_types: [],
    moves: [ [Object] ],
    height: 5,
    attack: 130,
    type: 'psychic',
    description: 'O senhor supremo do mundo pokemon',
    name: 'Mewtwo',
    _id: 56478348771dc8af7806b261 },
  { create_at: Sat Mar 05 2016 17:25:32 GMT-0300 (BRT),
    other_types: [],
    moves: [ 'patada', 'endurecer', [Object] ],
    height: 0.6,
    attack: 52,
    type: 'fogo',
    description: 'Esse é o cão chupando manga de fofinho',
    name: 'Charmander',
    _id: 564d10f258ed05ea2e341137 } ]
```
## Altere, inserindo, o Pokemon Nerdmon com attack igual a 49 e com os valores dos outros campos a sua escolha.
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, minlength: 3, maxlength:20},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 3},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

console.log("Schema created.");

const buf3 = new Buffer('test');

const attacks = {name: "Thundershock", power: 50}
const pokemonModel ={
	name: "Nerdmon",
	picture: buf3,
	description: "Pokemon de fogo lindao.",
	type: "Fire",
	attak: 49	,
	defense: 8,
	heigth: 5,
	gender: "male",
	atacks: attacks,
	other_type: ["leaf"],
	active: 1
}

var model = mongoose.model('pokemons', pokemonSchema);

const query = {name: /Nerdmon/i}
const mod = {$setOnInsert: pokemonModel}
const options = {upsert: true}

model.update(query, mod, options, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Alterou: ', data)
})



module.exports = pokemonSchema;
```
```
matheus@Math:~/Desktop/Desenvolvimento/workshop-be-mean/nodejs/class6$ node exercicio4.js 
Schema created.
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons
Mongoose default connection is open
Alterou:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 56db4181ca92b6ac012b6cf7 } ] }
```

## Remova todos os Pokemons com attack acima de 50.
```js
require('./config.js');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	name: {type: String, minlength: 3, maxlength:20},
	picture: Buffer,
	description: String,
	type: {type: String, maxlength: 100, minlength: 3},
	attack: { type: Number, min: 0, max: 100 },
	defense: { type: Number, min: 0, max: 100 },
	height: { type: Number, min: 0, max: 100 },
	create_at: {type: Date, default: Date.now},
	gender: {type:String, enum: ['male','female']},
	atacks: Schema.Types.Mixed,
	other_types: [String],
	active: Boolean
};

const pokemonSchema = new Schema(_schema);

var model = mongoose.model('pokemons', pokemonSchema);

const query = {atack: {$gt: 50}}

model.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Removeu: ', data)
})



module.exports = pokemonSchema;
```
```
Removeu:  { result: { ok: 1, n: 0 },
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
        _bytesDispatched: 229,
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

