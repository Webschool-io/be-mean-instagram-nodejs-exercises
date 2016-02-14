# Node.js - Aula 03 - Exercício
**user:** [augustoody](https://github.com/AugustoOdy)
**autor:** Augusto Ody
**date:** 1455192829487

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A segunda requisição envia o `favicon.ico`, e a primeira é a requição feita.

## Qual a DIFERENÇA entre o GET e o POST?
**GET:** por seus parametros serem passados pela URL, são armazenados no histórico do navegador, por este mesmo motivo podem ser facilmente alterados e só aceitão caracteres ASCII. Alguns servidores podem acabar limitando o seu tamanho, aceitando uma URL de até 2048 caracteres.

**POST:** seus parametros não são salvos no historico, e podem ser enviados arquivos para o servidor. Não possuem restrição de tamanho, aceitando tambem tipos binários.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

# Criação (POST)
```sh
postData name=Augusto%20Ody&type=aluno
postData.length 29
Status 201
Headers {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"78","etag":"W/\"4e-ZxC702mgB6lts1cpp/xCuQ\"","date":"Thu, 11 Feb 2016 22:29:16 GMT","via":"1.1 vegur"}
Dados finalizados {"__v":0,"name":"Augusto Ody","type":"aluno","_id":"56bd0b3b2c257311009b5721"}
```

# Modificação (PUT)
```sh
postData name=augustoody
postData.length 15
Status 202
Headers {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-frcmbtrtM2TSD81obiZtjw\"","date":"Thu, 11 Feb 2016 22:30:47 GMT","via":"1.1 vegur"}
Dados finalizados {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6250164601028083713","electionId":"565e25d106dca622271891c4"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```sh
Status 204
Headers {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 11 Feb 2016 22:34:41 GMT","via":"1.1 vegur"}
Dados finalizados
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
Consulta na API do Star Wars
```js
'use strict';

const http = require('http');

http.get({
        host: 'swapi.co'
    ,   path: '/api/people/'
    ,   port: 80
    ,   agent: false
}, (res) => {

    let body = '';

    console.log('statusCode', res.statusCode);
    console.log('Headers', JSON.stringify(res.headers));

    res.on('data', (data) => {
        body  += data;
    });

    res.on('end', () => {
        body = JSON.parse(body);
        console.log('<html><body>');
        console.log('<h1>Be - Mean</h1>');
        console.log('<h2>Query String</h2>');
        console.log('<ul>');
        body.results.forEach((data) => {
            console.log("<li>"+data.name+"</li>");
        });
        console.log('</ul>');
        console.log('</body><html>');
    });

    res.on('error', (e) => {
        console.log('error', e.message);
    });

});
```

Resultado:
```
statusCode 200
Headers {"date":"Thu, 11 Feb 2016 23:19:17 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","set-cookie":["__cfduid=dbecc884cb514f3f89b22f6320b74455d1455232756; expires=Fri, 10-Feb-17 23:19:16 GMT; path=/; domain=.swapi.co; HttpOnly"],"etag":"\"1aa90088e8812cbe8a55f2990a9e0e15\"","vary":"Accept, Cookie","x-frame-options":"SAMEORIGIN","allow":"GET, HEAD, OPTIONS","via":"1.1 vegur","server":"cloudflare-nginx","cf-ray":"2733c71872aa1623-LIM"}
<html><body>
<h1>Be - Mean</h1>
<h2>Query String</h2>
<ul>
<li>Luke Skywalker</li>
<li>C-3PO</li>
<li>R2-D2</li>
<li>Darth Vader</li>
<li>Leia Organa</li>
<li>Owen Lars</li>
<li>Beru Whitesun lars</li>
<li>R5-D4</li>
<li>Biggs Darklighter</li>
<li>Obi-Wan Kenobi</li>
</ul>
</body><html>
```
