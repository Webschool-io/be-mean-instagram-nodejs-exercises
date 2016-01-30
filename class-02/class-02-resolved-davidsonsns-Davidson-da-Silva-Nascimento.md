# Node.js - Aula 02 - Exercício
**user:** [davidsonsns](https://github.com/davidsonsns)

**autor:** Davidson da Silva Nascimento

**date:** Date.now()

## Quais são os 4 verbos que utilizamos para o CRUD?
- **C** <kbd>POST</kbd> Criar, inserir

- **R** <kbd>GET</kbd> Recuperar, obter

- **U** <kbd>PUT</kbd> Atualizar

- **D** <kbd>DELETE</kbd> Excluir

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
Informar ao cliente, através de códigos com significados já pré-definidos, sobre o status da requisição ao servidor. A causa de um erro inesperado poderá ser gerado por ambas as partes.

##### `1xx` Informação
![continue](https://http.cat/100)

O servidor recebeu os cabeçalhos da solicitação, e que o cliente deve proceder para enviar o corpo do pedido

##### `2xx` Sucesso
![accept](https://http.cat/202)

O pedido foi aceito para processamento, mas o tratamento não foi concluído

##### `3xx` Redirecionamento
![multiple](https://http.cat/300)

Indica várias opções para o recurso que o cliente pode acompanhar

##### `4xx` Erro de cliente
![bad](https://http.cat/400)

O pedido não pode ser entregue devido à sintaxe incorreta

##### `5xx` Erro de servidor
![loop](https://http.cat/508)

O servidor detectou um loop infinito ao processar o pedido (enviado em vez de 208)

## Explique o que é cada parâmetro da função recebida no `createServer`.
Suponhamos a seguinte assinatura:
```js
http.createServer(function(request, response){}
```
#### `request`
Objeto de solicitação que contém informações sobre a solicitação do cliente, tais como a URL, cabeçalhos HTTP, e muito mais.

Segue exemplo onde retornamos a rota informada:
```js
request.url
```

#### `response`
Objeto de resposta que é utilizada para devolver dados de volta para o cliente.

Abaixo segue exemplo onde enviamos um código de status HTTP e uma coleção de cabeçalhos de resposta de volta ao cliente:
```js
response.writeHead(200,{"Content-Type":"text/html"});
```

## O que é e para que serve a Querystring?
Conjunto de pares/valores anexados a URL via `GET`. Utilizada para facilitar, na maioria das vezes, o envio de dados estruturados de forma simples e pequena entre cliente/servidor.

Exemplo de URL com QueryString:
```js
.../rota?name=Davidson&sobrenome=Nascimento
```

Exemplo de tratamento no Node.js:
```js
...

http.createServer(function(request, response){

  var queryString = url.parse(request.url, true);

  for(var key in queryString.query){
    response.write(key + ": " + result.query[key]);
  }
}

...
//imprimirá: Davidson Nascimento
```

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
- /api/pokemons/create
- /api/pokemons/read
- /api/pokemons/update
- /api/pokemons/delete


```js
var date = (new Date()).toJSON();

const http = require('http')
    , url = require('url')
    , SUCCESS = {
        version: '1.0'
      , name: ''
      , returned_at: date
      }
    , ERROR = {
        message: "Não encontrado!"
      }
    ;

var rotas = {
  create: function(){
    SUCCESS.name = 'Be MEAN ENTROU NA ROTA /api/pokemons/create'
  },
  read: function(){
    SUCCESS.name = 'Be MEAN ENTROU NA ROTA /api/pokemons/read'
  },
  update: function(){
    SUCCESS.name = 'Be MEAN ENTROU NA ROTA /api/pokemons/update'
  },
  delete: function(){
    SUCCESS.name = 'Be MEAN ENTROU NA ROTA /api/pokemons/delete'
  }
}

http.createServer(function(req, res){
  rotas.parametros = url.parse(req.url, true);
  try{

    // remove a descrição /api/pokemons
    var rota = req.url.replace(/\/api\/pokemons\//gi, '');

    rotas[rota]();

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(SUCCESS));

  }catch(e){
    res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
    res.write(JSON.stringify(ERROR));
  }
  res.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});
```
