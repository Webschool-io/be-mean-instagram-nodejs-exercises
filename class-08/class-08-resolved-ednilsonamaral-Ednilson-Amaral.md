# Node.js - Aula 08 - Exercício  
**user:** [ednilsonamaral](https://github.com/ednilsonamaral)  
**autor:** Ednilson Amaral


## 1 - Insira 5 pokemons novos, na coleção `pokemons`, escolha 3 e os adicione em um array e uma nova coleção chamada `meus-pokemons`, utilizando o `ObjectId`. Adicione o `required` em campos que ache obrigatório no *Schema* do Pokemon.  

### Inserindo 5 pokemons novos  

`crud.js`  
```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  

const _schema = {  
  name: {type: String, required: true, match: /^./i},  
  description: {type: String, required: true, match: /^./i},  
  type: {type: String, required: true, match: /^./i},  
  attack: {type: Number, min: 1},  
  height: {type: Number}  
};  

const PokemonSchema = new Schema(_schema);  
const PokemonModel = mongoose.model('pokemons', PokemonSchema);  

//inserindo os 5 novos pokemons  
const data = [  
  {  
    name: 'Educamon',  
    description: 'O pokemon mais educadinho do universo',  
    type: 'educador',  
    attack: 76,  
    height: 1.7  
  },  

  {  
    name: 'NFLMon',  
    description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',  
    type: 'player',  
    attack: 105,  
    height: 2.3  
  },  

  {  
    name: 'JiuJiteroMon',  
    description: 'Faixa preta 3º grau',  
    type: 'jiujitsu',  
    attack: 153,  
    height: 1.6  
  },  

  {  
    name: 'BaianoMon',  
    description: 'O pokemon mais preguiçoso do universo',  
    type: 'preguiça',  
    attack: 51,  
    height: 1.7  
  },  

  {  
    name: 'GoogleMon',  
    description: 'O pokemon mais googlet do universo',  
    type: 'google',  
    attack: 99,  
    height: 1.7  
  },    
];  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```


Saída no terminal:  

```  
$ node app.js  
Mongoose default connection error: Error: Trying to open unclosed connection.  
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido(s):  [ { _id: 56d841324d9d0e4b13764e93,  
    height: 1.7,  
    attack: 76,  
    type: 'educador',  
    description: 'O pokemon mais educadinho do universo',  
    name: 'Educamon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e94,  
    height: 2.3,  
    attack: 105,  
    type: 'player',  
    description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',  
    name: 'NFLMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e95,  
    height: 1.6,  
    attack: 153,  
    type: 'jiujitsu',  
    description: 'Faixa preta 3º grau',  
    name: 'JiuJiteroMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e96,  
    height: 1.7,  
    attack: 51,  
    type: 'preguiça',  
    description: 'O pokemon mais preguiçoso do universo',  
    name: 'BaianoMon',  
    __v: 0 },  
  { _id: 56d841324d9d0e4b13764e97,  
    height: 1.7,  
    attack: 99,  
    type: 'google',  
    description: 'O pokemon mais googlet do universo',  
    name: 'GoogleMon',  
    __v: 0 } ]  
```


### Escolhendo 3 pokemons e inserindo em uma nova coleção com o `ObjectId`.  

`ref.js`  

```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  

const _schema = {  
  pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]  
};  

const PokemonSchema = new Schema(_schema);  
const PokemonModel = mongoose.model('meus-pokemons', PokemonSchema);  

//inserindo os 3 pokemons escolhidos com ObjectID  
const data = {  
  pokemons: ['56d841324d9d0e4b13764e97', '56d841324d9d0e4b13764e96', '56d841324d9d0e4b13764e95']  
};  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```


Saída no terminal:  

```  
$ node app.js  
Mongoose default connection error: Error: Trying to open unclosed connection.  
Mongoose default connection connected to mongodb://localhost/be-mean-pokemons  
Mongoose default connection is open  
Inserido(s):  { pokemons:  
   [ 56d841324d9d0e4b13764e97,  
     56d841324d9d0e4b13764e96,  
     56d841324d9d0e4b13764e95 ],  
  _id: 56d843ae813254aa1312e7a7,  
  __v: 0 }  
```


## 2 - Crie um *Schema* de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):  

* email;  
* cpf;  
* cnpj;  
* url;  
* ip.


`app.js`  

```js  
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  

const data = {  
  email: 'ednilsonamaral.ti@gmail.com',  
  cpf: 12345678,  
  cnpj: 123654,  
  url: 'www.ednilsonamaral.com.br',  
  ip: '192.168.0.1'  
};  

CRUD.create(data);  
```


`schema.js`  

```js  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const email = require('./fields/field-email');  
const cpf = require('./fields/field-cpf');  
const cnpj = require('./fields/field-cnpj');  
const url = require('./fields/field-url');  
const ip = require('./fields/field-ip');  

const _schema = {  
  email,  
  cpf,  
  cnpj,  
  url,  
  ip  
};  

module.exports = new Schema(_schema);  
```


`model.js`  

```js  
module.exports = function (Schema, ModelName) {  
  const mongoose = require('mongoose');  
  return mongoose.model(ModelName, Schema);  
};  
```


`controller.js`  

```js  
'use strict';  

const Schema = require('./schema');  
const Model = require('./model')(Schema, 'atomicos');  

const CRUD = {  
  create: function(data) {  
    console.log("create: ", data);  
    const AmoticosModel = new Model(data);  
    AmoticosModel.save(function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Inseriu:', data);  
    });  
  },  
  retrieve: function(query) {  
    Model.find(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Buscou:', data);  
    });  
  },  
  update: function(query, mod, options) {  
    var options = options || {};  
    Model.update(query, mod, options, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Alterou:', data);  
    });  
  },  
  delete: function(query) {  
    Model.remove(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Deletou:', data);  
    });  
  },  
};  

module.exports = CRUD;  
```


`fields`  

```js  
//field-email.js  
module.exports = {  
  type: String,   
  match:   
    [  
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,   
      'Preencha um e-mail válido!'  
    ],   
    required: true  
  }  

//field-cpf.js  
module.exports = {type: Number, minlength: 3, maxlength: 11, required: true}  

//field-cnpj.js  
module.exports = {type: Number, minlength: 3}  

//field-url.js  
module.exports = {type: String, required: true, match: /([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/}  

//field-ip.js  
module.exports = {type: String, maxlenght: 15}  
```


Saída no terminal:  

```  
$ node app.js  
create:  { email: 'ednilsonamaral.ti@gmail.com',  
  cpf: 12345678,  
  cnpj: 123654,  
  url: 'www.ednilsonamaral.com.br',  
  ip: '192.168.0.1' }  
Mongoose default connection connected to mongodb://localhost/bancoTeste  
Mongoose default connection is open  
Inseriu: { _id: 56d84cfdac4d9e351638cce0,  
  ip: '192.168.0.1',  
  url: 'www.ednilsonamaral.com.br',  
  cnpj: 123654,  
  cpf: 12345678,  
  email: 'ednilsonamaral.ti@gmail.com',  
  __v: 0 }  
```


## 3 - Dê 3 exemplos **diferentes**, de cada, utilizando as funções:  

### Schema e Model  

```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  
const _schema = {  
  name: {type: String, required: true, match: /^./i},  
  description: {type: String, required: true, match: /^./i},  
  type: {type: String, required: true, match: /^./i},  
  attack: {type: Number, min: 1},  
  height: {type: Number}  
};  

const PokemonSchema = new Schema(_schema);  

const Model = mongoose.model('pokemons', PokemonSchema);  
```  


### `findAndModify`  

`findAndModify.js`  

```js  
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-pokemons';  

mongoose.connect(dbURI);  

const Schema = mongoose.Schema;  

const _schema = {  
  name: {type: String, match: /^./i},  
  description: {type: String, match: /^./i},  
  type: {type: String, match: /^./i},  
  attack: {type: Number, min: 1},  
  height: {type: Number}  
};  

const PokemonSchema = new Schema(_schema);  

PokemonSchema.statics.findAndModify = function (query, sort, doc, options, callback) {  
  return this.collection.findAndModify(query, sort, doc, options, callback);  
};  

const Model = mongoose.model('pokemons', PokemonSchema);  

const query  = {attack: {$lte: 51}};  
const mod = {type: 'new york giants'};  
const opt = {multi: true};  

Model.findAndModify(query, [], mod, opt, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Alterou: ', data);  
});  
```


Saída no terminal:  

```  
$ node findAndModify.js  
Alterou:  { lastErrorObject: { updatedExisting: true, n: 1 },  
  value:   
   { _id: 56aeb9d04bb106b114749436,  
     name: 'Nerdmon',  
     description: 'Deu um upgrade, pode melhorar, parça!',  
     type: 'nerd',  
     attack: 51,  
     defense: 888,  
     height: 1.8,  
     __v: 0 },  
  ok: 1 }  
```


Na documentação do Mongoose diz que não possui o `findAndModify`, então, com a ajuda de alguns colegas e pesquisando na net, foi mencionado uma alternativa, utilizando o `.statics`, conforme exemplo acima.


###`findOneAndUpdate`  

#### Exemplo 1

`findOneAndUpdate.js`  

```js  
const query = {name: /nflmon/i};  
const mod = {type: 'professional'};  
const options = {};  

Model.findOneAndUpdate(query, mod, options, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Alterou: ', data);  
})  
```


Saída no terminal:  

```  
$ node findOneAndUpdate.js  
Alterou:  { __v: 0,  
  height: 2.3,  
  attack: 105,  
  type: 'player',  
  description: 'O pokemon mais QB, fanático por NFL, qualquer um que se aproxime ele dá um tackle',  
  name: 'NFLMon',  
  _id: 56d841324d9d0e4b13764e94 }  
```

#### Exemplo 2

`findOneAndUpdate.js`  

```js  
const query = {attack: {$lte: 50}};  
const mod = {attack: 999};  
const options = {multi: true};  

Model.findOneAndUpdate(query, mod, options, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Alterou: ', data);  
});  
```


Saída no terminal:  

```  
$ node findOneAndUpdate.js  
Alterou:  { moves: [ 'engole fogo', 'assopra veneno', 'desvio' ],  
  active: false,  
  height: 0.4,  
  attack: 49,  
  type: 'grama',  
  description: 'Chicote de trepadeira',  
  name: 'Bulbassauro',  
  _id: 564cff04f9025dedb2553204 }  
```

#### Exemplo 3

`findOneAndUpdate.js`  

```js  
const query = {$and: [{type: 'nerd'}, {attack: {$gte: 40}}]};
const mod = {attack: 51, description: 'Deu um upgrade, pode melhorar, parça!'};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterou: ', data);
});
```


Saída no terminal:  

```  
$ node findOneAndUpdate.js  
Alterou:  { __v: 0,  
  height: 1.8,  
  defense: 888,  
  attack: 49,  
  type: 'nerd',  
  description: 'O pokemon mais nerd que já existiu, que existe ou que existirá',  
  name: 'Nerdmon',  
  _id: 56aeb9d04bb106b114749436 }  
```


###`findOneAndRemove`  

#### Exemplo 1

`findOneAndRemove.js`  

```js  
const query = {attack: null};  

Model.findOneAndRemove(query, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Removeu: ', data);  
});  
```


Saída no terminal:  

```  
$ node findOneAndRemove.js  
Removeu:  { description: 'Sem maiores informações',  
  moves: [],  
  defense: null,  
  height: null,  
  attack: null,  
  name: 'AindaNaoExisteMom',  
  _id: 564de099fc7e5880d64a877e }  
```

#### Exemplo 2

`findOneAndRemove.js`  

```js  
const query = {$and: [{type: 'google'}, {height: {$gte: 1.5}}]};  

Model.findOneAndRemove(query, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Removeu: ', data);  
});  
```


Saída no terminal:  

```  
$ node findOneAndRemove.js  
Removeu:  { __v: 0,  
  height: 1.7,  
  attack: 99,  
  type: 'google',  
  description: 'O pokemon mais googlet do universo',  
  name: 'GoogleMon',  
  _id: 56d841324d9d0e4b13764e97 }  
```

#### Exemplo 3

`findOneAndRemove.js`  

```js  
const query = {height: {$lte: 1.7}};  

Model.findOneAndRemove(query, function (err, data) {  
  if (err) return console.log('Erro: ', err);  
  return console.log('Removeu: ', data);  
});  
```


Saída no terminal:  

```  
$ node findOneAndRemove.js  
Removeu:  { moves: [ 'engole fogo', 'assopra veneno', 'desvio' ],  
  active: false,  
  height: 0.4,  
  attack: 999,  
  type: 'grama',  
  description: 'Chicote de trepadeira',  
  name: 'Bulbassauro',  
  _id: 564cff04f9025dedb2553204 }  
```


## 4 - Crie 1 *Schema* com todo CRUD funcional e métodos especiais, que agrupe:  

* virtuals;  
* getters & setters;  
* method & static;  
* embedded document;  
* plugins;  
* middlewares.


Realizei a importação do `fighters.json` no *database* para trabalhar com o CRUD em cima de alguns documentos já presentes, e, também adicionei um novo documento via `app.js`.


`fighters.json`  

```js  
{name: {first: 'Demetrious', last: 'Johnson'}, age: 29, weight_class: 'Flyweight'}  
{name: {first: 'Joseph', last: 'Benavidez'}, age: 31, weight_class: 'Flyweight'}  
{name: {first: 'Conor', last: 'McGregor'}, age: 27, weight_class: 'Featherweight'}  
{name: {first: 'José', last: 'Aldo'}, age: 29, weight_class: 'Featherweight'}  
{name: {first: 'Domminick', last: 'Cruz'}, age: 30, weight_class: 'Bantamweight'}  
```


Importando:  

```  
$ mongoimport --db bancoTeste --collection fighters --drop --file fighters.json  
2016-03-07T14:13:25.769-0300  connected to: localhost  
2016-03-07T14:13:25.770-0300  dropping: bancoTeste.fighters  
2016-03-07T14:13:26.206-0300  imported 5 documents  
```


Abaixo, os arquivos do CRUD funcional com os métodos solicitados.


`config.js`  

```js  
const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/bancoTeste';  

mongoose.connect(dbURI);  

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection connected to ' + dbURI);  
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

process.on('SIGINT', function() {  
  mongoose.connection.close(function () {  
    console.log('Mongoose default connection disconnected through app termination');  
    process.exit(0);  
  });  
});  
```


`app.js`  

```js  
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  

//inserindo novo documento  
const hab1 = {  
  title: 'Jiu Jitsu',  
  since: 2005  
};  

const hab2 = {  
  title: 'Muay Thai',  
  since: 1999  
};  

const hab3 = {  
  title: 'Boxe',  
  since: 2001  
};  

const data = {  
  name: {  
    first: 'Anderson',  
    last: 'Silva'  
  },  
  age: 42,  
  skills: [hab1, hab2, hab3],  
  weight_class: 'Middleweight'  
};  

CRUD.create(data);  


//pesquisando um documento  
const query = "56ddce078b09ec822118e4c7";  

CRUD.retrieve(query);  


//pesquisando através de um method  
const query = {name: {first: 'Mauro', last: 'Filho'}, weight_class: /featherweight/i};  

CRUD.retrieve_method(query);  


//pesquisando através de uma static  
const query = {name: {first: 'Anderson', last: 'Silva'}};  

CRUD.retrieve_static(query);  


//pesquisando através de middleware pre count  
const query = {age: 29};  

CRUD.retrieve_middleware(query);  
```


`controller.js`  

```js  
'use strict';  

const mongoose = require('mongoose');  

const Schema = require('./schema');  
const Model = require('./model')(Schema, 'fighters');  

const CRUD = {  
  create: function(data) {  
    console.log("create: ", data);  
    const FighterModel = new Model(data);  
    FighterModel.save(function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Inseriu:', data);  
    });  
  },  
  retrieve: function(query) {  
    Schema  
      .virtual('name.full')  
      .get(function (){  
        return this.name.first + ' ' + this.name.last;  
      });  

    Model.findById(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Nome: ', data.name.full, '\nCategoria de Peso: ', data.weight_class, '\nIdade: ', data.age);  
    });  
  },  
  retrieve_method: function(query){  
    Schema.methods.findSimilarType = function findSimilarType (callback) {  
      return this.model('MesmaCategoria', Schema);  
    };  

    const MethodModel = mongoose.model('MethodModel', Schema);  
    const outroFighter = new MethodModel(query);  
  
    outroFighter.findSimilarType(function (err, data){  
      if (err) return console.log('ERRO: ', err);  
      return data.forEach((fighters) => console.log('fighter: ', fighters));  
    });  
  },  
  retrieve_static: function(query) {  
    Schema.statics.search = function (name, callback) {  
      return this.where('name', new RegExp(name, 'i')).exec(callback);  
    };  

    const StaticModel = mongoose.model('StaticModel', Schema);  
    const maisOutro = new StaticModel(query);  

    maisOutro.search(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return data.forEach((fighters) => console.log('fighter: ', fighters));  
    });  
  },  
  retrieve_middleware: function(query){  
    const countQuery = Model.where(query).count((err, count) => {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Existem ' + count + ' lutadores com a mesma idade!');  
    });  
  },  
  update: function(query, mod, options) {  
    var options = options || {};  
    Model.update(query, mod, options, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Alterou:', data);  
    });  
  },  
  delete: function(query) {  
    Model.remove(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Deletou:', data);  
    });  
  },  
};  

module.exports = CRUD;    
```


`model.js`  

```js  
module.exports = function (Schema, ModelName) {  
  const mongoose = require('mongoose');  
  return mongoose.model(ModelName, Schema);  
};  
```


`schema.js`  

```js  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const name = require('./fields/field-name');  
const age = require('./fields/field-age');  
const weight_class = require('./fields/field-weight_class');  
const created_at = require('./fields/field-created_at');  

const skill = new Schema({  
  title: String,  
  since: Number  
});  

const _schema = {  
  name,  
  age,  
  weight_class,  
  skills: [skill],  
  created_at  
};  

module.exports = new Schema(_schema);  
```


Aqui estão os *fields*:  

```js  
//field-name.js  
module.exports = {  
  first: {type: String, match: /^./i},  
  last: {type: String, match: /^./i}  
},{  
  toObject: {virtuals: true},  
  toJSON: {virtuals: true}  
}  

//field-age.js  
module.exports = {type: Number, min: 18}  

//field-skill.js  
module.exports = {type: [skill]}  

//field-weight_class.js  
function toUpper (v) {  
  return v.toUpperCase();  
}  

module.exports = {  
  type: String,   
  match: /^./i,  
  get: toUpper  
}  

//field-created_at.js  
module.exports = { type: Date, default: Date.now }  
```


## 5 - Crie 1 *Schema* para `password` com criptografia e arquitetura atômica.
* use SHA256 com SALT como criptografia;
* use middleware com pre save;
* use methods.


`app.js`  

```js  
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  
const Model = require('./model');  

const data = {  
  name: {  
    first: 'Ednilson',  
    last: 'Amaral'  
  },  
  password: '123456987'  
}  

CRUD.create(data);
```


`controller.js`  

```js  
'use strict';  

const mongoose = require('mongoose');  

const Schema = require('./schema');  
const Model = require('./model')(Schema, 'userPass');  

const CRUD = {  
  create: function(data) {  
    console.log("create: ", data);  
    SenhaModel.save(function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Inseriu:', data);  
    });  
  },  
  retrieve: function(query) {  
    Schema  
      .virtual('name.full')  
      .get(function (){  
        return this.name.first + ' ' + this.name.last;  
      });  

    Model.findById(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Nome: ', data.name.full, '\nSenha: ', data.password);  
    });  
  },  
  update: function(query, mod, options) {  
    var options = options || {};  
    Model.update(query, mod, options, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Alterou:', data);  
    });  
  },  
  delete: function(query) {  
    Model.remove(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Deletou:', data);  
    });  
  },  
};  

module.exports = CRUD;  
```


`schema.js`  

```js  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const name = require('./fields/field-name');  
const password = require('./fields/field-password');  

function criaUsuario (){  
  const novoUsuario = new Schema({  
    name,  
    password  
  });  

  novoUsuario.methods.vaiCriptografar = function (){  
    const crypto = require('crypto');  
    //fazendo a mágica acontecer  
    const salt = crypto.randomBytes(128).toString('base64');  
    const chave = crypto.pbkdf2Sync(this.password, 'salt', 100000, 256, 'sha256');  

    return chave.toString('hex');  
  };  

  novoUsuario.pre('save', true, function (next, done) {  
    console.log('Senha SEM criptografia: ', '${this.password}');  
    //fazendo a mágica acontecer  
    this.password = this.vaiCriptografar();  
    console.log('\nSenha COM criptografia: ', '${this.password}');  
    next();  
  });  
  
  return mongoose.model('SenhaModel', novoUsuario);  
}  


module.exports = exports = criaUsuario();  
```


`model.js`  

```js  
module.exports = function (Schema, ModelName) {  
  const mongoose = require('mongoose');  
  return mongoose.model(ModelName, Schema);  
};  
```


`fields`  

```js  
//field-name  
module.exports = {  
  first: {type: String, match: /^./i},  
  last: {type: String, match: /^./i}  
},{  
  toObject: {virtuals: true},  
  toJSON: {virtuals: true}  
}  

//field-password  
module.exports = {type: String, match: /^./i}  
```


`config.js`  

```js  
const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/bancoTeste';  

mongoose.connect(dbURI);  

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection connected to ' + dbURI);  
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

process.on('SIGINT', function() {  
  mongoose.connection.close(function () {  
    console.log('Mongoose default connection disconnected through app termination');  
    process.exit(0);  
  });  
});  
```


Saída no terminal:  

```  
Senha SEM criptografia: 123456987  
Senha COM criptografia: B4FBE57144DF88EEE69838FEE592DFE7FC250722CBCDB217CC89E67295FD8073  
```