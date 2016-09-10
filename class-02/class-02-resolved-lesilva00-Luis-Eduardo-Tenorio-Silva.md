# Node.js - Aula 02 - Exercício
**user:** [lesilva00](https://github.com/lesilva00)
**autor:** Luís Eduardo Tenório Silva

## Quais são os 4 verbos que utilizamos para o CRUD?
Create (Criar), Read (Ler), Udpate(Atualizar) e Delete(Deletar).

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Os Status Codes foram criados para informar ao cliente o estado do servidor e de sua solicitação. Esses Status Codes são definidos pelo servidor web no cabeçalho das respostas HTTP que serão passadas aos clientes ou indexadores.

####**1XX:** Informacional
Responsável para informar o usuário algumas ações do servidor
Mudando protocolos: ![101](https://http.cat/101)

####**2XX:** Sucesso
Responsável por informar que a ação solicitada pelo usuário foi recebida, compreendida, aceita e processada com êxito
OK: ![200](https://http.cat/200)

####**3XX:** Redirecionamento
Responsável por informar que a ação necessita de redirecionamento para ser completada. Esse redirecionamento vai desde a mudança de localização temporária da página, mudança permanente, redirecionamento de gateway entre outros.
Movido temporariamente: ![302](https://http.cat/302)

####**4XX:** Erro do Cliente
Responsável de informar a existência de um erro provindo da solicitação do cliente.

Não encontrado: ![404](https://http.cat/404)

####**5XX:** Erro do Servidor
Responsável por informar a existência de um erro provindo do servidor. Geralmente esses erros ocorrem devido a uma má configuração do ambiente ou a problemas internos.

Bad gateway: ![502](https://http.cat/502)

## Explique o que é cada parâmetro da função recebida no `createServer`.

**Request:**
Contém dados da requisição do cliente (Ex: url).

**Response:**
Dados de resposta a solicitação realizada pelo usuário. Aqui é comum definir o Status Code da solicitação e a página que será carregada pelo usuário.

## O que é e para que serve a Querystring?
Conjunto formado por chave/valor que contém informações gerais da solicitação do cliente.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

```js
'use strict';

var date = (new Date()).toJSON();
var http = require('http');
var url = require('url');

const SUCCESS = {
    version:'1.0',
    name:'Success',
    returned_at:date
}
, ERROR = {
    message:'Não encontrado'
}

http.createServer(function(req,res){
    var urlInitial = '/api/pokemons/'
    var result = url.parse(req.url,true);
    switch(result.pathname){
        case urlInitial+'create':
            res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
            res.write(JSON.stringify(SUCCESS));
            break;
        case urlInitial+'read':
	    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
	    res.write(JSON.stringify(SUCCESS));
	    break;
        case urlInitial+'update':
	    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
	    res.write(JSON.stringify(SUCCESS));
	    break;
	case urlInitial+'delete':
	    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
	    res.write(JSON.stringify(SUCCESS));
	    break;
	default:
	    res.writeHead(404,{'Content-Type':'application/json; charset=utf-8'});
	    res.write(JSON.stringify(ERROR));
    }
    res.end();

}).listen(8080,function(){
    console.log('Servidor rodando na porta 8080, pressione ^C para sair...');
});
```
