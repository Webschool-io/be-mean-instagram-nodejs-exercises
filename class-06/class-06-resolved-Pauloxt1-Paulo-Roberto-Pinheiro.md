# Node.js - Aula 06 - Exercício

**user:** [Pauloxt1](https://github.com/Pauloxt1)

**autor:** Paulo Roberto


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:

* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`
* 1.2.  para Number: `max` e `min`

<b>Objeto correto:</b>
```js
const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var enu = {
  values: ['Paulo'],
  message: 'Ocorreu um erro documento `{PATH}` com valor `{VALUE}` do tipo `{TYPE}`'
}

// user Schema
const _schema = {
    login:{type:String, minlength:2, maxlength:10, match: /^\w/, enum: enu},
    active: Boolean,
    date_register:Date,
    profile_image: {data: Buffer, contentType: String},
    friends:[{type: Schema.Types.ObjectId, ref: 'users'}],
    profile_tags: [String],
    age: {type:Number, max:100, min:12},
    favorites: Schema.Types.Mixed
}

const userSchema = new Schema(_schema);
const userModel = mongoose.model('users', userSchema);

const readImg = fs.readFileSync('default.jpg');

const user = new userModel({
    login:'Paulo',
    active:1,
    date_register: Date.now(),
    friends:["56a5953b1416d13a8e98715b"],
    profile_image:{data:readImg, contentType:'image/jpeg'},
    profile_tags:['batata', 'tag1'],
    age:16,
    favorites:[{id:null, data:Date.now()}]
});

user.save(function(err, result){
    if(err) console.log(err);
    console.log(result);
});
```

```shell
paulo@Paulo:~/workshop-be-mean/nodejs/exercicio6$ node app.js 
Mongoose default connection connected to mongodb://localhost/exercicio6
Mongoose default connection is open
{ profile_image: 
   { contentType: 'image/jpeg',
     data: 
      Binary {
        _bsontype: 'Binary',
        sub_type: 0,
        position: 1984,
        buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 84 00 09 06 07 12 10 10 15 0f 10 10 10 16 15 17 16 18 18 18 11 15 15 15 17 16 16 ... > } },
  friends: [ 56a5953b1416d13a8e98715b ],
  profile_tags: [ 'batata', 'tag1' ],
  _id: 56a5965c09badc7e2bd93acc,
  favorites: [ { id: null, data: 1453692508444 } ],
  age: 16,
  date_register: Mon Jan 25 2016 01:28:28 GMT-0200 (BRST),
  active: true,
  login: 'Paulo',
  __v: 0 }

```
<b>Objeto que não está de acordo com o Schema:</b>

```js
const user = new userModel({
    login:'teste',
    active:'1',
    date_register: '17/02/1999',
    friends:'joão',
    profile_image:10,
    profile_tags:'js mongoose webschool',
    age:'16',
    favorites:[{id:null, data:Date.now()}]
});
```
```shell
{ [ValidationError: users validation failed]
  message: 'users validation failed',
  name: 'ValidationError',
  errors: 
   { friends: 
      { [CastError: Cast to Array failed for value "joão" at path "friends"]
        message: 'Cast to Array failed for value "joão" at path "friends"',
        name: 'CastError',
        kind: 'Array',
        value: 'joão',
        path: 'friends',
        reason: undefined },
     date_register: 
      { [CastError: Cast to Date failed for value "17/02/1999" at path "date_register"]
        message: 'Cast to Date failed for value "17/02/1999" at path "date_register"',
        name: 'CastError',
        kind: 'Date',
        value: '17/02/1999',
        path: 'date_register',
        reason: undefined },
     login: 
      { [ValidatorError: Ocorreu um erro documento `login` com valor `teste` do tipo `enum`]
        properties: [Object],
        message: 'Ocorreu um erro documento `login` com valor `teste` do tipo `enum`',
        name: 'ValidatorError',
        kind: 'enum',
        path: 'login',
        value: 'teste' } } }

```


## Cadastre 3 pokemons **de uma só vez**:
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// criação do Schema
const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number,
    crated_at:{type:Date, default: Date.now}
};

const pokemonSchema = new Schema(_schema);

const data = [{name:'Pokemon1', type:'batata', attack:-1, defense:-10, height:6969},
              {name:'Pokemon2', type:'batata', attack:-1, defense:-10, height:6969},
              {name:'Pokemon3', type:'batata', attack:-1, defense:-10, height:6969}];

var Model = mongoose.model('pokemons', pokemonSchema);
data.forEach(function(data){
    var poke = new Model(data);
    poke.save(function(err, data){
        if(err) console.log('Error: ', err);
        console.log('Inseriu: ', data);
    });
});

```

## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`:
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// criação do Schema
const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number,
    crated_at:{type:Date, default: Date.now}
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
const query = {attack:{$gt:50}, height:{$gt:0.5}};

PokemonModel.find(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});

```

```shell
Mongoose default connection connected to mongodb://localhost/exercicio6
Mongoose default connection is open
Buscou: []
```
## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha.
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// criação do Schema
const _schema = {
      name:  String,
      description: String,
      type:   String,
      attack:   Number,
      defense:   Number,
      height:   Number
    };
const PokemonSchema = new Schema(_schema);
const Pokemon = mongoose.model('pokemons', PokemonSchema);
const query = {name: /Nerdmon/i}
const mod = {$setOnInsert: {name: 'Nerdmon', description: 'Pokemon badass', type:'nerd', attack:8000, defense:8000, height:100}}
const options = {upsert: true}

Pokemon.update(query, mod, options, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Alterou:', data);
});
```

```shell
paulo@Paulo:~/workshop-be-mean/nodejs/exercicio6$ node app.js 
Mongoose default connection connected to mongodb://localhost/exercicio6
Mongoose default connection is open
Alterou: { ok: 1,
  nModified: 0,
  n: 1,
  upserted: [ { index: 0, _id: 56a5790484be28b34911322c } ] }
```

## Remova **todos** os Pokemons com `attack` **acima de 50**.
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// criação do Schema
const _schema = {
    name: String,
    description: String,
    type: String,
    attack: Number,
    defense: Number,
    height: Number,
    crated_at:{type:Date, default: Date.now}
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
const query = {attack:{$gt:50}};

PokemonModel.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Removeu:', data);
});
```

```shell
paulo@Paulo:~/workshop-be-mean/nodejs/exercicio6$ node app.js 
Mongoose default connection connected to mongodb://localhost/exercicio6
Mongoose default connection is open
Removeu: { result: { ok: 1, n: 462 },
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
        _bytesDispatched: 169,
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
