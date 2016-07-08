# Node.js - Aula 02 - Exercício

**user:** [gilsondev](https://github.com/gilsondev)

**autor:** Gilson da Silva Borges Filho

**date:** 1457204474567

## Quais são os 4 verbos que utilizamos para o CRUD?

**GET**: Verbo usado para listar todos os recursos disponíveis de uma rota específica
ou então de um recurso selecionado. Exemplo:

```bash
GET /products - Lista todos os produtos
GET /products/1 - Retorna o produto de número 1
```

**POST**: Verbo usado para criar um novo recurso no servidor. Dependendo da necessidade,
ele é usado também para atualizar um recurso existente.

```bash
POST /products - Cria um novo recurso de produto no servidor
POST /products/1 - Atualiza um produto do servidor
```

**PUT**: Verbo usado para atualizar um recurso no servidor.

```bash
PUT /products/1 - Atualiza os dados de um recurso selecionado
```

**DELETE**: Remove um recurso armazenado no servidor.

```bash
DELETE /products/1 - Remove o recurso "Produto 1" no servidor
```

## Para que foram inventados os status codes? Dê exemplo de 1 código por grupo e a imagem do *Cat Status Code*

Foram criados para definir o status do processamento do servidor, se foi de sucesso ou erro por exemplo.
Ele possui um padrão no formato desse código. Dentro do status code, temos alguns grupos como:

#### 1xx - Informacional

Traz informações do que foi feito no processamento. Ele não é muito usado atualmente.

Exemplo:
 - 100 CONTINUE: Solicita que o cliente continue com a requisição feita, já que
 a primeira parte dela já foi recebida.
 ![Status Code 100](https://http.cat/100)

#### 2xx - Sucesso

Esse grupo indica que a requisição feita pelo cliente foi executado, recebido ou aceito com sucesso.

Exemplo:
 - 200 OK: A requisição foi aceita
 ![Status Code 200](https://http.cat/200)
 - 201 CREATED: A requisição foi aceita e resultou em um novo recurso.
 ![Status Code 201](https://http.cat/201)

#### 3xx - Redirecionamento

Aqui é quando uma ação que precisa ser feito para que ocorra um redirecionamento de
um recurso para outro.

Exemplo:
 - 301 MOVED PERMANENTLY: Efetua um redirecionamento completo, mudando a URI
 ![Status Code 301](https://http.cat/301)
 - 304 NOT MODIFIED: Quando efetua alguma requisição de alguma informação, mas
 ![Status Code 304](https://http.cat/304)
 que não houve nenhuma mudança. Ocorre muito em arquivos estáticos.

#### 4xx - Erro no Cliente

Nesse grupo possui códigos que identificam erros cometidos pelo cliente.

Exemplo:
 - 404 NOT FOUND: Recurso solicitado não encontrado
 ![Status Code 404](https://http.cat/404)
 - 400 BAD REQUEST: A requisição construida possui algum erro que não é possivel
 ![Status Code 400](https://http.cat/400)
 ser aceito.

#### 5xx - Erro no Servidor

Diferente do último, são códigos de define os tipos de erros cometidos pelo servidor.

Exemplo:
 - 500 INTERNAL SERVER ERROR: Indica que ocorreu algum erro no processamento do servidor,
 ![Status Code 500](https://http.cat/500)
 impossibilitando uma resposta esperada.
 - 505 HTTP VERSION NOT SUPPORTED: Quando alguma requisição é feito usando determinada
 versão do protocolo HTTP que o servidor não tem suporte para processá-la.


## Explique o que é cada parametro da função recebida no `createServer`.

Dentro do createServer você manda uma função anônima com dois parametros:

 - request: O objeto que possui a requisição do cliente;
 - response: Resposta a ser montada pelo servidor e enviado ao cliente.

## O que é e para que serve a Querystring?

Querystring um formato para recebimendo de valores na url. Segue um exemplo:

```
http://host.com/routername?param1=value1&param2=value2o
```

Assim você o servidor recebe na requisição dessa URL:

chave: param1
valor: value1

chave: param2
valor: value2

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes.

```javascript
'use strict';

const json_head = {'Content-Type': 'application/json'};

const http = require('http')
	, SUCCESS = {
			message: 'Its success',
		, status: 200
	}
	, ERROR = {
			message: 'Its not found'
		, status: 404
	}
	;

var render_success = function(req, res) {
	res.writeHead(200, json_head);
	res.write(JSON.stringify(SUCCESS));
};

var render_error = function(req, res) {
	res.writeHead(404, json_head);
	res.write(JSON.stringify(ERROR));
};

var server = http.createServer(function(req, res) {
		if(req.url === '/router/a') {
			render_success(req, res);
		}
		else if(req.url === '/router/b') {
			render_success(req, res);
		}
		else if(req.url === '/router/c') {
			render_success(req, res);
		}
		else if(req.url === '/router/d') {
			render_success(req, res);
		}
		else {
			render_error(req, res);
		}
});
```
