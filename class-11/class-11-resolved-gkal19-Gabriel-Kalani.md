# Node.js - Aula 11 - Exercício 

**User:** [gkal19](https://github.com/gkal19)  

**Autor:** Gabriel Kalani

**Data:** 1468455084502

### Índice

##### [Parte 01](#parte-01)
##### [Parte 02](#parte-02)
##### [Parte 03](#parte-03)


### Parte 01

### 1- Usando o exemplo do req.params, recebe os parâmetros name, email, cpf, transforme-os em um schema do mongoose, salve-o no mongo e devolva o resultado, usando res.json(user). Use o postman ou o navegador (grave 5 users ou mais):

```js
// schema.js
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

```js
// user-model.js
'use strict'

require("./db-config");
const UserSchema = require('./schema');
const UserModel = require('./model')("Usuarios",UserSchema);

const callback = (err, data, res) => {
  if (err) return res.status(400).send(err);
  res.json(data);
};

const CRUD = {
  create : (res, user) => {
    UserModel.create(user, (err, data) => callback(err, data, res));
  }
}

module.exports = CRUD;
```

```js
// ex01.js
'use strict'

const express = require('express');
const app = express();
const UserModel = require('./user-model');


app.get('/user/:nome/:email/:cpf', (req, res) => {
  const nome = req.params.nome;
  const email = req.params.email;
  const cpf = req.params.cpf;

  const user = {"Nome": nome, "Email":email, "CPF":cpf };
  UserModel.create(res, user);

});


app.listen(3000, () => {
  console.log("Servidor sendo executado na porta 3000");
});
```

> Com o Postman peguei as chamadas pelo GET

```
// Chamada 1
Chamada1: localhost:3000/user/gabriel/gabrielsilva1956@gmail.com/12345678
Retorno:
{
    "__v":0,
    "nome":"gabriel",
    "email":"gabrielsilva1956@gmail.com",
    "cpf":"12345678",
    "_id":"57869e24e6475ff30c5fd1ce"
}
// Chamada 2
Chamada2: localhost:3000/user/jean%20suissa/jnascimento@gmail.com/12345678
Retorno:
{
   "__v":0,
   "nome":"jean suissa",
   "email":"jnascimento@gmail.com",
   "cpf":"12345678",
   "_id":"57869f2de6475ff30c5fd1cf"
}
// Chamada 3
Chamada3: localhost:3000/user/darth%20vader/vader@empire.net/12345678
Retorno:
{
   "__v":0,
   "nome":"darth vader",
   "email":"vader@empire.net",
   "cpf":"12345678",
   "_id":"57869fb0e6475ff30c5fd1d1"
}
// Chamada 4
Chamada4: localhost:3000/user/chewbacca/chewie@falcon.com/12345678
Retorno:
{
   "__v":0,
   "nome":"chewbacca",
   "email":"chewie@falcon.com",
   "cpf":"12345678",
   "_id":"57869ff6e6475ff30c5fd1d2"
}
// Chamada 5
Chamada5: localhost:3000/user/han%20solo/han-solo@falcon.com/12345678
Retorno:
{
   "__v":0,
   "nome":"han solo",
   "email":"han-solo@falcon.com",
   "cpf":"12345678",
   "_id":"5786a04ce6475ff30c5fd1d3"
}
```

### 2- Substitua o arquivo, array-query.json, pela collection criada no exercício anterior e repita a busca porém utilizando o schema do mongoose:

> No arquivo `user-model.js` acrescentei apenas o método para o retrieve.

```js
// user-model.js
'use strict'

require("./db-config");
const UserSchema = require('./schema');
const UserModel = require('./model')("Usuarios",UserSchema);

const callback = (err, data, res) => {
  if (err) return res.status(400).send(err);
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

```js
// ex02.js
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

```
Chamada: localhost:3000/find?q=gabriel
Retorno:
{
    "__v":0,
    "nome":"gabriel",
    "email":"gabrielsilva1956@gmail.com",
    "cpf":"12345678",
    "_id":"57869e24e6475ff30c5fd1ce"
}
```

### 3- Repita o exercício anterior utilizando xml e json na resposta:

```js
// ex03.js
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

```
// XML
Chamada: localhost:3000/find?q=gabriel
Parametro cabeçalho: Content-Type = text/xml
Retorno:
<user>
    <nome>Gabriel</nome>
    <email>gabrielsilva1956@gmail.com</email>
    <cpf>12345678</cpf>
</user>

// JSON
Chamada: localhost:3000/find?q=gabriel
Parametro cabeçalho: Content-Type = application/json
Retorno:
[
  {
    "_id": "57869e24e6475ff30c5fd1ce",
    "nome": "gabriel",
    "email": "gabrielsilva1956@gmail.com",
    "cpf": "12345678",
    "__v": 0
  }
]
```

### 4- Usando o formulário no index.html de exemplo use o body-parser como middleware para gravar registros no mongo:

> Sapoarr me lembrou as aulas de Angular1 :smile:

```js
// ex04.js
'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('index');
const UserModel = require('./user-model');

app.use(bodyParser.json()); // transformar em json
app.use(bodyParser.urlencoded({extended : true}));
 app.post('/user', (req,res) =>{
    UserModel.create(res,req.body);
 });

  app.get('/', (req,res) =>{
     res.set('Content-type', 'text/html');
     fs.createReadStream('./index.html').pipe(res);
 });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

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
> Criei um `user` com os seguintes dados no formulário do arquivo `.html`:

```json
Retorno:
{
   "__v":0,
   "nome":"teste",
   "email":"seu@email.com",
   "cpf":"12345678",
   "_id":"5786a5b62d7fc6fa8d4cdb30"
}
```

### 5- Usando o index-file.html de exemplo, que usa o formidable, modifique-o de forma que o caminho da imagem que foi gravada no disco, seja gravado no mongodb, na colection users:

> No meu `schema.js` adicionei o atributo `imagem` e criei o arquivo `index-file.html` como pedido:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Index</title>
</head>
<body>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label>Nome: </label>
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

> O `formidable` possui uma variável que se chama `fields` que eu vou utilizar para pegar os campos nome, email e cpf. Assim como o `fields` existe o `files` que traz as informações de todos os arquivos enviados pelo formulário.

```js
// ex05.js
'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const UserModel = require('./user-model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './public/images';

  form.parse(req, (err, fields, files) => {
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
  console.log("Servidor sendo executado na porta 3000");
});
```

```
Retorno:
{  
   "__v":0,
   "nome":"gabrielzao",
   "email":"gabriel@web.com",
   "cpf":"12345678",
   "imagem":"public/images/upload_8b0e77fbe06d90057869e2",
   "_id":"5786975b69165ba2e6120780"
}
```

### Parte 02

### 1 - Criar as 4 rotas para o CRUD

```js
// ex06.js
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

```
// CREATE
Method: POST
Chamada: localhost:3000/users/new
Parametros x-www-form-urlencoded:
nome: Internet Explorer
email: explorer@windows.com
cpf: 12345678

Resultado:
{
  "__v": 0,
  "nome": "Internet Explorer",
  "email": "explorer@windows.com",
  "cpf": "12345678",
  "_id": "5786b2562d7fc6fa8d4cdb31"
}
// FIND
Method: GET
Chamada: localhost:3000/find?q=gabriel
Parametro cabeçalho: Content-Type = json
Retorno:
{
    "__v":0,
    "nome":"gabriel",
    "email":"gabrielsilva1956@gmail.com",
    "cpf":"12345678",
    "_id":"57869e24e6475ff30c5fd1ce"
}

// UPDATE
Method: PUT
Chamada: localhost:3000/user/5786a5b62d7fc6fa8d4cdb30  
Parametros x-www-form-urlencoded:
nome: teste

Retorno:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

// DELETE
Method: DELETE
Chamada: localhost:3000/user/5786b2562d7fc6fa8d4cdb31  
Parametros: n/a

Retorno:
{
  "ok": 1,
  "n": 1
}
```

### 2 - Criar a arquitetura atomica do Mongoose (Organismo/Ações/Molécula/Átomos/Quarks).

> Aqui também não vou passar a "desgraça" dos arquivos, são grandes demais e não dá pra resumir, se resumir minha cabeça explode.
Mas postarei só o resultado que ocorreu como desejado :smile: :heart:

> Bem, abaixo serão mostrados, livros que eu importei de um .json (encontrado na Deep Web rsrs) e importei para a collection `books` e deu no que deu...

```
// CREATE 
METHOD: GET
URL: http://localhost:3000/create

Retorno:
[
  {
    "id" : "978-1933988177",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "author" : "Michael McCandless",
    "genre_s" : "IT",
    "inStock" : true,
    "price" : 30.50,
    "pages_i" : 475
  },
    {
    "id" : "978-0641723445",
    "cat" : ["book","hardcover"],
    "name" : "The Lightning Thief",
    "author" : "Rick Riordan",
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 12.50,
    "pages_i" : 384
  },
    {
    "id" : "978-1423103349",
    "cat" : ["book","paperback"],
    "name" : "The Sea of Monsters",
    "author" : "Rick Riordan",
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 6.49,
    "pages_i" : 304
  }
]

// FIND
METHOD: GET
URL: http://localhost:3000/find 

Retorno:
[
     {
    "id" : "978-1857995879",
    "cat" : ["book","paperback"],
    "name" : "Sophie's World : The Greek Philosophers",
    "author" : "Jostein Gaarder",
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 3.07,
    "pages_i" : 64
  }
]

// UPDATE
METHOD: GET
URL: http://localhost:3000/update

Retorno:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

// DELETE
METHOD: GET
URL: http://localhost:3000/delete

Retorno:
{
  "ok": 1,
  "n": 1
}
```
> Acima no `UPDATE` pedi apenas para alterar o preço do livro The Lightning Thief com o ` "id" : "978-0641723445"`


### 3 - Integrar as funções do CRUD do Mongoose com o Express.
```js
// app.js
'use strict'

require ('./config/db-config');
const express = require('express');
const app = express();
const BookAPI = require('./routes-book');

app.use('/api/books', BookAPI);

app.listen(3000,() => {
  console.log('Servidor executando na porta 3000.');
});
```

```
// CREATE
METHOD: POST
URL: http://localhost:3000/api/books/new
BODY: x-www-form-urlencoded
key: cat        value: ["book","hardcover"]
key: name       value: Star Wars: Tarkin
key: author     value: James Luceno
key: genre_s    value: fantasy
key: inStock    value: true
key: price      value: 13,00
key: pages_i    value: 368

Retorno:
{
   "id":"978-8576572619",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Star Wars: Tarkin",
   "author":"James Luceno",
   "genre_s":"Fantasy",
   "inStock":true,
   "price":13.60,
   "pages_i":368
}
// UPDATE
METHOD: PUT
URL: http://localhost:3000/api/books/5786d6bd3ccdb6aa7894070a
BODY: x-www-form-urlencoded
key: author  value: J. K. Rowling

Retorno:
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}
// FIND
METHOD: GET
URL: http://localhost:3000/api/books/find

Retorno:
{
   "_id":ObjectId("5786d3323ccdb6aa78940703"),
   "id":"978-0641723445",
   "cat":[
      "book",
      "hardcover"
   ],
   "name":"The Lightning Thief",
   "author":"Rick Riordan",
   "series_t":"Percy Jackson and the Olympians",
   "sequence_i":1,
   "genre_s":"fantasy",
   "inStock":true,
   "price":12.5,
   "pages_i":384
}{
   "_id":ObjectId("5786d3323ccdb6aa78940704"),
   "id":"978-1423103349",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"The Sea of Monsters",
   "author":"Rick Riordan",
   "series_t":"Percy Jackson and the Olympians",
   "sequence_i":2,
   "genre_s":"fantasy",
   "inStock":true,
   "price":6.49,
   "pages_i":304
}{
   "_id":ObjectId("5786d3323ccdb6aa78940705"),
   "id":"978-1857995879",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Sophie's World : The Greek Philosophers",
   "author":"Jostein Gaarder",
   "sequence_i":1,
   "genre_s":"fantasy",
   "inStock":true,
   "price":3.07,
   "pages_i":64
}{
   "_id":ObjectId("5786d3323ccdb6aa78940706"),
   "id":"978-1933988177",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Lucene in Action, Second Edition",
   "author":"Michael McCandless",
   "sequence_i":1,
   "genre_s":"IT",
   "inStock":true,
   "price":30.5,
   "pages_i":475
}{
   "_id":ObjectId("5786d6bd3ccdb6aa78940707"),
   "id":"978-8576572619",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Star Wars: Tarkin",
   "author":"James Luceno",
   "genre_s":"Fantasy",
   "inStock":true,
   "price":13.6,
   "pages_i":368
}{
   "_id":ObjectId("5786d6bd3ccdb6aa78940708"),
   "id":"978-8576572633",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Star Wars: Sombras do Império",
   "author":"Steve Perry",
   "genre_s":"fantasy",
   "inStock":true,
   "price":16.49,
   "pages_i":448
}{
   "_id":ObjectId("5786d6bd3ccdb6aa78940709"),
   "id":"978-8532511010",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Harry Potter E A Pedra Filosofal",
   "author":"J. K. Rowlng",
   "genre_s":"children",
   "inStock":true,
   "price":3.07,
   "pages_i":224
}{
   "_id":ObjectId("5786d6bd3ccdb6aa7894070a"),
   "id":"978-8532522610",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Harry Potter E As Relíquias Da Morte",
   "author":"J. K. Rowlng",
   "genre_s":"children",
   "inStock":true,
   "price":30.5,
   "pages_i":552
}
// FINDONE
METHOD: GET
URL: http://localhost:3000/api/books/5786d6bd3ccdb6aa7894070a

Retorno:
{
   "_id":ObjectId("5786d6bd3ccdb6aa7894070a"),
   "id":"978-8532522610",
   "cat":[
      "book",
      "paperback"
   ],
   "name":"Harry Potter E As Relíquias Da Morte",
   "author":"J. K. Rowlng",
   "genre_s":"children",
   "inStock":true,
   "price":30.5,
   "pages_i":552
}
// DELETE
METHOD: DELETE
URL: http://localhost:3000/api/books/5786d6bd3ccdb6aa7894070a

Retorno:
{
  "ok": 1,
  "n": 1
}
```

### 4 - Criar um módulo reponsável pelas respostas do sistema

> O arquivo abaixo é o meu antigo `callback.js`

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

```js
// error.js
'use strict';
module.exports = (err,res) => {
    res.writeHead(404);
    return res.end(err.toString());
};
```

> Esse arquivo abaixo também é o meu `callback.js` antigo, porém melhorei ele para a chamada do módulo do erro, com a ajuda do meu amigo stackoverflow rsrs

```js
'use strict';
const error = require('./error');
module.exports = (err,data,res,page,maxPages) => {
  if (err) error(err,res);
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
```

### Parte 03
Express Generator

### Criar um CRUD para User, o qual deve possuir os seguintes campos:
- email : String
- password: String
- createAt : Date

> Criar uma rota que deverá retornar apenas 1 usuário utilizando o seguinte padrão:
- router.get('/:id')

> Não coloquei os outros arquivos aqui, pois não quero meu markdown grande e difícil de enteder.

```js
// app.js
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

```
// CREATE 
METHOD: POST
URL: http://localhost:3000/api/users/new
BODY: x-www-form-urlencoded
key: nome       value: gkal19
key: email      value: gabriel@gkal19.com
key: cpf        value: 12345678

Retorno:
{
  "__v": 0,
  "email": "gabriel@gkal19.com",
  "cpf": "12345678",
  "_id": "5786c12ab567d843ab13238e"
}


// UPDATE 
METHOD: PUT
URL: http://localhost:3000/api/users/578697de69165ba2e6120784
BODY: x-www-form-urlencoded
key: cpf      value: 87654321

{
  "ok": 1,
  "nModified": 1,
  "n": 1
}

// FIND 
METHOD: GET
URL: http://localhost:3000/api/users/find

Retorno:
{
  "_id": "5786975b69165ba2e6120780",
  "email": "gabrielsilva1956@gmail.com",
  "cpf": "12345678",
  "__v": 0
}

// FINDONE
METHOD: GET
URL: http://localhost:3000/api/users/5786978869165ba2e6120781

Retorno:
{
  "_id": "5786978869165ba2e6120781",
  "email": "vader@empire.net",
  "cpf": "12345678",
  "__v": 0
}

// DELETE 
METHOD: delete
URL: http://localhost:3000/api/users/5786b2562d7fc6fa8d4cdb31

Retorno:
{
  "ok": 1,
  "n": 1
}
```