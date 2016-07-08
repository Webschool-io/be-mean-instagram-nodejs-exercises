# Node.js - Aula 03 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz

**date:** 1465911866403

## 1. Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?
Isso pode ser facilmente entendido apenas abrindo a aba Network no navegador: ao abrir o localhost com a porta onde o Node está sendo executado e com os parâmetros na Querystring, é possível visualizar duas requisições.

Uma delas é efetivamente a requisição passando os parâmetros da Querystring, mas a segunda é uma requisição no path "/favicon.ico", e esta não possui parâmetros na Querystring, resultando em um print vazio no console do Node.

## 2. Qual a diferença entre o `GET` e o `POST`?
* GET - além de passarmos os parâmetros via URL, ele é usado em uma API para as buscas no banco de dados.
* POST - nele os parâmetros são enviados via form (Content-Type: "application/x-www-form-urlencoded") e no desenvolvimento de uma API, é utilizado para inserção de dados.

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
#### Inserção
```js
'use strict';

const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify({
    name: 'Vitor Capretz',
    type: 'student'
});

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'POST',
    path: '/api/pokemons',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

let callback = res => {
    console.log('status: ' + res.statusCode);
    console.log('headers: ', JSON.stringify(res.headers));
    
    let data = '';
    
    res.setEncoding('utf8');
    res.on('data', chunk => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('data completed: ', data);
    });
}

const req = http.request(options, callback);
req.on('error', e => {
    console.log('ops, deu esse erro aqui: ', e.message);
});

req.write(postData);
req.end();
```

```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/http$ node http-request-post.js 
status: 201
headers:  {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"82","etag":"W/\"52-iFuBRJjN4Q5qLRmix8A8cw\"","date":"Tue, 14 Jun 2016 14:11:58 GMT","via":"1.1 vegur"}
data completed:  {"__v":0,"name":"Vitor Capretz","type":"student","_id":"576010aeebf517110060cadb"}
```

#### Alteração
```js
'use strict';

const http = require('http');
const queryString = require('querystring');

const postData = queryString.stringify({
    name: 'vitorcapretz'
});

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'PUT',
    path: '/api/pokemons/576010aeebf517110060cadb',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

let callback = res => {
    console.log('status: ' + res.statusCode);
    console.log('headers: ', JSON.stringify(res.headers));
    
    let data = '';
    
    res.setEncoding('utf8');
    res.on('data', chunk => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('data completed: ', data);
    });
}

const req = http.request(options, callback);
req.on('error', e => {
    console.log('ops, deu esse erro aqui: ', e.message);
});

req.write(postData);
req.end();
```

```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/http$ node http-request-put.js 
status: 202
headers:  {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-AiMYwinMu+qHyurLRUAifA\"","date":"Tue, 14 Jun 2016 14:13:49 GMT","via":"1.1 vegur"}
data completed:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6296051095315677185","electionId":"56ee12f2563048036a1e77e7"}}
```

## 4. Depois faça o `DELETE`, criando o script para tal, colocando aqui a resposta.
```js
'use strict';

const http = require('http');

const options = {
    host: 'webschool-io.herokuapp.com',
    method: 'DELETE',
    path: '/api/pokemons/575de43cda6e731100bfdad5'
};

let callback = res => {
    console.log('status: ' + res.statusCode);
    console.log('headers: ', JSON.stringify(res.headers));
    
    let data = '';
    
    res.setEncoding('utf8');
    res.on('data', chunk => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('data completed: ', data);
    });
}

const req = http.request(options, callback);
req.on('error', e => {
    console.log('ops, deu esse erro aqui: ', e.message);
});

req.end();
```

```
vitor@vitor-ThinkPad-T440:/var/www/html/workshop-be-mean/nodejs/http$ node http-request-delete.js 
status: 204
headers:  {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Tue, 14 Jun 2016 14:16:12 GMT","via":"1.1 vegur"}
data completed:  
```

## 5. Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.

```js
'use strict';

const https = require('https');
const http = require('http');

https.get({
    hostname: 'www.udacity.com',
    path: '/public-api/v0/courses',
    agent: false
}, res => {
    let body = '';
    console.log('status: ' + res.statusCode);
    console.log('headers: ', res.headers);
    res.on('data', function(data) {
        body += data;
    });
    
    res.on('end', function() {
        createServer(body);
    });
});

let createServer = (data) =>{
    const dados_curso = JSON.parse(data).courses;
    
    http.createServer((request, response) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        let body_html = "<h2> Cursos do uDacity </h2> <ul>";
        for(let key in dados_curso){
            body_html += "<li> nome do curso: " + dados_curso[key].title + "</li>";
        }
        
        body_html += "</ul>";
        response.write(body_html);
        
        response.end();
    }).listen(3000, function(){
        console.log('aguardando na porta 3000');
    });
}
```
