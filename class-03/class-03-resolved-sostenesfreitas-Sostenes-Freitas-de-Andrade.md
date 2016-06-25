# Node.js - Aula 03 - Exercício

**user:** [sostenesfreitas](https://github.com/sostenesfreitas)

**autor:** Sóstenes Freitas de Andrade

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Por que a segunda requisição o chrome requisita o favicon da pagina.


## Qual a DIFERENÇA entre o GET e o POST?
O método GET transporta apenas textos até 255 caracteres que podem ser armazenadas em cache, já o POST pode transportar outros tipos de dados, não possui tamanho máximo para envio mas não pode ser armazenado em cache.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```
  STATUS: 201
  HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-c
  ontrol-allow-origin":"*","content-type":"application/json; charset=utf-8","content-
  length":"83","etag":"W/\"53-RXG9NFsfcTshTpw7BRBGLw\"","date":"Sun, 13 Mar 2016 19:1
  4:48 GMT","via":"1.1 vegur"}
  Dados finalizados:  {"__v":0,"name":"Jefferson Daniel","type":"Aluno","_id":"56e5bc
  2733a78b1100c06ebb"}
```

```
  STATUS: 202
  HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-c
  ontrol-allow-origin":"*","content-type":"application/json; charset=utf-8","content-
  length":"108","etag":"W/\"6c-zxp2AvRAjB/3nkyyVhKR6A\"","date":"Sun, 13 Mar 2016 19:
  37:31 GMT","via":"1.1 vegur"}
  Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"62616235909536808
  97","electionId":"565e25d106dca622271891c4"}}
```



## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
  'use strict';

  const http = require('http');
  const querystring = require('querystring');

  const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'DELETE'
  , path: '/api/pokemons/56e5bc2733a78b1100c06ebb'
  };
