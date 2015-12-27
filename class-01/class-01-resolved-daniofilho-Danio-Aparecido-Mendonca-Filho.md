# NodeJS - Aula 01 - Exercício #

**User**: [daniofilho](https://github.com/daniofilho)

**Autor**: Dânio Aparecido Mendonça Filho

**Data**: 1450704879520

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada. ##

Um processo síncrono dentro do Node bloqueia a execução de qualquer outro processo enquanto o processo atual não for finalizado.

Exemplo, lendo um arquivo de forma síncrona:

~~~ js
var file = readFile()
processFile(file)
~~~

Já um processo assíncrono não bloqueia nenhum outro processo esperando a resposta do atual, ao invés disso ele continua executando os demais processos e, quando houver uma resposta, ai sim ele continua a execução.

Reescrevendo o mesmo exemplo, mas de forma assíncrona:

~~~ js
var fs = require('fs')
fs.readFile('movie.mp4', finishedReading)

function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // faça algo com os dados em movieData
}
~~~
ref: [Node BR - Callbacks em Node](http://nodebr.com/callbacks-em-node/)

Com isso, enquanto o arquivo movie.mp4 está sendo lido, o Node vai executando os demais processos que vierem na sequência e, quando terminar de ler, o Node é avisado e continua a execução daquele processo.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem. ##

O V8 é um interpretador de Javascript que foi criado pela Google para interpretar códigos em Javascript que fossem executados no Google Chrome. O V8 interpreta o código em Javascript e o converte para linguagem da máquina em que está instalado.

A arquitetura do Node com o V8 funciona da seguinte forma.

![Arquitetura Node](http://daniofilho.github.io/assets/media/nodejs-no-pagarme-75-638.jpg)

Retirado de: [Pedro Franceschi - NodeJS no Pagarme](http://pt.slideshare.net/PedroFranceschi/nodejs-no-pagarme)

## Qual a diferença entre um sistema single para um multi-thread? ##

Um sistema Single thread, como o Node JS, roda em apenas uma thread, ou seja, economiza processamento e memória e ganha performance. Já um sistema Multi Thread cria um processo para cada usuário que se conecta, aumentando significativamente o uso do processador.

Em um Sistema Single Thread, em casos onde os processos não são assíncronos, temos a desvantagem de que aquele processo vai ficar "pindurado" no processador e bloqueando qualquer outro novo processo que queira rodar. Já em Sistemas Multi Threads isso é facilmente corrigido com a criação de uma nova Thread para outro processo.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco? ##

Uma quinta requisição em um banco gera uma task que se chama **Idle Thread*. Esta task é uma thread que vai ficar esperando para ser incluida na fila do Thread Pool e em seguida executada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção? ##

Primeiramente mostrando grandes cases, como por exemplo o Pay Pal e o Netflix. Com resultados concretos e vindos de empresas do porte dessas, já é um grande item para se chamar a atenção de empresários. Depois disso faria uma análise de performance do sistema atual e levantaria os principais problemas dele, e com base nesses problemas,  mostraria onde o Node poderia entrar para resolve-los. Em seguida para concluir, explicaria as vantagens de agilidade de desenvolvimento que teriamos na migração do sistema.

## Qual a versão do seu `node`? ##

~~~
daniofilho$ node -v
v5.3.0
~~~

## Qual a versão do seu `npm`? ##

~~~
daniofilho$ npm -v
3.3.12
~~~
