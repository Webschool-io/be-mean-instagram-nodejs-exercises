# Node.js - Aula 02 - Exercício
**user:** [dayvsonsales]https://github.com/dayvsonsales  
**autor:** Dayvson Sales 
**date:** Sex Dez 11 22:39:07 BRT 2015

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Suponhamos que tenhamos uma lista de tarefas

Assíncrono:
	
	Se executarmos de forma assíncrona, essas tarefas irão ser executadas de forma concorrente, simultaneamente. Uma não dependerá da outra para finalizar, podendo assim, a primeira ser a última a retornar ou a última ser a primeira e vice-versa. 
	Sempre que utilizarmos assíncrono no node.js devemos passar uma função callback que será executada assim que a tarefa terminar sua execução.

	Exemplo:

	 ```
	 	db.query(sql, function(err, data){
	 		if(err){
	 			throw err;
	 		}
	 		console.log("inserido " + data);
	 	});
	 	console.log("essa mensagem pode vir antes ou depois do inserido ou error")
	 ```

Síncrono:
	
	Quando uma tarefa é executado de forma síncrona, a thread principal irá esperar a tarefa ser executada e aguardar seu retorno para dar continuidade a outras tarefas.

	```
		var data = db.querySync(sql);
		console.log(data);
	 	console.log("essa mensagem só aparecerá depois da execução da função acima");

	```


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

http://runtimejs.org/jsconf/img/runtimejs-arch.png

http://jbcdn2.b0.upaiyun.com/2012/05/11.jpg

## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single thread se caracteriza por executar tarefas na mesma thread. Dessa forma, é necessário esperar o termino de uma tarefa para executar outra.

Um sistema multi-thread se caracteriza por criar várias threads para execuções de tarefas, podendo realiza-as simultaneamente.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta só será executada após a finalização das uma das quatro primeiras. Mas é possível aumentar esse número até 128.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostraria o Node.js em si, suas vantagens e desvantagens em relação ao negócio da empresa e mostraria casos de sucesso com ele, como o da Netflix (que mudou seu core de Java para Node).

## Qual a versão do seu `node`?

dayvs0n in ~/be-mean-instagram-nodejs-exercises λ-> node -v
v5.2.0

## Qual a versão do seu `npm`?

dayvs0n in ~/be-mean-instagram-nodejs-exercises λ-> npm -v
3.3.12

