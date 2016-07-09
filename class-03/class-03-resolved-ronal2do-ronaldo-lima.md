
# Node.js - Aula 03 - Exercício
**User:** ronal2do     
**Author:** Ronaldo Lima     
**Date:**  1468022470175    


##### [Exercício-01](#por-que-quando-requisitamos-ao-nosso-servidor-de-query-string-com-o-chrome-ele-executa-2-requisi%C3%A7%C3%B5es-sendo-a-%C3%BAltima-vazia)

##### [Exercício-02](#qual-a-diferen%C3%A7a-entre-o-get-e-o-post)

##### [Exercício-03](#crie-um-pokemon-na-nossa-api-com-seu-nome-depois-modifique-seu-nome-pelo-seu-user-do-github-colocando-aqui-a-resposta-de-cada-passo)

##### [Exercício-04](#depois-fa%C3%A7a-o-delete-criando-o-script-para-tal-colocando-aqui-a-resposta)

##### [Exercício-05](#escolha-uma-api-externa-e-crie-um-script-para-fazer-um-get-nela-mostrando-o-resultado-em-html)


# Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?

Pois em cada requisição, o Chrome também faz a solicitação de um `favicon`.

# Qual a diferença entre o GET e o POST?

O `GET` é utilizado para quando queremos acessar alguma informação no servidor, outra coisa, o mesmo é visualizado através da url(a querystring após o endereço do servidor), e só pode enviar texto.

O `POST` é utilizado para quando queremos gravar alguma informação no servidor, pode enviar diversos tipos de dados(texto, arquivos, etc...).


# Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.

### Cadastrando com o meu nome

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: '2D Lima'
      , type: 'Lokoooo!'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons'
      , method: 'POST'
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

### Saída no terminal
```js
STATUS: 201     
HEADERS: {"server":"Cowboy","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"77","etag":"W/\"4d-K1XAJt0nixO1Ke2TlcK+0g\"","date":"Sat, 09 Jul 2016 02:39:50 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"2D Lima","type":"Lokoooo!","_id":"578063f62d78cb11006de9c4"}
```

### Modificando com o meu user do github
```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'ronal2do'
      , type: 'Lokoo!'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/578063f62d78cb11006de9c4'
      , method: 'PUT'
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

### Saída no terminal
```js
STATUS: 202
HEADERS: {"server":"Cowboy","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-KUssZB1YDVSRLM9IZUNAAA\"","date":"Sat, 09 Jul 2016 02:53:02 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6305152788145897473","electionId":"576451dfece94f32689e021d"}}

```

# Depois faça o delete, criando o script para tal, colocando aqui a resposta.

```js

'use strict';

const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
        name: 'ronal2do'
      , type: 'Lokoo!'
      });
const options = {
        host: 'webschool-io.herokuapp.com'
      , path: '/api/pokemons/578063f62d78cb11006de9c4'
      , method: 'DELETE'
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

### Saída no terminal
```js
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sat, 09 Jul 2016 02:57:29 GMT","via":"1.1 vegur"}
Dados finalizados:  

```

# Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado em HTML.

### Código
```js
// API do Magic TCG

'use strict';

const http = require('http');

const options = {
  host: 'api.deckbrew.com'
, path: '/mtg/cards/about-face'
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

### Resultado Terminal com JSON
```js
STATUS: 200
HEADERS: {"date":"Sat, 09 Jul 2016 03:04:03 GMT","content-type":"application/json; charset=utf-8","content-length":"1186","set-cookie":["__cfduid=d62533328f17b2bacebe1331b35537e781468033443; expires=Sun, 09-Jul-17 03:04:03 GMT; path=/; domain=.deckbrew.com; HttpOnly"],"access-control-allow-origin":"*","access-control-expose-headers":"link,content-length","cache-control":"public,max-age=3600","disclaimer":"This API is not produced, endorsed, supported, or affiliated with Wizards of the Coast.","license":"The textual information presented through this API about Magic: The Gathering is copyrighted by Wizards of the Coast.","pricing":"store.tcgplayer.com allows you to buy cards from any of our vendors, all at the same time, in a simple checkout experience. Shop, Compare & Save with TCGplayer.com!","strict-transport-security":"max-age=86400","via":"1.1 vegur","server":"cloudflare-nginx","cf-ray":"2bf88be07bef07bb-MIA"}
Dados finalizados:  {
  "name": "About Face",
  "id": "about-face",
  "url": "https://api.deckbrew.com/mtg/cards/about-face",
  "store_url": "http://store.tcgplayer.com/magic/urzas-legacy/about-face?partner=DECKBREW",
  "types": [
    "instant"
  ],
  "colors": [
    "red"
  ],
  "cmc": 1,
  "cost": "{R}",
  "text": "Switch target creature's power and toughness until end of turn.",
  "formats": {
    "commander": "legal",
    "legacy": "legal",
    "vintage": "legal"
  },
  "editions": [
    {
      "set": "Urza's Legacy",
      "set_id": "ULG",
      "rarity": "common",
      "artist": "Melissa A. Benson",
      "multiverse_id": 12414,
      "flavor": "The overconfident are the most vulnerable.",
      "number": "73",
      "layout": "normal",
      "price": {
        "low": 0,
        "median": 0,
        "high": 0
      },
      "url": "https://api.deckbrew.com/mtg/cards?multiverseid=12414",
      "image_url": "https://image.deckbrew.com/mtg/multiverseid/12414.jpg",
      "set_url": "https://api.deckbrew.com/mtg/sets/ULG",
      "store_url": "http://store.tcgplayer.com/magic/urzas-legacy/about-face?partner=DECKBREW",
      "html_url": "https://deckbrew.com/mtg/cards/12414"
    }
  ]
}

```

### Resultado HTML

```js
// API do Magic TCG

'use strict';

const http = require('http');
const json2Html = require('node-json2html');

const options = {
  host: 'api.deckbrew.com'
, path: '/mtg/cards/about-face'
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

        console.log('<ul>');

            console.log('<li> Nome: ' + js.name + '</li>');
            console.log('<li> id: ' + js.id + '</li>');
            console.log('<li> url: ' + js.url + '</li>');
            console.log('<li> text: ' + js.text + '</li>');
            console.log('<li> power: ' + js.power + '</li>');
           
     
        console.log('<ul>');
    })
}

const req = http.request(options, callback);

req.on('erros', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();


```


```js
STATUS: 200
HEADERS: {"date":"Sat, 09 Jul 2016 03:31:51 GMT","content-type":"application/json; charset=utf-8","content-length":"1186","set-cookie":["__cfduid=ddf6689c13114b06f1204dd2355c37aac1468035111; expires=Sun, 09-Jul-17 03:31:51 GMT; path=/; domain=.deckbrew.com; HttpOnly"],"access-control-allow-origin":"*","access-control-expose-headers":"link,content-length","cache-control":"public,max-age=3600","disclaimer":"This API is not produced, endorsed, supported, or affiliated with Wizards of the Coast.","license":"The textual information presented through this API about Magic: The Gathering is copyrighted by Wizards of the Coast.","pricing":"store.tcgplayer.com allows you to buy cards from any of our vendors, all at the same time, in a simple checkout experience. Shop, Compare & Save with TCGplayer.com!","strict-transport-security":"max-age=86400","via":"1.1 vegur","server":"cloudflare-nginx","cf-ray":"2bf8b49549172e7b-MIA"}
<ul>
<li> Nome: About Face</li>
<li> id: about-face</li>
<li> url: https://api.deckbrew.com/mtg/cards/about-face</li>
<li> text: Switch target creature's power and toughness until end of turn.</li>
<li> power: undefined</li>
<ul>
sh-3.2# 
```
