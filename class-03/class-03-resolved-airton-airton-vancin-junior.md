# Node.js - Aula 03 - Exercício
**user:** [airton](https://github.com/airton)<br> 
**autor:** Airton Vancin Junior<br>
**date:** 1455891128461

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

A segunda requisiçao é vazia por causa do /favicon.ico


## Qual a DIFERENÇA entre o GET e o POST?

O GET faz uma requisição e retorna alguma coisa, o POST faz a requisiçao e grava os dados que são passados.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**POST**

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'Airton Vancin Junior'
      , type: 'Aluno'
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

junior@linux:~/www/be-mean-instagram-nodejs/files/aula03$ node http-request-post.js 
postData name=Airton%20Vancin%20Junior&type=Aluno
Tamanho do postData 40
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"87","etag":"W/\"57-oqGkGdJmijrlvVY+9QhemQ\"","date":"Sat, 13 Feb 2016 22:49:34 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Airton Vancin Junior","type":"Aluno","_id":"56bfb2fdc08f331100525451"}

```

**PUT**

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'airton'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'PUT'
      , path: '/api/pokemons/56bfb2fdc08f331100525451'
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

junior@linux:~/www/be-mean-instagram-nodejs/files/aula03$ node http-request-put.js 
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-ug7ULKX01O4OuFsRfIq22w\"","date":"Sat, 13 Feb 2016 22:53:30 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6250912625417256962","electionId":"565e25d106dca622271891c4"}}

```

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
        host: 'webschool-io.herokuapp.com'
      , method: 'DELETE'
      , path: '/api/pokemons/56bfb2fdc08f331100525451'
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
  console.log('ERROOOO: ' + e.message);
});
req.end();
```

```js
junior@linux:~/www/be-mean-instagram-nodejs/files/aula03$ node http-request-delete.js 
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 13 Feb 2016 22:58:47 GMT","via":"1.1 vegur"}
Dados finalizados:  
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```js
'use strict';

const http = require('http');
const json2html = require('node-json2html');

const options = {
    host: 'fipeapi.appspot.com'
    , path: '/api/1/carros/veiculos/20.json'
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

        var transform = {'tag':'li','html':'${fipe_marca}: ${fipe_name} - ${marca} - ${key} - ${id} - ${name}'};
             
        var html = '<ul>';
            html += json2html.transform(data,transform);
            html += '</ul>';

        console.log('JSON: ', data)
        console.log('HTML: ', html)
    })
}

const req = http.request(options, callback);
req.on('error', (e) =>  {
    console.log('ERROOOO: ' + e.message);
});
req.end();
```

**JSON**
```json
[{"fipe_marca": "Ferrari", "fipe_name": "348 GTS 3.4", "marca": "FERRARI", "key": "348-417", "id": "417", "name": "348 GTS 3.4"}, {"fipe_marca": "Ferrari", "fipe_name": "348 Spider 3.4", "marca": "FERRARI", "key": "348-418", "id": "418", "name": "348 Spider 3.4"}, {"fipe_marca": "Ferrari", "fipe_name": "348 TS/TB 3.4", "marca": "FERRARI", "key": "348-419", "id": "419", "name": "348 TS/TB 3.4"}, {"fipe_marca": "Ferrari", "fipe_name": "355 Berlinetta", "marca": "FERRARI", "key": "355-420", "id": "420", "name": "355 Berlinetta"}, {"fipe_marca": "Ferrari", "fipe_name": "355 Berlinetta F1", "marca": "FERRARI", "key": "355-421", "id": "421", "name": "355 Berlinetta F1"}, {"fipe_marca": "Ferrari", "fipe_name": "355 GTS", "marca": "FERRARI", "key": "355-422", "id": "422", "name": "355 GTS"}, {"fipe_marca": "Ferrari", "fipe_name": "355 GTS F1", "marca": "FERRARI", "key": "355-423", "id": "423", "name": "355 GTS F1"}, {"fipe_marca": "Ferrari", "fipe_name": "355 GTS Spider", "marca": "FERRARI", "key": "355-424", "id": "424", "name": "355 GTS Spider"}, {"fipe_marca": "Ferrari", "fipe_name": "355 GTS Targa", "marca": "FERRARI", "key": "355-425", "id": "425", "name": "355 GTS Targa"}, {"fipe_marca": "Ferrari", "fipe_name": "355 Spider F1", "marca": "FERRARI", "key": "355-426", "id": "426", "name": "355 Spider F1"}, {"fipe_marca": "Ferrari", "fipe_name": "360 Challenge Stradale", "marca": "FERRARI", "key": "360-427", "id": "427", "name": "360 Challenge Stradale"}, {"fipe_marca": "Ferrari", "fipe_name": "360 Modena", "marca": "FERRARI", "key": "360-428", "id": "428", "name": "360 Modena"}, {"fipe_marca": "Ferrari", "fipe_name": "360 Modena F1", "marca": "FERRARI", "key": "360-429", "id": "429", "name": "360 Modena F1"}, {"fipe_marca": "Ferrari", "fipe_name": "360 Spider 400cv", "marca": "FERRARI", "key": "360-430", "id": "430", "name": "360 Spider 400cv"}, {"fipe_marca": "Ferrari", "fipe_name": "360 Spider F1 400cv", "marca": "FERRARI", "key": "360-431", "id": "431", "name": "360 Spider F1 400cv"}, {"fipe_marca": "Ferrari", "fipe_name": "456 GT", "marca": "FERRARI", "key": "456-432", "id": "432", "name": "456 GT"}, {"fipe_marca": "Ferrari", "fipe_name": "456 GTA", "marca": "FERRARI", "key": "456-433", "id": "433", "name": "456 GTA"}, {"fipe_marca": "Ferrari", "fipe_name": "456 M-GT 5.5 V12", "marca": "FERRARI", "key": "456-434", "id": "434", "name": "456 M-GT 5.5 V12"}, {"fipe_marca": "Ferrari", "fipe_name": "550 Maranello", "marca": "FERRARI", "key": "550-435", "id": "435", "name": "550 Maranello"}, {"fipe_marca": "Ferrari", "fipe_name": "575M Maranello F1 V12 515cv", "marca": "FERRARI", "key": "575m-436", "id": "436", "name": "575M Maranello F1 V12 515cv"}, {"fipe_marca": "Ferrari", "fipe_name": "612 Scaglietti F1 V12 540cv", "marca": "FERRARI", "key": "612-3932", "id": "3932", "name": "612 Scaglietti F1 V12 540cv"}, {"fipe_marca": "Ferrari", "fipe_name": "California 3.9 Turbo F1 V8 560cv", "marca": "FERRARI", "key": "california-7179", "id": "7179", "name": "California 3.9 Turbo F1 V8 560cv"}, {"fipe_marca": "Ferrari", "fipe_name": "California F1 V8 460cv", "marca": "FERRARI", "key": "california-5058", "id": "5058", "name": "California F1 V8 460cv"}, {"fipe_marca": "Ferrari", "fipe_name": "F12 Berlinetta 740cv", "marca": "FERRARI", "key": "f12-6463", "id": "6463", "name": "F12 Berlinetta 740cv"}, {"fipe_marca": "Ferrari", "fipe_name": "F430 F1", "marca": "FERRARI", "key": "f430-3812", "id": "3812", "name": "F430 F1"}, {"fipe_marca": "Ferrari", "fipe_name": "F430 SCUDERIA F1", "marca": "FERRARI", "key": "f430-4809", "id": "4809", "name": "F430 SCUDERIA F1"}, {"fipe_marca": "Ferrari", "fipe_name": "F430 Spider F1", "marca": "FERRARI", "key": "f430-4055", "id": "4055", "name": "F430 Spider F1"}, {"fipe_marca": "Ferrari", "fipe_name": "F458 Italia F1 4.5 V8 570cv", "marca": "FERRARI", "key": "f458-6094", "id": "6094", "name": "F458 Italia F1 4.5 V8 570cv"}, {"fipe_marca": "Ferrari", "fipe_name": "F458 Speciale F1 4.5 V8", "marca": "FERRARI", "key": "f458-6912", "id": "6912", "name": "F458 Speciale F1 4.5 V8"}, {"fipe_marca": "Ferrari", "fipe_name": "F458 Spider F1 4.5 V8 570cv", "marca": "FERRARI", "key": "f458-6156", "id": "6156", "name": "F458 Spider F1 4.5 V8 570cv"}, {"fipe_marca": "Ferrari", "fipe_name": "F599 GTB Fiorano F1 6.0 V12 620cv", "marca": "FERRARI", "key": "f599-4289", "id": "4289", "name": "F599 GTB Fiorano F1 6.0 V12 620cv"}, {"fipe_marca": "Ferrari", "fipe_name": "FF F1 6.3 V12 660cv", "marca": "FERRARI", "key": "ff-6095", "id": "6095", "name": "FF F1 6.3 V12 660cv"}]

```

```html
<ul>
   <li>Ferrari: 348 GTS 3.4 - FERRARI - 348-417 - 417 - 348 GTS 3.4</li>
   <li>Ferrari: 348 Spider 3.4 - FERRARI - 348-418 - 418 - 348 Spider 3.4</li>
   <li>Ferrari: 348 TS/TB 3.4 - FERRARI - 348-419 - 419 - 348 TS/TB 3.4</li>
   <li>Ferrari: 355 Berlinetta - FERRARI - 355-420 - 420 - 355 Berlinetta</li>
   <li>Ferrari: 355 Berlinetta F1 - FERRARI - 355-421 - 421 - 355 Berlinetta F1</li>
   <li>Ferrari: 355 GTS - FERRARI - 355-422 - 422 - 355 GTS</li>
   <li>Ferrari: 355 GTS F1 - FERRARI - 355-423 - 423 - 355 GTS F1</li>
   <li>Ferrari: 355 GTS Spider - FERRARI - 355-424 - 424 - 355 GTS Spider</li>
   <li>Ferrari: 355 GTS Targa - FERRARI - 355-425 - 425 - 355 GTS Targa</li>
   <li>Ferrari: 355 Spider F1 - FERRARI - 355-426 - 426 - 355 Spider F1</li>
   <li>Ferrari: 360 Challenge Stradale - FERRARI - 360-427 - 427 - 360 Challenge Stradale</li>
   <li>Ferrari: 360 Modena - FERRARI - 360-428 - 428 - 360 Modena</li>
   <li>Ferrari: 360 Modena F1 - FERRARI - 360-429 - 429 - 360 Modena F1</li>
   <li>Ferrari: 360 Spider 400cv - FERRARI - 360-430 - 430 - 360 Spider 400cv</li>
   <li>Ferrari: 360 Spider F1 400cv - FERRARI - 360-431 - 431 - 360 Spider F1 400cv</li>
   <li>Ferrari: 456 GT - FERRARI - 456-432 - 432 - 456 GT</li>
   <li>Ferrari: 456 GTA - FERRARI - 456-433 - 433 - 456 GTA</li>
   <li>Ferrari: 456 M-GT 5.5 V12 - FERRARI - 456-434 - 434 - 456 M-GT 5.5 V12</li>
   <li>Ferrari: 550 Maranello - FERRARI - 550-435 - 435 - 550 Maranello</li>
   <li>Ferrari: 575M Maranello F1 V12 515cv - FERRARI - 575m-436 - 436 - 575M Maranello F1 V12 515cv</li>
   <li>Ferrari: 612 Scaglietti F1 V12 540cv - FERRARI - 612-3932 - 3932 - 612 Scaglietti F1 V12 540cv</li>
   <li>Ferrari: California 3.9 Turbo F1 V8 560cv - FERRARI - california-7179 - 7179 - California 3.9 Turbo F1 V8 560cv</li>
   <li>Ferrari: California F1 V8 460cv - FERRARI - california-5058 - 5058 - California F1 V8 460cv</li>
   <li>Ferrari: F12 Berlinetta 740cv - FERRARI - f12-6463 - 6463 - F12 Berlinetta 740cv</li>
   <li>Ferrari: F430 F1 - FERRARI - f430-3812 - 3812 - F430 F1</li>
   <li>Ferrari: F430 SCUDERIA F1 - FERRARI - f430-4809 - 4809 - F430 SCUDERIA F1</li>
   <li>Ferrari: F430 Spider F1 - FERRARI - f430-4055 - 4055 - F430 Spider F1</li>
   <li>Ferrari: F458 Italia F1 4.5 V8 570cv - FERRARI - f458-6094 - 6094 - F458 Italia F1 4.5 V8 570cv</li>
   <li>Ferrari: F458 Speciale F1 4.5 V8 - FERRARI - f458-6912 - 6912 - F458 Speciale F1 4.5 V8</li>
   <li>Ferrari: F458 Spider F1 4.5 V8 570cv - FERRARI - f458-6156 - 6156 - F458 Spider F1 4.5 V8 570cv</li>
   <li>Ferrari: F599 GTB Fiorano F1 6.0 V12 620cv - FERRARI - f599-4289 - 4289 - F599 GTB Fiorano F1 6.0 V12 620cv</li>
   <li>Ferrari: FF F1 6.3 V12 660cv - FERRARI - ff-6095 - 6095 - FF F1 6.3 V12 660cv</li>
</ul>
```