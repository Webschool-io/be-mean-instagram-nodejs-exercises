# Node.js - Aula 03 - Exercício
**user:** [FranciscoValerio](https://github.com/FranciscoValerio)
**autor:** Francisco Henrique Ruiz Valério

## Por que quando requisitamos ao nosso servidor de *Query String*, **com o Chrome**, ele executa 2 requisições, sendo a última "*vazia*"?

- usando o resultado da requisição e mostrando no console, podemos identificar que a segunda requisição é feita pelo webkit para o favicon.ico. Pois o mesmo não está sendo fornecido pela nossa aplicação.

## Qual a DIFERENÇA entre o GET e o POST?

**GET**
- Possui uma capacidade de 1024 caracteres, é utilizado quando se quer passar poucas informações para realizar uma pesquisa ou simplismente passar informações para outra página/api através da URL. O resultado desse método é armazenado no cache do client, ou seja, fica no histórico do navegador.

**POST**
- O método POST utiliza ao URI ao contrário de GET, para enviar as informações ao servidor. A URI não é retornável ao cliente, o que torna esse método mais seguro, pois não expõe as informações enviadas no navegador. Esse método não possui limite como o GET para envio, quando é feita uma requisição POST uma conexão paralela é aberta e os dados são enviados por ela. Essa requisição deverá ser formatada no corpo da mensagem como uma querystring, além de enviar no headers seu formato e tamanho.

## Crie um Pokemon na nossa API com seu nome, depois modifique seu nome pelo seu User do Github.

**INCLUSÃO**
node .\http-request-post.js
STATUS:201
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"85","etag":"W/\"55-OO2mIv68nmeRSifU8w4Vmw\"","date":"Mon, 21 Dec 2015 22:33:11 GMT","via":"1.1 vegur"}
Dados finalizados: {"__v":0,"name":"Francisco Henrique","type":"aluno","_id":"56787e27da0b041100ff4dc9"}

**ALTERAÇÃO**
node .\http-request-put.js
STATUS:202
HEADERS:{"server":"Cowboy","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","content-type":"application/json; charset=utf-8","content-length":"108","etag":"W/\"6c-4F/GbPdOma8/l74KTQEnxQ\"","date":"Mon, 21 Dec 2015 23:32:01 GMT","via":"1.1 vegur"}
Dados finalizados: {"data":{"ok":1,"nModified":1,"n":1,"lastOp":"6230883951670460417","electionId":"565e25d106dca622271891c4"}}

## **Depois faça o DELETE**, criando o script para tal, colocando aqui a resposta.

node .\http-request-delete.js
STATUS:204
HEADERS:{"server":"Cowboy","content-length":"0","connection":"close","x-powered-by":"Express","access-control-allow-origin":"*","date":"Mon, 21 Dec 2015 23:33:31 GMT","via":"1.1 vegur"}
Dados finalizados:

## Escolha uma **API externa** e crie um script para fazer um GET nela **mostrando o resultado com HTML**.

**CONSULTADO API (http://fipeapi.appspot.com/)**

node .\http-get-fipe.js
STATUS:200
HEADERS:{"cache-control":"no-cache","content-type":"application/json; charset=utf-8","date":"Tue, 22 Dec 2015 00:55:16 GMT","server":"Google Frontend","content-length":"1032","connection":"close"}
Dados finalizados: [{"fipe_marca": "Fiat", "fipe_codigo": "2014-1", "name": "2014 Gasolina", "marca": "FIAT", "key": "2014-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2014-1"}, {"fipe_marca": "Fiat", "fipe_codigo": "2013-1", "name": "2013 Gasolina", "marca": "FIAT", "key": "2013-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2013-1"}, {"fipe_marca": "Fiat", "fipe_codigo": "2012-1", "name": "2012 Gasolina", "marca": "FIAT", "key": "2012-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2012-1"}, {"fipe_marca": "Fiat", "fipe_codigo": "2011-1", "name": "2011 Gasolina", "marca": "FIAT", "key": "2011-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2011-1"}, {"fipe_marca": "Fiat", "fipe_codigo": "2010-1", "name": "2010 Gasolina", "marca": "FIAT", "key": "2010-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2010-1"}, {"fipe_marca": "Fiat", "fipe_codigo": "2009-1", "name": "2009 Gasolina", "marca": "FIAT", "key": "2009-1", "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "2009-1"}]
