# Node.js - Aula 03 - Exercício
**user:** [maurienefirmino](https://github.com/maurienefirmino)<br> 
**autor:** Mauriene Firmino do Nascimento Júnior<br>
**date:** 1476019304746

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Por causa do favicon.ico


## Qual a DIFERENÇA entre o GET e o POST?

O GET faz uma requisição e retorna algo, o POST envia algo para a requisição.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**Criando um Pokemon**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Mauriene Firmino do Nascimento Júnior'
      , type: 'Student'
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
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('Error: ' + e.message);
});
req.write(postData);
req.end();

```

**Resultado do console**


```
mauriene@mauriene-J1800NH:~/node/exercicios$ node aula03.js 
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"107","etag":"W/\"6b-tGETF/Ww5/WtW30XSYBmQQ\"","date":"Sun, 09 Oct 2016 13:25:41 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Mauriene Firmino do Nascimento Júnior","type":"Student","_id":"57fa4555719eff00115a6f39"}
mauriene@mauriene-J1800NH:~/node/exercicios$ 

```


**Modificando**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Mauriene Firmino Modificado'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/57fa4555719eff00115a6f39'
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
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('Error: ' + e.message);
});
req.write(postData);
req.end();

```

**Resultado do Console**

```
mauriene@mauriene-J1800NH:~/node/exercicios$ node aula03-update.js 
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"121","etag":"W/\"79-zxawyjvjaCchay4+sweRcw\"","date":"Sun, 09 Oct 2016 13:30:28 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"opTime":{"ts":"6339456889507545089","t":0},"electionId":"7fffffff0000000000000000"}}
mauriene@mauriene-J1800NH:~/node/exercicios$ 

```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'DELETE'
      , path: '/api/pokemons/57fa4555719eff00115a6f39'
      , headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('Error: ' + e.message);
});
req.end();
```

**Resultado do Console**


```
mauriene@mauriene-J1800NH:~/node/exercicios$ node aula03-delete.js 
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sun, 09 Oct 2016 13:33:22 GMT","via":"1.1 vegur"}
Dados finalizados:  
mauriene@mauriene-J1800NH:~/node/exercicios$ 

```


## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```
'use strict';

const http = require('http');
const json2html = require('node-json2html');

const options = {
    host: 'pokeapi.co'
    , path: '/api/v2/pokemon/'
};
function callback(res) {
    console.log('STATUS:' + res.statusCode);
    console.log('HEADERS:' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', ()=>{
        var transform = {'tag':'div','html':'${name} - url: ${url}'};
        var html = json2html.transform(data,transform);  
        console.log(html);
    });
}

const req = http.request(options, callback);
req.on('error', (e) =>  {
    console.log('Error: ' + e.message);
});
req.end();

```
