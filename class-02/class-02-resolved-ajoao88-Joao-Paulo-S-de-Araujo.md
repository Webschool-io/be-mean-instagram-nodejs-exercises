# Node.js - Aula 02 - Exercício
**user:** [ajoao88](https://github.com/ajoao88)  
**autor:** João Paulo S de Araújo  
**date:** 1454895260625  

## Quais são os 4 verbos que utilizamos para o CRUD?

CRUD | Descrição | Verbo |
-----|-----------|-------|
C|Create|POST
R|Retrieve|GET
U|Update|PUT
D|Delete|DELETE


## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).

Para padronizar a comunicação entre cliente e servidor, com os **status codes** fica clara a resposta do servidor para a requisição feita, permitindo tratá-la adequadamente.

##### 101 - Mudando protocolos
![Mudando protocolos](https://http.cat/101)
Isso significa que o solicitante pediu ao servidor para mudar os protocolos e o servidor está reconhecendo que irá fazê-lo

##### 204 - Nenhum Conteúdo
![Nenhum conteúdo](https://http.cat/204)
O servidor processou a solicitação com sucesso, mas não é necessário nenhuma resposta.

##### 301 - Movido permanentemente
![Movido permanentemente](https://http.cat/301)
Esta e todas as solicitações futuras devem ser direcionada para o URI .

##### 402 - Pagamento Necessário
![Pagamento Necessário](https://http.cat/402)
Reservado para uso futuro. A intenção original era que esse código pudesse ser usado como parte de alguma forma de dinheiro digital ou de micro pagamento regime, mas isso não aconteceu, e esse código não é usado normalmente.

##### 500 - Erro interno no servidor
![Erro interno no servidor](https://http.cat/500)
O servidor ainda não suporta a funcionalidade ativada

## Explique o que é cada parâmetro da função recebida no `createServer`.

Existem dois parâmetros ao criar um servidor com a função `createServer`, `request` e `response`.

`Resquest` é um objeto do tipo **http.IncommingMessage**,
Armazena os dados da requisição do cliente.  
`Response` é um objeto do tipo **http.ServerResponse**  
É o callback que será retornado para o cliente que fez a requisição.


## O que é e para que serve a Querystring?

`Querystring` é um modelo de passagem de informações entre cliente e servidor, nele são enviados conjuntos de propriedade e valor, onde a propriedade e valor são separados por "=" e os conjuntos são separados por "&".
São enviado via **url** no final do endereço após um "?".

Ex.: http://enderecoweb/?nome=joao&idade=28

No final do endereço é introduzido um ponto de interrogação e logo em seguida os pares de propriedade e seu valor.


## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete

```js
'use strict';

const http = require('http')
, url = require('url')
, SUCCESS = {
    version: '1.5'
    , name: ''
    , returned_at: new Date().toJSON()
}
, ERROR = {
    message: "Sinto muito, endereço não encontrado"
}
;

var rotas = {
    create: function(){SUCCESS.name = 'João Paulo - Exercício 02 - Rota: /api/pokemons/create'}
    , read: function(){SUCCESS.name = 'João Paulo - Exercício 02 - Rota: /api/pokemons/read'}
    , update: function(){SUCCESS.name = 'João Paulo - Exercício 02 - Rota: /api/pokemons/update'}
    , delete: function(){SUCCESS.name = 'João Paulo - Exercício 02 - Rota: /api/pokemons/delete'}
};

http.createServer(function(req, res){
    rotas.parametros = url.parse(req.url, true);
    try{
        var rota = req.url.replace(/\/api\/pokemons\//i, '');
        rotas[rota]();
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        res.write(JSON.stringify(SUCCESS));
    }catch(e){
        res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
        res.write(JSON.stringify(ERROR));
    }
    res.end();
}).listen(3000, function(){
    console.log('Servidor escutando em localhost:3000');
});
```
