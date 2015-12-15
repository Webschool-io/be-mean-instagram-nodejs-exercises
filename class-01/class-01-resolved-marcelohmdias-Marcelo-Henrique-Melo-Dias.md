# NodeJS - Aula 01 - Exercício

**User**: [@marcelohmdias](https://github.com/marcelohmdias)
**Autor**: Marcelo H M Dias
**Date**: Sun Dec 13 2015 21:35:35 GMT-0200 (BRST)

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

- **Síncrono**: Em NodeJS, os processos sincronos são bloqueantes, ou seja, caso exista uma lista de processos a serem executados, o nodejs aguarda o termino do anterior para executar o próximo.

```js
//text_sync.js
var fs = require( 'fs' );

for (var i = 0; i <= 5; i++) {
  var file = 'sync-txt' + i + '.txt'
    , out = fs.writeFileSync(file, 'Hello Node.js!');
    console.log(out);
}

//Exemplo retirado do livro - Aplicação web real-time com Node.js - Caio Ribeiro Pereira
```

- **Assíncrono**: Os processos assíncronos por outro lado, realizam os processos de forma paralela.

```js
//text_async.js
var fs = require( 'fs' );

for (var i = 0; i <= 5; i++) {
  var file = 'async-txt' + i + '.txt'
    , fs.writeFile(file, 'Hello Node.js!', function (err, out) {
      console.log(out);
    });
}

//Exemplo retirado do livro - Aplicação web real-time com Node.js - Caio Ribeiro Pereira
```

Se compararmos os dois códigos, podemos ver a diferença na *timeline* de execução de ambos. Enquanto o primeiro levou 1000 milissegundos para executar, o segundo código levou um quinto deste tempo (200 milissegundos). Isso nos mostra as vantagens em relação ao desempenho do nodeJS ao utilizar processos não bloqueantes.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 é o motor de renderização do NodeJS, ou seja, ele realiza um bind do código JS para C++, convertendo todo o nosso código para funções do próprio V8. Isso permite a posterior conversão deste código para linguagem de máquina.

![Motor V8](https://github.com/marcelohmdias/curso-be-mean/blob/master/nodejs/_file/v8.jpg)

## Qual a diferença entre um sistema single para um multi-thread?

Thread é o fluxo de execução de um processo. Em sistemas sigle threads, existe apenas um fluxo de execução, dessa maneira, os processos são executados em filas, um por vez. Já em sistemas multi threads, existe mais de uma fila de execução dos processos. Em cada fila os processos ainda são executados um por vez, porém com mais filas os processos podem ser executados de forma simultânea.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Devido ao fato da Libuv possuir este valor em default a quinta requisição deve aguardar a liberação para a execução.

Porém é possível aumentar o tamanho limite da Thread Pool (até um máximo de 128), alterando o valor da variável de ambiente UV_THREADPOOL_SIZE, o que também exigira um uso maior de mémoria para a execução da aplicação.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Para alterarar uma tecnologia adotada em uma empresa, não basta apenas apresentar o que determinada linguagem possui de bom, é necessário realizar um comparativo entre ambas as opções, além de, estudos de Benchmarking (processo ou técnica de gestão através do qual as empresas ou organizações avaliam o desempenho dos seus processos, sistemas e procedimentos de gestão comparando-o com os melhores desempenhos encontrados noutras organizações).

Levando isso em consideração, é possível determinar alguns pontos:

- Demonstrar as principais características do NodeJS e o que elas impactariam nos processos da empresa;
- Apresentar cases em que o Node foi adotado e tornou o fluxo de trabalho mais produtivo;
- Buscar possíveis soluções e alternativas (bibliotecas e frameworks) para atender as demandas da empresa.

## Qual a versão do seu `node`?

```bash
marcelohmidas :: ~/ » node -v
	v5.1.1
marcelohmidas :: ~/ »
```

## Qual a versão do seu `npm`?

```bash
marcelohmidas :: ~/ » node -v
	3.3.12
marcelohmidas :: ~/ »
```