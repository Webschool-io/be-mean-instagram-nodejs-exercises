# Node.js - Aula 06 - Exercício
**User:** ronal2do     
**Author:** Ronaldo Lima     
**Date:**  1468073529260     

##### [Exercício-01](#crie-um-schema-com-cada-tipo-explicado-inserindo-tanto-um-objeto-correto-como-um-objeto-que-desencadeie-erros-de-valida%C3%A7%C3%A3o-padr%C3%A3o-criar-especificamente)

##### [Exercício-02](#cadastre-3-pokemons-de-uma-s%C3%B3-vez)

##### [Exercício-03](#busque-todos-os-pokemons-com-attack--120-e-speed--70)

##### [Exercício-04](#altere-inserindo-o-pokemon-nerdmon-com-attack-igual-a-49-e-com-os-valores-dos-outros-campos-a-sua-escolha)

##### [Exercício-05](#remova-todos-os-pokemons-com-attack-acima-de-50)


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* Number: possui os validadores de `max` e `min`    
* String: possui os validadores de `enum`, `match`, `maxlength` e `minlength`

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {  
     name: {type: String, match: /^./i }    
  ,  age: {type: Number, min: 15}  
  ,  gender: {type: String, enum: ['M', 'F']}  
  ,  city: {type: String, maxlength: 10}  
  ,  state: {type: String, minlength: 2}  
}  

// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
  name: '2D Lima',  
  age: 28,  
  gender: 'M',  
  city: 'Pallet',  
  state: 'PL'  
}

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;

```

#### Saída

```
Inseriu:  { __v: 0,
  name: '2D Lima',
  age: 28,
  gender: 'M',
  city: 'Pallet',
  state: 'PL',
  _id: 5781ce4a2f3a11730f5f80df }

```

### Dados com falha de validação.

```js

const data = {
  name: '2D Lima',  
  age: 10,  
  gender: 'M',  
  city: 'Pallet',  
  state: 'P'  
}

```

### Saída

```js

ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors: 
   { state: 
      { [ValidatorError: Path `state` (`P`) is shorter than the minimum allowed length (2).]
        message: 'Path `state` (`P`) is shorter than the minimum allowed length (2).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'minlength',
        path: 'state',
        value: 'P' },
     age: 
      { [ValidatorError: Path `age` (10) is less than minimum allowed value (15).]
        message: 'Path `age` (10) is less than minimum allowed value (15).',
        name: 'ValidatorError',
        properties: [Object],
        kind: 'min',
        path: 'age',
        value: 10 } } }

```

## Cadastre 3 pokemons **de uma só vez**:

```js
"use strict";

const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/pokemons";
mongoose.connect(dbURI);

const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: Date,
    defense: Number,
    height: String,
    name: String,
    speed: Number,
    types: [String]
  };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model("pokemons", PokemonSchema);
const data = [
  {
    "attack": 80,
    "created": new Date(),
    "defense": 90,
    "height": "14",
    "name": "Walrein",
    "speed": 65,
    "types": ["water", "ice"]
  },
  {
    "attack": 107,
    "created": new Date(),
    "defense": 122,
    "height": "0",
    "name": "Chesnaught",
    "speed": 64,
    "types": ["fighting", "grass"]
  },
  {
    "attack": 45,
    "created": new Date(),
    "defense": 40,
    "height": "99",
    "name": "Fennekin",
    "speed": 60,
    "types": ["fire"]
  }
];

Pokemon.create(data, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  console.log("Pokémons cadastrados: ", data);
});


```

### Resultado:

```
Pokémons cadastrados:  [ { __v: 0,
    attack: 80,
    created: Sun Jul 10 2016 00:33:34 GMT-0300 (BRT),
    defense: 90,
    height: '14',
    name: 'Walrein',
    speed: 65,
    _id: 5781c20e87d241940ef3d09e,
    types: [ 'water', 'ice' ] },
  { __v: 0,
    attack: 107,
    created: Sun Jul 10 2016 00:33:34 GMT-0300 (BRT),
    defense: 122,
    height: '0',
    name: 'Chesnaught',
    speed: 64,
    _id: 5781c20e87d241940ef3d09f,
    types: [ 'fighting', 'grass' ] },
  { __v: 0,
    attack: 45,
    created: Sun Jul 10 2016 00:33:34 GMT-0300 (BRT),
    defense: 40,
    height: '99',
    name: 'Fennekin',
    speed: 60,
    _id: 5781c20e87d241940ef3d0a0,
    types: [ 'fire' ] } ]

```

## Busque **todos** os Pokemons com `attack > 120` e `speed > 70`:

### Mongo
```
MacBook-Pro-de-Ronaldo(mongod-3.2.7) pokemons> db.pokemons.count();
49
MacBook-Pro-de-Ronaldo(mongod-3.2.7) pokemons> var query = { attack: { $gt:120 }, speed: { $gt: 70 } };
MacBook-Pro-de-Ronaldo(mongod-3.2.7) pokemons> db.pokemons.count(query);
3

```

### Node

```js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const _schema = {};
const pokemonSchema = new Schema(_schema);

const PokemonModel = mongoose.model("pokemons", pokemonSchema);
const query = {attack: { $gt: 120 }, speed: { $gt: 70 } };

PokemonModel.find(query, (err, data) => {
  if (err) return console.log("ERRO: ", err);
  return console.log("Resultado para a busca: ", data);
});


```

### Saída

```js

Resultado para a busca:  [ { _id: 5781c34fb9b95aa10ebed6d8,
    attack: 121,
    created: Sun Jul 10 2016 00:38:55 GMT-0300 (BRT),
    defense: 90,
    height: '14',
    name: 'Teste Exercício',
    speed: 71,
    types: [ 'water', 'ice' ],
    __v: 0 },
  { _id: 5781c35cd25798a50e7410d6,
    attack: 121,
    created: Sun Jul 10 2016 00:39:08 GMT-0300 (BRT),
    defense: 90,
    height: '14',
    name: 'Teste Exercício',
    speed: 71,
    types: [ 'water', 'ice', 'WTF' ],
    __v: 0 },
  { _id: 5781c364472d1aa90eba07f6,
    attack: 121,
    created: Sun Jul 10 2016 00:39:16 GMT-0300 (BRT),
    defense: 90,
    height: '14',
    name: 'Teste Exercício',
    speed: 71,
    types: [ 'water', 'ice', 'WTF' ],
    __v: 0 } ]

```

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

### Confirmando no console do MongoDB que não há o Nerdmon já inserido


```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    attack: Number,
    created: Date,
    defense: Number,
    height: String,
    name: String,
    speed: Number,
    types: [String]
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const query = {name: /Nerdmon/i};
const mod = {
    $setOnInsert: {
      attack: 49,
      created: new Date(),
      defense: 90,
      height: "14",
      name: "Nerdmon",
      speed: 71,
      types: ["water", "ice", "WTF"]
    }
};

const options = {upsert: true};

pokeModel.update(query, mod, options, (err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('Alterou: ', data);
});
module.exports = pokemonSchema;

```

### Saída

```

Alterou:  { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 5781c8efebecb288fb05923b } ] } 

```

## Remova **todos** os Pokemons com `attack` **acima de 50**.

### Verifica no console do MongoDB a quantidade total de pokemons com attack acima de 50 antes da exclusão


```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
   
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('Pokemon', pokemonSchema);

const query = {attack: {$gt: 50}};

pokeModel.remove(query, (err, data) => {
    if(err) return console.log('ERRO: ', err);
    console.log('Removendo: ', data);
});
module.exports = pokemonSchema;

```

### Saída  

```

Removendo:  { result: { ok: 1, n: 25 },
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
        _bytesDispatched: 222,
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