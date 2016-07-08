# Node.js - Aula 03 - Exercício
**user:** [fauker](https://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
A requisição adicional é feita porque o **Chrome** está tentando buscar
o `favicon.ico` da aplicação.

## Qual a DIFERENÇA entre o GET e o POST?
De uma forma bem simples: `GET` é utilizado para requisitar dados sem
alterá-los no servidor, enquanto `POST` é utilizado para inserir algo no
servidor. Por exemplo: uma página de pesquisa deve utilizar `GET`,
enquanto um formulário de cadastro deve utilizar `POST` para submeter as
informações ao servidor.

Comparação:

**Histórico**:
- GET: Os parâmetros são salvos no browser porque eles fazem parte da
  URL.
- POST: Os parâmetros não são salvos no browser.

**Favoritos no navegador**:
- GET: Pode ser adicionado em favoritos, no navegador.
- POST: Não pode ser adicionado em favoritos, no navegador.

**Tipos de dados suportados**:
- GET: application/x-www-form-urlencoded
- POST: multipart/form-data ou application/x-www-form-urlencoded

**Cache**:
- GET: Pode ser cacheado
- POST: Não pode ser cacheado

**Restrições no formato dos dados**:
- GET: Apenas caracteres ASCII são permitidos
- POST: Sem restrições. Arquivos binátios também são permitidos.

**Usabilidade/Visibilidade**:
- GET: Todas as informações são visíveis na URL, portanto não é
  recomendado utilizar este método para enviar informações delicadas,
  senhas etc.
- POST: As informações são enviadas junto com a requisição HTTP,
  portando nada fica visível na URL. Sendo assim, este método é o
  recomendado para o envio de informações delicadas/senhas para o
  servidor.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**POST**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Lucas Moreira'
      , type: 'student'
      });
console.log("postData", postData);
console.log("Tamanho do postData", postData.length);
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
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

**Resposta**:

```
postData name=Lucas%20Moreira&type=student
Tamanho do postData 33
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"82","etag":"W/\"52-aF+iYI+9imnEnoNvlnzrzQ\"","date":"Thu, 21 Apr 2016 13:05:28 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Lucas Moreira","type":"student","_id":"5718d018cdd40a1100cf59a1"}
```

**PUT**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'fauker'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/5718d018cdd40a1100cf59a1'
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
  console.log('ERROOOO: ' + e.message);
});
req.write(postData);
req.end();
```

**Resposta:**

```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-MWWv9jU4vqlcL2ixcMLOUQ\"","date":"Thu, 21 Apr 2016 13:12:31 GMT","via":"1.1 vegur"}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

**DELETE**

```
'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'delete'
      , path: '/api/pokemons/5718d018cdd40a1100cf59a1'
      , headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };

function callback(res) {
  console.log('status: ' + res.statuscode);
  console.log('headers: ' + json.stringify(res.headers));

  let data = '';

  res.setencoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    console.log('dados finalizados: ', data)
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('erroooo: ' + e.message);
});
req.end();  
```

***Resposta***

```
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Thu, 21 Apr 2016 13:16:17 GMT","via":"1.1 vegur"}
```
## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```
'use strict';

const http = require('http');

const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

function callback(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  let data = [];

  res.setEncoding('utf8');
  res.on('data', (chunk) =>  {
    data += chunk;
  });
  res.on('end', () => {
    var json = JSON.parse(data);
    console.log('<html>');
    console.log('<head></head>');
    console.log('<body>');
    console.log('<div>');
    console.log(json.videos[0].video);
    console.log('</div>');
    console.log('</body>');
    console.log('</html>');
  })
}

const req = http.request(options, callback);

req.on('error', (e) =>  {
  console.log('ERROOOO: ' + e.message);
});
req.end();
```

```
STATUS: 200
HEADERS: {"server":"nginx","date":"Thu, 21 Apr 2016 13:41:52 GMT","content-type":"application/json;charset=utf-8","transfer-encoding":"chunked","connection":"close","set-cookie":["PHPSESSID=8ta1697inn11p57ponibo5g705; path=/","RNLBSERVERID=ded6281; path=/"],"expires":"Thu, 19 Nov 1981 08:52:00 GMT","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","pragma":"no-cache"}
<html>
<head></head>
<body>
<div>
{ duration: '11:24',
  views: '574759',
  video_id: '302038',
  rating: '3.87',
  ratings: '450',
  title: 'Sasha Grey at Anatomie HD',
  url: 'http://www.redtube.com/302038',
  embed_url: 'http://embed.redtube.com/?id=302038',
  default_thumb: 'http://img.l3.cdn.redtubefiles.com/_thumbs/0000302/0302038/0302038_012m.jpg',
  thumb: 'http://img.l3.cdn.redtubefiles.com/_thumbs/0000302/0302038/0302038_012m.jpg',
  publish_date: '2016-04-20 10:50:01',
  tags:
   [ { tag_name: 'Anal Sex' },
     { tag_name: 'Brunette' },
     { tag_name: 'Caucasian' },
     { tag_name: 'Couple' },
     { tag_name: 'Hairy' },
     { tag_name: 'Pornstar' },
     { tag_name: 'Uniform' } ],
  stars: [ { star_name: 'Sasha Grey' } ] }
</div>
</body>
</html>
```
