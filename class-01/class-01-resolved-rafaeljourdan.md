# Node.js - Aula 01 - Exercício
**user:** [Rafael Jourdan](https://github.com/rafaeljourdan)<br>
**autor:** Rafael Jourdan<br>
**date:** 09/01/2017

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
<b>Síncrono:</b> No processo síncrono temos enfileiramento de requisições e é necessário aguardar que as outras requisições 
sejam processadas para que a nossa seja atendida, neste processo o usuário pode perceber uma demora pois é uma arquitetura bloqueante.<br>
<b>Assíncrono:</b> Nesta abordagem podemos ter requisições executando em paralelo devido ao event loop do node, ou seja, não
precisamos aguardar as requisições mais antigas serem atendidas, o que nos dá dinâmica e performance.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O motor V8 interpreta e compila o JS e é responsável pelo event loop e assincronismo das respostas.
!['V8'](http://maxroecker.github.io/blog/introducao-ao-nodejs/node-eventloop.svg "Nodejs V8 Event Loop")

## Qual a diferença entre um sistema single para um multi-thread?
<b>single-thread:</b> O sistema coloca todas requisições em uma thread e cada requisição é atentida por vez.<br>
<b>multi-thread:</b> Várias requisições são executadas paralelamente.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
A quinta aguarda o processamento das 4 que lá estão.<br>

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
* Custo zero utilizando open-source comparado com tecnologias pagas;
* Performance acima dos concorrentes e quantidade absurda de requisições (dezenas de milhares);
* Curva de aprendizagem "facilitada" por adotar a mesma linguagem de programação no front e back-end;
* Integração transparente com mongodb;
* Ascensão do nodejs demonstrando os cases de gigantes como paypal, walmart, airbnb, etc.

## Qual a versão do seu `node`?
```
$ node -v
v4.4.0
```
## Qual a versão do seu `npm`?
```
$ npm -v
2.14.20
```