# Node.js - Aula 01 - Exercício
**user:** https://github.com/FranciscoValerio
**autor:** Francisco Henrique Ruiz Valério
**date:** 2015-12-08T21:59:10

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Assíncrono:
	Exemplo: 
		A API Google Maps V3 (Geocoding service) trabalha de forma assíncrona, como ela recebe milhões de requisições de endereços para serem transformados em latitude e longitude. Ela não aguarda uma requisição terminar e retornar o resultado, pense isso seria muito lento para a quantidade de requisições que ela recebe. Portanto ela recebe as requisições e não espera seu resultado e vai recebendo as próximas da "fila". But what about the results???

		No Node como por padrão qualquer função é assícrona sempre precisaremos de uma função que sempre será chamada após o processamento ter sido finalizado, estas chamadas de callback.

		Portanto é assim que o resultado e obtido na consulta a API mencionada acima.


Síncrono:
	A beleza do Node está em utilizar requisições assíncronas.

	Exemplo:
		Um exemplo de síncrono poderiamos pegar uma fila de pedágio. A operadora da cabine não consegue atender mais de um carro ao mesmo tempo portanto ela deverá anter um carro receber dele e liberar a passagem, após esse processo ela estara "liberada" para atender o próximo carro da fila gerando assim uma demora como bem conheçemos.

		Para utilizar o Node de forma síncrona é nescessário passar duas funções como parametro, uma para tratamento de erro e outra para sucesso.
		Muito cuidado com a "Síncrona" pois o Node é Single Thread isso significa que caso um processo bloqueie essa Thread o Node também irá ficar bloqueado aguardando seu termino.


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

https://github.com/FranciscoValerio/be-mean-instagram-nodejs-exercises/blob/master/img/v8-sample.jpg

## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single thread, significa que aquele sistema consegue executar apenas uma tarefa pois trabalha somente com uma thread, ou seja caso seja executado um processamento muito demorado o sistema ficará bloqueado aguardando o termino desse processamento. Já em um sistema multi-thread caso seja necessário executar um processamento que o sistema irá ficar bloqueado é aberto uma nova thread para ser executado esse processamento nessa ou seja, com isso o sistema irá ficar liberado para uso.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Por padrão a thread pool é de 4 no Node, a 5 requisição será incluída a idle thread oque seria essa idle thread nada mais é do que as requisições que estão aguardando uma das 4 requisições que estão na thread pool serem executadas para as mesmas poderem serem executadas.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Primeiramento mostraria um comparativo de JAVA com NodeJS mostrando os números de beneficíos que a empresa ganharia se migrace para Node primeiramento os ganhos no desempenho do software gerando a satisfação dos clientes. Segundo a economia de tempo de desenvolvimento devido a curva de aprendizado ser grande, e por último não menos importante mostraria a economia que Node geraria na folha de pagamento da empresa. Claro que tudo isso com muitos gráficos e percentual de redução de custo operacional.

## Qual a versão do seu `node`?

PS C:\Be-Mean\NodeJS\Aula01> node -v
v5.1.1

## Qual a versão do seu `npm`?

PS C:\Be-Mean\NodeJS\Aula01> npm -v
3.3.12
