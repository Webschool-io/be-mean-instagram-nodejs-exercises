# Node.js - Aula 08 - Exercício

**user:** [jadir-junior](https://github.com/jadir-junior)

**autor:** Jadir Jose da Silva Junior

#### 1 - Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para url/404.

```
  var express = require('express');
  var path = require('path');
  var app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.get('/', function(req, res) {
    res.render('home');
  });

  app.get('/not-found', function(req, res) {
    res.render('not-found');
  });

  app.get('*', function(req, res) {
    res.status(404).redirect('/not-found');
  });

  app.listen(3000, function(){
    console.log('servidor rodando em http://localhots:3000');
  });
```
#### 2 - Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send

```
  var express = require('express');
  var app = express();

  app.get('/', function(req, res) {
    res.set({
      'Content-Type': "application/json",
      'Auth': 'mick1234'
    });

    res.send('Aprendendo Expressjs');
  });

  app.listen(3000, function(){
    console.log('servidor rodando em http://localhots:3000');
  });
```
