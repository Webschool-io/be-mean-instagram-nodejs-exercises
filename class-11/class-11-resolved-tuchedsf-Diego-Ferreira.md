# Node.js - Aula 11 - Exercício

**user:** [tuchedsf](https://github.com/tuchedsf)  
**autor:** Diego Ferreira  
**data:** 1467762639020


##Parte 01

### 1- Usando o exemplo do req.params, recebe os parâmetros name, email, cpf, transforme-os em um schema do mongoose, salve-o no mongo e devolva o resultado, usando res.json(user). Use o postman ou o navegador (grave 5 users ou mais):

obs.: os arquivos db-config.js e model.js, não coloquei aqui pois são os arquivo padrões utilizados nas outras aulas do be-mean.

schema.js
```js
'use strict';

const mongoose = require('mongoose');

const nome = {type: String, required: true};
const email = {type: String, required: true};
const cpf = {type: String, required: true};

const _schema = {
  nome,
  email,
  cpf
}

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;
```

user-model.js
```js
'use strict'

require("./db-config");
const UserSchema = require('./schema');
const UserModel = require('./model')("Usuarios",UserSchema);

const callback = (err, data, res) => {
  if (err) res.status(400).send(err);
  res.json(data);
};

const CRUD = {
  create : (res, user) => {
    UserModel.create(user, (err, data) => callback(err, data, res));
  }
}

module.exports = CRUD;
```

exercicio1.js
```js
'use strict'

const express = require('express');
const app = express();
const UserModel = require('./user-model');


app.get('/user/nome/:nome/email/:email/cpf/:cpf', (req, res) => {
	const nome = req.params.nome;
	const email = req.params.email;
	const cpf = req.params.cpf;
	
	const user = {"nome": nome, "email":email, "cpf":cpf };
	UserModel.create(res, user);

});


app.listen(3000, () => {
	console.log("Servidor sendo executado na porta 3000");
});
```

Resultado:

```
Chamadas pelo postman utilizando o método get:

Chamada1: http://localhost:3000/user/nome/Diego/email/tuchedsf@gmail.com/cpf/23434675896
Retorno:
{
  "__v": 0,
  "nome": "Diego",
  "email": "tuchedsf@gmail.com",
  "cpf": "23434675896",
  "_id": "5786c56b9e7249bb11b3753f"
}

Chamada2: http://localhost:3000/user/nome/teste/email/teste@teste.com/cpf/12345678910
Retorno:
{
  "__v": 0,
  "nome": "teste",
  "email": "teste@teste.com",
  "cpf": "12345678910",
  "_id": "5786c6369e7249bb11b37540"
}

Chamada3: http://localhost:3000/user/nome/bemean/email/be-mean@be-mean.com/cpf/88888888888
Retorno:
{
  "__v": 0,
  "nome": "bemean",
  "email": "be-mean@be-mean.com",
  "cpf": "88888888888",
  "_id": "5786c66e9e7249bb11b37541"
}

Chamada4: http://localhost:3000/user/nome/webschool/email/webschool@io.com/cpf/99999999999
Retorno:
{
  "__v": 0,
  "nome": "webschool",
  "email": "webschool@io.com",
  "cpf": "99999999999",
  "_id": "575c2a8a74d3a2912a7ab07a"
}

Chamada5: localhost:3000/user/nome/tuche/email/tuche@tartaruga.com/cpf/23456787647
Retorno:
{
  "__v": 0,
  "nome": "tuche",
  "email": "tuche@tartaruga.com",
  "cpf": "23456787647",
  "_id": "575c2ac374d3a2912a7ab07b"
}
```

### 2- Substitua o arquivo, array-query.json, pela collection criada no exercício anterior e repita a busca porém utilizando o schema do mongoose:

user-model.js -> implementado método retrive
```js
'use strict'

require("./db-config");
const UserSchema = require('./schema');
const UserModel = require('./model')("Usuarios",UserSchema);

const callback = (err, data, res) => {
  if (err) res.status(400).send(err);
  res.json(data);
};

const CRUD = {
  create : (res, user) => {
    UserModel.create(user, (err, data) => callback(err, data, res));
  }
  , retrive : (res, query) => {
    UserModel.find(query, (err,data) => callback(err,data, res));
  }
}

module.exports = CRUD;
```

exercicio2.js
```js
'use strict'

const express = require('express');
const app = express();
const util = require('util');
const UserModel = require('./user-model');

 app.get('/find', (req,res) =>{
     const q = req.query.q;
     console.log(q);
     const query = {nome: q};
     UserModel.retrive(res, query);    
 });


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

Resultado:
```
Chamada: localhost:3000/find?q=diego
Retorno:
[
  {
    "_id": "575c280974d3a2912a7ab077",
    "nome": "diego",
    "email": "tuchedsf@gmail.com",
    "cpf": "11111111111",
    "__v": 0
  }
]

Chamada: localhost:3000/find?q=teste
Retorno:
[
  {
    "_id": "575c28eb74d3a2912a7ab078",
    "nome": "teste",
    "email": "teste@teste.com",
    "cpf": "12345678910",
    "__v": 0
  }
]
```

### 3- Repita o exercício anterior utilizando xml e json na resposta:

Obs.: Não descobri o porque mais passando o json para a função xml, no formato que é retornado do banco a função não consegue fazer o parser e responde <?__/>.

Retorno banco:
[ { cpf: '11111111111',
    email: 'tuchedsf@gmail.com',
    nome: 'diego' } ]

Quando submeto o retorno acima a funcao let xmlUser = xml(data); o retorno é <?__/>.

Para não dar erro tive que pegar o retorno e colocar cada atributo separado entre {} e ai o parser foi aceito.
{user: [{nome: data[0].nome},{email: data[0].email},{cpf: data[0].cpf}]}

user-model.js -> alterado para atender a funcionalidae
```js
'use strict'

require("./db-config");
const UserSchema = require('./schema');
const UserModel = require('./model')("Usuarios",UserSchema);
const xml = require('xml');

const callback = (err, data, res, type) => {
  if (err) res.status(400).send(err);

   if (/text\/xml/i.test(type)){
    console.log(data);
          let xmlUsers = xml({user: [{nome: data[0].nome},{email: data[0].email},{cpf: data[0].cpf} ]});
         console.log(xmlUsers);
         res.set('Content-Type', 'application/xml');
         res.send(xmlUsers);
     }else {
        res.json(data);
     }
};

const CRUD = {
  create : (res, user) => {
    UserModel.create(user, (err, data) => callback(err, data, res));
  }
  , retrive : (res, query, type) => {
    UserModel.find(query, (err,data) => callback(err,data, res, type));
  }
}

module.exports = CRUD;
```

exercicio3.js
```js

'use strict'

const express = require('express');
const app = express();
const util = require('util');
const UserModel = require('./user-model');


app.get('/find', (req,res) =>{
     const q = req.query.q;
     const query = {nome: q};
     const type = req.get('Content-Type');
     UserModel.retrive(res, query, type);    
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

Resultado:

```
//XML
Chamada: localhost:3000/find?q=diego
Parametro cabeçalho: Content-Type = text/xml
Retorno:
<user>
    <nome>diego</nome>
    <email>tuchedsf@gmail.com</email>
    <cpf>11111111111</cpf>
</user>

//JSON
Chamada: localhost:3000/find?q=diego
Parametro cabeçalho: Content-Type = application/json
Retorno:
[
  {
    "_id": "575c280974d3a2912a7ab077",
    "nome": "diego",
    "email": "tuchedsf@gmail.com",
    "cpf": "11111111111",
    "__v": 0
  }
]
```

### 4- Usando o formulário no index.html de exemplo use o body-parser como middleware para gravar registros no mongo:

index-body.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Usuários</title>
</head>
<body>
  <form action="/user" method="post">
    <label>Name: </label>
    <input type="text" name="nome" value="" id="nome">
    <br/>
    <br/>
    <label>Email: </label>
    <input type="text" name="email" value="" id="email">
    <br/>
    <br/>
    <label>CPF: </label>
    <input type="text" name="cpf" value="" id="cpf">
    <br/>
    <br/>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

exercicio4.js
```js
'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const UserModel = require('./user-model');

app.use(bodyParser.json()); // transformar em json
app.use(bodyParser.urlencoded({extended : true})); // para entender urls codificadas para o request ser entendido.
 app.post('/user', (req,res) =>{
    UserModel.create(res,req.body);
 });

  app.get('/', (req,res) =>{
     res.set('Content-type', 'text/html');
     fs.createReadStream('./index-body.html').pipe(res);
 });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

Resultado:
```
Foi passado como parametro no formulario:
Nome: Mulambo
Email: mulambo@mulambinho.com
cpf: 33333333333

Retorno:
{"__v":0,"nome":"mulambo","email":"mulambo@mulambinho.com","cpf":"3333333333","_id":"575c591bbc8a0fa42e750064"}
```

### 5- Usando o index-file.html de exemplo, que usa o formidable, modifique-o de forma que o caminho da imagem que foi gravada no disco, seja gravado no mongodb, na colection users:

schema.js -> adicionado o atributo imagem
```js
'use strict';

const mongoose = require('mongoose');

const nome = {type: String, required: true};
const email = {type: String, required: true};
const cpf = {type: String, required: true};
const imagem = {type: String, required: true};

const _schema = {
  nome,
  email,
  cpf,
  imagem
}

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;
```

index-file.html
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>index-file</title>
</head>
<body>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label>Name: </label>
    <input type="text" name="nome" value="" id="nome">
    <br/>
    <br/>
    <label>Email: </label>
    <input type="text" name="email" value="" id="email">
    <br/>
    <br/>
    <label>CPF: </label>
    <input type="text" name="cpf" value="" id="cpf">
    <br/>
    <br/>
    <label>Imagem: </label>
    <input type="file" name="image" value="" id="image">
    <br/>
    <br/>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
```

exercicio5.js
```js
'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const UserModel = require('./user-model');

app.use(bodyParser.json()); // transformar em json
app.use(bodyParser.urlencoded({extended: true})); // para entender urls codificadas para o request ser entendido.

app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/images';

  form.parse(req, (err, fields, files) => {
    /*
    o formidable possui uma variavel chamada fields, que traz todos os field do formuário que será utilizada para pegar os campos nome, email e cpf
    E possui também um variável chamada files, que traz as informações de todos os arquivos enviados pelo formulário. no caso iremos pegar o atributo path para salvar no banco o caminho da imagem que foi salva.
    */
    const user = {nome: fields.nome, email: fields.email, cpf: fields.cpf, imagem: files.image.path};
    //console.log(user);
    UserModel.create(res,user);
  });
});

app.get('/', (req, res) => {
  res.set('Content-type', 'text/html');
  fs.createReadStream('./index-file.html').pipe(res);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

Resultado:
```
Foi passado como parametro no formulario:
Nome: diego
Email: diego@diego.com
cpf: 44444444
imgem: IMG_4548.PNG (selecioada no diretório para upload pelo formulário)

Retorno:
{"__v":0,"nome":"diego","email":"diego@diego.com","cpf":"44444444","imagem":"public/images/upload_8b0e77fbe06d9006a87a663baee165e2","_id":"575d5ad3160bc6fd30d9a919"}
```

##Parte 02

Obs.: Para os exercícios abaixo foram utilizados o schema e o model da Parte 1.

### 1 - Criar as 4 rotas para o CRUD


```js
'use strict'

require ('./db-config');
const express = require('express');
const app = express();
const router = express.Router(); //cria objeto router para redirecionar as requisiçoes para o destino correto.
const UserModel = require('./user-model');
const querystring = require('querystring');
/*
No all nunca utilize funcoes de retorno de algum dado ou modifiquem o formulário.
 */
router.all('*',(req,res,next) => { // router.all é executado para todos os verbos http.
	res.setHeader('Webschool', 'FODA');
  console.log('all');
	next();
});


router.post('/new', (req, res) => {
	var body = [];
	req.on('data', function(chunk) {
 		body.push(chunk);
	}).on('end', function() {
  	body = Buffer.concat(body).toString();
  	const obj = querystring.parse(body);
		UserModel.create(res, obj);
	});
});

router.get('/find', (req,res) =>{
     const q = req.query.q;
     //console.log(q);
     const query = {nome: q};
     const type = req.get('Content-Type');
     UserModel.retrive(res, query, type);    
});

router.put('/:id', (req,res) => {
	const id = req.params.id;
	var body = [];
	req.on('data', function(chunk) {
 		body.push(chunk);
	}).on('end', function() {
  	body = Buffer.concat(body).toString();
  	const obj = querystring.parse(body);
  	UserModel.update(res,{"_id": id}, obj);
	});
});

router.delete('/:id', (req,res) => {
	const id = req.params.id;
	UserModel.remove(res,{"_id": id});
});

app.use('/users', router);


app.listen(3000,() => {
	console.log('Servidor executando na porta 3000.');
});
```
Resultado:
```
Create:
Method: POST
Chamada: localhost:3000/users/new
Parametros x-www-form-urlencoded:
nome: Tartaruga
email: tartaruga@tuche.com
cpf: 23485767348

Resultado:
{
  "__v": 0,
  "nome": "Tartaruga",
  "email": "tartaruga@tuche.com",
  "cpf": "23485767348",
  "_id": "57688e5a9ea77c550bc7c988"
}


Find:
Method: GET
Chamada: localhost:3000/find?q=diego
Parametro cabeçalho: Content-Type = json
Retorno:
[
  {
    "_id": "575c280974d3a2912a7ab077",
    "nome": "diego",
    "email": "tuchedsf@gmail.com",
    "cpf": "11111111111",
    "__v": 0
  },
  {
    "_id": "575d5ad3160bc6fd30d9a919",
    "nome": "diego",
    "email": "diego@diego.com",
    "cpf": "44444444",
    "__v": 0
  }
]

Update:
Method: PUT
Chamada: localhost:3000/users/57688e5a9ea77c550bc7c988  
Parametros x-www-form-urlencoded:
nome: michelangelo

Retorno:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

Delete:
Method: DELETE
Chamada: localhost:3000/users/57688e5a9ea77c550bc7c988  
Parametros: n/a

Retorno:
{
  "ok": 1,
  "n": 1
}
```

### 2 - Criar a arquitetura atomica do Mongoose (Organismo/Ações/Molécula/Átomos/Quarks).

Organização Diretório
- arquit-atomica
  + app.js
  + config
    * db-config.js
  + modules
    * books
      - actions
        + action-create.js
        + action-find.js 
        + action-findOne.js
        + action-remove.js
        + action-update.js
        + callback
      - atoms
        + atom-autores.js
        + atom-created_at.js 
        + atom-dt_publicacao.js 
        + atom-generos.js
        + atom-isbn.js
        + atom-qtde_paginas.js 
        + atom-resumo.js
        + atom-subtitulo.js 
        + atom-titulo.js 
      - molecules
        + molecule.js
      - organisms
        + organism.js 
      - quarks
        + quark-isISBN-13.js 
        + quark-isNumber.js 
        + quark-isNumberLengthEQ13isISBN.js
        + quark-toUpperCase.js
        + quark-validate-GT0.js
        + quark-validate-ISBN-13.js
        + quark-validate-str-lengthEQ13.js 
        + quark-validate-str-lengthGTE2.js 
    * model.js


app.js
```js 
'use strict';

require ('./config/db-config');
const http = require('http');
const Book = require('./modules/books/organisms/Organism');
const url = require('url');
const queryString = require('queryString');


const books = [{
  titulo : "Volta ao Mundo em 80 dias"
  , subtitulo : ""
  , isbn : 9788525423498
  , autores : ['Julio Verne']
  , generos : ['acao', 'aventura']
  , qtde_paginas: 256
  , resumo: "A volta ao mundo em 80 dias (1864) e a sua novela mais celebre, onde narra as peripecias de Phileas Fogg, seu personagem mais famoso, e sua exotica aposta, onde se compromete a fazer a volta ao mundo em oitenta dias" 
  , dt_publicacao: new Date("October 12, 1990 11:13:00")
},
{
  titulo : "Firenheit 141"
  , subtitulo : ""
  , isbn : 9788573515473
  , autores : ['Teste', 'Diego']
  , generos : ['acao', 'distopia']
  , qtde_paginas: 300
  , resumo: "A vida do bombeiro montag nao e mais a mesma desde" 
  , dt_publicacao: new Date("October 12, 1990 11:13:00")
},{
  titulo : "O menino maluquinho"
  , subtitulo : ""
  , isbn : 9780385351034
  , autores : ['Ziraldo']
  , generos : ['aventura']
  , qtde_paginas: 40
  , resumo: "de panelas na cabeca" 
  , dt_publicacao: new Date("October 12, 1990 11:13:00")
}];

http.createServer ((req,res) => {

  const url_parts = url.parse(req.url);

  console.log(url_parts);
  console.log(url_parts.path);

  switch (url_parts.path) {
    case '/create':
      Book.create(res, books);
      break;
    case '/find':
      const page = 1;
      const query1 = { qtde_paginas: {$lte : 256}};
      //const query1 = {};
      Book.find(res, query1, page);
      break;
    case '/findOne':
      Book.findOne(res, {"_id": "577aecc76013bf6f03e7dee7"});
      break;
    case '/update':
      const queryUpd = {titulo : "Firenheit 141"};
      const mod = {subtitulo: "o bombeiro montag e as casas de fogo"};
      const multi = false;
      Book.update(res, queryUpd, mod, multi);
      break;
    case '/delete':
      const queryRemove = {"_id": "577aecc76013bf6f03e7dee7"};
      Book.remove(res, queryRemove);
      break;
    default:
      res.writeHead(404);
      res.end("Caminho invalido");
      break;
  }

}).listen(3000,function(){
  console.log("Servidor rodando na porta 3000!!!");
});
```

db-config.js 
```js 
//importar o mongoose 
const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/mongoose-books-test';
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

model.js 
```js 
'use strict';
module.exports = function(ModelName,Schema) {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}
```

actions
```js
//action-create.js
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, book) => {
    Model.create(book, (err,data) => callback(err,data,res, 0, 0));
  };
};

//action-find.js 
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, query, page) => {
  Model.count(query, (err, count) => {
    const maxPages = Math.ceil(count/5);
    Model.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(5).skip(5 * (page - 1));
  });
};
}

//action-findOne.js
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, id) => {
    Model.findOne(id, (err,data) => callback(err,data,res, 0, 0));
  };
}

//action-remove.js
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, query) => {
    Model.remove(query, (err,data) => callback(err,data,res,0,0));
  };
}

//action-update.js
'use strict';
const callback = require('./callback');

module.exports = (Model) => {
  return (res,query,mod, opt) => {
    const options = opt ? {multi: true} : '';
    Model.update(query,mod,options, (err,data) => callback(err,data,res,0,0));
  };
}

//callback.js
'use strict';
module.exports = (err,data,res,page,maxPages) => {
  if (err) {
    res.writeHead(404);
      res.end(err.toString());
    }
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

atoms
```js 
//atom-autores.js
'use strict'
module.exports = {type: [String], required: true}

//atom-created_at.js 
'use strict'
module.exports = { type: Date, default: Date.now }

//atom-dt_publicacao.js 
'use strict'
module.exports = { type: Date } 

//atom-generos.js
'use strict'
module.exports = {type: [String]}

//atom-isbn.js
'use strict';
module.exports = {
  type: Number
  , validate: require('../quarks/quark-validate-ISBN-13')
  , unique: true
}

//atom-qtde_paginas.js 
'use strict';
module.exports = {
  type: Number
  , validate: require('../quarks/quark-validate-GT0')
}

//atom-resumo.js
'use strict'
module.exports = {
  type: String
}

//atom-subtitulo.js 
'use strict'
module.exports = {
  type: String
}

//atom-titulo.js 
'use strict'
module.exports = {
  type: String
  , validate: require('../quarks/quark-validate-str-lengthGTE2')
  , set: require('./../quarks/quark-toUpperCase')
  , index: true
  , required: true
}
```

quarks
obs.: O quart validate isbn, foi feito por mim para o exercício da aula 12 e aproveitado neste exercício, a explicação do mesmo esta no exercicio 12.
```js 
//quark-isISBN-13.js
'use strict';
module.exports = (value) => {

  const arrayValues = value.toString().split("").map(Number);
  let digCalculado = 0;
  if (arrayValues.length != 13 ) return false;

  arrayValues.forEach(function (element,index){
    if (index != arrayValues.length -1) {
        if(index % 2 === 0){
            digCalculado = digCalculado + element;
        }else {
            digCalculado = digCalculado + (element * 3);
        }
    }
  });

  digCalculado = (10 - (digCalculado % 10)) % 10;
  
  if (digCalculado === arrayValues[arrayValues.length -1]) return true;

  return false;
};

//quark-isNumber.js
'use strict';
module.exports = (value) => {
     if ((!isNaN(value) && isFinite(value))|| typeof value === 'number' || value instanceof Number ) return true;
     return false;
}

//quark-isNumberLengthEQ13isISBN.js
'use strict';
module.exports = (value) => {
  const isNumber = require('./quark-isNumber')(value);
  if(!isNumber) return false;

  const isLengthEQ13 = require('./quark-validate-str-lengthEQ13')(value);
  if(!isLengthEQ13) return false;
  
  const isISBN = require('./quark-isISBN-13')(value);
  if(!isISBN) return false;

  return true;
}

//quark-toUpperCase.js
'use strict';
module.exports = (v) => v.toUpperCase();

//quark-validate-GTE0.js
'use strict';
module.exports = {
  validator: (v) => v >= 0
, message: 'Quantidade de páginas {VALUE} inválida'
};

//quark-validate-ISBN-13.js
'use strict';
module.exports = {
      validator : (value) => {
          return require('./quark-isNumberLengthEQ13isIsbn')(value);
     }
     ,message: 'ISBN inválido'
}

//quark-validate-strLengthEQ13.js
'use strict';

module.exports = (v) => {
  if (v.toString().length == 13) return true;
  return false;
};

//quark-validate-str-lengthGTE2.js 
'use strict';
module.exports = {
  validator: (v) => v.length >= 2
, message: 'Titulo {VALUE} precisa ser maior que 2 caracteres'
}
```

molecule.js
```js 
'use strict';

const mongoose = require('mongoose');

const titulo = require('../atoms/atom-titulo');
const subtitulo = require('../atoms/atom-subtitulo');
const isbn = require('../atoms/atom-isbn');
const autores = require('../atoms/atom-autores');
const generos = require('../atoms/atom-generos');
const qtde_paginas = require('../atoms/atom-qtde_paginas');
const resumo = require('../atoms/atom-resumo');
const dt_publicacao = require('../atoms/atom-dt_publicacao');
const created_at = require('../atoms/atom-created_at');

const _schema = {
  titulo
  , subtitulo
  , isbn
  , autores
  , generos
  , qtde_paginas
  , resumo
  , dt_publicacao
  , created_at
}

const BookSchema = new mongoose.Schema(_schema);

module.exports = BookSchema;
```

organism.js
```js 
'use strict';
const BookSchema = require('../molecules/Molecule');
const Book = require('../../../modules/model')('Books',BookSchema);

//actions
const create = require('../actions/action-create')(Book);
const find = require('../actions/action-find')(Book);
const findOne = require('../actions/action-findOne')(Book);
const remove = require('../actions/action-remove')(Book);
const update = require('../actions/action-update')(Book);

const CRUD = {
  create
  , find
  , findOne
  , update
  , remove
};

module.exports = CRUD;
```

Resultado 
```
=== CREATE ===
METHOD: GET
URL: http://localhost:3000/create

RETORNO
headers:
Connection →keep-alive
Content-Type →application/json
Date →Mon, 04 Jul 2016 23:09:59 GMT
Transfer-Encoding →chunked

body:
[
  {
    "__v": 0,
    "titulo": "VOLTA AO MUNDO EM 80 DIAS",
    "subtitulo": "",
    "isbn": 9788525423498,
    "qtde_paginas": 256,
    "resumo": "A volta ao mundo em 80 dias (1864) e a sua novela mais celebre, onde narra as peripecias de Phileas Fogg, seu personagem mais famoso, e sua exotica aposta, onde se compromete a fazer a volta ao mundo em oitenta dias",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "_id": "577aecc76013bf6f03e7dee6",
    "created_at": "2016-07-04T23:09:59.002Z",
    "generos": [
      "acao",
      "aventura"
    ],
    "autores": [
      "Julio Verne"
    ]
  },
  {
    "__v": 0,
    "titulo": "FIRENHEIT 141",
    "subtitulo": "",
    "isbn": 9788573515473,
    "qtde_paginas": 300,
    "resumo": "A vida do bombeiro montag nao e mais a mesma desde",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "_id": "577aecc76013bf6f03e7dee7",
    "created_at": "2016-07-04T23:09:59.018Z",
    "generos": [
      "acao",
      "distopia"
    ],
    "autores": [
      "Teste",
      "Diego"
    ]
  },
  {
    "__v": 0,
    "titulo": "O MENINO MALUQUINHO",
    "subtitulo": "",
    "isbn": 9780385351034,
    "qtde_paginas": 40,
    "resumo": "de panelas na cabeca",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "_id": "577aecc76013bf6f03e7dee8",
    "created_at": "2016-07-04T23:09:59.019Z",
    "generos": [
      "aventura"
    ],
    "autores": [
      "Ziraldo"
    ]
  }
]

=== FIND ===
METHOD: GET
URL: http://localhost:3000/find 

RETORNO
headers:
Connection →keep-alive
Content-Type →application/json
Date →Mon, 04 Jul 2016 23:19:01 GMT
Transfer-Encoding →chunked

body:
[
  {
    "_id": "577aecc76013bf6f03e7dee6",
    "titulo": "VOLTA AO MUNDO EM 80 DIAS",
    "subtitulo": "",
    "isbn": 9788525423498,
    "qtde_paginas": 256,
    "resumo": "A volta ao mundo em 80 dias (1864) e a sua novela mais celebre, onde narra as peripecias de Phileas Fogg, seu personagem mais famoso, e sua exotica aposta, onde se compromete a fazer a volta ao mundo em oitenta dias",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "__v": 0,
    "created_at": "2016-07-04T23:09:59.002Z",
    "generos": [
      "acao",
      "aventura"
    ],
    "autores": [
      "Julio Verne"
    ]
  },
  {
    "_id": "577aecc76013bf6f03e7dee8",
    "titulo": "O MENINO MALUQUINHO",
    "subtitulo": "",
    "isbn": 9780385351034,
    "qtde_paginas": 40,
    "resumo": "de panelas na cabeca",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "__v": 0,
    "created_at": "2016-07-04T23:09:59.019Z",
    "generos": [
      "aventura"
    ],
    "autores": [
      "Ziraldo"
    ]
  }
]

=== FINDONE ===
METHOD: GET
URL: http://localhost:3000/findOne 

RETORNO
headers:
Connection →keep-alive
Content-Type →application/json
Date →Mon, 04 Jul 2016 23:20:25 GMT
Transfer-Encoding →chunked

body:
{
  "_id": "577aecc76013bf6f03e7dee7",
  "titulo": "FIRENHEIT 141",
  "subtitulo": "",
  "isbn": 9788573515473,
  "qtde_paginas": 300,
  "resumo": "A vida do bombeiro montag nao e mais a mesma desde",
  "dt_publicacao": "1990-10-12T14:13:00.000Z",
  "__v": 0,
  "created_at": "2016-07-04T23:09:59.018Z",
  "generos": [
    "acao",
    "distopia"
  ],
  "autores": [
    "Teste",
    "Diego"
  ]
}

=== UPDATE ===
METHOD: GET
URL: http://localhost:3000/update

RETORNO
headers:
Connection →keep-alive
Content-Type →application/json
Date →Mon, 04 Jul 2016 23:22:56 GMT
Transfer-Encoding →chunked

body:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

=== DELETE ===
METHOD: GET
URL: http://localhost:3000/delete

RETORNO
headers:
Connection →keep-alive
Content-Type →application/json
Date →Mon, 04 Jul 2016 23:23:31 GMT
Transfer-Encoding →chunked

body:
{
  "ok": 1,
  "n": 1
}

```

### 3 - Integrar as funções do CRUD do Mongoose com o Express.
#####Obs.:Com todas as funçoes do CRUD funcionando via API

Para este exercício foi utilizado os exercicios anteriores e refatorado a para criaçao da api.

app.js
```js
'use strict'

require ('./config/db-config');
const express = require('express');
const app = express();
const BookAPI = require('./modules/books/routes');

app.use('/api/books', BookAPI);

app.listen(3000,() => {
  console.log('Servidor executando na porta 3000.');
});
```

modules/books/routes.js 
```js
'use strict'

const express = require('express');
const app = express();
const router = express.Router(); //cria objeto router para redirecionar as requisiçoes para o destino correto.
const BookModel = require('../books/organisms/Organism');
const querystring = require('querystring');

router.all('*',(req,res,next) => { // router.all é executado para todos os verbos http.
  console.log('all');
  next();
});

router.post('/new', (req, res) => {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    const obj = querystring.parse(body); 
    obj.dt_publicacao = new Date(obj.dt_publicacao);   
    BookModel.create(res, obj);
  });
});

router.get('/find', (req,res,next) =>{
  console.log('find');
     const page = 1;
     const q = req.query.q;
     //console.log(q);
     const query = q ? {titulo: q} : {};
     console.log(query);
    //  const type = req.get('Content-Type');
     BookModel.find(res, query, page);
});

router.get('/:id', (req,res) =>{
  console.log('findOne');
     const id = req.params.id;
  //   console.log(id);
     const query = {"_id": id};
     BookModel.findOne(res, query);    
});

router.put('/:id', (req,res) => {
  console.log('put / update');
  const multi = false;
  const id = req.params.id;
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    //console.log(body);
    const obj = querystring.parse(body);  
    //console.log(obj);
    BookModel.update(res,{"_id": id}, obj, multi);
  });
});

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  BookModel.remove(res,{"_id": id});
});

module.exports = router;
```

Retorno:
```
==== CREATE ==== 
METHOD: POST
URL: http://localhost:3000/api/books/new
BODY: x-www-form-urlencoded
key: titulo         value: a volta dos que não foram
key: subtitulo      value: e depois foram novamente
key: isbn           value: 9788535927375
key: autores        value: diego
key: generos        value: drama
key: qtde_paginas   value: 2
key: resumo         value: eles disseram que iam e nao foram
key: dt_publicacao  value: 2016/01/22

Retorno:
{
  "__v": 0,
  "titulo": "A VOLTA DOS QUE NAO FORAM",
  "subtitulo": "e depois foram novamente",
  "isbn": 9788535927375,
  "qtde_paginas": 2,
  "resumo": "eles disseram que iam e nao foram",
  "dt_publicacao": "2016-01-22T02:00:00.000Z",
  "_id": "577c44c0f66d927c0703e316",
  "created_at": "2016-07-05T23:37:36.649Z",
  "generos": [
    "drama"
  ],
  "autores": [
    "diego"
  ]
}

==== UPDATE ==== 
METHOD: PUT
URL: http://localhost:3000/api/books/577aecc76013bf6f03e7dee8
BODY: x-www-form-urlencoded
key: subtitulo  value: teste sub

Resposta:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

==== FIND ==== 
METHOD: GET
URL: http://localhost:3000/api/books/find

Resposta:
[
  {
    "_id": "577aecc76013bf6f03e7dee6",
    "titulo": "VOLTA AO MUNDO EM 80 DIAS",
    "subtitulo": "",
    "isbn": 9788525423498,
    "qtde_paginas": 258,
    "resumo": "A volta ao mundo em 80 dias (1864) e a sua novela mais celebre, onde narra as peripecias de Phileas Fogg, seu personagem mais famoso, e sua exotica aposta, onde se compromete a fazer a volta ao mundo em oitenta dias",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "__v": 0,
    "created_at": "2016-07-04T23:09:59.002Z",
    "generos": [
      "acao",
      "aventura"
    ],
    "autores": [
      "Julio Verne"
    ]
  },
  {
    "_id": "577aecc76013bf6f03e7dee8",
    "titulo": "O MENINO MALUQUINHO",
    "subtitulo": "teste sub",
    "isbn": 9780385351034,
    "qtde_paginas": 40,
    "resumo": "de panelas na cabeca",
    "dt_publicacao": "1990-10-12T14:13:00.000Z",
    "__v": 0,
    "created_at": "2016-07-04T23:09:59.019Z",
    "generos": [
      "aventura"
    ],
    "autores": [
      "Ziraldo"
    ]
  }
]

==== FIND ONE ==== 
METHOD: GET
URL: http://localhost:3000/api/books/577aecc76013bf6f03e7dee8

Resposta:
{
  "_id": "577aecc76013bf6f03e7dee8",
  "titulo": "O MENINO MALUQUINHO",
  "subtitulo": "teste sub",
  "isbn": 9780385351034,
  "qtde_paginas": 40,
  "resumo": "de panelas na cabeca",
  "dt_publicacao": "1990-10-12T14:13:00.000Z",
  "__v": 0,
  "created_at": "2016-07-04T23:09:59.019Z",
  "generos": [
    "aventura"
  ],
  "autores": [
    "Ziraldo"
  ]
}

==== DELETE ==== 
METHOD: delete
URL: http://localhost:3000/api/books/577aecc76013bf6f03e7dee6

Resposta:
{
  "ok": 1,
  "n": 1
}
```


### 4 - Criar um módulo reponsável pelas respostas do sistema
callback.js
```js
'use strict';
module.exports = (err,data,res,page,maxPages) => {
  if (err) {
    res.writeHead(404);
      res.end(err.toString());
    }
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

### 5 - Criar um módulo responsável por tratar erros, primeiro parâmetro do callback das funções do Mongoose.

error.js
```js
'use strict';
module.exports = (err,res) => {
    res.writeHead(404);
    return res.end(err.toString());
};
```

callback.js (alterado com a chamada do modulo de erro)
```js
'use strict';
const error = require('./error');
module.exports = (err,data,res,page,maxPages) => {
  if (err) error(err,res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

##Parte 03 - Express Generator
### Criar um CRUD para User, o qual deve possuir os seguintes campos:
- email : String
- password: String
- createAt : Date

## As rotas UPDATE e DELETE devem ser definidas utilizando a variável ':id', para que suas ações executem diretamente no User desejado.

##Criar uma rota que deverá retornar apenas 1 usuário utilizando o seguinte padrão:
- router.get('/:id')

Abaixo coloquei os principais arquivos e/ou que sofreram alguma alteração os demais foram os padrões gerados pelo express generator.

config/db-config.js
```js
//importar o mongoose 
const mongoose = require('mongoose');

const uriDB = 'mongodb://localhost/mongoose-users-test';

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

Modules/model.js
```js
'use strict';
module.exports = function(ModelName,Schema) {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}
```

Modules/Users 
- actions
```js
//action-create.js
'use strict';

const callback = require('./callback');
module.exports = (Model) => {
  return (res, user) => {
    console.log("aqui");
    Model.create(user, (err,data) => callback(err,data,res, 0, 0));
  };
};

//action-find.js
'use strict';

const callback = require('./callback');

module.exports = (Model) => {
  return (res, query, page) => {
  Model.count(query, (err, count) => {
    const maxPages = Math.ceil(count/5);
    Model.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(5).skip(5 * (page - 1));
  });
};
}

//action-findOne.js 
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, id) => {
    Model.findOne(id, (err,data) => callback(err,data,res, 0, 0));
  };
}

//action-remove.js
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res, query) => {
    Model.remove(query, (err,data) => callback(err,data,res,0,0));
  };
}

//action-update.js
'use strict';
const callback = require('./callback');
module.exports = (Model) => {
  return (res,query,mod, opt) => {
    const options = opt ? {multi: true} : '';
    Model.update(query,mod,options, (err,data) => callback(err,data,res,0,0));
  };
}

//callback.js
'use strict';
const error = require('./error');
module.exports = (err,data,res,page,maxPages) => {
  if (err) error(err,res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};

//error.js
'use strict';
module.exports = (err,res) => {
    res.writeHead(404);
    return res.end(err.toString());
};
```

- atoms
```js
//atom-created_at.js
'use strict'
module.exports = { type: Date, default: Date.now };

//atom-email.js
'use strict'
module.exports = {
  type: String
  , validate: require('../quarks/quark-isEmail')
  , set: require('./../quarks/quark-toLowerCase')
  , index: true
  , required: true
}

//atom-password.js
'use strict'
module.exports = {type: String
  , validate: require('../quarks/quark-validate-str-lengthGTE5')
  , required: true
}
```

- molecules
```js 
//molecule.js
'use strict';

const mongoose = require('mongoose');
const email = require('../atoms/atom-email');
const password = require('../atoms/atom-password');
const created_at = require('../atoms/atom-created_at');

const _schema = {
  email
  , password
  , created_at
}

const UserSchema = new mongoose.Schema(_schema);

module.exports = UserSchema;
```

- organisms
```js
//Organism.js
'use strict';

const UserSchema = require('../molecules/Molecule');
const User = require('../../../modules/model')('Usuarios',UserSchema);

//actions
const create = require('../actions/action-create')(User);
const find = require('../actions/action-find')(User);
const findOne = require('../actions/action-findOne')(User);
const remove = require('../actions/action-remove')(User);
const update = require('../actions/action-update')(User);

const CRUD = {
  create
  , find
  , findOne
  , update
  , remove
};

module.exports = CRUD;
```

- quarks
```js
//quark-isEmail.js
'use strict';

module.exports = (value) => {
  const regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  const isEmpty = require('./quark-isEmpty')(value);
  if(isEmpty) return false;
  const isString = require('./quark-isString')(value);
  if(!isString) return false;
  return regex.test(value);
 }

//quark-isEmpty.js
'use strict';
module.exports = (value) => {
  const isNull = (value === null);
  const isUndefined = (value === undefined);
  const isEmpty = (value === '');
  if (isNull || isUndefined || isEmpty) return true;
  return false;
}

//quark-isString.js
'use strict';
module.exports = (value) => {
  if (typeof value === 'string' || value instanceof String) return true;
  return false;
}

//quark-toLowerCase.js
'use strict';
module.exports = (v) => v.toLowerCase();

//quark-validate-str-lengthGTE5.js
'use strict';
module.exports = {
  validator: (v) => v.length >= 5
, message: 'Titulo {VALUE} precisa ser maior que 5 caracteres'
}
```

modules/Users/routes.js 
```js 
'use strict'

const express = require('express');
const app = express();
const router = express.Router(); //cria objeto router para redirecionar as requisiçoes para o destino correto.
const UserModel = require('../Users/organisms/Organism');
const querystring = require('querystring');


router.all('*',(req,res,next) => { // router.all é executado para todos os verbos http.
  console.log('all');
  next();
});

router.post('/new', (req, res) => {
  console.log("new");
  const body = req.body;
  console.log(body);
    UserModel.create(res, body);
});

router.get('/find', (req,res,next) =>{
  console.log('find');
     const page = 1;
     const q = req.query.q;
     const query = q ? {email: q} : {};
     console.log(query);
     UserModel.find(res, query, page);
});

router.get('/:id', (req,res) =>{
  console.log('findOne');
     const id = req.params.id;
     const query = {"_id": id};
     UserModel.findOne(res, query);    
});

router.put('/:id', (req,res) => {
  console.log('put / update');
  const multi = false;
  const id = req.params.id;
  const body = req.body;
  UserModel.update(res,{"_id": id}, body, multi);
});

router.delete('/:id', (req,res) => {
  const id = req.params.id;
  UserModel.remove(res,{"_id": id});
});

module.exports = router;
```

app.js
```js 
'use strict';

require('./config/db-config');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const UsersApi = require('./modules/Users/routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/users', UsersApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
```

package.json
```js
{
  "name": "express-generator",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "mongoose": "^4.5.3",
    "morgan": "~1.7.0",
    "querystring": "^0.2.0",
    "serve-favicon": "~2.3.0"
  }
}
```

RESULTADO:
```
==== CREATE ==== 
METHOD: POST
URL: http://localhost:3000/api/users/new
BODY: x-www-form-urlencoded
key: email      value: tuchedsf@gmail.com
key: password   value: 123456

Retorno:
{
  "__v": 0,
  "email": "tuchedsf@gmail.com",
  "password": "123456",
  "_id": "577c584668b8a8fa0a320571",
  "created_at": "2016-07-06T01:00:54.712Z"
}

METHOD: POST
URL: http://localhost:3000/api/users/new
BODY: x-www-form-urlencoded
key: email      value: teste@gmail.com
key: password   value: teste

Retorno:
{
  "__v": 0,
  "email": "teste@gmail.com",
  "password": "teste",
  "_id": "577db172c51025080e884979",
  "created_at": "2016-07-07T01:33:38.269Z"
}

==== UPDATE ==== 
METHOD: PUT
URL: http://localhost:3000/api/users/577db172c51025080e884979
BODY: x-www-form-urlencoded
key: password      value: naoehmaiteste

{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

==== FIND ==== 
METHOD: GET
URL: http://localhost:3000/api/users/find

Retorno:
[
  {
    "_id": "577c584668b8a8fa0a320571",
    "email": "tuchedsf@gmail.com",
    "password": "123456",
    "__v": 0,
    "created_at": "2016-07-06T01:00:54.712Z"
  },
  {
    "_id": "577db172c51025080e884979",
    "email": "teste@gmail.com",
    "password": "naoehmaiteste",
    "__v": 0,
    "created_at": "2016-07-07T01:33:38.269Z"
  }
]

==== FINDONE ==== 
METHOD: GET
URL: http://localhost:3000/api/users/577c584668b8a8fa0a320571

Retorno:
{
  "_id": "577c584668b8a8fa0a320571",
  "email": "tuchedsf@gmail.com",
  "password": "123456",
  "__v": 0,
  "created_at": "2016-07-06T01:00:54.712Z"
}

==== DELETE ==== 
METHOD: delete
URL: http://localhost:3000/api/users/577c584668b8a8fa0a320571

Retorno:
{
  "ok": 1,
  "n": 1
}

