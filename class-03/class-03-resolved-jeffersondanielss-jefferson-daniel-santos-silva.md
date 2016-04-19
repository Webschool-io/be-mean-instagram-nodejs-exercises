# Node.js - Aula 03 - Exercício

**user:** [jeffersondanielss](https://github.com/jeffersondanielss)

**autor:** Jefferson Daniel Santos Silva

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?
Por que a cada requisição o chrome pede também um favicon.


## Qual a DIFERENÇA entre o GET e o POST?
O método GET transporta apenas textos até 255 caracteres que podem ser armazenadas em cache, já o POST pode transportar outros tipos de dados, não possui tamanho máximo para envio mas não pode ser armazenado em cache.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```
  STATUS: 201
  HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-c
  ontrol-allow-origin":"*","content-type":"application/json; charset=utf-8","content-
  length":"83","etag":"W/\"53-RXG9NFsfcTshTpw7BRBGLw\"","date":"Sun, 13 Mar 2016 19:1
  4:48 GMT","via":"1.1 vegur"}
  Dados finalizados:  {"__v":0,"name":"Jefferson Daniel","type":"Aluno","_id":"56e5bc
  2733a78b1100c06ebb"}
```

```
  STATUS: 202
  HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-c
  ontrol-allow-origin":"*","content-type":"application/json; charset=utf-8","content-
  length":"108","etag":"W/\"6c-zxp2AvRAjB/3nkyyVhKR6A\"","date":"Sun, 13 Mar 2016 19:
  37:31 GMT","via":"1.1 vegur"}
  Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"62616235909536808
  97","electionId":"565e25d106dca622271891c4"}}
```



## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.
```
  'use strict';

  const http = require('http');
  const querystring = require('querystring');

  const options = {
    host: 'webschool-io.herokuapp.com'
  , method: 'DELETE'
  , path: '/api/pokemons/56e5bc2733a78b1100c06ebb'
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

  STATUS: 204
  HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by
  ":"Express","access-control-allow-origin":"*","date":"Sun, 13 Mar 2016 19:51:58 GMT
  ","via":"1.1 vegur"}
  Dados finalizados:
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

```
'use strict';

const http = require('http');
var result = '';

http.get({
     hostname: 'webschool-io.herokuapp.com'
    ,path: '/api/pokemons'
    ,port:80
    ,agent: false

}, ( response )=>{

    console.log('STATUS: '+response.statusCode);
    console.log('HEADERS: '+JSON.stringify(response.headers));
    response.on('data', function( data ){
        result += data;
    });
    response.on('end', function(){
        newServer();
    });

});

function newServer(){
    http.createServer(function(request, response){
        var pokemons = JSON.parse( result );
        for(var key in pokemons){
            var pokemon = pokemons[key];
            response.write('<b>ID:</b> '+pokemon._id+' <b>Nome:</b> '+pokemon.name+' <b>Tipo:</b> '+pokemon.type+'<br>');
        }
        response.end();
    }).listen(3000, function(){
        console.log('Porta: 3000');
    });
}
```