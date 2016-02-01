# Node.js - Aula 06 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## Crie um Schema com cada tipo explicado, inserindo tanto um objeto correto, como um objeto que desencadeie erros de validação padrão, criar especificamente:  
* 1.1. para String: `enum`, `match`, `maxlength` e `minlength`  
* 1.2.  para Number: `max` e `min`


No banco *be-mean-instagram* estou pedindo para criar uma nova *collection*, chamada `alunos`.  

No JS abaixo, eu inseri na *collection* um objeto correto.  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const aluno = {  
  //o match aceita regex, no caso abaixo, o nome pode ser case insensitive e começar com qualquer caractere  
  nome: {type: String, match: /^./i },  

  //max serve para setar o campo para que seja inserido um número máximo, no caso no máximo até 30, se não dá erro  
  idade: {type: Number, max: 30},  

  //o enum irá setar o sexo do cara, Masculino ou Feminino  
  sexo: {type: String, enum: ['M', 'F']},  
  
  //a ideia desse campo é que o aluno tenho no mínimo 5 aulas, caso contrário dá erro  
  aulas: {type: Number, min: 5},  

  //o nome da cidade deve conter no máximo 10 caracteres  
  cidade: {type: String, maxlength: 10},  

  //o nome do estado deve conter no mínimo 2 caracteres  
  estado: {type: String, minlength: 2}  
}  

const alunoSchema = new Schema(aluno);  

const AlunoModel = mongoose.model('alunos', alunoSchema);  

const data = (  
  {  
    nome: 'Ednilson',  
    idade: 24,  
    sexo: 'M',  
    aulas: 16,  
    cidade: 'Itapeva',  
    estado: 'SP'  
  }  
);  

const Ednilson = new AlunoModel(data);  

Ednilson.save(function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido o aluno: ', data);  
});  
```


A saída no *nodemon* foi a seguinte:  

```  
Inserido o aluno:  { _id: 56ac40f7dd143b141efb4685,  
  estado: 'SP',  
  cidade: 'Itapeva',  
  aulas: 16,  
  sexo: 'M',  
  idade: 24,  
  nome: 'Ednilson',  
  __v: 0 }  
```


Agora, no JS abaixo, é o objeto com erros de validação padrão:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const aluno = {  
  //o match aceita regex, no caso abaixo, o nome pode ser case insensitive e começar com qualquer caractere  
  nome: {type: String, match: /^./i },  

  //max serve para setar o campo para que seja inserido um número máximo, no caso no máximo até 30, se não dá erro  
  idade: {type: Number, max: 30},  

  //o enum irá setar o sexo do cara, Masculino ou Feminino  
  sexo: {type: String, enum: ['M', 'F']},  
  
  //a ideia desse campo é que o aluno tenho no mínimo 5 aulas, caso contrário dá erro  
  aulas: {type: Number, min: 5},  

  //o nome da cidade deve conter no máximo 10 caracteres  
  cidade: {type: String, maxlength: 10},  

  //o nome do estado deve conter no mínimo 2 caracteres  
  estado: {type: String, minlength: 2}  
}  

const alunoSchema = new Schema(aluno);  

const AlunoModel = mongoose.model('alunos', alunoSchema);  

const data = (  
  {  
    nome: 'Aline',  
    idade: 31,  
    sexo: 'J',  
    aulas: 3,  
    cidade: 'São Carlos',  
    estado: 'SP'  
  }  
);  

const Ednilson = new AlunoModel(data);  

Ednilson.save(function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido o(a) aluno(a): ', data);  
});  
```  

E a saída no *nodemon* foi a seguinte:  

```  
Erro:  { [ValidationError: alunos validation failed]  
  message: 'alunos validation failed',  
  name: 'ValidationError',  
  errors:   
   { aulas:   
      { [ValidatorError: Path `aulas` (3) is less than minimum allowed value (5).]  
        properties: [Object],  
        message: 'Path `aulas` (3) is less than minimum allowed value (5).',  
        name: 'ValidatorError',  
        kind: 'min',  
        path: 'aulas',  
        value: 3 },  
     sexo:   
      { [ValidatorError: `J` is not a valid enum value for path `sexo`.]  
        properties: [Object],  
        message: '`J` is not a valid enum value for path `sexo`.',  
        name: 'ValidatorError',  
        kind: 'enum',  
        path: 'sexo',  
        value: 'J' },  
     idade:   
      { [ValidatorError: Path `idade` (31) is more than maximum allowed value (30).]  
        properties: [Object],  
        message: 'Path `idade` (31) is more than maximum allowed value (30).',  
        name: 'ValidatorError',  
        kind: 'max',  
        path: 'idade',  
        value: 31 } } }  
```


## Cadastre 3 pokemons **de uma só vez**.  

Arquivo JS:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const poke = {  
  name: String,  
  description: String,  
  type: String,  
  attack: Number,  
  defense: Number,  
  height: Number  
}  

const PokemonSchema = new Schema(poke);  

const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

const data = [  
  {  
    name: "Bowlmon",  
    description: "O pokemon mais viciado em NFL que qualquer extraterreste da Terra",  
    type: "nflmon",  
    attack: 98,  
    defense: 97,  
    height: 2.1  
  },  

  {  
    name: "Elimon",  
    description: "O caçula",  
    type: "nflmon",  
    attack: 83,  
    defense: 79,  
    height: 1.9  
  },  

  {  
    name: "Ricemon",  
    description: "O cabeludo pirado",  
    type: "nflmon",  
    attack: 91,  
    defense: 85,  
    height: 2  
  }  
];  

PokemonModel.create(data, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```


Executando `node app.js` temos:  

```  
ednilson@EDNILSON-NB:/var/www/mongoose-pokemons$ node app.js  
Mongoose default connection open to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido(s):  [ { _id: 56aeb4a5aad359a813657598,  
    height: 2.1,  
    defense: 97,  
    attack: 98,  
    type: 'nflmon',  
    description: 'O pokemon mais viciado em NFL que qualquer extraterreste da Terra',  
    name: 'Bowlmon',  
    __v: 0 },  
  { _id: 56aeb4a5aad359a813657599,  
    height: 1.9,  
    defense: 79,  
    attack: 83,  
    type: 'nflmon',  
    description: 'O caçula',  
    name: 'Elimon',  
    __v: 0 },  
  { _id: 56aeb4a5aad359a81365759a,  
    height: 2,  
    defense: 85,  
    attack: 91,  
    type: 'nflmon',  
    description: 'O cabeludo pirado',  
    name: 'Ricemon',  
    __v: 0 } ]  
```


Buscando pelo `type: 'nflmon'` pelo MongoDB, resultamos em:  

```  
be-mean-pokemons> var query = {type: /nflmon/i}  

be-mean-pokemons> db.pokemons.find(query)  
{  
  "_id": ObjectId("56aeb4a5aad359a813657598"),  
  "name": "Bowlmon",  
  "description": "O pokemon mais viciado em NFL que qualquer extraterreste da Terra",  
  "type": "nflmon",  
  "attack": 98,  
  "defense": 97,  
  "height": 2.1,  
  "__v": 0  
}  
{  
  "_id": ObjectId("56aeb4a5aad359a813657599"),  
  "name": "Elimon",  
  "description": "O caçula",  
  "type": "nflmon",  
  "attack": 83,  
  "defense": 79,  
  "height": 1.9,  
  "__v": 0  
}  
{  
  "_id": ObjectId("56aeb4a5aad359a81365759a"),  
  "name": "Ricemon",  
  "description": "O cabeludo pirado",  
  "type": "nflmon",  
  "attack": 91,  
  "defense": 85,  
  "height": 2,  
  "__v": 0  
}  
Fetched 3 record(s) in 4ms  
```


## Busque **todos** os Pokemons com `attack > 50` e `height > 0.5`.  

Arquivo JS:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const poke = {  
  name: String,  
  description: String,  
  type: String,  
  attack: Number,  
  defense: Number,  
  height: Number  
}  

const PokemonSchema = new Schema(poke);  

const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

const data = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]};  

PokemonModel.find(data, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Buscou: ', data);  
});  

module.exports = PokemonModel;  
```


Executando o `node app.js` temos:  

```  
ednilson@EDNILSON-NB:/var/www/mongoose-pokemons$ node app.js  
Mongoose default connection open to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Buscou:  [ { moves: [ 'investida', 'desvio' ],  
    active: false,  
    height: 1.6,  
    defense: 60,  
    attack: 165,  
    type: 'rocha',  
    description: 'Pode levar qualquer cascudo na cabeça que não vai sentir porra nenhuma',  
    name: 'Rampardos',  
    _id: 5644da2d329b6e6a8376bd42 },  
  { moves: [ 'investida', 'desvio' ],  
    active: false,  
    height: 2,  
    defense: 100,  
    attack: 160,  
    type: 'normal',  
    description: 'Pense em um cara preguiçoso, é esse pokebola aí',  
    name: 'Slaking',  
    _id: 5644da44329b6e6a8376bd43 },  
  { moves: [ 'investida', 'desvio' ],  
    active: false,  
    height: 1.8,  
    defense: 90,  
    attack: 147,  
    type: 'dragão',  
    description: 'Esse é dócil viu, mas se baixar a pomba gira nele, fica muito agressivo',  
    name: 'Haxorus',  
    _id: 5644da4e329b6e6a8376bd44 },  
  { moves: [ 'investida', 'desvio' ],  
    active: false,  
    height: 2.4,  
    defense: 130,  
    attack: 140,  
    type: 'rocha',  
    description: 'Esse resiste até a erupções',  
    name: 'Rhyperior',  
    _id: 5644da5a329b6e6a8376bd45 },  
  { moves: [ 'investida', 'desvio' ],  
    active: false,  
    height: 1.6,  
    defense: 130,  
    attack: 135,  
    type: 'psíquico',  
    description: 'Esse não tem Windows como SO',  
    name: 'Metagross',  
    _id: 5644da63329b6e6a8376bd46 },  
  { moves: [ 'engole fogo', 'assopra veneno', 'desvio' ],  
    active: false,  
    height: 0.6,  
    attack: 52,  
    type: 'fogo',  
    description: 'Esse é o cão chupando manga de fofinho',  
    name: 'Charmander',  
    _id: 564cff04f9025dedb2553205 },  
  { __v: 0,  
    height: 2.1,  
    defense: 97,  
    attack: 98,  
    type: 'nflmon',  
    description: 'O pokemon mais viciado em NFL que qualquer extraterreste da Terra',  
    name: 'Bowlmon',  
    _id: 56aeb4a5aad359a813657598 },  
  { __v: 0,  
    height: 1.9,  
    defense: 79,  
    attack: 83,  
    type: 'nflmon',  
    description: 'O caçula',  
    name: 'Elimon',  
    _id: 56aeb4a5aad359a813657599 },  
  { __v: 0,  
    height: 2,  
    defense: 85,  
    attack: 91,  
    type: 'nflmon',  
    description: 'O cabeludo pirado',  
    name: 'Ricemon',  
    _id: 56aeb4a5aad359a81365759a } ]  
```


Para tirar as dúvidas, busquei também pelo MongoDB:  

```  
be-mean-pokemons> var query = {$and: [{attack: {$gt: 50}}, {height: {$gt: 0.5}}]}  

be-mean-pokemons> db.pokemons.find(query)  
{  
  "_id": ObjectId("5644da2d329b6e6a8376bd42"),  
  "name": "Rampardos",  
  "description": "Pode levar qualquer cascudo na cabeça que não vai sentir porra nenhuma",  
  "type": "rocha",  
  "attack": 165,  
  "defense": 60,  
  "height": 1.6,  
  "active": false,  
  "moves": [  
    "investida",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("5644da44329b6e6a8376bd43"),  
  "name": "Slaking",  
  "description": "Pense em um cara preguiçoso, é esse pokebola aí",  
  "type": "normal",  
  "attack": 160,  
  "defense": 100,  
  "height": 2,  
  "active": false,  
  "moves": [  
    "investida",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("5644da4e329b6e6a8376bd44"),  
  "name": "Haxorus",  
  "description": "Esse é dócil viu, mas se baixar a pomba gira nele, fica muito agressivo",  
  "type": "dragão",  
  "attack": 147,  
  "defense": 90,  
  "height": 1.8,  
  "active": false,  
  "moves": [  
    "investida",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("5644da5a329b6e6a8376bd45"),  
  "name": "Rhyperior",  
  "description": "Esse resiste até a erupções",  
  "type": "rocha",  
  "attack": 140,  
  "defense": 130,  
  "height": 2.4,  
  "active": false,  
  "moves": [  
    "investida",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("5644da63329b6e6a8376bd46"),  
  "name": "Metagross",  
  "description": "Esse não tem Windows como SO",  
  "type": "psíquico",  
  "attack": 135,  
  "defense": 130,  
  "height": 1.6,  
  "active": false,  
  "moves": [  
    "investida",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("564cff04f9025dedb2553205"),  
  "name": "Charmander",  
  "description": "Esse é o cão chupando manga de fofinho",  
  "type": "fogo",  
  "attack": 52,  
  "height": 0.6,  
  "active": false,  
  "moves": [  
    "engole fogo",  
    "assopra veneno",  
    "desvio"  
  ]  
}  
{  
  "_id": ObjectId("56aeb4a5aad359a813657598"),  
  "name": "Bowlmon",  
  "description": "O pokemon mais viciado em NFL que qualquer extraterreste da Terra",  
  "type": "nflmon",  
  "attack": 98,  
  "defense": 97,  
  "height": 2.1,  
  "__v": 0  
}  
{  
  "_id": ObjectId("56aeb4a5aad359a813657599"),  
  "name": "Elimon",  
  "description": "O caçula",  
  "type": "nflmon",  
  "attack": 83,  
  "defense": 79,  
  "height": 1.9,  
  "__v": 0  
}  
{  
  "_id": ObjectId("56aeb4a5aad359a81365759a"),  
  "name": "Ricemon",  
  "description": "O cabeludo pirado",  
  "type": "nflmon",  
  "attack": 91,  
  "defense": 85,  
  "height": 2,  
  "__v": 0  
}  
Fetched 9 record(s) in 10ms  
```


## Altere, **inserindo**, o Pokemon `Nerdmon` com `attack` igual a 49 e com os valores dos outros campos a sua escolha  

O arquivo JS ficou da seguinte maneira:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const poke = {  
  name: String,  
  description: String,  
  type: String,  
  attack: Number,  
  defense: Number,  
  height: Number  
}  

const PokemonSchema = new Schema(poke);  

const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

const insere = {  
  name: "Nerdmon",  
  description: "O pokemon mais nerd que já existiu, que existe ou que existirá",  
  type: "nerd",  
  attack: 999,  
  defense: 888,  
  height: 1.8  
};  

const Model = new PokemonModel(insere);  

Model.save(insere, function (err, insere) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido: ', insere);  
});  


const alteraQuery = {name: /nerdmon/i};  
const alteraMod = {attack: 49};  

PokemonModel.update(alteraQuery, alteraMod, function (err, data){  
  if (err) return console.log('Erro: ', err);  
  console.log('Alterado: ', data);  
});  
```


Ao executar `node app.js` temos:  

```  
ednilson@EDNILSON-NB:/var/www/mongoose-pokemons$ node app.js  
Mongoose default connection open to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido:  { _id: 56aeb9d04bb106b114749436,  
  height: 1.8,  
  defense: 888,  
  attack: 999,  
  type: 'nerd',  
  description: 'O pokemon mais nerd que já existiu, que existe ou que existirá',  
  name: 'Nerdmon',  
  __v: 0 }  
Alterado:  { ok: 1, nModified: 1, n: 1 }  
```


E, por via das dúvidas, consultando no MongoDB, temos:  

```  
be-mean-pokemons> var query = {name: /nerdmon/i}  

be-mean-pokemons> db.pokemons.find(query)  
{  
  "_id": ObjectId("56aeb9d04bb106b114749436"),  
  "name": "Nerdmon",  
  "description": "O pokemon mais nerd que já existiu, que existe ou que existirá",  
  "type": "nerd",  
  "attack": 49,  
  "defense": 888,  
  "height": 1.8,  
  "__v": 0  
}  
Fetched 1 record(s) in 3ms  
```


## Remova **todos** os Pokemons com `attack` **acima de 50**  

Arquivo JS:  

```js  
require('./config.js');  

const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const poke = {  
  name: String,  
  description: String,  
  type: String,  
  attack: Number,  
  defense: Number,  
  height: Number  
}  

const PokemonSchema = new Schema(poke);  

const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

const query = {attack: {$gt: 50}};  

PokemonModel.remove(query, function (err, query) {  
  if (err) return console.log('Erro: ', err);  
  console.log('Removeu: ', query);  
});  
```


Executando `node app.js` temos:  

```  
ednilson@EDNILSON-NB:/var/www/mongoose-pokemons$ node app.js  
Mongoose default connection open to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
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
^CMongoose default connection disconnected  
Mongoose default connection disconnected through app termination  
```


Por via das dúvidas, no MongoDB, antes de executar o `app.js` busquei quantos tinhas segundo a condição do exercício. Após isso, obtive o número total de objetos salvos e então o *count* após executar o `app.js`.  

```  
be-mean-pokemons> var query = {attack: {$gt: 50}}  

be-mean-pokemons> db.pokemons.count(query)  
10  

be-mean-pokemons> db.pokemons.count()  
15  

be-mean-pokemons> db.pokemons.count()  
5  
```