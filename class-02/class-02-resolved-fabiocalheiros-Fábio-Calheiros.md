# NodeJS - Aula 02 - Exercício
autor: Fábio Calheiros (conta: fabiocalheiros)

# 1. Quais são os 4 verbos que utilizamos para o CRUD?

```

- Create - POST
- Retrieve/Read - GET
- Update - PUT
- Delete - DELETE

```

# 2. Para que foram inventados os Status Codes? Dê um exemplo de 1 código por grupo e a imagem do Cat Status Code

```

Os Status codes, servem para obtermos resposta de uma requisição.
100 - Informacional (https://http.cat/100)
200 - Sucesso(OK) (https://http.cat/200)
301 - Movido permanamentemente (https://http.cat/301)
404 - Não encontrado (https://http.cat/404)
503 - Serviço indisponível (https://http.cat/503)

```

# 3. Explique o que é cada parâmetro da função recebida no 'createServer'.

```
// utilizando o protocolo http, cria-se um função anônima que recebe dois parâmetros
// req - requisição (Parametro enviado)
// res - nome da função de retorno
http.createServer(function(req, res){

    // veririca se a url informada é = '/api/v1'
    if(req.url === '/api/v1'){
        // retorna um cabeçalho de resposta OK no formato json
        res.writeHead(200, {'Content-Type': 'application/json'});
        // Escreve o retorno transformando a mensagem de SUCESSO em uma string
        res.write(JSON.stringify(SUCCESS))  
    }else{
        // Caso não encontre a url, monta uma cabeçalho com o erro de página não encontrada
        res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
        // Escreve o retorno transformando a mensagem de ERRO em uma string
        res.write(JSON.stringify(ERROR))    
    }
    // finaliza a resposta
    res.end();
// quando o server for iniciado com sucesso
}).listen(3000, function(){
    // escreve a mensagem que o servidor está rodando na porta 3000
    console.log('Servidor rodando em localhost:3000');
});


```

# 4. O que é e para que serve a Querystring?

```
Querystring é uma leitura de url obtida através do método request.url que retorna uma string sobre o que foi digitado no endereço url do seu browser.
A querystring serve para obertermos os valores informados pelo usuário e fazer as rotas, ou inserir os valores de acordo com o que foi recebido.

```

# 5. Escreva no código do 'server.js' uma forma de entregar um JSON de sucesso em 4 rotas diferentes:

```

'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCCESS = {
    version: '1.0'
    , name: 'Be MEAN'
    , returned_at: date
    }
    , ERROR = {
        message: "Não encontrado!"
    };

http.createServer(function(request, response){
    var result = request.url;
    var rotas = [ '/api/pokemons/create', '/api/pokemons/read', '/api/pokemons/update', '/api/pokemons/delete'];

    for(var key in rotas){
        if (rotas[key] === result) {
          response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
          response.write(JSON.stringify(SUCESS));
          response.end();
        }else{
          response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
          response.write(JSON.stringify(ERROR));
          response.end();
        }
    }

  response.end();

}).listen(3000, function(){
  console.log('Servidor rodando em localhost:3000');
});


```