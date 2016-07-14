# Node.js - Aula 10 - Exercício 

**User:** [gkal19](https://github.com/gkal19)

**Autor:** Gabriel Kalani

### 1 - Criar um módulo de redirecionamento para quando não encontrar a rota redirecionar para `url/404`
```js
'use strict';

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.redirect('admin');
})
.get('/admin', function(req,res) {
  res.send('Rota de Admin');
});
/*app.use(function(req, res, next) {
  res.status(404).send('Nada encontrado!');
});*/
app.get('*', function(req, res){
  res.send('<section align="center"><h1>O que houve?! Tivemos um 404 aqui.</h1><hr><img src="https://raw.githubusercontent.com/Webschool-io/be-mean-instagram/master/Apostila/module-nodejs/src/aula-express/public/logo-webschool.png"></section>', 404);
});
app.listen(3000, function () {
  console.log('Servidor rodando em localhost:3000');
});
```
##### Resultado
![](http://i.imgur.com/B94I4bV.png)

> Explicando, bom no código podem ver que o GET está setado para ir apenas para `/admin` e nenhum outro além dele. Por isso na imagem acima, eu acessei no browser: `http://localhost:3000/admin/p` que resultou no seguinte.

### 2 - Adicionar o retorno correto para os seguinte códigos:
> 200,201,202,405,500

```js
// 200
app.get('/', function (req, res) {
    res.status(200).send('AEE CARAI, DE BOA!')
});

// 201
app.get('/', function (req, res) {
    res.status(201).send('DE BOA!')
});

// 202
app.get('/', function (req, res) {
    res.status(202).send('EHH, PODE SER!')
});

// 405
app.get('/', function (req, res) {
    res.status(405).send('NÃO PERMITIDO!')
});

// 500
app.get('/', function (req, res) {
    res.status(500).send('ERRO NO SERVIDOR!')
});
```

### 3 - Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send

### 4 - Criar uma busca, dos Pokemons, com o Mongoose que pagine o resultado retornando os links corretamente e que essa busca seja retornada como:

- html

- json


ps: Não esquecer do link para previous e first quando necessários.
