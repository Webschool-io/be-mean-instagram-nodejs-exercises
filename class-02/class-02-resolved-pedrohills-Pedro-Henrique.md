# Node.js - Aula 02 - Exercício
**user:** [pedrohills](http://github.com/pedrohills)
**autor:** Pedro Henrique

## Quais são os 4 verbos que utilizamos para o CRUD?
GET, POST, PUT e DELETE.

## Para que foram inventados os Status Codes? Dê exemplo de 1 código por grupo e a imagem do [Cat Status Code](https://http.cat/).
São compostos, por padrão, por 3 digitos. Os Status Codes são divididos em 5 grupos, os de 100, 200, 300, 400 e 500.

1XX = Informacional: Serve apenas para informar que a informação foi recebida e que o processo continua.
  Exemplo de código: 100 - Continuar: Apenas sinaliza para o usuário continuar com a requisição.

2XX = Bem Sucedido:
  Exemplo de código: 200 - OK: Significa que a página web existe e que as operações foram realizadas com sucesso.

3XX = Redirecionamento: Notifica ao cabeçalho que houve uma mudança de página...
  Exemplo de código: 302 - Movido Temporariamente: Serve para mover, mas temporariamente.

4XX = Erro do Cliente: Erros 4XX devem ser tratados com cuidado. Pois quando há este tipo de erro no cabeçalho o conteúdo não estará acessivel ao usuário nem para os sistemas de busca para indexação.
  Exemplo de código: 401 - Não autorizado: Quando o usuário não tem acesso à página especifica (usuário não autenticado)
  Exemplo de código: 404 - Não encontrado: Famoso código que é retornado quando uma página ou arquivo especifico não existe no servidor..

5XX = Erro do Servidor: Acontece quando o servidor não consegue processar a requisição por algum motivo... Este erro também não permite a indexação da página.
  Exemplo de código: 503 - Serviço indisponível: É possível ser um erro temporário. Uma manutenção ou uma grande quantidade de requisições realizadas ao servidor que ocasionou em sua queda...


## Explique o que é cada parâmetro da função recebida no `createServer`.
No createServer passamos uma função anônima com dois parâmetros, são eles:

request: O request representa a requisição que é requisitada.

response: O response representa a resposta que é recebida.

## O que é e para que serve a Querystring?
São os valores passados pela URL. Serve para passarmos valores para nosso GET.
Exemplo http://localhost:3000?variavel=valor

## Escreva no código do `server.js` uma forma de entregar um JSON de sucesso em 4 rotas diferentes:
// server.js
'use strict';

var date = (new Date()).toJSON();

const http = require('http');

http.createServer(function(req, res){
	if(req.url === '/api/v1'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Página v1 encontrada!"}));
	} else if(req.url === '/api/v2'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Página v2 encontrada!"}));
	} else if(req.url === '/api/v3'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Página v3 encontrada!"}));
	} else if(req.url === '/api/v4'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Página v4 encontrada!"}));
	} else if(req.url === '/api/v5'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Página v5 encontrada!"}));
	} else {    
		res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify({"message": "Nenhuma página encontrada!"}));
  }
	res.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});
