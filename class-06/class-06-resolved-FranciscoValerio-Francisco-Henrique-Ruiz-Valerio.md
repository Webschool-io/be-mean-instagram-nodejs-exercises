# Node.js - Aula 06 - Exercício

**user:** [FranciscoValerio](https://github.com/FranciscoValerio)

**autor:** Francisco Henrique Ruiz Valério

## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

**Retorno da inserção de um objeto correto:**
```
Inseriu:  { created_at: Wed Jan 27 2016 20:14:56 GMT-0200 (Horário brasileiro de verão),
  type: [ 5691d60743056d6e1566274e ],
  tags: [ 'schema', 'nodejs', 'be-mean' ],
  _id: 56a941602a0af6000383ea8d,
  attacks:
   [ { name: 'Soco alto', power: 6500, order: 1, active: 1 },
     { name: 'Soco baixo', power: 3400, order: 2, active: 0 } ],
  active: true,
  image_bin:
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 32,
     buffer: <Buffer e3 b0 c4 42 98 fc 1c 14 9a fb f4 c8 99 6f b9 24 27 ae 41 e4 64 9b 93 4c a4 95 99 1b 78 52 b8 55> },
  attack: 15,
  pokebola: 'open',
  name: 'SchemaMon',
  __v: 0 }
```

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`

**enum | match | maxlenght:**
```
ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { pokebola:
      { [ValidatorError: `cabo` is not a valid enum value for path `pokebola`.]
        properties: [Object],
        message: '`cabo` is not a valid enum value for path `pokebola`.',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'pokebola',
        value: 'cabo' },
     name:
      { [ValidatorError: Path `name` is invalid (vishMonMaisDeDez).]
        properties: [Object],
        message: 'Path `name` is invalid (vishMonMaisDeDez).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'vishMonMaisDeDez'
        }
    }
 }
```

**minlength:**
```
ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { name:
      { [ValidatorError: Path `name` is invalid (vi).]
        properties: [Object],
        message: 'Path `name` is invalid (vi).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'vi'
        }
    }
 }
```

* 1.2.  para Number: `max` e `min`

**min:**
```
ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { attack:
      { [ValidatorError: Path `attack` (1) is less than minimum allowed value (2).]
        properties: [Object],
        message: 'Path `attack` (1) is less than minimum allowed value (2).',
        name: 'ValidatorError',
        kind: 'min',
        path: 'attack',
        value: 1 },
     name:
      { [ValidatorError: Path `name` is invalid (vishMon).]
        properties: [Object],
        message: 'Path `name` is invalid (vishMon).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'vishMon'
        }
    }
 }
 ```

 **max:**
 ```
 ERRO:  { [ValidationError: pokemons validation failed]
  message: 'pokemons validation failed',
  name: 'ValidationError',
  errors:
   { attack:
      { [ValidatorError: Path `attack` (1000000) is more than maximum allowed value (9999).]
        properties: [Object],
        message: 'Path `attack` (1000000) is more than maximum allowed value (9999).',
        name: 'ValidatorError',
        kind: 'max',
        path: 'attack',
        value: 1000000 },
     name:
      { [ValidatorError: Path `name` is invalid (vishMon).]
        properties: [Object],
        message: 'Path `name` is invalid (vishMon).',
        name: 'ValidatorError',
        kind: 'regexp',
        path: 'name',
        value: 'vishMon'
        }
   }
 }
 ```

**Código completo com o objeto correto:**
```JS
const crypto = require('crypto');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var states = 'opening open closing closed'.split(' ')
const _schema = {
   name: { type: String, maxlength: 10, minlength: 3 },
   pokebola: { type: String, enum: states },
   attack: { type: Number, min: 2, max: 9999 },
   created_at: { type: Date, default: Date.now },
   image_bin: Buffer,
   active: Boolean,
   attacks: Schema.Types.Mixed,
   type: [{type: Schema.Types.ObjectId, ref: 'types'}],
   tags: [String]
}

const mixed =  [
    { name: 'Soco alto',
      power: 6500,
      order: 1,
      active: 1,
    },
    { name: 'Soco baixo',
      power: 3400,
      order: 2,
      active: 0,
    }
];

const buffer = new Buffer(crypto.createHash('sha256').update(new Buffer(0)).digest('binary'), 'binary');

const data = { name: "SchemaMon",
   pokebola: 'open',
   attack: 15,
   image_bin: buffer,
   active: 1,
   attacks: mixed,
   type: '5691d60743056d6e1566274e',
   tags: ['schema', 'nodejs', 'be-mean'],
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
var pokemon = new PokemonModel(data);

pokemon.save( function (err, data){
   if(err) return console.log('ERRO: ', err);
   return console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;
```

## Cadastre 3 pokemons **de uma só vez**:

**Código:**
```JS
var Mongoose = require('Mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado.')

  var pokemonSchema = new Mongoose.Schema({
     name: String,
     attack: Number,
     created_at: { type: Date, default: Date.now },
     image_bin: Buffer,
     active: Boolean,
     tags: [String],
     hasCreditCookie: Boolean
  });

  pokemonSchema.statics.findAllWithCreditCookies = function(callback) {
    return this.find({ hasCreditCookie: true }, callback);
  };

  var Pokemon = Mongoose.model('Pokemon', pokemonSchema);

  for (var i =1; i<=3; i++){
    var pokemon = new Pokemon({
      name: 'Pokemon ' + i,
      attack: 22 + i,
      hasCreditCookie: true
    });

    pokemon.save(function(err, pokemon) {
      if (err) return console.error(err);
      console.log('Salvo: ' + pokemon);
    });
  }

  setTimeout(function(){
    Pokemon.findAllWithCreditCookies(function(err, pokemons) {
      if (err) return console.error(err);
      console.log('Buscado: ' + pokemons);
    });
  }, 1000);
});

Mongoose.connect('mongodb://localhost/be-mean-instagram');
```

**Retorno:**
```
Salvo: { created_at: Wed Jan 27 2016 21:33:43 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  _id: 56a953d7cdb6f5d0126dbada,
  hasCreditCookie: true,
  attack: 23,
  name: 'Pokemon 1',
  __v: 0 }
Salvo: { created_at: Wed Jan 27 2016 21:33:43 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  _id: 56a953d7cdb6f5d0126dbadb,
  hasCreditCookie: true,
  attack: 24,
  name: 'Pokemon 2',
  __v: 0 }
Salvo: { created_at: Wed Jan 27 2016 21:33:43 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  _id: 56a953d7cdb6f5d0126dbadc,
  hasCreditCookie: true,
  attack: 25,
  name: 'Pokemon 3',
  __v: 0 }

Buscado: { created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  __v: 0,
  hasCreditCookie: true,
  attack: 23,
  name: 'Pokemon 1',
  _id: 56a9538058e17770032a1b5b },{ created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  __v: 0,
  hasCreditCookie: true,
  attack: 24,
  name: 'Pokemon 2',
  _id: 56a9538058e17770032a1b5c },{ created_at: Wed Jan 27 2016 21:32:16 GMT-0200 (Horário brasileiro de verão),
  tags: [],
  __v: 0,
  hasCreditCookie: true,
  attack: 25,
  name: 'Pokemon 3',
  _id: 56a9538058e17770032a1b5d },{ created_at: Wed Jan 27 2016 21:32:43 GMT-0200 (Horário brasileiro de verão),
```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:

**Código:**
```JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
   name: String
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
const query = { $and: [ { attack: { $gt: 50 }}, { height: { $gt: 0.5 }} ] };

PokemonModel.find(query, function (err, data){
   if(err) return console.log('ERRO: ', err);
   return console.log('Buscou: ', data);
});

module.exports = pokemonSchema;
```

**Retorno:**
```
Buscou:  [ { moves: [ 'investida', 'lança-chamas', 'run', 'esquiva', 'desvio' ],
    active: false,
    height: 0.6,
    attack: 52,
    type: 'fogo',
    description: 'Esse é o cão chupando manda de fofinho',
    name: 'Charmander',
    _id: 56429adb65048c35cec000c7 } ]
```    

## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.

**Código:**
```JS
const crypto = require('crypto');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var states = 'opening open closing closed'.split(' ')
const _schema = {
   name: { type: String, maxlength: 10, minlength: 3 },
   pokebola: { type: String, enum: states },
   attack: { type: Number, min: 2, max: 9999 },
   created_at: { type: Date, default: Date.now },
   image_bin: Buffer,
   active: Boolean,
   attacks: Schema.Types.Mixed,
   type: [{type: Schema.Types.ObjectId, ref: 'types'}],
   tags: [String]
}

const mixed =  [
    { name: 'Chuve alto',
      power: 10500,
      order: 1,
      active: 1,
    },
    { name: 'Chuve baixo',
      power: 1000,
      order: 2,
      active: 0,
    }
];

const buffer = new Buffer(crypto.createHash('sha256').update(new Buffer(0)).digest('binary'), 'binary');

const data = { name: "Nerdmon",
   pokebola: 'closed',
   attack: 49,
   image_bin: buffer,
   active: 1,
   attacks: mixed,
   type: '5691d60743056d6e1566274e',
   tags: ['schema', 'nodejs', 'be-mean'],
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
var pokemon = new PokemonModel(data);

pokemon.save( function (err, data){
   if(err) return console.log('ERRO: ', err);
   return console.log('Inseriu: ', data);
});

module.exports = pokemonSchema;
```    

**Retorno:**
```    
Inseriu:  { created_at: Wed Jan 27 2016 20:41:22 GMT-0200 (Horário brasileiro de verão),
  type: [ 5691d60743056d6e1566274e ],
  tags: [ 'schema', 'nodejs', 'be-mean' ],
  _id: 56a94792f0fcdc8c17ee94d5,
  attacks:
   [ { name: 'Chuve alto', power: 10500, order: 1, active: 1 },
     { name: 'Chuve baixo', power: 1000, order: 2, active: 0 } ],
  active: true,
  image_bin:
   Binary {
     _bsontype: 'Binary',
     sub_type: 0,
     position: 32,
     buffer: <Buffer e3 b0 c4 42 98 fc 1c 14 9a fb f4 c8 99 6f b9 24 27 ae 41 e4 64 9b 93 4c a4 95 99 1b 78 52 b8 55> },
  attack: 49,
  pokebola: 'closed',
  name: 'Nerdmon',
  __v: 0 }
```    

## Remova **todos** os Pokemons com `attack` **acima de 50**.

**Código:**
```JS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var states = 'opening open closing closed'.split(' ')
const _schema = {
   name: { type: String, match: /^S/, maxlength: 10, minlength: 3 },
   pokebola: { type: String, enum: states },
   attack: { type: Number, min: 2, max: 9999 },
   created_at: { type: Date, default: Date.now },
   image_bin: Buffer,
   active: Boolean,
   attacks: Schema.Types.Mixed,
   type: [{type: Schema.Types.ObjectId, ref: 'types'}],
   tags: [String]
}

const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('pokemons', PokemonSchema);
const query = { attack: { $gt: 50 } };

Pokemon.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou:', data);
});
```

**Retorno:**
```    
Deletou: { result: { ok: 1, n: 2 },
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
        _bytesDispatched: 176,
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
