# Node.js - Aula 03 - Exercício
**user:** [rafaeljourdan](https://github.com/rafaeljourdan)
**autor:** Rafael Jourdan

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
O chrome sempre envia 2 requisições, a primeira da URL requisitada e a segunda do favicon.ico. No Firefox somente na primeira vez.

## Qual a DIFERENÇA entre o GET e o POST?

* GET: O conteúdo (somente string) é enviado pela URL e tem limitações de tamanho (dependendo de cada agent). Este verbo do protocolo HTTP geralmente é utilizado para requisição de informações, enviando anexado chaves e valores que façam sentido nesta recuperação no bd.
* POST: O conteúdo é anexado ao corpo da requisição, com isso temos liberdade para enviar arquivos binários e uma quantidade maior de informações.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

#### Criação do pokemon Rafael F A Jourdan
```js
'use strict';

const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    name: 'Rafael F A Jourdan ',
    type: 'aluno'
});

const options = {
    host: 'webschool-io.herokuapp.com', 
    path: '/api/pokemons', 
    method: 'POST', 
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Content-Length': postData.length
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

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();
```

##### Retorno

```js
$ node criacao-pokemon-exerc.js
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"appl
ication/json; charset=utf-8","content-length":"86","etag":"W/\"56-6S2zD85c/o0v9yG2k0jCmg\"","date":"Tue, 10 Jan 2017 18:16:02 GM
T","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Rafael F A Jourdan ","type":"aluno","_id":"587524e2c04fe500123ccee5"}
```



##### Atualização do nome

```js
	
'use strict';

const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    name: 'rafaeljourdan',
    type: 'aluno'
});

const options = {
    host: 'webschool-io.herokuapp.com', 
    path: '/api/pokemons/587524e2c04fe500123ccee5', 
    method: 'PUT', 
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Content-Length': postData.length
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

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.write(postData);
req.end();

```


//Modificando Pokémon
```html
$ node exerc_update-pokemon
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"appl
ication/json; charset=utf-8","content-length":"121","etag":"W/\"79-SymJl/JdkAwTz2Rl6bUJbw\"","date":"Tue, 10 Jan 2017 18:21:21 G
MT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"opTime":{"ts":"6374042770788581377","t":1},"electionId":"7fffffff000000
0000000001"}}

```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

```js
	
'use strict';

const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    name: 'rafaeljourdan'
});

const options = {
    host: 'webschool-io.herokuapp.com', 
    path: '/api/pokemons/5875246dc04fe500123ccee5', 
    method: 'DELETE', 
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Content-Length': postData.length
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

req.on('error', (e) => {
    console.log('ERRO: ' + e.message);
});

req.end();

```


##### Retorno (Não consegui deletar)
```html
$ node exerc_delete_pokemon
STATUS: 499
HEADERS: {"connection":"close","server":"Cowboy","date":"Tue, 10 Jan 2017 18:27:33 GMT","content-length":"506","content-type":"t
ext/html; charset=utf-8","cache-control":"no-cache, no-store"}
```


## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```js
'use strict';

const http = require('http');

http.get({
    hostname: 'pokeapi.co',
    path: '/api/v2/pokemon/55/',
    port: 80,
    agent: false
}, (response) => {

    let body = '';

    console.log('STATUS: '+ response.statusCode);
    console.log('HEADERS: '+ response.headers);
    
    response.on('data', function(data){
       body += data;
    });

    response.on('end', function(){
       var nome = JSON.parse(body).forms[0].name; 
       retornarHtml(nome);
    });

});

const retornarHtml = (nome) => {
    let html = '<html><head></head><body><h1>Nome do pokemon: '+nome+' </h1></body></html>';
    console.log(html);
};
```

```html
$ node exerc_get_api.js
STATUS: 200
HEADERS: [object Object]
<html><head></head><body><h1>Nome do pokemon: golduck </h1></body></html>
```