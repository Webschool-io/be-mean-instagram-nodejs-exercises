# Node.js - Aula 08 - Exercício

**user:** [jadir-junior](https://github.com/jadir-junior)

**autor:** Jadir Jose da Silva Junior

#### 1 - Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para url/404.

```
//server.js

  var express = require('express');
  var path = require('path');
  var app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  var pageNotFound = require('./app/notfound');

  app.get('/', function(req, res) {
    res.render('home');
  });

  app.get('/not-found', function(req, res) {
    res.render('not-found');
  });

  app.get('*', function(req, res, next) {
    pageNotFound(req, res, next);
  });

  app.listen(3000, function(){
    console.log('servidor rodando em http://localhots:3000');
  });

// module
// /app/notfound.js

  module.exports = function(req, res, next) {
    res.status(404).redirect('/not-found');
    next();
  };

```
#### 2 - Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send

```
// server.js
  var express = require('express');
  var app = express();

  var verifyHeader = require('./app/ex01');

  app.get('/string', function(req, res, next) {
    var s = verifyHeader(res, next, 'mick');
    res.send(s);
  });

  app.get('/buffer', function(req, res, next) {
    var b = new Buffer(10);
    res.send(verifyHeader(res, next, b));
  });

  app.listen(3000, function(){
    console.log('servidor rodando em http://localhots:3000');
  });

// module
// /app/ex01.js

  module.exports = function(res, next, value) {
    console.log(value);
    if(typeof value === 'string') {
      res.set({"Content-Type": "text/html"});
      next();
    }

    if(Buffer.isBuffer(value)){
      res.set({"Content-Type": "application/octet-stream"});
      next();
    }
  };
```
