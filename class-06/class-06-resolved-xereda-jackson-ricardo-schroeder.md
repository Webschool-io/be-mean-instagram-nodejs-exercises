# Node.js - Aula 06 - Exercício

**user:** [xereda](http://github.com/xereda)

**autor:** Jackson Ricardo Schroeder

**data:** 1465935383915


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

* 1.2.  para Number: `max` e `min`

### Definção do _schema_ com validações

```js

// validacao do formato de email - validate
const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

// regex para verificar se a imagem possui extensao .jpg (validacao match)
const matchFoto = [ /\.jpg$/, "A imagem não possui extensão .jpg ({VALUE})" ];

// regex para verificar se foi informado apenas numeros no telefone (validacao match)
const matchTelefone = [ /^[0-9]*$/, "Informe apenas números para o telefone" ];

const Schema = mongoose.Schema;

// definacao do esquema com as validacoes
const _schema = {
  nome:         { type: String, minlength: 5, maxlength: 40, required: "O nome é obrigatório" },
  idade:        { type: Number, min: 10, max: 110 },
  operadora:    { type: String, enum: ["claro", "vivo", "gvt", "telefonica", "tim"] },
  telefone:     { type: String, match: matchTelefone, minlength: 8, maxlength: 12, required: "Telefone é obrigatório" },
  foto:         { type: String, match: matchFoto },
  email:        { type: String, required: "Email é obrigatório", validate: [validateEmail, "Informe um e-mai válido!"] }
};

```

### Script completo para simular a inserção de um objeto de forma _INCORRETA_

```js

"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/agenda";
mongoose.connect(dbURI);

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const matchFoto = [ /\.jpg$/, "A imagem não possui extensão .jpg ({VALUE})" ];
const matchTelefone = [ /^[0-9]*$/, "Informe apenas números para o telefone" ];

const Schema = mongoose.Schema;
const _schema = {
  nome:         { type: String, minlength: 5, maxlength: 40, required: "O nome é obrigatório" },
  idade:        { type: Number, min: 10, max: 110 },
  operadora:    { type: String, enum: ["claro", "vivo", "gvt", "telefonica", "tim"] },
  telefone:     { type: String, match: matchTelefone, minlength: 8, maxlength: 12, required: "Telefone é obrigatório" },
  foto:         { type: String, match: matchFoto },
  email:        { type: String, required: "Email é obrigatório", validate: [validateEmail, "Informe um e-mai válido!"] }
};

const ContatoSchema = new Schema(_schema);
const Contatos = mongoose.model("contatos", ContatoSchema);
const dados = {
  nome: "Fulano da Silva",
  idade: 77,
  operadora: "vivo",
  telefone: "4799999999",
  foto: "imagem.gif",
  email: "fulano_da_silva@gmail.com"
};

Contatos.create(dados, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Salvou: ", data);
});

```

####  Retorno - _ERRO_

```

ERRO:  { ValidationError: contatos validation failed
    at MongooseError.ValidationError (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/error/validation.js:22:11)
    at model.Document.invalidate (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/document.js:1399:32)
    at /Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/document.js:1275:17
    at validate (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:701:7)
    at /Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
    at Array.forEach (native)
    at SchemaString.SchemaType.doValidate (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
    at /Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
    at process._tickCallback (internal/process/next_tick.js:98:9)
    at Function.Module.runMain (module.js:577:11)
    at startup (node.js:160:18)
    at node.js:449:3
  message: 'contatos validation failed',
  name: 'ValidationError',
  errors:
   { foto:
      { ValidatorError: A imagem não possui extensão .jpg (imagem.gif)
          at MongooseError.ValidatorError (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/error/validator.js:24:11)
          at validate (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:700:13)
          at /Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:732:9
          at Array.forEach (native)
          at SchemaString.SchemaType.doValidate (/Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/schematype.js:706:19)
          at /Users/xereda/Sites/bemean/nodejs/aula06/mongoose-pokemons/node_modules/mongoose/lib/document.js:1273:9
          at _combinedTickCallback (internal/process/next_tick.js:67:7)
          at process._tickCallback (internal/process/next_tick.js:98:9)
          at Function.Module.runMain (module.js:577:11)
          at startup (node.js:160:18)
          at node.js:449:3
        message: 'A imagem não possui extensão .jpg (imagem.gif)',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'regexp',
        path: 'foto',
        value: 'imagem.gif' } } }

```

### Script completo para simular a inserção de um objeto de forma _CORRETA_

```js

"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/agenda";
mongoose.connect(dbURI);

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
const matchFoto = [ /\.jpg$/, "A imagem não possui extensão .jpg ({VALUE})" ];
const matchTelefone = [ /^[0-9]*$/, "Informe apenas números para o telefone" ];

const Schema = mongoose.Schema;
const _schema = {
  nome:         { type: String, minlength: 5, maxlength: 40, required: "O nome é obrigatório" },
  idade:        { type: Number, min: 10, max: 110 },
  operadora:    { type: String, enum: ["claro", "vivo", "gvt", "telefonica", "tim"] },
  telefone:     { type: String, match: matchTelefone, minlength: 8, maxlength: 12, required: "Telefone é obrigatório" },
  foto:         { type: String, match: matchFoto },
  email:        { type: String, required: "Email é obrigatório", validate: [validateEmail, "Informe um e-mai válido!"] }
};

const ContatoSchema = new Schema(_schema);
const Contatos = mongoose.model("contatos", ContatoSchema);
const dados = {
  nome: "Fulano da Silva",
  idade: 77,
  operadora: "vivo",
  telefone: "4799999999",
  foto: "imagem.jpg",
  email: "fulano_da_silva@gmail.com"
};

Contatos.create(dados, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Salvou: ", data);
});

```

### Retorno do script acima

```js

Salvou:  { _id: 5760ded5dcce1fd533e829bb,
  email: 'fulano_da_silva@gmail.com',
  foto: 'imagem.jpg',
  telefone: '4799999999',
  operadora: 'vivo',
  idade: 77,
  nome: 'Fulano da Silva',
  __v: 0 }

```

## Cadastre 3 pokemons **de uma só vez**:

```js
"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/be-mean-instagram";
mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    "attack": Number,
    "created": Date,
    "defense": Number,
    "height": String,
    "name": String,
    "speed": Number,
    "types": [String]
  };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model("pokemons", PokemonSchema);
const data = [
  {
    "attack": 77,
    "created": new Date(),
    "defense": 77,
    "height": "77",
    "name": "Pokemon Custom 01",
    "speed": 77,
    "types": ["water"]
  },
  {
    "attack": 88,
    "created": new Date(),
    "defense": 88,
    "height": "88",
    "name": "Pokemon Custom 02",
    "speed": 88,
    "types": ["water"]
  },
  {
    "attack": 99,
    "created": new Date(),
    "defense": 99,
    "height": "99",
    "name": "Pokemon Custom 03",
    "speed": 99,
    "types": ["water"]
  }
];

Pokemon.create(data, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Criou os pokemons: ", data);
});


```

### Resultado:

```js

db.pokemons.find({ name: /pokemon custom /i });
{
  "_id": ObjectId("5760d231a42f06db31ca1071"),
  "attack": 77,
  "created": ISODate("2016-06-15T03:57:37.756Z"),
  "defense": 77,
  "height": "77",
  "name": "Pokemon Custom 01",
  "speed": 77,
  "types": [
    "water"
  ],
  "__v": 0
}
{
  "_id": ObjectId("5760d231a42f06db31ca1072"),
  "attack": 88,
  "created": ISODate("2016-06-15T03:57:37.756Z"),
  "defense": 88,
  "height": "88",
  "name": "Pokemon Custom 02",
  "speed": 88,
  "types": [
    "water"
  ],
  "__v": 0
}
{
  "_id": ObjectId("5760d231a42f06db31ca1073"),
  "attack": 99,
  "created": ISODate("2016-06-15T03:57:37.756Z"),
  "defense": 99,
  "height": "99",
  "name": "Pokemon Custom 03",
  "speed": 99,
  "types": [
    "water"
  ],
  "__v": 0
}
Fetched 3 record(s) in 3ms

```

## Busque **todos** os Pokemons com `attack > 90` e `speed > 70`:

### Teste no console do MongoDB

```

// todos os pokemons
db.pokemons.count();
613

// definicao do filtro
var query = { attack: { $gt:180 }, speed: { $gt: 70 } };

// retorna a quantidade apos aplicacao do filtro
db.pokemons.count(query);
2

```

### Teste com o nodeJS - _SCRIPT_

```js

"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/be-mean-instagram";
mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {};
const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model("pokemons", pokemonSchema);
const query = {attack: { $gt: 180 }, speed: { $gt: 70 } };

PokemonModel.find(query, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  return console.log("Buscou: ", data);
});

```

### Teste com o nodeJS - _RESULTADO_

```js

[nodemon] starting `node aula06_03.js`
Buscou:  [ { types: [ 'fighting', 'psychic' ],
    speed: 130,
    name: 'Mewtwo-mega-x',
    hp: 106,
    height: '0',
    defense: 100,
    created: '2013-11-03T15:05:42.554794',
    attack: 190,
    _id: 564b1de525337263280d06a2 },
  { types: [ 'fighting', 'bug' ],
    speed: 75,
    name: 'Heracross-mega',
    hp: 80,
    height: '0',
    defense: 115,
    created: '2013-11-03T15:05:42.561123',
    attack: 185,
    _id: 564b1de525337263280d06a6 } ]

```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

### Confirmando no console do MongoDB que não há o Nerdmon já inserido

```

var query = { name: /Nerdmon/ };
db.pokemons.find(query);
Fetched 0 record(s) in 1ms

```

### Script

```js

"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/be-mean-instagram";
mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    "attack": Number,
    "created": Date,
    "defense": Number,
    "height": String,
    "name": String,
    "speed": Number,
    "types": [String]
  };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model("pokemons", PokemonSchema);
const query = { name: /Nerdmon/ };
const mod = {
  $setOnInsert: {
    "name": "Nerdmon",
    "attack": 49,
    "created": new Date(),
    "defense": 80,
    "height": "56",
    "speed": 99,
    "types": ["water", "flash", "ghost"] }
  };
  const options = {upsert: true};

Pokemon.update(query, mod, options, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Criou o Nerdmon com upsert: ", data);
});

```

### Resultado da execução do script no nodeJS

```

Criou o Nerdmon com upsert:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 5760db14ec918dcbc3f73da7 } ] }  

```

### Consulta no console do MongoDB:

```js

var query = { name: /Nerdmon/ };
db.pokemons.find(query);
{
  "_id": ObjectId("5760db14ec918dcbc3f73da7"),
  "name": "Nerdmon",
  "attack": 49,
  "created": ISODate("2016-06-15T04:35:32.133Z"),
  "defense": 80,
  "height": "56",
  "speed": 99,
  "types": [
    "water",
    "flash",
    "ghost"
  ]
}
Fetched 1 record(s) in 2ms

```

## Remova **todos** os Pokemons com `attack` **acima de 50**.

### Verifica no console do MongoDB a quantidade total de pokemons com attack acima de 50 antes da exclusão

```
var query = { attack: { $gt: 50 } };
db.pokemons.count(query);
465

```

### Script

```js

"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/be-mean-instagram";
mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {};
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model("pokemons", PokemonSchema);
const query = { attack: { $gt: 50 } };

Pokemon.remove(query, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Removeu os pokemons com ataque acima de 50: ", data);
});

```

### Resultado  

```

Removeu os pokemons com ataque acima de 50:  { result: { ok: 1, n: 465 },
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

### Verifica no console do MongoDB se realmente os pokemons foram removidos

```

var query = { attack: { $gt: 50 } };
db.pokemons.count(query);
0

```
