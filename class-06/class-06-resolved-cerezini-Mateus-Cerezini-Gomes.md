# Node.js - Aula 06 - Exercício

**User:** [Cerezini](https://github.com/Cerezini)

**Autor:** Mateus Cerezini Gomes


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`
* 1.2.  para Number: `max` e `min`

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {type: String, match: /^(\D)*$/g},
  password: {type: String, minlength: 8},
  description: {type: String, maxlength: 20},
  type: {type: String, enum: ['Water', 'Fire', 'Stone', 'Bug']},
  attack: {type: Number, min: 30},
  defense: {type: Number, max: 70},
  hasSpecial: {type: Boolean, required: true},
  skills: [String],
  created_at: {type: Date, default: Date.now},
  relatedTo: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
});

const PokemonModel = mongoose.model('pokemons', pokemonSchema);

let poke = new PokemonModel({
  name: 'PotatoMon',
  password: '12345566',
  description: 'A good pokemon',
  type: 'Stone',
  attack: 100,
  defense: 45,
  hasSpecial: true,
  skills: ['throw potatos','potato soup', 'calzone']
});

poke.validate((err, data) => {
  if (err) return console.log(err);
  console.log('Objeto válido');
});
```
Resultado:

```bash
Objeto válido
```

Mudando o objeto `poke`, temos:

```js
let poke = new PokemonModel({
  name: '666PotatoMon',
  password: '1111',
  description: 'A good pokemon that likes to throw potatos in all of its friends, bla bla bla bla',
  type: 'Vegetable',
  attack: 10,
  defense: 100,
  skills: true
});
```
Resultado:

```js
{ [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { hasSpecial:
      { [ValidatorError: Path `hasSpecial` is required.]
        message: 'Path `hasSpecial` is required.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'required',
        path: 'hasSpecial',
        value: undefined },
     defense:
      { [ValidatorError: Path `defense` (100) is more than maximum allowed value (70).]
        message: 'Path `defense` (100) is more than maximum allowed value (70).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'max',
        path: 'defense',
        value: 100 },
     attack:
      { [ValidatorError: Path `attack` (10) is less than minimum allowed value (30).]
        message: 'Path `attack` (10) is less than minimum allowed value (30).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'min',
        path: 'attack',
        value: 10 },
     type:
      { [ValidatorError: `Vegetable` is not a valid enum value for path `type`.]
        message: '`Vegetable` is not a valid enum value for path `type`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'type',
        value: 'Vegetable' },
     description:
      { [ValidatorError: Path `description` (`A good pokemon that likes to throw potatos in all of its friends, bla bla bla bla`) is longer than the maximum allowed length (20).]
        message: 'Path `description` (`A good pokemon that likes to throw potatos in all of its friends, bla bla bla bla`) is longer than the maximum allowed length (20).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'maxlength',
        path: 'description',
        value: 'A good pokemon that likes to throw potatos in all of its friends, bla bla bla bla' },
     password:
      { [ValidatorError: Path `password` (`1111`) is shorter than the minimum allowed length (8).]
        message: 'Path `password` (`1111`) is shorter than the minimum allowed length (8).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'minlength',
        path: 'password',
        value: '1111' },
     name:
      { [ValidatorError: Path `name` is invalid (666PotatoMon).]
        message: 'Path `name` is invalid (666PotatoMon).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'regexp',
        path: 'name',
        value: '666PotatoMon' }
  }
}
```

## Cadastre 3 pokemons **de uma só vez**:

A mesma organização de códigos da aula será utilizada, com os arquivos `app.js` e `config.js`. O código a seguir com a criação do `PokemonModel` será omitido nas atividades seguintes porque não será alterado.

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: String,
  attack: Number,
  defense: Number,
  hp: Number,
  speed: Number,
  height: String,
  types: [String],
  created: {type: Date, default: Date.now}
});

const PokemonModel = mongoose.model('pokemons', pokemonSchema);

let pokes = [
  new PokemonModel({
    name: 'poke1',
    attack: 50,
    defense: 50,
    hp: 200,
    speed: 30,
    height: '1',
    types: ['electric', 'flyer']
  }),
  new PokemonModel({
    name: 'poke2',
    attack: 100,
    defense: 30,
    hp: 100,
    speed: 50,
    height: '0.5',
    types: ['fire']
  }),
  new PokemonModel({
    name: 'poke3',
    attack: 47,
    defense: 33,
    hp: 50,
    speed: 30,
    height: '3',
    types: ['insect']
  }),
];

PokemonModel.create(pokes, (err, data) => {
  if (err) return console.log('ERROR: ', err);
  console.log('INSERTED: ', data);
});

module.export = PokemonModel;
```

Resultado:

```shell
Mongoose default connection open to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
INSERTED:  [ { types: [ 'electric', 'flyer' ],
    created: Sat Mar 26 2016 21:35:32 GMT-0300 (BRT),
    name: 'poke1',
    attack: 50,
    defense: 50,
    hp: 200,
    speed: 30,
    height: '1',
    _id: 56f72ad41be3caff5458b78e,
    __v: 0 },
  { types: [ 'fire' ],
    created: Sat Mar 26 2016 21:35:32 GMT-0300 (BRT),
    name: 'poke2',
    attack: 100,
    defense: 30,
    hp: 100,
    speed: 50,
    height: '0.5',
    _id: 56f72ad41be3caff5458b78f,
    __v: 0 },
  { types: [ 'insect' ],
    created: Sat Mar 26 2016 21:35:32 GMT-0300 (BRT),
    name: 'poke3',
    attack: 47,
    defense: 33,
    hp: 50,
    speed: 30,
    height: '3',
    _id: 56f72ad41be3caff5458b790,
    __v: 0 } ]
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

```js
let query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]};

PokemonModel.find(query, (err, data) => {
  if (err) return console.log('ERROR: ', err);
  console.log('RETURNED: ', data.length);
});

module.export = PokemonModel;
```

Uma parte do resultado, pois o conjunto resultado contém 423 pokemons:

```shell
[{ types: [ 'ground', 'rock' ],
    created: Sun Nov 03 2013 13:05:42 GMT-0200 (BRST),
    speed: 40,
    name: 'Rhyperior',
    hp: 115,
    height: '24',
    defense: 130,
    attack: 140,
    _id: 564b1dcb25337263280d059a },
  { types: [ 'fighting' ],
    created: Sun Nov 03 2013 13:05:42 GMT-0200 (BRST),
    speed: 45,
    name: 'Conkeldurr',
    hp: 105,
    height: '14',
    defense: 95,
    attack: 140,
    _id: 564b1dcf25337263280d05b9 },
  { types: [ 'flying', 'rock' ],
    created: Sun Nov 03 2013 13:05:42 GMT-0200 (BRST),
    speed: 110,
    name: 'Archeops',
    hp: 75,
    height: '14',
    defense: 65,
    attack: 140,
    _id: 564b1de225337263280d0684 },
  { types: [ 'ground' ],
    created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    speed: 90,
    name: 'Groudon',
    hp: 100,
    height: '35',
    defense: 140,
    attack: 150,
    _id: 564b1dbf25337263280d052a },
  { types: [ 'flying', 'dragon' ],
    created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    speed: 95,
    name: 'Rayquaza',
    hp: 105,
    height: '70',
    defense: 90,
    attack: 150,
    _id: 564b1dc625337263280d056f },
  { types: [ 'normal' ],
    created: Sun Nov 03 2013 13:05:41 GMT-0200 (BRST),
    speed: 100,
    name: 'Slaking',
    hp: 150,
    height: '20',
    defense: 100,
    attack: 160,
    _id: 564b1dce25337263280d05b6 },
  { types: [ 'normal' ],
    created: Sun Nov 03 2013 13:05:42 GMT-0200 (BRST),
    speed: 100,
    name: 'Regigigas',
    hp: 110,
    height: '37',
    defense: 110,
    attack: 160,
    _id: 564b1de125337263280d0677 },
  { types: [ 'rock' ],
    created: Sun Nov 03 2013 13:05:42 GMT-0200 (BRST),
    speed: 58,
    name: 'Rampardos',
    hp: 97,
    height: '16',
    defense: 60,
    attack: 165,
    _id: 564b1dc125337263280d0540 }
]

```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

```js
let query = {name: 'Nerdmon'};
let options = {upsert: true};
let mod = {
  name: 'Nerdmon',
  attack: 49,
  defense: 45,
  hp: 100,
  speed: 30,
  height: '4',
  types: ['nerd', 'electric'],
};

PokemonModel.update(query, mod, options, (err, data) => {
  if (err) return console.log('ERROR: ', err);
  console.log(data);
});

module.export = PokemonModel;
```

Resultado:

```shell
{ ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 56f746a2387837286197b269 } ] }
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.

```js
PokemonModel.remove({attack: {$gt: 50}}, (err, data) => {
  if (err) return console.log('ERROR: ', err);
  console.log(data);
});
```

Resultado:

```shell
{ result: { ok: 1, n: 463 },
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
       _bytesDispatched: 231,
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
