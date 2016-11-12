# Node.js - Aula 03 - Exercício


**user:** [fernandobd42](https://github.com/fernandobd42/)
**autor:** Fernando Lucas

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Porque além da requisição explícita, ela faz uma requisição implícita para buscar o favicon

## Qual a DIFERENÇA entre o GET e o POST?
* **GET:** É o método de leitura, que passa informações como parâmetros pela URL, aceita só String e tem tamanho limitado.

* **POST:** É o método de inserção, suas informações são incapsuladas no HTTP, aceitar qualquer tipo de dado, e não tem limite de tamanho.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

## CRIANDO - POST
```
const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Fernando'
      , type: 'Estudante/Desenvolvedor'
      });
console.log('Tamanho:', postData);
console.log('Tamanho do postData: ', postData.length);
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'POST'
      , path: '/api/pokemons'
      , headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        , 'Content-Length' : postData.length
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
  })
}

const req = http.request(options, callback);

req.on('erro', (e) => {
  console.log('EROOOO: ' + e.message);
});
req.write(postData);
req.end();

```

#### SAíDA
```
Tamanho: name=Fernando&type=Estudante%2FDesenvolvedor
Tamanho do postData:  44
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"93","etag":"W/\"5d-LFekuOlLnoKhZ+3ogin1sg\"","date":"Sat, 12 Nov 2016 17:21:35 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Fernando","type":"Estudante/Desenvolvedor","_id":"58274f9f771fcc0012ecc28b"}
```

## MODIFICANDO - PUT
```
const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'fernandobd42'
      , type: 'Estudante/Desenvolvedor'
      });

const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/58274f9f771fcc0012ecc28b'
      , headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        , 'Content-Length' : postData.length
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
  })
}

const req = http.request(options, callback);

req.on('erro', (e) => {
  console.log('EROOOO: ' + e.message);
});
req.write(postData);
req.end();

```

#### SAíDA
```
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"121","etag":"W/\"79-okD1ZBdyVqHfX5H6W/u62A\"","date":"Sat, 12 Nov 2016 17:24:31 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"opTime":{"ts":"6352134099662012417","t":0},"electionId":"7fffffff0000000000000000"}}
```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Fernando'
      , type: 'Estudante/Desenvolvedor'
      });

const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'DELETE'
      , path: '/api/pokemons/58274f9f771fcc0012ecc28b'
      , headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        , 'Content-Length' : postData.length
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
  })
}

const req = http.request(options, callback);

req.on('erro', (e) => {
  console.log('EROOOO: ' + e.message);
});
req.write(postData);
req.end();

```

#### SAÍDA
```
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 12 Nov 2016 17:25:40 GMT","via":"1.1 vegur"}
Dados finalizados:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```
const http = require('http');

const options = {
  host: 'api.redtube.com'
, path: '/?data=redtube.Videos.searchVideos&search=girlfriend'
};

function callback(res) {
  console.log('STATUS: '+ res.statusCode);
  console.log('HEADERS: '+ JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
  data += chunk;
  });
  res.on('end', () => {
    var result = JSON.parse(data);
    console.log('<html><head><title>Exercicio 3</title></head>');
    console.log('<body><div>');
    console.log(result.videos[0].video);
    console.log('</div></body></html>');
  })
}

const req = http.request(options, callback);
req.on('error', (e) => {
  console.log('ERROOOOO: ' + e.message)
});
req.end();

```

#### SAÍDA
```
STATUS: 200
HEADERS: {"server":"nginx","date":"Sat, 12 Nov 2016 18:29:19 GMT","content-type":"application/json;charset=utf-8","transfer-encoding":"chunked","connection":"close","set-cookie":["PHPSESSID=u9h2tiu22btr5ehp15hv4he3t2; path=/","RNLBSERVERID=ded6287; path=/"],"expires":"Thu, 19 Nov 1981 08:52:00 GMT","cache-control":"no-store, no-cache, must-revalidate, post-check=0, pre-check=0","pragma":"no-cache"}
<html><head><title>Exercicio 3</title></head>
<body><div>
{ duration: '6:04',
  views: '0',
  video_id: '1806447',
  rating: '3.00',
  ratings: '2',
  title: 'Lucy Levon takes some dick from a geek',
  url: 'http://www.redtube.com/1806447',
  embed_url: 'http://embed.redtube.com/?id=1806447',
  default_thumb: '//thumbs-cdn.redtube.com/m=e0YH8f/media/videos/0001806/1806447/thumbs/1806447_015o.jpg',
  thumb: '//thumbs-cdn.redtube.com/m=e0YH8f/media/videos/0001806/1806447/thumbs/1806447_015o.jpg',
  publish_date: '2016-11-12 18:34:31',
  tags:
   [ { tag_name: 'Amateur' },
     { tag_name: 'Asian' },
     { tag_name: 'Blowjob' },
     { tag_name: 'Couple' },
     { tag_name: 'HD' },
     { tag_name: 'MILF' },
     { tag_name: 'Oral Sex' },
     { tag_name: 'Vaginal Sex' } ] }
</div></body></html>

```
