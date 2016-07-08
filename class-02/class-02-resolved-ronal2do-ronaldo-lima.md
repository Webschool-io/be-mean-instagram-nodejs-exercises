
# Node.js - Aula 02 - Exercício
**User:** ronal2do   
**Author:** Ronaldo Lima   
**Date:**  1468002892280   

## Quais são os 4 verbos que utilizamos para o CRUD?
 
* C - Create - Criar   
* R - Read ou Retrieve - Ler ou Recuperar    
* U - Update - Atualizar    
* D - Delete - Excluir    

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat).

Os Status Codes foram criado  para informar o atendimento ou não da requisição HTTP:       

  * Informação.
    - 101 (Mudando protocolos): Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo. 102 Processamento (WebDAV) (RFC 2518) Como uma solicitação WebDAV pode conter muitos sub-pedidos que envolvam operações de arquivo, pode demorar muito tempo para concluir o pedido. Este código indica que o servidor recebeu e está processando o pedido, mas nenhuma resposta ainda não está disponível. Isso impede que o cliente o tempo limite e supondo que o pedido foi perdido. Cat Status Code (https://http.cat/101).

  * Sucesso.
    - 202 (Aceito):O pedido foi aceito para processamento, mas o tratamento não foi concluído. O pedido poderá ou não vir a ser posta em prática, pois pode ser anulado quando o processamento ocorre realmente. Cat Status Code  (https://http.cat/202).

  * Redirecionamento.
    - 304 (Não modificado ): Indica que o recurso não foi modificado desde o último pedido. Normalmente, o cliente fornece um cabeçalho HTTP como o Se-Modificado-Desde cabeçalho para proporcionar um tempo contra o qual para comparar. Usando este poupa largura de banda e de reprocessamento no servidor e cliente, uma vez que apenas os dados do cabeçalho devem ser enviados e recebidos em comparação com a totalidade da página que está sendo reprocessados ​​pelo servidor, em seguida, enviado novamente utilizando mais largura de banda do servidor e cliente. Cat Status Code (https://http.cat/304).

  * Erro do cliente.
    - 409 (Conflito): Indica que a solicitação não pôde ser processada por causa do conflito no pedido, como um conflito de edição. Cat Status Code (https://http.cat/409).

  * Erro do servidor.
    - 500 (Bad Gateway): O servidor é usado como GateWay ou Proxy. recebe uma responsta inválida do servidor superior, ao tentar executar a solicitação. Cat Status Code (https://http.cat/500).

[fonte Wikipedia](https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_status_HTTP)

## Explique o que é cada parâmetro da função recebida no `createServer`.

*  O parâmetro `request` recebe os dados da requisição.      
*  O parâmetro `response` retorna como callback os dados da requisição.

## O que é e para que serve a `QueryString`?

Querystring é a maneira utilizada para passarmos parametros para outras páginas através da barra de endereços sem a necessidade de um formulário.
     
Exemplos de uso      

`localhost:3000/teste?name=Suissa` ou `http://www.site.com?query=Parametro`

Sendo que podemos concatenas mais parametros com o uso do `&`.    
Ex. `http://www.site.com?query=Key&otherQuery=OtherKey&more=One`  
Saída:   
*  query: Key   
*  otherQuery: OtherKey   
*  more: One   

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:


```js      
'use strict';

var date = (new Date()).toJSON();

const http = require('http')
  , SUCCESS = {
      version: 1.0
    , code: 200
    , name: 'Be MEAN'
    , created_at: date
    }
  , ERROR = {
      message: "Method Not Allowed"
    , code: 405
    }
  ;

http.createServer(function(req, res){
  let url = req.url;
  switch(url){
      case "/api/pokemons/create" :
          response.writeHead(200, 
              {'Content-Type': 'application/json; charset=utf-8'});
              response.end(JSON.stringify(
          [SUCCESS, {info: "Create: Ok"}]));
      break;
      case "/api/pokemons/update" :
          response.writeHead(200, 
              {'Content-Type': 'application/json; charset=utf-8'});
              response.end(JSON.stringify(
          [SUCCESS, {info: "Update: Ok"}]));
      break;
      case "/api/pokemons/read" :
          response.writeHead(200, 
              {'Content-Type': 'application/json; charset=utf-8'});
              response.end(JSON.stringify(
          [SUCCESS, {info: "Retrieve: Ok"}]));
      break;
      case "/api/pokemons/delete" :
          response.writeHead(200, 
              {'Content-Type': 'application/json; charset=utf-8'});
              response.end(JSON.stringify(
          [SUCCESS, {info: "Delete: Ok"}]));
      break;
      default:
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      ERROR.message = "Not Found";
      ERROR.code = 404
      res.write(JSON.stringify(ERROR));
      break;
    }
    res.end();
})
 .listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
 });

```