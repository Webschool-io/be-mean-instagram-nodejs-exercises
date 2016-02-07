# Node.js - Aula 01 - Exercício

**user:** https://github.com/rafael-pessoni
**autor:** Rafael Bertanha Pessoni

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

#### Processos Síncronos:

Os síncronos bloqueiam a Thread de execução do node, fazendo com que o node consiga responder somente 1 Request por vez.

Um ótimo exemplo para isso é o atendimento de um restaurante, no modelo síncrono, o garçom pegaria o pedido do cliente na mesa, passaria este pedido para a cozinha, e esperaria a finalização deste pedido para ir atender a segunda mesa.

#### Processos Assíncronos:

Os processos assíncronos não bloqueiam a Thread de execução do node, permitindo assim que ele trabalhe na resposta de mais de um Request simultaneamente. A maior vantagem deste modelo está em situações onde, dentro da resposta do Request existe um grande processamento de I/O por exemplo, esse processamento é feito por componentes externos ao node, então, ele não precisa esperar esse processamento terminar para começar a trabalhar em outro Request.

Voltando ao exemplo do restaurante, no modelo assíncrono, o garçom pegaria o pedido do cliente, passaria para a cozinha, e enquanto a cozinha prepara o prato, o garçom atende a segunda mesa.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

![](https://raw.githubusercontent.com/Rafael-Pessoni/Learn/master/be-mean/nodejs/images/event-loop.jpg)

Sempre que algo acontece no node um evento é disparado, esse evento então entra no final da fila de eventos(Event Queue), o Event Loop pega o primeiro item da fila e o direciona aos componentes da thread pool, e é nesse momento que a principal característica do node entra em ação, ele não espera até que o elemento da thread pull termine seu processamento, ele continua se trabalho pegando o próximo elemento da fila, quando o elemento da Thread Pool termina o processamento, um novo evento entra na Event Queue, esse evento é chamado de callback

## Qual a diferença entre um sistema single para um multi-thread?

Um bom exemplo para isso seria o funcionamento de um posto de combustível, imagine um posto de combustível com uma única bomba, todos os carro teriam que se enfileirar para serem atendidos, este é o funcionamento de um sistema sigle-thread, já no multi-thread, vários clientes podem ser atendidos de uma única vez, como em um posto convencional, neste exemplo cada bomba de combustível representa um processador, ou core de processador.
O node é single thread, mas como é assíncrono também, ele consegue atender a varias requisições ao mesmo tempo, o problema está em quando ele é forçado a fazer algo síncrono, toda essa velociada é jogada fora.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Elas são enfileiradas para serem atendidas assim que uma for resolvida, mas este tamanho pode ser configurado

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostrando os grandes casos de sucesso, e também, a sua superioridade diante de alguns cenários

## Qual a versão do seu `node`?

    [rafael.pessoni@localhost nodejs]$ node --version
    v0.10.41

## Qual a versão do seu `npm`?

    [rafael.pessoni@localhost nodejs]$ npm --version
    3.6.0
