## Node.js - Aula 03 - Exercício
**user:** tuchedsf - https://github.com/tuchedsf
**autor:** Diego Santos Ferreira

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?


Pois o comportamento do chrome é sempre após processar uma requisição, ele efetuar outra requisição para recuperar o favicon.ico do site.

## Qual a DIFERENÇA entre o GET e o POST?


Os dois métodos são utilizados para fazer requisição ao servidor, sendo a principal diferença a visibilidade, uma vez que o get utiliza a própria url para passagem de parâmetros enquanto o post encapsulada junto ao corpo da requisição os parâmetros e não é visível.
As requisições get geralmente são utilizadas ao requisitar algum recurso geralmente para leitura, já as requisições post são mais utilizadas para passar parâmetros e realizar uma requisição de atualização de dados etc. Uma requisição get também por utilizar da url possui uma limitação de 1024 caracteres.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.
```
MacBook-Air-Diego:nodejs diego$ node http-create-pokemon.js 
postData name=Diego%20Ferreira&type=turtle
Tamanho do postData 33
STATUS: 201
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"82","etag":"W/\"52-2IF24hW3OLiEBLEVp0CKdA\"","date":"Sun, 28 Feb 2016 11:49:39 GMT","via":"1.1 vegur"}
Dados finalizados:  {"__v":0,"name":"Diego Ferreira","type":"turtle","_id":"56d2ded2fb64951100bc36de"}
```

##### Conferencia API
```
http://webschool-io.herokuapp.com/api/pokemons/56d2ded2fb64951100bc36de

{
  "_id": "56d2ded2fb64951100bc36de",
  "name": "Diego Ferreira",
  "type": "turtle",
  "__v": 0
}

```

#### Alteração Pokemon:
```
MacBook-Air-Diego:nodejs diego$ node http-alter-pokemon-api.js 
postData name=tuchedsf&type=turtle
Tamanho do postData 25
STATUS: 202
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-9YlCYIxXYr/SQVQ13QTnEg\"","date":"Sun, 28 Feb 2016 12:03:00 GMT","via":"1.1 vegur"}
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6256311270459310082","electionId":"565e25d106dca622271891c4"}}
```

##### Conferencia API
```
http://webschool-io.herokuapp.com/api/pokemons/56d2ded2fb64951100bc36de

{
  "_id": "56d2ded2fb64951100bc36de",
  "name": "tuchedsf",
  "type": "turtle",
  "__v": 0
}
```


## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta. 
```
MacBook-Air-Diego:nodejs diego$ node http-delete-pokemon-api.js 
postData name=tuchedsf&type=turtle
Tamanho do postData 25
STATUS: 204
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Sun, 28 Feb 2016 12:08:53 GMT","via":"1.1 vegur"}
Dados finalizados:  
```
##### Conferencia API
```
http://webschool-io.herokuapp.com/api/pokemons/56d2ded2fb64951100bc36de

null
```

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

API: http://postmon.com.br/ -> consulta cep

```
MacBook-Air-Diego:nodejs diego$ node http-get-fipe-api-2.js
STATUS: 200
HEADERS: {"date":"Tue, 01 Mar 2016 01:21:54 GMT","content-type":"application/json","content-length":"278","connection":"close","set-cookie":["__cfduid=db7fb08890a2bca695abcae005db5bebe1456795314; expires=Wed, 01-Mar-17 01:21:54 GMT; path=/; domain=.postmon.com.br; HttpOnly"],"access-control-allow-origin":"*","cache-control":"public, max-age=2592000","x-cache-status":"MISS","cf-cache-status":"HIT","expires":"Thu, 31 Mar 2016 01:21:54 GMT","server":"cloudflare-nginx","cf-ray":"27c8cb7d762b385e-ATL"}
<html><body><h1>Dados do Endereço</h1><ul>
<li>bairro:Major Lage de Cima</li>
<li>cidade:Itabira</li>
<li>cep:35900394</li>
<li>logradouro:Rua Topázio</li>
<li>estado_info:[object Object]</li>
<li>cidade_info:[object Object]</li>
<li>estado:MG</li>
</ul></body></html>
```

## Bibliografia

http://marceloweb.info/principais-diferencas-entre-os-metodos-http-get-e-post/
http://professortorres.com.br/diferenca-entre-os-metodos-get-e-post/
