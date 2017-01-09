# Node.js - Aula 02 - Exercício
**user:** [Rafael Jourdan](https://github.com/rafaeljourdan)<br>
**autor:** Rafael Jourdan<br>
**date:** 09/01/2017

## Quais são os 4 verbos que utilizamos para o CRUD?
* POST
* GET
* PUT
* DELETE

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
As `Status Codes` foram criadas para responder uma requisição do cliente<br> 

**1XX: Servidor recebeu cabeçalhos**
!['100'](https://http.cat/100)

**2XX: Resposta OK do servidor, tudo OK**
!['200'](https://http.cat/200)

**3XX: Redirecionamento temporário**
!['300'](https://http.cat/307)

**4XX: Recurso não encontrado (Erro usuário)**
!['404'](https://http.cat/404)

**5xx: Erro interno no servidor**
!['500'](https://http.cat/500)

## Explique o que é cada parâmetro da função recebida no `createServer`.
* Request: Requisição que contém a solicitação do cliente: cabeçalhos, campos, parâmetros query string, etc.
* Response: Utilizado para devolver dados de volta para o cliente.

## O que é e para que serve a Querystring?
Parâmetros enviados via URL ou FORMULÁRIO com <b>method='get'</b>
`?var1=1&var2=true&var3=teste`
```
    <form action="/salvar" method="get">
        <input type="text" name="nome" />
        <input type="submit" value="salvar" />
    </form>
```


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```js
'use strict';

const http = require('http');
const apiVersion = '/api/v1';

var server = http.createServer(function(req,res){    
    
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    
    switch(req.url){
        case apiVersion + '/create':
            retornoJson(res, 'rota create');
            break;
        case apiVersion + '/read':
            retornoJson(res, 'rota read');
            break;
        case apiVersion + '/update':
            retornoJson(res, 'rota update');
            break;
        case apiVersion + '/delete':
            retornoJson(res, 'rota delete');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'application/json;charset=utf-8'});
            retornoJson(res, 'ERRO: Rota não encontrada ou não autorizado.');
            break;

    }
    res.end();    
});

server.listen(3000, function(){
    console.log('Servidor levantando na 3000');
});

function retornoJson(response, mensagem){
    var json = {
        'mensagem': mensagem,        
        'data': new Date()
    };
    return response.write(JSON.stringify(json));
}
```