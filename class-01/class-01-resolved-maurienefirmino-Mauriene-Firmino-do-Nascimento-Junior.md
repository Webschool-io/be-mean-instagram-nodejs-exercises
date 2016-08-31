# Node.js - Aula 01 - Exercício
**user:** https://github.com/maurienefirmino
**autor:** Mauriene Firmino do Nascimento Júnior
**date:** Qua Ago 31 10:50:54 BRT 2016

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Síncrono:
	Cada processo requisitado entra em uma fila, e o processamento só passa para outro quando termina este.

	Neste exemplo vemos um código síncrono, o sistema espera o arquivo ser lido para continuar:

	```
	var fs = require("fs");
	fs.readFileSync(‘arquivo.txt’,function(err,data){
    	if(!err) {
       		console.log(data);
    	}
	});
	console.log("Arquivo Lido com sucesso!");

	```

Assíncrono:
	Varios processo são atendidos ao mesmo tempo e media que vão terminando, mandam uma notificação por meio de um callback.

	Neste exemplo vemos um código assíncrono, o sistema não espera o arquivo ser lido para continuar:


	```
	var fs = require("fs");
	fs.readFile(‘arquivo.txt’,function(err,data){
    	if(!err) {
       	console.log(data);
    	}
	});
	console.log("Arquivo Lido com sucesso!");

	```


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Ele transforma o código em linguagem nativa da maquina antes de executar.

http://i751.photobucket.com/albums/xx160/logiprats/imageaxd-1.png

## Qual a diferença entre um sistema single para um multi-thread?

Um sistema single-thread usa apenas uma unica thread para executar seus processos, o que pode ocasionar travamentos caso um processo tenho que esperar outros processos por exemplo. O multi-thread usa tantas threads forem necessárias. O nodeJS usa single, porém de uma forma otimizada para que não ocorra problemas com frequência.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição ficaria em espera, aguardando um das 4 requisições serem completadas para dar espaço a mesma.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Uma boa maneira seria mostrar os dados que já vimos na aula sobre as vantagens do nodeJS, tais como ses exemplos. O nodeJS é mais adequado e rapido do que arquiteturas back-end feitas em JAVA ou PHP, um exemplo disso é o Wordpress(arquitetura em PHP) está se mudando para o nodeJS. 

## Qual a versão do seu `node`?

```
mauriene@mauriene-J1800NH:~$ node -v
v6.4.0
```

## Qual a versão do seu `npm`?

```
mauriene@mauriene-J1800NH:~$ npm -v
3.10.3
```

