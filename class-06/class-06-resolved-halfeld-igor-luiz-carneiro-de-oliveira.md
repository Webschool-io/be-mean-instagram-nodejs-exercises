# NodeJS - Aula 06 - Exercício
**Autor**: Igor luíz  
**Github**: [Halfeld](https://github.com/Halfeld)  
**Data**: 1458017385252

## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desenvadeie erros de validação padrão, crir especificamente:
1. Para string: `enum`, `match`, `maxlength` e `minlength`
2. Para number: `max` e `min`

#### Dando objeto correto
```js
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    pessoa: {type: String, match: /^[a-z]/i },
    sexo: {type: String, enum: ['Masculino', 'Feminino'] },
    senha: {type: String, maxlength: 20, minlength: 6, match: /^\w./ },
    idade: {type: Number, max: 115 },
    idiomas: {type: Number, min: 1}
};


const pessoaSchema = new Schema(_schema);

const PessoaModel = mongoose.model('pessoas', pessoaSchema);

const dados = {
    pessoa: 'Igor Luíz',
    sexo: 'Masculino',
    senha: 'helloworld',
    idade: 17,
    idiomas: 2
};

const pessoa1 = new PessoaModel(dados);

pessoa1.save((err, data) => {
    if (err) return console.log('ERROR: ', err);
    console.log('Inseriu: ', data);
});

module.exports = pessoaSchema;

// Saída do terminal

Mongoose esta conectado em: mongodb://localhost/teste
Mongoose esta com a conexão aberta
Inseriu:  { _id: 56e780414fad665c02a5272b,
  idiomas: 2,
  idade: 17,
  senha: 'helloworld',
  sexo: 'Masculino',
  pessoa: 'Igor Luíz',
  __v: 0 }

```

#### Dando objeto com erro na validação

```js
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    pessoa: {type: String, match: /^[a-z]/i },
    sexo: {type: String, enum: ['Masculino', 'Feminino'] },
    senha: {type: String, maxlength: 20, minlength: 6, match: /^\w./ },
    idade: {type: Number, max: 115 },
    idiomas: {type: Number, min: 1}
};


const pessoaSchema = new Schema(_schema);

const PessoaModel = mongoose.model('pessoas', pessoaSchema);

const dados = {
    pessoa: '7Igor Luíz', // Nome começando com número
    sexo: 'alien', // Sem ser uma opção
    senha: 'hello', // Menos de 6 caracteres
    idade: 200, // Idade maior que o limite
    idiomas: 0 // Sem idioma
};

const pessoa1 = new PessoaModel(dados);

pessoa1.save((err, data) => {
    if (err) return console.log('ERROR: ', err);
    console.log('Inseriu: ', data);
});

module.exports = pessoaSchema;

// Saída do terminal

ERROR:  { [ValidationError: pessoas validation failed]
  message: 'pessoas validation failed',
  name: 'ValidationError',
  errors: 
   { idiomas: 
      { [ValidatorError: Path `idiomas` (0) is less than minimum allowed value (1).]
        properties: [Object],
        message: 'Path `idiomas` (0) is less than minimum allowed value (1).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'idiomas',
        value: 0 },
     idade: 
      { [ValidatorError: Path `idade` (200) is more than maximum allowed value (115).]
        properties: [Object],
        message: 'Path `idade` (200) is more than maximum allowed value (115).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'idade',
        value: 200 },
     senha: 
      { [ValidatorError: Path `senha` (`hello`) is shorter than the minimum allowed length (6).]
        properties: [Object],
        message: 'Path `senha` (`hello`) is shorter than the minimum allowed length (6).',
        name: 'ValidatorError',
        kind: 'minlength',
        path: 'senha',
        value: 'hello' },
     sexo: 
      { [ValidatorError: `alien` is not a valid enum value for path `sexo`.]
        properties: [Object],
        message: '`alien` is not a valid enum value for path `sexo`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'sexo',
        value: 'alien' },
     pessoa: 
      { [ValidatorError: Path `pessoa` is invalid (7Igor Luíz).]
        properties: [Object],
        message: 'Path `pessoa` is invalid (7Igor Luíz).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'pessoa',
        value: '7Igor Luíz' } } }
Mongoose esta conectado em: mongodb://localhost/teste
Mongoose esta com a conexão aberta
```



## Cadrastre 3 pokemons de uma só vez. (pesquisar)



```js
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: String,
    type: String
};

const poke = [
    { name: 'pokemon_1', type: 'tipo_1' },
    { name: 'pokemon_2', type: 'tipo_2' },
    { name: 'pokemon_3', type: 'tipo_3' }
];


const pokeSchema = new Schema(_schema);

const PokeModel = mongoose.model('intopoke', pokeSchema);


PokeModel.create(poke, (err, data) => {
    if (err) return console.log('ERROR: ', err);
    console.log('Inseriu isso aí: ', data);
});

// Saída do terminal

Mongoose esta conectado em: mongodb://localhost/teste
Mongoose esta com a conexão aberta
Inseriu isso aí:  [ { _id: 56e78793ac90f4920c99e130,
    type: 'tipo_1',
    name: 'pokemon_1',
    __v: 0 },
  { _id: 56e78793ac90f4920c99e131,
    type: 'tipo_2',
    name: 'pokemon_2',
    __v: 0 },
  { _id: 56e78793ac90f4920c99e132,
    type: 'tipo_3',
    name: 'pokemon_3',
    __v: 0 } ]

```

## Busque todos os Pokemons com `attack > 50` e `height > 0.5`

```js
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    height: Number,
    defense: Number,
    active: Boolean,
    moves: Array
};

const mainSchema = new Schema(_schema);

const FindModel = mongoose.model('pokemons', mainSchema);


const mod = {$and: [ {attack: {$gt: 50}} , {height: {$gt: 0.5}} ]}

FindModel.find(mod, (err, data) => {
    if(err) return console.log('ERROR: ', err);
    console.log('Retornou: ', data);
});

// saída do terminal

Mongoose esta conectado em: mongodb://localhost/be-mean-pokemons
Mongoose esta com a conexão aberta
Retornou:  [ { moves: [ 'investida', 'desvio' ],
    active: false,
    type: 'agua',
    height: 1.6,
    defense: 60,
    attack: 60,
    description: 'pokemon \'Vem monstro!\'',
    name: 'Blastoise',
    _id: 56b1390d21f82f17b072ce50 } ]
```

## Altere, **inserindo**, o pokemon Nerdmon com `attach = 49` e com os valores dos outros campos a sua escolha

```js


'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    height: Number,
    defense: Number,
    active: Boolean,
    moves: Array
};

const pokeSchema = new Schema(_schema);

const PokeModel = mongoose.model('pokemons', pokeSchema);


let query = {name: "Nerdmon"};

let mod = {
    $setOnInsert: {
        name: "Nerdmon",
        attack: 49,
        active: true,
        type: "Lokão"
    }
};

let opts = { upsert: true }

PokeModel.update(query, mod, opts, (err, data) => {
    if (err) return console.log('ERROR: ', err);
    console.log('Inseriu: ', data);
});

// Saída do terminal

Mongoose esta conectado em: mongodb://localhost/be-mean-pokemons
Mongoose esta com a conexão aberta
Inseriu:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 56e7915c3e3f3f320fdf296c } ] }


// Verificando se inseriu no mongo

fedora(mongod-3.0.9) be-mean-pokemons> db.pokemons.find({name: /nerdmon/i})
{
  "_id": ObjectId("56e7915c3e3f3f320fdf296c"),
  "name": "Nerdmon",
  "attack": 49,
  "active": true,
  "type": "Lokão"
}
Fetched 1 record(s) in 1ms
```

## Remova todos os Pokemons com `attack > 40`

> Coloquei 40 para não remover todos os pokemons, o 40 é a média no meu caso

```js


'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    attack: Number
};

const querySchema = new Schema(_schema);

const RemovePoke = mongoose.model('pokemons', querySchema);



RemovePoke.remove({ attack: {$gt: 50} }, (err, data) => {
    if(err) return console.log('ERROR: ', err);
    console.log('Removeu', data);
});

// Saída do terminal

Mongoose esta conectado em: mongodb://localhost/be-mean-pokemons
Mongoose esta com a conexão aberta
Removeu { result: { ok: 1, n: 3 },
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
        _bytesDispatched: 230,
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
