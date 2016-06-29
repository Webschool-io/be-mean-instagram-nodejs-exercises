# Node.js - Aula 06 - Exercício
**User:** [gkal19](https://github.com/gkal19)
**Autor:** Gabriel Kalani
**Data:** 1465408594
## Índice

##### [Exercício-01](#exercicio-01)

* [Schema Correto](#schema-correto)
* [Schema Incorreto](#schema-incorreto)

<br>

##### [Exercício-02](#exercicio-02)
##### [Exercício-03](#exercicio-03)
##### [Exercício-04](#exercicio-04)
##### [Exercício-05](#exercicio-05)
##### [Resumo da Aula](#resumo-da-aula)
<br>
> A organização de códigos utilizadas nas aulas de Node.js utilizando `app.js` e `config.js` será usada nos exercícios daqui em diante.

## Resumo da Aula
=============

Ao termino dessas aulas pude chegar a concluir que:
<br>
Utilizado na programação com NodeJS, o Mongoose é quem será o responsável por gerenciar schemas do nosso banco de dados. É uma ferramenta do MongoDB para modelagem de objetos projetados para trabalhar em um ambiente assíncrono. Para definir uma conexão é necessário utilizaro `mongoose.connect` e caso para a criação de conexões adicionais é simples utilizando o `mongoose.createConnection`.

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meu-banco-de-dados');
```

E ele possue 4 tipos de eventos:
- error: quando acontece um erro
- connected: quando conectamos com o MongoDb
- open: quando a conexão foi aberta com o MongoDb
- disconnected: quando o MongoDb é desconectado da nossa aplicação
 
```js
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {  
  console.log('Mongoose default connection is open');
});
```

Por último para fechar a conexão usaremos o `process.on` com o evento `SIGINIT`

```js
process.on('SIGINT', function() {  
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
```

## Exercicio-01
=============

> Crie um schema com cada tipo explicado inserindo tanto um objeto correto como um objeto que desencadeie erros de validação padrão criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`
* 1.2.  para Number: `max` e `min`

## Schema-correto

```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {type: String, match: /^(\D)*$/g},
  password: {type: String, minlength: 8},
  description: {type: String, maxlength: 20},
  type: {type: String, enum: ['Water', 'Fire', 'Stone', 'Bug', 'People']},
  attack: {type: Number, min: 30},
  defense: {type: Number, max: 70},
  hasSpecial: {type: Boolean, required: true},
  skills: [String],
  created_at: {type: Date, default: Date.now},
  relatedTo: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
});

const PokemonModel = mongoose.model('pokemons', pokemonSchema);

let poke = new PokemonModel({
  name: 'Suissa',
  password: 'gatinhoslindosefos',
  description: 'Pokemon do KCT',
  type: 'People',
  attack: 100,
  defense: 45,
  hasSpecial: true,
  skills: ['js','ensinar', 'fumar']
});

poke.validate((err, data) => {
  if (err) return console.log(err);
  console.log('Objeto validado com sucesso');
});
```
Resultado:

```bash
{}
Objeto validado com sucesso
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
```

## Schema-Incorreto

```js
let poke = new PokemonModel({
  name: 'Suissa',
  password: 'gatinhoslindosefos',
  description: 'um pokémon que ama seus amigos e, bla bla bla bla',
  type: 'Adorador de Gatos',
  attack: 10,
  defense: 100,
  skills: true
});
```
Resultado:

```js
{}
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
      { [ValidatorError: `Adorador de Gatos` is not a valid enum value for path `type`.]
        message: '`Adorador de Gatos` is not a valid enum value for path `type`.',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'enum',
        path: 'type',
        value: 'Adorador de Gatos' },
     description: 
      { [ValidatorError: Path `description` (`um pokémon que ama seus amigos e, bla bla bla bla`) is longer than the maximum allowed length (20).]
        message: 'Path `description` (`um pokémon que ama seus amigos e, bla bla bla bla`) is longer than the maximum allowed length (20).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'maxlength',
        path: 'description',
        value: 'um pokémon que ama seus amigos e, bla bla bla bla' } } }
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
```
## Exercicio-02
=============

> Cadastre 3 pokemons **de uma só vez**:

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
    name: 'Suissa corretor de imoveis',
    attack: 60,
    defense: 50,
    hp: 200,
    speed: 30,
    height: '1',
    types: ['corretor', 'imoveis']
  }),
  new PokemonModel({
    name: 'Suissa filosofo',
    attack: 100,
    defense: 30,
    hp: 100,
    speed: 50,
    height: '0.7',
    types: ['filosofo','loucao']
  }),
  new PokemonModel({
    name: 'Suissa faz nada',
    attack: 47,
    defense: 33,
    hp: 50,
    speed: 30,
    height: '3',
    types: ['vagabundo','preguicoso']
  }),
];

PokemonModel.create(pokes, (err, data) => {
  if (err) return console.log('Erro detectado: ', err);
  console.log('Inserido: ', data);
});

module.export = PokemonModel;
```

Resultado:

```shell
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
Inserido:  [ { types: [ 'corretor', 'imoveis' ],
    created: Wed Jun 08 2016 19:59:10 GMT+0000 (UTC),
    name: 'Suissa corretor de imoveis',
    attack: 60,
    defense: 50,
    hp: 200,
    speed: 30,
    height: '1',
    _id: 5758790e5fe2e3730dbeeb16,
    __v: 0 },
  { types: [ 'filosofo', 'loucao' ],
    created: Wed Jun 08 2016 19:59:10 GMT+0000 (UTC),
    name: 'Suissa filosofo',
    attack: 100,
    defense: 30,
    hp: 100,
    speed: 50,
    height: '0.7',
    _id: 5758790e5fe2e3730dbeeb17,
    __v: 0 },
  { types: [ 'vagabundo', 'preguicoso' ],
    created: Wed Jun 08 2016 19:59:10 GMT+0000 (UTC),
    name: 'Suissa faz nada',
    attack: 47,
    defense: 33,
    hp: 50,
    speed: 30,
    height: '3',
    _id: 5758790e5fe2e3730dbeeb18,
    __v: 0 } ]
```

## Exercicio-03
=============

> Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

```js
let query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]};

PokemonModel.find(query, (err, data) => {
  if (err) return console.log('Erro detectado: ', err);
  console.log('Foi retornado: ', data.length);
});

module.export = PokemonModel;
```

NOTA: Foi retornado 4 pokémons

## Exercicio-04
=============

> Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

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
  types: ['nerd', 'foda'],
};
```

Resultado:

```shell
{ ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 575879db3a2ac61c40d0c87e } ] }
```

## Exercicio-05
=============

> Remova **todos** os Pokemons com `attack` **acima de 50**.

```js
PokemonModel.remove({attack: {$gt: 50}}, (err, data) => {
  if (err) return console.log('ERROR: ', err);
  console.log(data);
});
```

Resultado:

````shell
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
{ result: { ok: 1, n: 11 },
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
