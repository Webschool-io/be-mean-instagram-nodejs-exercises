# Node.js - Aula 03 - Exercício
**user:** [sergiokopplin](https://github.com/sergiokopplin)
**autor:** Sérgio Kopplin


## 1. Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
No Chrome a segunda requisição foi a de um favicon. O Status Code é 200 mas não existe conteúdo.


## 2. Qual a DIFERENÇA entre o GET e o POST?

- **GET**: Get é enviado via URL e possui um limite. Ela é mais rápida, porém só comporta textos.
- **POST**: Enviada no corpo da requisição http e não possui limites no tamanho do pacote. Encapsulado para envio e pode conter qualquer tipo de dado.


## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**INCLUSÃO**
```BASH
node http-request-post.js
postData name=Sergio%20Kopplin&type=dev
Tamanho do postData 30
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"79","etag":"W/\"4f-S/dEhTwVZmMAZDqbvIBPQw\"","date":"Thu, 11 Feb 2016 00:05:56 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Sergio Kopplin","type":"dev","_id":"56bbd0647a041e110010a115"}
```

**ALTERAÇÃO**
```BASH
node http-request-put.js
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-mQ0D9TTjH90glRZwHyt4GA\"","date":"Thu, 11 Feb 2016 00:08:03 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6249818581282848769","electionId":"565e25d106dca622271891c4"}}
```

## 4. **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```JS
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    name: ''
});

const options = {
    host: 'webschool-io.herokuapp.com'
    , method: 'DELETE'
    , path: '/api/pokemons/56bbd0647a041e110010a115'
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
};

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});

req.write(postData);
req.end();
```

## 5. Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```JS
'use strict';

const http = require('http');

const options = {
    host: 'pokeapi.co'
    , path: '/api/v2/pokemon/'
};

function callback(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.setEncoding('utf8');

    let dados = '';

    res.on('data', (chunk) => {
        dados += chunk;
    });

    res.on('end', () => {
        let js = JSON.parse(dados);

        console.log(js[1]);

        console.log('<ul>');

        for(var i = 0; i < js.length; i++) {
            console.log('<li>' + js[i].name + '</li>');
        }

        console.log('<ul>');
    })
}

const req = http.request(options, callback);

req.on('erros', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();

```

*resultado*

```
node http-request.js
STATUS: 200
HEADERS: {"server":"nginx/1.1.19","date":"Thu, 11 Feb 2016 01:15:06 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Cookie","x-frame-options":"SAMEORIGIN","allow":"GET, HEAD, OPTIONS"}
{ name: 'ivysaur', url: 'http://pokeapi.co/api/v2/pokemon/2/' }
<ul>
<li>bulbasaur</li>
<li>ivysaur</li>
...
<li>floette-eternal</li>
<li>latias-mega</li>
<li>latios-mega</li>
<ul>
```
