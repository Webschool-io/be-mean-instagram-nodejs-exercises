#NodeJS - Aula 03 - Exercícios
autor: Dariano Soares

##1. Por que quando requisitamos ao nosso servidor de Query String, **com o Chrome**, ele executa 2 requisições, sendo a última "vazia"?

São feita duas requisições uma para **trazer os dados** e a segunda para **trazer o favicon.ico**.

##2. Qual a DIFERENÇA entre o GET e o POST?
**GET** Recupera uma representação do recurso especificado. Uma requisição GET não deve alterar o estado do servidor, e é essencialmente uma operação de leitura.

**POST** É usado para se criar novos recursos no servidor. Usos típicos de requisição POST são o envio de formulários HTML e a adição de dados a uma base de dados.

Referencia -> Livro Pro Node.js para Desenvolvedores. Autor: Colin J. Ihrig
##3. Crie um Pokemon na nossa API com seu nome, depois modifique o seu nome pelo User do Github, colocando aqui a resposta de cada passo?

Após **adiconado** o pokemon Magneton a resposta foi:
```json
postData name=magneton&type=electric
Tamanho do postData 27
STATUS: 201

HEADERS: {
  "server": "Cowboy",
  "connection": "close",
  "x-powered-by": "Express",
  "access-control-allow-origin": "*",
  "content-type": "application/json; charset=utf-8",
  "content-length": "78",
  "etag": "W/\"4e-2gRVPek+rPQoqO15ybRyGw\"",
  "date": "Sat, 12 Dec 2015 22:03:33 GMT",
  "via": "1.1 vegur"
}
Dados finalizados: {
  "__v": 0,
  "name": "magneton",
  "type": "electric",
  "_id": "566c99b5103f631100175e62"
}
```
Após **atualizar** para o nome do usuário do gitHub o resultado foi:

```json
STATUS: 202
HEADERS: : {
  "server": "Cowboy",
  "connection": "close",
  "x-powered-by": "Express",
  "access-control-allow-origin": "*",
  "content-type": "application/json; charset=utf-8",
  "content-length": "108",
  "etag": "W/\"6c-Z+EiJ7w7xZR5Iy+oKrCjOA\"",
  "date": "Sat, 12 Dec 2015 22:11:15 GMT",
  "via": "1.1 vegur"
}

Dados finalizados: {
  "data": {
    "ok": 1,
    "nModified": 1,
    "n": 1,
    "lastOp": "6227523371689574401",
    "electionId": "565e25d106dca622271891c4"
  }
}
```
##4. **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```json
STATUS: 204
HEADERS: {
  "server": "Cowboy",
  "content-length": "0",
  "connection": "close",
  "x-powered-by": "Express",
  "access-control-allow-origin": "*",
  "date": "Sat, 12 Dec 2015 22:15:17 GMT",
  "via": "1.1 vegur"
}
```
##5. Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**?
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        parent: 'http%3A%2F%2Flabs.bluesoft.com.br'
      });

const options = {
        host: 'accounts.google.com'
      , method: 'GET'
      , path: '/o/oauth2/postmessageRelay'
      , headers: {
          'Content-Type': 'text/html'
        }
      };

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (dados) =>  {
    data += dados;
  });
  res.on('end', () => {
    console.log('Dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERRO: ' + e.message);
});

req.end();
```
Retorno:

```html
<!DOCTYPE html>
<html lang=en>
   <meta charset=utf-8>
   <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
   <title>Error 404 (Not Found)!!1</title>  
   <div id="af-error-container">
      <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
      <p><b>404.</b> <ins>That’s an error.</ins>
      <p>The requested URL was not found on this server. <ins>That’s all we know.</ins>
   </div>
</html>   

```