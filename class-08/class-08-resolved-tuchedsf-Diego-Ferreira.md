# Node.js - Aula 08 - Exercício  
**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira

## Exercícios Aula 8
### 1- Insira 5 pokemons novos, na coleção `pokemons`, escolha 3 e os adicione em um array e uma nova coleção chamada `meus-pokemons`, utilizando o `ObjectId`. Adicione o `required` em campos que ache obrigatório no *Schema* do Pokemon. 

model.js
```js
'use strict';
module.exports = function(Schema, ModelName) {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}
```

Pokemon-schema.js
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('../fields/field-name');
const description = require('../fields/field-description');
const attack = require('../fields/field-attack');
const defense  = require('../fields/field-defense');
const height  = require('../fields/field-height');
const cor = require('../fields/field-cor');
const created_at = require('../fields/field-created_at');

const _schema = new Schema({
  name,
  description,
  attack,
  defense,
  height,
  cor,
  created_at
});

//exportando o schema para poder ser visivel 
module.exports = exports = _schema;
```

####Fields (Abaixo apenas os fields com required true, para não ficar maior ainda o exercício)
field-cor.js
```js
module.exports = {type: String, enum: ['Red', 'Blue', 'Green'], required:true};
```

field-name.js
```js
module.exports = {type : String, required:true};
```

field-description.js
```js
module.exports =  {type: String,  minlength : 5, maxlength : 50, required: true};
```

Pokemon-controller.js
```js
'use strict';
const PokemonSchema = require('../model/schema/Pokemon-schema');
const Model = require('../model/model')(PokemonSchema,'Pokemon');
const error = require('../util/func_error');
const success = require('../util/func_success');

const CRUD = {
  create : function (data) {
    Model.create(data).then(success , error);
  },
  retrive : function (query) {
    let promise = Model.find(query).exec();
    promise.then(success, error);
  },
  update : function (query,mod, options) {
    options = options || {} //{ multi: true }
    let promise = Model.update(query,mod, options).exec();
    promise.then(success, error);
  },
  delete : function (query) {
      Model.remove(query).then(success , error);
  }
}

module.exports = CRUD;
```

app.js (Adicionando 5 pokemons)
```js
'use strict';
require('./db/config');
const CRUD = require('./controller/Pokemon-controller');
const array = [
{
    name : "Yoytubemon",
    description: "engana os pokes projetando videos na tela",
    attack: 95,
    defense : 20,
    height : 1,
    cor: "Red"
  },
  {
    name : "Gramosauro",
    description: "Pokemon especialista em grama",
    attack: 40,
    defense : 30,
    height : 0.4,    
    cor: "Green"  
  },
  {
    name : "SublimeTextmon",
    description: "Pokemon especialista em comandos sublime",
    attack: 82,
    defense : 60,
    height : 0.5,
    cor: "Blue"
  },
  {
    name : "BE-MEANMON",
    description: "Pokemon especialista fullstak MEAN",
    attack: 95,
    defense : 80,
    height : 3,
    cor: "Blue"
  },
  {
    name : "SublimeTextmon",
    description: "Pokemon especialista em grama",
    attack: 82,
    defense : 60,
    height : 0.5,
    cor: "Green"
  },
  {
    name: "Poke atom",
    description: "Pokemon criado no atom design",
    attack: 95,
    defense : 84,
    height : 2,
    cor: 'Blue'
  }
]
CRUD.create(array);
```

Saida Terminal
```
MacBook-Air-Diego:8mongoose-atomic diego$ node app.js
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
[ { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d227,
    cor: 'Red',
    height: 1,
    defense: 20,
    attack: 95,
    description: 'engana os pokes projetando videos na tela',
    name: 'Yoytubemon',
    __v: 0 },
  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d228,
    cor: 'Green',
    height: 0.4,
    defense: 30,
    attack: 40,
    description: 'Pokemon especialista em grama',
    name: 'Gramosauro',
    __v: 0 },
  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d229,
    cor: 'Blue',
    height: 0.5,
    defense: 60,
    attack: 82,
    description: 'Pokemon especialista em comandos sublime',
    name: 'SublimeTextmon',
    __v: 0 },
  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d22a,
    cor: 'Blue',
    height: 3,
    defense: 80,
    attack: 95,
    description: 'Pokemon especialista fullstak MEAN',
    name: 'BE-MEANMON',
    __v: 0 },
  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d22b,
    cor: 'Green',
    height: 0.5,
    defense: 60,
    attack: 82,
    description: 'Pokemon especialista em grama',
    name: 'SublimeTextmon',
    __v: 0 },
  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    _id: 5738791dbf16d8dd3bf3d22c,
    cor: 'Blue',
    height: 2,
    defense: 84,
    attack: 95,
    description: 'Pokemon criado no atom design',
    name: 'Poke atom',
    __v: 0 } ]
```

####Meus pokemons

Field-meusPokemons.js
```js
module.exports = (Schema) => {
  return [{type: Schema.Types.ObjectId, ref: 'Pokemons'}]; 
}
```

Meus-pokemons-schema.js
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('../fields/field-name');
const meusPokemons = require('../fields/field-meusPokemons')(Schema);
const created_at = require('../fields/field-created_at');

const _schema = new Schema({
  name,
  meusPokemons,
  created_at
});

module.exports = exports = _schema;
```

Meus-pokemons-controller.js
```js
'use strict';

const MeusPokemonSchema = require('../model/schema/Meus-pokemons-schema');
const Model = require('../model/model')(MeusPokemonSchema,'Meus-Pokemons');
const error = require('../util/func_error');
const success = require('../util/func_success');

const CRUD = {
  create : function (data) {
    Model.create(data).then(success , error);
  },
  retrive : function (query) {
    let promise = Model.find(query).exec();
    promise.then(success, error);
  },
  update : function (query,mod, options) {
    options = options || {} //{ multi: true }
    let promise = Model.update(query,mod, options).exec();
    promise.then(success, error);
  },
  delete : function (query) {
      Model.remove(query).then(success , error);
  }
}

module.exports = CRUD;
```

app.js (adicionando 3 pelo objectid)
```js
'use strict';
require('./db/config');
const CRUD = require('./controller/Pokemon-controller');
const MeusPokemonsController = require('./controller/Meus-pokemons-controller');
const data = {
  name: 'Minha Nova Coleção',
  meusPokemons: ['57294bdfb6de032bd6811516', '5738791dbf16d8dd3bf3d228','57256bacb6315cbdb70fc87e']
}
MeusPokemonsController.create(data);
```

Saida Terminal
```
MacBook-Air-Diego:8mongoose-atomic diego$ node app.js
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
{ meusPokemons: 
   [ 57294bdfb6de032bd6811516,
     5738791dbf16d8dd3bf3d228,
     57256bacb6315cbdb70fc87e ],
  created_at: Sun May 15 2016 10:47:46 GMT-0300 (BRT),
  _id: 57387e028922acff3c43ab3a,
  name: 'Minha Nova Coleção',
  __v: 0 }
```


### 2 - Crie um *Schema* de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja cada campo sendo um Schema separado):  
* email
* cpf 
* cnpj 
* url 
* ip

field-email.js
```js
'use strict';

const _set = (v) => v.toLowerCase();

const _validate = (email) => /ˆ\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  
const _index = true;

const _field_email = {
  type: String,
  set: _set,
  trim: true,
  unique: true,
  index: _index,
  validate: [_validate, "E-mail inválido: ({VALUE}) - Padrão: xxx@xxx.com"],
  required : true
};

module.exports = _field_email;
```

field-cpf.js
```js
'use strict';
const _validate = (cpf) => /^[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}$/.test(cpf);  
const _index = true;

const field_cpf = {
  type: String,
  unique: true,
  index: _index,
  validate: [_validate, "CPF inválido: ({VALUE}) - Formato: 000.000.000-00"],
};

module.exports = field_cpf;
```

field-cnpj.js
```js
'use strict';
const _validate = (cnpj) => /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj);  
const _index = true;

const field_cnpj = {
  type: String,
  unique: true,
  index: _index,
  validate: [_validate, "CNPJ inválido: ({VALUE})"],
};

module.exports = field_cnpj;
```

field-url.js
```js
'use strict';
const _validate = (url) =>  /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(url);  

const field_url = {
  type: String,
  validate: [_validate, "Url inválida: ({VALUE}) - nao coleque http"],
};

module.exports = field_url;
```

field-ip.js
```js
'use strict';
const _validate = (ip) => /^(((1?[1-9]?|10|2[0-4])\d|25[0-5])($|\.(?!$))){4}$/.test(ip);  

const field_ip = {
  type: String,
  validate: [_validate, "IP inválido: ({VALUE})"],
};

module.exports = field_ip;
```

schema.js
```js
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('../fields/field-email');
const cpf = require('../fields/field-cpf');
const cnpj = require('../fields/field-cnpj');
const url  = require('../fields/field-url');
const ip  = require('../fields/field-ip');

const _schema = new Schema({
  email,
  cpf,
  cnpj,
  url,
  ip
});

module.exports = exports = _schema;
```

### 3 - Dê 3 exemplos **diferentes**, de cada, utilizando as funções:  

####`findAndModify`  
####`findOneAndUpdate`  
####`findOneAndRemove`  

Para este exercício fora utilizados os arquivos do exercício 1, pokemons, e re-colocados apenas os arquivos que foram modificados:

Os arquivos schema e controller abaixo foram alterados para contemplarem os 3 comandods:

Schema.js
```js
'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

const name = require('../fields/field-name');
const description = require('../fields/field-description');
const attack = require('../fields/field-attack');
const defense  = require('../fields/field-defense');
const height  = require('../fields/field-height');
const cor = require('../fields/field-cor');
const created_at = require('../fields/field-created_at');

const _schema = new Schema({
  name,
  description,
  attack,
  defense,
  height,
  cor,
  created_at
});

// findAndModify
_schema.statics.findAndModify = function (query, sort, doc, options, callback) {  
  return this.collection.findAndModify(query, sort, doc, options, callback);  
};  
//exportando o schema para poder ser visivel no controlador
module.exports = exports = _schema;
```


Pokemon-controller.js
```js
'use strict';

// aposntamento para o arquivo com a definição do schema
const PokemonSchema = require('../model/schema/Pokemon-schema');
//const pokemonModel = mongoose.model('pokemons', PokemonSchema);
// apontamento para o model e passando o schema como parametro.
const Model = require('../model/model')(PokemonSchema,'Pokemon');
const error = require('../util/func_error');
const success = require('../util/func_success');


const CRUD = {
  create : function (data) {
    Model.create(data).then(success , error);
  },
  retrive : function (query) {
    //const query = {$and :[{attack : 40}, {defense : 40}]}
    let promise = Model.find(query).exec();
    promise.then(success, error);
  },
  update : function (query,mod, options) {
    //const queryUpdate = {"_id" : "572f4a42cf4c206bfcaa7480"}
    //const mod = {name: "Poke Promise", defense : 50}
    options = options || {} //{ multi: true }
    let promise = Model.update(query,mod, options).exec();
    promise.then(success, error);
  },
  delete : function (query) {
          //const queryDelete = {"_id" : "572f4a42cf4c206bfcaa7480"}

      Model.remove(query).then(success , error);
  },
  findAndModify: function(query, mod, opt){
    Model.findAndModify(query, [], mod, opt, function (err, data) {
    if (err) return console.log('Erro: ', err);
      return console.log('Alterou: ', data);
    });
  },
  findOneAndUpdate: function (query, mod, opt) { 
      Model.findOneAndUpdate(query, mod, opt, function (err, data) {
      if (err) return console.log('Erro: ', err);
      return console.log('Alterou: ', data);
    });
  },
  findOneAndRemove: function (query) {
    Model.findOneAndRemove(query, function (err, data) {  
    if (err) return console.log('Erro: ', err);  
      return console.log('Removeu: ', data);  
    });  
  }
}

module.exports = CRUD;
```


- findAndModify
FindAndModify fiz com base no stackoverflow pois pela documentação do mongoose (http://mongoosejs.com/docs/api.html#query-js) este comando é feito atraves do findOneAndUpdate, findOneAndRemove, etc...

app.js - com chamada ao método
```js
'use strict';

//apontamento arquivo configuracao banco de dados.
require('./db/config');
const CRUD = require('./controller/Pokemon-controller');
const MeusPokemonsController = require('./controller/Meus-pokemons-controller');

const query = {defense : 30}  
const mod = {defense: 32};  
const opt = {multi: true}; 
CRUD.findAndModify(query,mod,opt);

const query = {defense : 32}  
const mod = {defense: 30};  
const opt = {multi: true}; 
CRUD.findAndModify(query,mod,opt);
```

Resultado
```
MacBook-Air-Diego:8mongoose-atomic diego$ node app.js 
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
Alterou:  { lastErrorObject: { updatedExisting: true, n: 1 },
  value: 
   { _id: 57256bacb6315cbdb70fc87e,
     name: 'Tuchemon',
     description: 'Tartaruga tuche',
     type: 'reptile',
     defense: 30,
     height: 20,
     attack: 0,
     __v: 0 },
  ok: 1 }

MacBook-Air-Diego:8mongoose-atomic diego$ node app.js 
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
Alterou:  { lastErrorObject: { updatedExisting: true, n: 1 },
  value: { _id: 57256bacb6315cbdb70fc87e, defense: 32 },
  ok: 1 }
```

- findOneAndUpdate

app.js
```js
'use strict';

//apontamento arquivo configuracao banco de dados.
require('./db/config');
const CRUD = require('./controller/Pokemon-controller');
const MeusPokemonsController = require('./controller/Meus-pokemons-controller');

console.log("Exemplo 1");
const query = {name: /SublimeTextmon/i};  
const mod = {cor: 'Red'};  
const opt = {};  
CRUD.findOneAndUpdate(query,mod,opt);

console.log("Exemplo 2");
const query2 = {$and : [{name: /SublimeTextmon/i}, {cor : 'Green'}]};  
const mod2 = {cor: 'Red'};  
CRUD.findOneAndUpdate(query2,mod2,opt);


console.log("Exemplo 3");
const query3 = {height: {$lt : 2} };  
const mod3 = {height: 2.05};
CRUD.findOneAndUpdate(query3,mod3,opt);
```

Resultado
```
MacBook-Air-Diego:8mongoose-atomic diego$ node app.js 
Exemplo 1
Exemplo 2
Exemplo 3
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
Alterou:  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
  __v: 0,
  cor: 'Blue',
  height: 0.5,
  defense: 60,
  attack: 82,
  description: 'Pokemon especialista em comandos sublime',
  name: 'SublimeTextmon',
  _id: 5738791dbf16d8dd3bf3d229 }
Alterou:   { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
    __v: 0,
    cor: 'Green',
    height: 0.5,
    defense: 60,
    attack: 82,
    description: 'Pokemon especialista em grama',
    name: 'SublimeTextmon',
    _id: 5738791dbf16d8dd3bf3d22b }
Alterou:  { created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  __v: 0,
  cor: 'Green',
  height: 0.4,
  defense: 30,
  attack: 40,
  description: 'Pokemon especialista em grama',
  name: 'Gramosauro',
  _id: 57294bdfb6de032bd6811516 }
```


- findOneAndRemove

app.js
```js
'use strict';

//apontamento arquivo configuracao banco de dados.
require('./db/config');
const CRUD = require('./controller/Pokemon-controller');
const MeusPokemonsController = require('./controller/Meus-pokemons-controller');

console.log("Exemplo 1");
const query = {name: /SublimeTextmon/i};  
CRUD.findOneAndRemove(query);

console.log("Exemplo 2");
const query2 = {cor : 'Green'};  
CRUD.findOneAndRemove(query2);


console.log("Exemplo 3");
const query3 = {height: {$lt : 2} };  
CRUD.findOneAndRemove(query3);
```

Resultado
```
MacBook-Air-Diego:8mongoose-atomic diego$ node app.js 
Exemplo 1
Exemplo 2
Exemplo 3
Mongo default connection connected to mongodb://localhost/be-mean-instagram
Mongo default connection open
Removeu:  { created_at: Sun May 15 2016 10:26:53 GMT-0300 (BRT),
  __v: 0,
  cor: 'Red',
  height: 0.5,
  defense: 60,
  attack: 82,
  description: 'Pokemon especialista em comandos sublime',
  name: 'SublimeTextmon',
  _id: 5738791dbf16d8dd3bf3d229 }
Removeu:  { created_at: Tue May 03 2016 22:09:51 GMT-0300 (BRT),
  __v: 0,
  cor: 'Green',
  height: 2.05,
  defense: 30,
  attack: 40,
  description: 'Pokemon especialista em grama',
  name: 'Gramosauro',
  _id: 57294bdfb6de032bd6811516 }
Removeu:  { created_at: Wed May 18 2016 11:16:39 GMT-0300 (BRT),
  cor: 'Blue',
  height: 0.7,
  defense: 40,
  attack: 40,
  description: 'Pokemon que altera inserindo',
  name: 'Nerdmon',
  _id: 57294fe05daea5abb1cb1c4f }
```

### 4 - Crie 1 *Schema* com todo CRUD funcional e métodos especiais, que agrupe:
* virtuals;  
* getters & setters;  
* method & static;  
* embedded document;  
* plugins;  
* middlewares.

config
```js
//importar o mongoose 
const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/lista-livros';
//criar uma conexão com mongo
mongoose.connect(uriDB);

mongoose.connection.on('connected', function(){
 console.log("Mongo default connection connected to " + uriDB);
});

mongoose.connection.on('error', function(err){
 console.log("Mongo default connection error" + err);
});

mongoose.connection.on('disconnected', function(){
 console.log("Mongo default connection disconnected");
});

mongoose.connection.on('open', function(){
 console.log("Mongo default connection open");
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
       console.log("The connection is closed");
        process.exit(0);
    });
});
```

actions
```js
//action-create.js
'use strict';
const callback = require('./callback');
module.exports = (Model, obj, coment) => {
  let livro = new Model(obj);  
  if (coment.titulo != null) {
    livro.comentariosLeitores.push( coment );
  } 
  Model.create(livro, callback);
}

//action-find.js
'use strict';
const callback = require('./callback');
module.exports = (Model, query) => {
  Model.find(query, callback);
}

//action-findOne.js
'use strict';
const callback = require('./callback');
module.exports = (Model, query) => {
  Model.findOne(query, callback);
};

//action-findTituloCompleto.js
'use strict';
module.exports = (Model, id) => {
  Model.findById(id, (err,data) => {
    if (err) console.log(err);
    console.log("Titulo Completo: " + data.titulo.completo);
  });
};  

//action-remove.js
'use strict';
const callback = require('./callback');
module.exports = (Model, query) => {
  Model.remove(query, callback);
};

//action-update.js
'use strict';
const callback = require('./callback');
module.exports = (Model, query, mod, options) => {
  Model.update(query,mod,options, callback);
}

//callback.js
'use strict';
module.exports = (err, data) => {
  if (err) console.log('Erro:', err);
  else console.log('RETORNOU:', data);
};
```

quarks
```js
//quark-matchNumber.js
module.exports = /\d/g;

//quark-toLowerCase.js
'use strict';
module.exports = (v) => v.toLowerCase();

//quark-toUpperCase.js
'use strict';
module.exports = (v) => v.toUpperCase();

//quark-val-GT0.js
'use strict';
module.exports = {
  validator: (v) => v >= 0
  , message: '{VALUE} precisa ser maior que 0'
};

//quark-val-numberGTE0LTE10.js
'use strict';
module.exports = {
  validator: (v) => v >= 0 || v <= 10
  , message: '{VALUE} precisa ser maior igual a 0 ou menor igual a 10!'
};

//quark-val-strLenghtGTE2.js
'use strict';
module.exports = {
  validator: (v) => v.length >= 2
  , message: '{VALUE} precisa ser maior que 2 caracteres'
};
```

atoms
```js
//atom-autor.js
'use strict';
const Atom_autor = {
  type: String
, validate: require('./../quarks/quark-val-srtLenghtGTE2')
, required: true
, index: true
}
module.exports = Atom_autor;

//atom-created_at.js
'use strict';
const Atom_created_at = {
  type: Date
, default: Date.now
}
module.exports = Atom_created_at;

//atom-genero.js
'use strict';
const Atom_genero = {
  type: String
, set: require('./../quarks/quark-toLowerCase')
, validate: require('./../quarks/quark-val-srtLenghtGTE2')
, required: true
, index: true
}
module.exports = Atom_genero;

//atom-notaLivro.js
'use strict';
const Atom_notaLivro = {
  type: Number
, default: 0
, required : true
, validate: require('./../quarks/quark-val-numberGTE0LTE10')
, match: require('./../quarks/quark-matchNumber') 
}
module.exports = Atom_notaLivro;

//atom-paginas.js
'use strict';
const Atom_paginas = {
  type: Number
, default: 0
, required : true
, validate: require('./../quarks/quark-val-GT0')
, match: require('./../quarks/quark-matchNumber') 
}
module.exports = Atom_paginas;

//atom-resumo.js
'use strict';
const Atom_resumo = {
  type: String
}
module.exports = Atom_resumo;

//atom-subtitulo.js
'use strict';
const Atom_subtitulo = {
  type: String
, set: require('./../quarks/quark-toUpperCase')
}
module.exports = Atom_subtitulo;

//atom-titulo.js
'use strict';
const Atom_titulo = {
  type: String
, set: require('./../quarks/quark-toUpperCase')
, validate: require('./../quarks/quark-val-srtLenghtGTE2')
, required: true
, index: true
}
module.exports = Atom_titulo;

//atom-tituloComent.js
'use strict';
const Atom_tituloComent = {
  type: String
, validate: require('./../quarks/quark-val-srtLenghtGTE2')
, required: true
}
module.exports = Atom_tituloComent;
```

molecules
```js
//molecule-comentario.js
'use strict';
const mongoose = require('mongoose');
const _schema = {
  titulo: require('../atoms/atom-tituloComent'),
  autor: require('../atoms/atom-autor'),
  notaLivro: require('../atoms/atom-paginas'),
  comentario: require('../atoms/atom-resumo'),
  created_at: require('../atoms/atom-created_at')
};
const comentSchema = new mongoose.Schema(_schema);
module.exports = comentSchema;

//molecule-livro.js
'use strict';
const mongoose = require('mongoose');
const comentariosSchema = require('../molecules/molecule-comentarios'); 
const lastMod = require('../plugins/plugin-lastModif');
const _schema = {
  livro: {
    titulo: require('../atoms/atom-titulo'),
    subtitulo: require('../atoms/atom-subtitulo'),
  },
  autor: require('../atoms/atom-autor'),
  paginas: require('../atoms/atom-paginas'),
  genero: require('../atoms/atom-genero'),
  comentariosLeitores: [comentariosSchema],
  created_at: require('../atoms/atom-created_at')
};

const livroSchema = new mongoose.Schema(  _schema
  , { toObject: { virtuals: true }
  , toJSON: { virtuals: true }
});

//virtual
livroSchema.virtual('titulo.completo').get(function () {
  return  this.livro.titulo + ' - ' + this.livro.subtitulo;
});

//static
livroSchema.statics.findByAutor = function (username, callback) {
  this.find({ autor: new RegExp(username, 'i') }, callback);
};

//method
livroSchema.methods.findSimilarGenero = function (callback) {
  return this.model('Livros').find({ genero: this.genero }, callback);
}

//plugin e middleware
livroSchema.plugin(lastMod);
module.exports = livroSchema; 
```

plugins
```js
//plugin-lastModif.js
module.exports = exports = function lastModifiedPlugin (schema, options) {
  schema.add({lastMod: Date })
  schema.pre('save', function (next) {
    this.lastMod = new Date
    next()
  })
  if (options && options.index) {
    schema.path('lastMod').index(options.index)
  }
}
```

organisms
```js
//model.js
'use strict';
module.exports = function(Schema, ModelName) {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}

//organism-livros.js
'use strict';
const livrosSchema = require('../molecules/molecule-livro');
const livrosModel = require('./model')(livrosSchema,'Livros');
const CRUD = {
  create: (obj, coment) => {
    require('../actions/action-create')(livrosModel, obj, coment);
  }
  , find: (query) => {
    require('../actions/action-find')(livrosModel, query);
  }
  , findOne: (query) => {
    require('../actions/action-findOne')(livrosModel, query);
  }
  , update: (query, mod, options) => {
    require('../actions/action-update')(livrosModel, query, mod, options);
  }
  , remove: (query) => {
    require('../actions/action-remove')(livrosModel, query);
  }
  , findTituloCompletoByIdLivro: (id) => {
    require('../actions/action-findTituloCompletoByIdLivro')(livrosModel, id);
  }
  , findByAutor: (autor) => {
    livrosModel.findByAutor(autor,require('../actions/callback'));
  }
  , findSimilarGenero: (genero) => {
    var livroBusca = new livrosModel(genero);
    livroBusca.findSimilarGenero(require('../actions/callback'));
  }
};

module.exports = CRUD;
```
app.js
```js
require('./config/db-config');

const livroModel = require('./organisms/organism-livros');
const comentarioModel = require('./organisms/organism-comentarios');

const comentario = { titulo: "Muito bom",autor: "Diego Ferreira",notaLivro: 10,
  comentario: "Livro muito bom com ele temos uma noção e sensação de estar presente na 2 guerra"
};

const livro1 = { livro: { titulo: "Os Bebês de Auschwitz" , subtitulo: ""} , autor: "Holden, Wendy" , paginas: 368 , genero: 'Biografias e Memórias'};


const livro2 = { livro: { titulo: "A Elite da Tropa" , subtitulo: "" }, autor: "Luiz Eduardo Soares" , paginas: 230 , genero: 'Policial'};
const livro3 = { livro: { titulo: "A Elite da Tropa 2" , subtitulo: "O inimigo agora é outro" }, autor: "Luiz Eduardo Soares" , paginas: 200 , genero: 'Policial'};
const livro4 = { livro: { titulo: "O fim da pobresa" , subtitulo: "Como acabar com a miséria mundial nos próximos 20 anos" }, autor: "Jeffrey D. Sachs" , paginas: 450 , genero: 'Auto-Ajuda'};
const livro5 = { livro: { titulo: "O Menino Maluquinho" , subtitulo: "De panela na cabeça" }, autor: "Ziraldo" , paginas: 50 , genero: 'infantil'};

livroModel.create(livro1, comentario);

livroModel.find({paginas: {$gt : 300}});

livroModel.findOne({autor: "Holden, Wendy"});

const query = {paginas: {$lt : 100}};
const mod = { paginas : 62};
const options = {};
livroModel.update(query,mod,options);

const optionsMultiTrue = {multi : true};
livroModel.update(query,mod,optionsMultiTrue);

const queryRemove = {paginas : 62};
livroModel.remove(queryRemove);

//virtuals findTituloCompletoByIdLivro
livroModel.findTituloCompletoByIdLivro('5743a14679a2a7405d96c6f2');

//statics findByAutor
livroModel.findByAutor('Holden');

//method findSimilarGenero
livroModel.findSimilarGenero({genero: 'Policial'});
```

Resultado:
```
//executei apenas 1 create pela funcionalidade o restante foi import banco
////livroModel.create(livro1, comentario);
RETORNOU: { livro: { titulo: 'OS BEBÊS DE AUSCHWITZ', subtitulo: '' },
  paginas: 368,
  comentariosLeitores: 
   [ { notaLivro: 10,
       created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
       _id: 5743a09f450c7f1f5d01f1c0,
       comentario: 'Livro muito bom com ele temos uma noção e sensação de estar presente na 2 guerra',
       autor: 'Diego Ferreira',
       titulo: 'Muito bom',
       id: '5743a09f450c7f1f5d01f1c0' } ],
  created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
  autor: 'Holden, Wendy',
  genero: 'biografias e memórias',
  _id: 5743a09f450c7f1f5d01f1bf,
  lastMod: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
  __v: 0,
  titulo: { completo: 'OS BEBÊS DE AUSCHWITZ - ' },
  id: '5743a09f450c7f1f5d01f1bf' }

//livroModel.find({paginas: {$gt : 300}});
RETORNOU: [ { livro: { titulo: 'OS BEBÊS DE AUSCHWITZ', subtitulo: '' },
    paginas: 368,
    comentariosLeitores: [ [Object] ],
    created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
    __v: 0,
    autor: 'Holden, Wendy',
    genero: 'biografias e memórias',
    lastMod: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
    _id: 5743a09f450c7f1f5d01f1bf,
    titulo: { completo: 'OS BEBÊS DE AUSCHWITZ - ' },
    id: '5743a09f450c7f1f5d01f1bf' },
  { livro: 
     { titulo: 'O FIM DA POBRESA',
       subtitulo: 'COMO ACABAR COM A MISÉRIA MUNDIAL NOS PRÓXIMOS 20 ANOS' },
    paginas: 450,
    comentariosLeitores: [],
    created_at: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    __v: 0,
    autor: 'Jeffrey D. Sachs',
    genero: 'auto-ajuda',
    lastMod: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    _id: 5743a14679a2a7405d96c6f2,
    titulo: { completo: 'O FIM DA POBRESA - COMO ACABAR COM A MISÉRIA MUNDIAL NOS PRÓXIMOS 20 ANOS' },
    id: '5743a14679a2a7405d96c6f2' } ]

//livroModel.findOne({autor: "Holden, Wendy"});
RETORNOU: { livro: { titulo: 'OS BEBÊS DE AUSCHWITZ', subtitulo: '' },
  paginas: 368,
  comentariosLeitores: 
   [ { notaLivro: 10,
       created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
       _id: 5743a09f450c7f1f5d01f1c0,
       comentario: 'Livro muito bom com ele temos uma noção e sensação de estar presente na 2 guerra',
       autor: 'Diego Ferreira',
       titulo: 'Muito bom',
       id: '5743a09f450c7f1f5d01f1c0' } ],
  created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
  __v: 0,
  autor: 'Holden, Wendy',
  genero: 'biografias e memórias',
  lastMod: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
  _id: 5743a09f450c7f1f5d01f1bf,
  titulo: { completo: 'OS BEBÊS DE AUSCHWITZ - ' },
  id: '5743a09f450c7f1f5d01f1bf' }

//livroModel.update(query,mod,options);
RETORNOU: { ok: 1, nModified: 1, n: 1 }

//livroModel.remove(queryRemove);
RETORNOU: { result: { ok: 1, n: 1 }, ... }

//livroModel.findTituloCompletoByIdLivro('5742336aed21ba1f5119e7e3');
Titulo Completo: O FIM DA POBRESA - COMO ACABAR COM A MISÉRIA MUNDIAL NOS PRÓXIMOS 20 ANOS

//livroModel.findByAutor('Holden');
RETORNOU: [ { livro: { titulo: 'OS BEBÊS DE AUSCHWITZ', subtitulo: '' },
    paginas: 368,
    comentariosLeitores: [ [Object] ],
    created_at: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
    __v: 0,
    autor: 'Holden, Wendy',
    genero: 'biografias e memórias',
    lastMod: Mon May 23 2016 21:30:23 GMT-0300 (BRT),
    _id: 5743a09f450c7f1f5d01f1bf,
    titulo: { completo: 'OS BEBÊS DE AUSCHWITZ - ' },
    id: '5743a09f450c7f1f5d01f1bf' } ]

//livroModel.findSimilarGenero({genero: 'policial'});
RETORNOU: [ { livro: 
     { titulo: 'A ELITE DA TROPA 2',
       subtitulo: 'O INIMIGO AGORA É OUTRO' },
    paginas: 200,
    comentariosLeitores: [],
    created_at: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    __v: 0,
    autor: 'Luiz Eduardo Soares',
    genero: 'policial',
    lastMod: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    _id: 5743a14679a2a7405d96c6f1,
    titulo: { completo: 'A ELITE DA TROPA 2 - O INIMIGO AGORA É OUTRO' },
    id: '5743a14679a2a7405d96c6f1' },
  { livro: { titulo: 'A ELITE DA TROPA', subtitulo: '' },
    paginas: 230,
    comentariosLeitores: [],
    created_at: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    __v: 0,
    autor: 'Luiz Eduardo Soares',
    genero: 'policial',
    lastMod: Mon May 23 2016 21:33:10 GMT-0300 (BRT),
    _id: 5743a14679a2a7405d96c6f0,
    titulo: { completo: 'A ELITE DA TROPA - ' },
    id: '5743a14679a2a7405d96c6f0' } ]

```

### 5 - Crie 1 *Schema* para `password` com criptografia e arquitetura atômica.
* use SHA256 com SALT como criptografia;
* use middleware com pre save;
* use methods.

field-created_at.js 
```js
module.exports = { type: Date, default: Date.now };
```


field-password.js
```js
'use strict';

const _validate = (v) => v.length >= 6 && v.length <= 10;

const _field_password = {
  type: String,
  validate: [ _validate, "Senha precisa ser maior que 6 e menor que 10 caracteres"],
  require: true
};

module.exports = _field_password;
```

password-schema.js 
```js 
'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');

const password = require('../fields/field-password');
const created_at = require('../fields/field-created_at');

const _schema = {
  password, 
  created_at
};

const PasswordSchema = new mongoose.Schema(_schema);

PasswordSchema.methods.cryptoPassword = function (){
  const key = crypto.pbkdf2Sync(this.password, 'salt', 100000, 256, 'sha256');
  return key.toString('hex');
};

PasswordSchema.pre('save', function( next ){
      console.log("sem criptografia:" + `${this.password}` );
      this.password = this.cryptoPassword();
      next();
   });

module.exports = PasswordSchema;
```

password-model.js
```js 
'use strict';

const passwordSchema = require('../model/schemas/Password-schema');
const PasswordModel = require('../model/model')(passwordSchema,'Senha');

const save = (obj) => {
  const novoObj = new PasswordModel(obj);
  novoObj.save( (err,data) => {
      if (err) console.log(err);
        console.log("Password salvo com sucesso: " + data);
      });
};

const CRUD = {
  save
};

module.exports = CRUD;
```

password-controller.js
```js
'use strict';
const passwordModel = require('../model/password_model');

const CRUD = {
  save : passwordModel.save
}

module.exports = CRUD;
```

app-passoword.js 
```js 
'use strict';

require('./db/config');

const passwordController = require('./controller/password_controller');

const obj = { password : "tuchedsf"};

passwordController.save(obj);
```

Resultado:
```
MacBook-Air-Diego:08mongoose-user diego$ node app-password.js 
sem criptografia: tuchedsf
Mongo default connection connected to mongodb://localhost/mongoose-user-test
Mongo default connection open
Password salvo com sucesso: { created_at: Thu May 19 2016 21:41:49 GMT-0300 (BRT),
  _id: 573e5d4dbf94a3841dd8c76b,
  password: '1a0dc0b6d40feedafb73d9ca48b18ecd7c343efd8f73cd71f9b933bd8f5cfcbb4dffb86dfdd2c47329bd1e788a02bf3885c64dd231be4a326196002affc9a5a77e79606f6a56cbb6a8ad87dcabf52573da0f99f8c49a7509cd39901e320ebcc3461552793be5c63804a9cac7a37403e63721a94ce48c5199511599b6a7c56237ad2d03ace2470cab725a27fa789b374ce0287ceb44d52a84fde6733b09ceaf751e6fe48fee668fdcaa9fdf6ce89c92f5648609487d05b5643b1a63883df0cdf06063c04274461c86c1be97fa1ac4abecb26474e8c07d1046b81915dfe7bf139f52e59a053b80889543fbefd08ce300bb42916bf6d179b4e885347da1395e372c',
  __v: 0 }
```


