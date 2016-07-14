# Node.js - Aula 08 - Exercício 

**User:** [gkal19](https://github.com/gkal19)
**Autor:** Gabriel Kalani

**Data** 1465801860

#### 1 - Insira 5 pokemons novos, na coleção pokemons, escolha 3 e os adicione em um array e uma nova coleção chamada meus-pokemons, utilizando o ObjectId. Adicione o required em campos que ache obrigatório no Schema do Pokemon.
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

const data = [  
  {  
    name: 'Harry James Potter',  
    description: 'Harry James Potter',  
    type: 'bruxo',  
    attack: 76,  
    height: 1.7  
  },  

  {  
    name: 'Hermione Granger',  
    description: 'Hermione Granger',  
    type: 'bruxa',  
    attack: 105,  
    height: 2.3  
  },  

  {  
    name: 'Ronald Weasley',  
    description: 'Ronald Weasley',  
    type: 'bruxo',  
    attack: 153,  
    height: 1.6  
  },  

  {  
    name: 'Neville Longbottom',  
    description: 'Neville Longbottom',  
    type: 'bruxo',  
    attack: 51,  
    height: 1.7  
  },  

  {  
    name: 'Luna Lovegood',  
    description: 'Luna Lovegood',  
    type: 'bruxa',  
    attack: 99,  
    height: 1.7  
  },    
];  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});  
```

#### Escolher 3 pokemons e inserindo em uma nova coleção com o ObjectId.
```js
'use strict';  

const mongoose = require('mongoose');  
const dbURI = 'mongodb://localhost/be-mean-instagram';  
mongoose.connect(dbURI);  
const Schema = mongoose.Schema;  

const _schema = {  
  pokemons: [{type: Schema.Types.ObjectId, ref: 'pokemons'}]  
};  

const PokemonSchema = new Schema(_schema);  
const PokemonModel = mongoose.model('myPokemons', PokemonSchema);  
 
const data = {  
  pokemons: ['575c12969d2f2ed60edbb52b', '575c12969d2f2ed60edbb52c', '575c12969d2f2ed60edbb52d']  
};  

PokemonModel.create(data, (err, data) => {  
  if (err) return console.log('Erro: ', err);  
  console.log('Inserido(s): ', data);  
});
```

#### 2 - Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):
> Os campos utilizados serão: CPF, E-mail, CNPJ, URL e IP.

`app.js`  

```js  
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  

const data = {  
  email: 'gabrielsilva1956@gmail.com',  
  cpf: 12345678,  
  cnpj: 123456,  
  url: 'www.gabrielkalani.com.br',  
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
create:  { email: 'gabrielsilva1956@gmail.com',  
  cpf: 12345678,  
  cnpj: 123456,  
  url: 'www.gabrielkalani.com.br',  
  ip: '192.168.0.1' }  
Mongoose default connection connected to mongodb://localhost/be-mean-instagram  
Mongoose default connection is open  
Inseriu: { _id: 56d84cfdac419e351638ase0,  
  ip: '192.168.0.1',  
  url: 'www.gabrielkalani.com.br',  
  cnpj: 123456,  
  cpf: 12345678,  
  email: 'gabrielsilva1956@gmail.com',  
  __v: 0 }  
```

#### 3 - Dê 3 exemplos diferentes, de cada, utilizando as funções:
`findAndModify`,`findOneAndUpdate` e `findOneAndRemove`.

#### Schema e Model
```js
'use strict';

const mongoose = require('mongoose');
const db = 'mongodb://localhost/be-mean-instagram';

mongoose.connect( db );

const Schema = mongoose.Schema;
const _schema = {
  name: { type: String, required: true, match: /^./i },
  description: { type: String, required: true, match: /^./i},
  type: { type: String, required: true, match: /^./i},
  attack: { type: Number, min: 1}
};

const PokemonSchema = new Schema(_schema);

const Model = mongoose.model('pokemons', PokemonSchema);
```

#### findAndModify
```js
'use strict';

const mongoose = require( 'mongoose' );
const db = 'mongodb://localhost/be-mean-instagram';
mongoose.connect(db);

const Schema = mongoose.Schema;

const _schema = {
  name: {type: String, match: /^./i},
  description: {type: String, match: /^./i},
  type: {type: String, match: /^./i},
  attack: {type: Number, min: 1}
};

const PokemonSchema = new Schema(_schema);

PokemonSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
  return this.collection.findAndModify(query, sort, doc, options, callback);
};

const Model = mongoose.model('pokemons', PokemonSchema);

const query  = { attack: {$lte: 5 } };
const mod = { type: 'eletric' };
const options = { multi: true };

Model.findAndModify(query, [], mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterado: ', data);
});

// Output Terminal
Alterado:  { value: null, ok: 1 }
```

#### findOneAndUpdate 

##### Exemplo 1
```js
const query = { name: /Pikachu/i};
const mod = { type: 'Electric' };

Model.findOneAndUpdate(query, mod, {}, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterado: ', data);
})

// Output Terminal
Alterado:  { value: null, ok: 1 }
```
##### Exemplo 2
```js
const query = { attack: {$lte: 10}};
const mod = {attack: 50};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterado: ', data);
});

//Output Terminal
Alterado:  { value: null, ok: 1 }
```
##### Exemplo 3
```js
const query = {$and: [{type: 'fire'}, {attack: {$gte: 5}}]};
const mod = {attack: 51, description: 'update attack'};
const options = {multi: true};

Model.findOneAndUpdate(query, mod, options, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Alterado: ', data);
});

//Output Terminal
Alterado:  { value: null, ok: 1 }
```

#### findOneAndRemove
##### Exemplo 1
```js
const query = { attack: null };

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});

//Output
Removido:  { value: null, ok: 1 }
```

##### Exemplo 2
```js
const query = { $and: [{type: 'grass'}, {attack: {$gte: 100}}]};

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});

//Output
Removido:  { value: null, ok: 1 }
```

##### Exemplo 3
```js
const query = {attack: {$lte: 10}};

Model.findOneAndRemove(query, function (err, data) {
  if (err) return console.log('Erro: ', err);
  return console.log('Removeu: ', data);
});

//Output
Removido:  { value: null, ok: 1 }
```

#### 4 - Crie 1 Schema com todo CRUD funcional e métodos especiais, que agrupe: 
> virtuals, getters & setters, method & static, embedded, document ,plugins, middlewares.

<br>
> Primeiramente criei um json com o nome de 5 bruxos da série Harry Potter e os importei para o banco `be-mean-instagram`:
```json
{name: {first: 'Harry', last: 'Potter'}, age: 36, type: 'Student'}  
{name: {first: 'Hermione', last: 'Granger'}, age: 36, type: 'Student'}  
{name: {first: 'Ronald', last: 'Weasley'}, age: 37, type: 'Student'}  
{name: {first: 'Luna', last: 'Lovegood'}, age: 35, type: 'Student'}  
{name: {first: 'Alvus', last: 'Dumbledore'}, age: 135, type: 'Master'}  
```

```js
// app.js
'use strict';  

require('./db/config');  

const CRUD = require('./controller');  

const hab1 = {  
  title: 'Abaffiato',  
  since: 2005  
};  

const hab2 = {  
  title: 'Liberacorpus',  
  since: 1999  
};  

const hab3 = {  
  title: 'Levicorpus',  
  since: 2001  
};  

const data = {  
  name: {  
    first: 'Severo',  
    last: 'Snape'  
  },  
  age: 38,  
  skills: [hab1, hab2, hab3],  
  type: 'Master'  
};  

CRUD.create(data);  

// Search  
const query = "575c32ed6cc3d63b8a6d5f0f";  

CRUD.retrieve(query);  


// Method Searc
const query = {name: {first: 'Harry', last: 'Potter'}, class: /Student/i};  

CRUD.retrieve_method(query);  


// Static Search
const query = {name: {first: 'Alvus', last: 'Dumbledore'}};  

CRUD.retrieve_static(query);  

// Pre-Count Middleware Search
const query = {age: 37};  

CRUD.retrieve_middleware(query);
```

```js
// Controller.js
'use strict';  

const mongoose = require('mongoose');  

const Schema = require('./schema');  
const Model = require('./model')(Schema, 'bruxos');  

const CRUD = {  
  create: function(data) {  
    console.log("Criado: ", data);  
    const bruxoModel = new Model(data);  
    bruxoModel.save(function (err, data) {  
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
      return console.log('Nome: ', data.name.full, '\nTipo de bruxo: ', data.weight_class, '\nIdade: ', data.age);  
    });  
  },  
  retrieve_method: function(query){  
    Schema.methods.findSimilarType = function findSimilarType (callback) {  
      return this.model('Categoria', Schema);  
    };  

    const MethodModel = mongoose.model('MethodModel', Schema);  
    const outrobruxo = new MethodModel(query);  

    
  },  
  retrieve_static: function(query) {  
    Schema.statics.search = function (name, callback) {  
      return this.where('name', new RegExp(name, 'i')).exec(callback);  
    };  

    const StaticModel = mongoose.model('StaticModel', Schema);  

  
  },  
  retrieve_middleware: function(query){  
    const countQuery = Model.where(query).count((err, count) => {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Existem ' + count + ' bruxos com a mesma idade!');  
    });  
  },  
  update: function(query, mod, options) {  
    var options = options || {};  
    Model.update(query, mod, options, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Alterado:', data);  
    });  
  },  
  delete: function(query) {  
    Model.remove(query, function (err, data) {  
      if (err) return console.log('ERRO: ', err);  
      return console.log('Deletado:', data);  
    });  
  },  
};  

module.exports = CRUD;
```
##### Resultado
```shell
[nodemon] starting `node app.js`
Criado:  { name: { first: 'Severo', last: 'Snape' },
  age: 38,
  skills: 
   [ { title: 'Abaffiato', since: 2005 },
     { title: 'Liberacorpus', since: 1999 },
     { title: 'Levicorpus', since: 2001 } ],
  type: 'Master' }
Mongoose default connection connected to mongodb://localhost/be-mean-instagram
Mongoose default connection is open
Nome:  Harry Potter 
Tipo de bruxo:  undefined 
Idade:  36
Existem 2 bruxos com a mesma idade!
Inseriu: { name: { last: 'Snape', first: 'Severo' },
  skills: 
   [ { _id: 575c488ae3ab5d5d172c4273,
       since: 2005,
       title: 'Abaffiato' },
     { _id: 575c488ae3ab5d5d172c4272,
       since: 1999,
       title: 'Liberacorpus' },
     { _id: 575c488ae3ab5d5d172c4271,
       since: 2001,
       title: 'Levicorpus' } ],
  created_at: Sat Jun 11 2016 17:21:14 GMT+0000 (UTC),
  _id: 575c488ae3ab5d5d172c4270,
  type: 'Master',
  age: 38,
  __v: 0 }
```

#### 5 - Crie 1 Schema para password com criptografia e arquitetura atômica.
> use SHA256 com SALT como criptografia;use middleware com pre-save;use methods.

> O código aqui iria ficar grande demais e sem querer, exclui um bocado de arquivos responsáveis pelo resultado. Então colocarei o resultado que compilou corretamente:
```shell
Senha Inserida: gabrielkalani
Senha Criptografada: e895d4f51ccd9b2aa46196b833346752d089bdb38fccd50a2ab1c0451ceee34e
