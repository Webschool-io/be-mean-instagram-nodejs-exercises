# Node.js - Aula 01 - Exercício
**user:** https://github.com/higordiego
**autor:** Higor Diego Alves Ferreira Pinheiro
**date:** Fri Jan 22 2016 18:30:10 GMT-0300 (BRT)'

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Assíncrono:
	Exemplo: 
		Quando um processo não depende do outro para terminar.

		Exemplo: O garçom atende varias mesas sem precisar esperar na cozinha que o pedido seja feito, ele só 
		aguarda chamar ou seja (callback).

Síncrono:
	Quando um processo depende do outro para acabar para passar do próximo.
	Exemplo: Fila de pão, o atendente não consegue entregar e atender o cliente para pegar o pão sem que o primeiro cliente
	já tenha sido atendido.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

https://raw.githubusercontent.com/higordiego/be-mean-instagram-nodejs-exercises/master/class-01/img/chakra-pipeline.png

## Qual a diferença entre um sistema single para um multi-thread?

Single Thread: Sistema consegue executar apenas uma thread, assim fica dependendo de um processo terminar para ir para o outro.

Multi-thread: Trabalha com varias threads, caso o sistema trave um processamento ele inicia uma nova assim liberando o uso.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?


Em caso da quinta requisição será incluída uma thread na espera, até vagar uma thread para entrar em execução.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
	
	Mostraria o custo da tecnologia e tendências de mercado hoje, com base em perfomance e desempenho.

## Qual a versão do seu `node`?

nodejs $ node -v
v5.5.0


## Qual a versão do seu `npm`?

nodejs $ npm -v 
3.3.12

