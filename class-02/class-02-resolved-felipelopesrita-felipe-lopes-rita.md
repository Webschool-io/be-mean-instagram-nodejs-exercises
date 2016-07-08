# Node.js - Aula 02 - Exercício
**user:** [felipelopesrita](https://github.com/felipelopesrita)
**autor:** Felipe José Lopes Rita

## Quais são os 4 verbos que utilizamos para o CRUD?
Para a criação do CRUD, utilizaremos os verbos POST para o CREATE, GET para Retrive/Read, PUT para UPDATE e DELETE para DELETE (esse ficou meio redundante)

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Os códigos de retorno são padronizados e tem como intuito direcionar a identificação do conteúdo de retorno ao cliente. Por exemplo, uma aplicação pode facilmente estar escrita em russo (aplicações de ak-47 e vodkas), mas se ao acessá-la ela retornar o código `404` sei que a uri que requisitei não existe, mesmo não falando russo.
**1XX**
São códigos que indicam apenas informações a respeito da requisição, como por exemplo o código 101: Mudando protocolos. Esse código significa que foi requisitado uma mudança de protocolo e que o servidor reconheceu isso e irá fazê-la.
![101 Status](https://http.cat/101)
**2XX**
Código para informa que a requisição foi recebida, aceita e executada com sucesso, como o status 200, OK, padrão de resposta para requisições HTTP realizadas com êxito.
![200 Status](https://http.cat/200)
**3XX**
Informa ao cabeçalho HTTP que será necessária uma mudança de página(redirecionamento). Um fato interessante é que o servidor só pode fazer esse redirecionamento automaticamente, isto é, sem uma interação com o usuário, quando o verbo da requisição é o GET ou HEAD.
Um exemplo desse status é o 301, que informa que a solicitação corrente, bem como todas as futuras, devem ser direcionadas ao URI.
![301 Status](https://http.cat/301)
**4XX**
Essa classe de status são utilizadas para indicar possíveis erros cometidos pelo cliente, como por exemplo o 404, onde o cliente tenta acessar o serviço através de uma uri inexistente, ou mesmo o erro 400, que indica que a requisição não pode ser realizada devido à sintaxe incorreta no pedido
![400 Status](https://http.cat/400)
**5XX**
Indicam erros internos do servidor, apresentados durante o processamento da requisição, como por exemplo o erro 503, que informa que o serviço requisitado está indisponível devido a uma manutenção ou a uma sobrecarga do sistema.
![503 Status](https://http.cat/503)

## Explique o que é cada parâmetro da função recebida no `createServer`
```js
function (request. response){}
```
**Request**
Armazena os dados referentes a requisição http efetuada, para que seja possível determinar o que deve ser feito.
**Response**
É um objeto de resposta utilizado para retornar os dados requisitados pelo cliente

## O que é e para que serve a Querystring?
São um ou diversos conjuntos de pares de valores(chave=valor) contidos numa requisição http. E são utilizados para transportar valores de forma rápida e fácil, para que eles possam ser usados como parâmetros de uma requisição.

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
```js
'use strict';

var date = (new Date()).toJSON()
  , rotes = 
    { 'create': 'Rota acessada: Create'
    , 'read': 'Rota acessada: Read'
    , 'update': 'Rota acessada: Update'
    , 'delete': 'Rota acessada: Delete'
    }
  ;

const http = require('http')
  , url = require('url')
  , SUCCESS = {
      version: 1.0
    , name: 'Be Mean'
    , created_at: date
	}
  , ERROR = {
      'message': 'Nâo encontrado'
  	}
  ;

http.createServer(function(req, res){
  try {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var x = req.url.replace(/\/api\/pokemons\//gi, '');
    SUCCESS.rote = rotes[x];
    res.write(JSON.stringify(SUCCESS));
  }
  catch(e) {
    res.writeHead(404, {'Content-Type': 'application/json'});
    console.log(e);
    res.write(JSON.stringify(ERROR)) 
  }

  res.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});

```

## Referências
[HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html#)
[HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes)