# Node.js - Aula 03 - Exercício  
**Autor:** Ednilson Amaral  
**Data:** 1450656297212


## Por que quando requisitamos ao nosso servidor de Query String, com o Chrome, ele executa 2 requisições, sendo a última "vazia"?  

Isso ocorre porque o Chrome faz duas requisições, sendo uma delas para trazer os dados da requisição do usuário a segunda requisição para pegar o `favicon.ico`.


## Qual a DIFERENÇA entre o GET e o POST?  

Uma das diferenças entre o método `GET` e `POST` é sua visibilidade. Enquanto a cada nova requisição `GET` é enviada como string junto a URL, a cada nova requisição `POST` é encapsulada junto ao corpo da requisição HTTP e não pode ser visualizada pelo usuário na URL.  

Outras características que as tornam diferentes são:  

* Tamanho: a string em um `GET` não pode conter mais que 255 caracteres; `POST` não há limitações;  
* Performance: `GET` é mais rápida e mais simples; `POST` tem um perda de tempo, devido ao encapsulamento dos dados;  
* Tipos: `GET` é apenas textos; `POST` não tem restrições, texto ou dados binários;  
* Bookmarks: `GET` é possível salvar a URL nos seus favoritos, já que a requisição é armazenada em cache; `POST` não é possível;  
* Método HTML Padrão: `GET` é o padrão de formulários; para utilizar o método `POST` em formulários é preciso especficiar no atributo `method` o valor `POST`;  
* Dados: `GET` limitadas ao padrão ASCII; `POST` é possível utilizar o atributo *enctype* com o valor *multipart/form-data*, além do padrão UCS.


## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github, colocando aqui a resposta de cada passo.  

### Criando  

```  
ednilson@EDNILSON-NB:/var/www/workshop-be-mean/nodejs$ node http-request-post-ednilson.js  
postData name=Ednilson%20Amaral&type=dev%20frontend  
Tamanho do postData 42  
STATUS: 201  
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"89","etag":"W/\"59-tHhf5TYro7igA37y6tizcQ\"","date":"Mon, 21 Dec 2015 00:27:04 GMT","via":"1.1 vegur"}  
Dados finalizados:  {"__v":0,"name":"Ednilson Amaral","type":"dev frontend","_id":"56774758a173d8110083eb0e"}  
```  

### Modificando  

```  
ednilson@EDNILSON-NB:/var/www/workshop-be-mean/nodejs$ node http-request-put-ednilson.js  
STATUS: 202  
HEADERS: {"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-Vc6BWVMoCTknBc0PvTN65Q\"","date":"Mon, 21 Dec 2015 00:30:15 GMT","via":"1.1 vegur"}  
Dados finalizados:  {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6230527873111818241","electionId":"565e25d106dca622271891c4"}}  
```


## Depois faça o DELETE, criando o script para tal, colocando aqui a resposta.  

```  
ednilson@EDNILSON-NB:/var/www/workshop-be-mean/nodejs$ node http-request-delete-ednilson.js  
STATUS: 204  
HEADERS: {"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Mon, 21 Dec 2015 00:31:53 GMT","via":"1.1 vegur"}  
Dados finalizados:    
```


## Escolha uma API externa e crie um script para fazer um GET nela mostrando o resultado com HTML.  

A API externa escolhida foi a **pokeapi.co**, já utiliza em aula anteriormente.  

O arquivo `http-get-api-externa.js` contém:  

```js  
'use strict';  

const http = require('http');  
const json2html = require('node-json2html');  

http.get({  
  hostname: 'pokeapi.co',  
  path: '/api/v1/pokemon/1/',  
  agent: false  
},function(response){  
    let body = '';  
    
    console.log('STATUS: '+response.statusCode);  
    console.log('HEADERS: '+JSON.stringify(response.headers));  
    
    response.on('data', function(data){  
    
    body += data;  
  });  
 
  response.on('end', function(){  
    var transform = {'tag':'div','html':'${name}'};  
     
    var html = json2html.transform(body,transform);  
    console.log('RESPOSTA: ', html);  
  });  
});  
```  

Após o script para fazer uma `GET` nela o resultado foi:  

```  
ednilson@EDNILSON-NB:/var/www/workshop-be-mean/nodejs$ node http-get-api-externa.js  
STATUS: 200  
HEADERS: {"server":"nginx/1.1.19","date":"Mon, 21 Dec 2015 02:18:34 GMT","content-type":"application/json","transfer-encoding":"chunked","connection":"close","vary":"Accept","x-frame-options":"SAMEORIGIN","cache-control":"s-maxage=360, max-age=360"}  
RESPOSTA:  <div>Bulbasaur</div>  
```