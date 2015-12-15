# Node.js - Aula 01 - Exercício
**user:** [Zowder](https://github.com/Zowder)
**autor:** Emídio de Paiva Neto
**date:** 1450035612253

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Vamos supor que você tem 1000 conexões ao vivo, e um pacote é entrego  a cada milissegundo, e o processamento de cada pacote leva 1 microssegundo. Vamos supor também que cada conexão envia 5 pacotes.

Em um aplicativo single-thread síncrono, cada ligação será tratada em série. O tempo total necessário é (5 + 5 * 1 * 0.001) * 1000 milissegundos, ou ~ 5005 milissegundos.

Em um aplicativo single-thread, assíncrono, cada ligação será tratada em paralelo. Uma vez que cada pacote leva um milésimo de segundo, e processamento de cada pacote leva 0.001 milissegundos, podemos processar pacote de cada ligação entre os pacotes, então a nossa fórmula torna-se: (1000 * 001 * 1) + 5 milissegundos, ou ~ 6 milissegundos.
## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
![Node.js Architecture](http://image.slidesharecdn.com/15fuv8js7ulf1nzuakfe-140628073041-phpapp01/95/nodejs-enterprise-middleware-25-638.jpg?cb=1403940779)
## Qual a diferença entre um sistema single para um multi-thread?

>**Single-thread**
Apenas uma tarefa pode ser feito em um tempo e o programa espera até que uma tarefa é concluída antes de iniciar outra.

>**Multi-thread**
Aplicações multi-thread permitem que você execute várias threads ao mesmo tempo, cada uma executando uma etapa por exemplo.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição vai para o Idle Thread, e espera até ser colocada no thread pool. Digamos que a primeira requisição foi executada, então a quinta requisição poderá ir para o thread pool.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
> * Com Node.js iríamos trabalhar com javascript no server-side utilizando o Google v8. Assim seria mais fácil manter um projeto de fácil manutenção visto que será a mesma linguagem JavaScript no client-side.
> * Comunidade ativa.
> * Orientado a evento - I/O não bloqueante.
> * Event Loop
> * LinkedIn, Wallmart, Groupon, Microsoft e Paypal são algumas das empresas usando Node.js.

## Qual a versão do seu `node`?

    v5.2.0

## Qual a versão do seu `npm`?

    3.3.12
