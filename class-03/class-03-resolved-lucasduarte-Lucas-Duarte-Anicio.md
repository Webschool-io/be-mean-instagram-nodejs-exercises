# Node.js - Aula 03 - Exercício
**user:** [lucasduarte](https://lucasduarte.github.io)
**autor:** Lucas Duarte Anício

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A requisição extra é executada a fim de obter o "favicon"

## Qual a DIFERENÇA entre o GET e o POST?
**GET** Serve para requisitar dados de uma determinada aplicação
**POST** É utilizado para submeter dados que posteriormente serão processados pela aplicação

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**Código Criação**
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
  name: 'Lucas Duarte',
  type: 'aluno'
});

const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'POST'
  , path: '/api/pokemons'
  , headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    , 'Content-Length': postData.length
  }
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();

```

**Resultado**
```
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"79","etag":"W/\"4f-y2YhmPP6F7gUftFszWtHnQ\"","date":"Fri, 01 Apr 2016 23:19:03 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Lucas Duarte","type":"aluno","_id":"56ff01e72ac29c1100ab422f"}
```

**Código Alteração**
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
  name: 'Lucas Duarte Anicio',
});

const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'PUT'
  , path: '/api/pokemons/56ff01e72ac29c1100ab422f'
  , headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    , 'Content-Length': postData.length
  }
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();

```

**Resultado**
```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"90","etag":"W/\"5a-Qb9Gax1+1bghS2ST/U8Bkg\"","date":"Fri, 01 Apr 2016 23:25:11 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":0,"n":1,"lastOp":"0","electionId":"56ee12f2563048036a1e77e7"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

**Código**
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
});

const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'DELETE'
  , path: '/api/pokemons/56ff01e72ac29c1100ab422f'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();

```

**Resultado**
```
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Fri, 01 Apr 2016 23:28:02 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

**Código**
```js
'use strict';

const http = require('http');

const options = {
    host: 'correiosapi.apphb.com'
  , path: '/cep/76873274'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERRO: ' + e.message);
});
req.end();

```

**Resultado**
```
STATUS: 200
HEADERS: {"server":"nginx","date":"Fri, 01 Apr 2016 23:31:09 GMT","content-type":"application/json; charset=utf-8","content-length":"120","connection":"close","cache-control":"no-cache","pragma":"no-cache","expires":"-1"}
Dados finalizados:  {"cep":"76873274","tipoDeLogradouro":"Rua","logradouro":"Juriti","bairro":"Setor 02","cidade":"Ariquemes","estado":"RO"}

```
