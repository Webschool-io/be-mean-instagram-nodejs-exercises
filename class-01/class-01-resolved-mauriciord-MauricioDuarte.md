# Node.js - Aula 01 - Exercício
**user:** [mauriciord](https://github.com/mauriciord)
**autor:** Maurício Reatto Duarte
**date:** 15/07/2016

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Em termos simples, programação **síncrona** é fazer uma coisa a seguir à outra, sendo de execução sequencial e linear. Quando há comandos a serem executados, são efetuados somente após o término do comando anterior.

### Exemplo de processo síncrono com nodeJS

```js
var fs = require('fs');
var arquivo = "./index.html";
var rdf = fs.readFileSync(arquivo, "utf8");

res.writeHead(200, {"Content-type":"text/html"});
res.write(rdf);
res.end();
```

*Você pode observar que o javascript aguardou o leitura do arquivo*


Já a programação **assíncrona**, é quando a rotina acaba sendo não bloqueante, ou seja, no caso do nodeJS, é enviada ao _Event Loop_ e o resto dos comandos continuam a executar normalmente.

### Exemplo de processo assíncrono com nodeJS

```js
var fs = require('fs');
var arquivo = "arquivo.txt";
fs.readFile(arquivo, function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});
console.log('Vamos ver qual aparece antes');
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

![javascript V8 engine](https://pbs.twimg.com/media/Bt5ywJrIEAAKJQt.jpg)


## Qual a diferença entre um sistema single para um multi-thread?
Sistema single-thread, conforme o nome sugere, temos apenas uma thread tratando as requisições com um único processamento(isso evita gasto de processamento), porém elas são tratadas no _Event Loop_.
Já no caso da Multi-thread, para cada processamento no servidor, é gerado uma thread, tendo assim um gasto maior de processamento.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Será executada apenas quando uma das quatro terminar, liberando espaço para essa nova requisição. O limite padrão é 4, porém com expansão até 128 requisições.

# Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Primeiramente, eu explicaria para ele sobre o menor gasto de processamento, por ser S.T. e que isso poderia reduzir gastos com servidores. Depois para reforçar, iria demonstrar os casos de uso das famosas e medias empresas que usaram Node.js e que obtiveram resultados satisfatórios.

## Qual a versão do seu `node`?

v6.3.0

## Qual a versão do seu `npm`?

3.10.3

