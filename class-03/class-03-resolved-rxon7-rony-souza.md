# Node.js - Aula 03 - Exercício
**user:** [rxon7](https://github.com/rxon7)

**autor:** rony souza

## 1. Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

Porque o Chrome faz a primeira requisição para puxar os dados da `Querystring` e a segunda requisição é para puxar o `fav.icon` do site

## 2. Qual a `DIFERENÇA` entre o `GET` e o `POST`?
 
**GET**
- Possui uma capacidade de 1024 caracteres, é utilizado quando se quer passar poucas informações para realizar uma pesquisa ou simplismente passar informações para outra página/api através da URL. O resultado desse método é armazenado no cache do client, ou seja, fica no histórico do navegador.

**POST**
- O método POST utiliza ao URI ao contrário de GET, para enviar as informações ao servidor. A URI não é retornável ao cliente, o que torna esse método mais seguro, pois não expõe as informações enviadas no navegador. Esse método não possui limite como o GET para envio, quando é feita uma requisição POST uma conexão paralela é aberta e os dados são enviados por ela. Essa requisição deverá ser formatada no corpo da mensagem como uma querystring, além de enviar no headers seu formato e tamanho.

## 3. Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

```
'use strict'

const http = require('http')
    , queryString = require('querystring')
    , postData = queryString.stringify({
        name: 'Ronyclay barreto de souza'
        , type: 'aluno'
    })
    , options = {
        host: 'webschool-io.herokuapp.com'
        , method: 'post'
        , path: '/api/pokemons'
        , headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            , 'Content-Length': postData.length
        }
    };

var req = http.request(options, res => {
    let chunck = '';

    res.on('data', data => chunck += data);

    res.on('end', () => console.log('Fim!'));
})

req.on('error', e => console.log('Erro!' + e));

req.write(postData);

req.end();
```

```
'use strict'

const http = require('http')
    , queryString = require('querystring')
    , postData = queryString.stringify({
        name: 'rxon7'
        , type: 'aluno'
    })
    , options = {
        host: 'webschool-io.herokuapp.com'
        , method: 'put'
        , path: '/api/pokemons/56b80d13ff45d31100182506'
        , headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            , 'Content-Length': postData.length
        }
    };

var req = http.request(options, res => {
    let chunck = '';

    res.on('data', data => chunck += data);

    res.on('end', () => console.log('Fim!'));
})

req.on('error', e => console.log('Erro!' + e));

req.write(postData);

req.end();
```

## 4. Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.

```js
'use strict';

const http = require('http');
const querystring = require('querystring');
const options = {
		host: 'webschool-io.herokuapp.com',
		method: 'DELETE',
		path: '/api/pokemons/56b80d13ff45d31100182506',
	};

function callback(res) {
	console.log('STATUS:' + res.statusCode);
	console.log('HEADERS:' + JSON.stringify(res.headers));

	let data = '';

	res.setEncoding('utf8');

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados finalizados:', data)
	});
}

const req = http.request(options, callback);
req.on('error', (e) => {
	console.log('Erro:' + e.message);
});
req.end();
```
## 5. Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.
```js

'use strict';

const http = require('http');
var RESP = {
  name: 'resposta'
};

http.get({
  hostname : 'pokeapi.co',
  path: '/api/v2/language/4/',
},(response) => {
    let body = "";
    console.log('STATUS:'+ response.statusCode);
    console.log(response.headers);

    response.on('data', data=>{
      body += data;
    });

    response.on('end', function(){
       RESP.result = JSON.parse(body).name;
    });
}); 

http.createServer((request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>'+RESP.result+'<h1>');
  response.end();
}).listen(3000, function(){
  console.log('rodando nas porta 3000');
});
```


