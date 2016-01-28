# Node.js - Aula 01 - Exercício

**user:** [victorvoid](https://github.com/VictorVoid)

**autor:** Victor Igor Gomes Martins

**date:** 1453957583405

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

###Sícrono 
![](http://images.123gifs.net/20151111/waiting-in-lines-queue-switching-fail-funny-400x320.gif)

O processo sícrono no Node.js é muito simples de entender, e pode ser resumido em uma palavra: **fila**.
Isso mesmo, sabe aquela fila desgraçada do banco que você precisa esperar ? Isso acontece porque não tem
como atender todos de uma vez quando só se tem uma ou duas pessoa para atender. Quando uma função só é executada depois que anterior for finalizada, é um processo asícrono.

####Exemplo?  
```js
function calango (){
  console.log("Olá calanguito");
}
function crocodilo(){
  console.log("vou te lamber calanguito");
}
calango(); 
crocodilo();
```

###Assícrono

Qualquer função por padrão do nodejs é assícrono! Mas o que é esse assícrono ?

![](http://www.gifbin.com/bin/4sw0swsw4sw2sw3.gif)

Nenhuma leitura ou escrita vai esperar terminar seu processo pra continuar fazendo o resto do script, que loucura não ? 
Ele vai fazer várias coisas possível ao mesmo tempo. Pense em um salão de cabeleireiro, sabe quando a mulher vai pra lá e passa horas ? ali pode acontecer alguma coisa assícrono, paralelamente, por exemplo, fazendo escova no cabelo, outra pessoa fazendo a unha da mão e outra do pé, ou seja, ela não espera a pessoa secar seu cabelo para fazer as unhas, enquanto o cabelo termina de ser secado, ela já está fazendo as unhas. Isso acontece no Node.js através de callbacks, e enquanto estão sendo executados, o script seguinte também já estão.

####Como acontece ?

Uma das características dele é que trabalha com single thread, isso economiza muita memória por exemplo, isso é gerenciado
através do *Event Loop*, que é uma fila de processo infinita, sabe a fila de processo que quer ser executada ? cada um entra no event loop, e não faz a execução por completo, ele manda executar (lembra das callback ? isso mesmo), e assim não fica esperando nada, manda pra quem é responsável, e como o processo é assícrono não deixa o processo seguinte bloqueado.


####Exemplo ? 

```js
'use strict';

var fs = require('fs');

fs.exists('./index.txt', (exist)=> {
    console.log(exist ? 'existe': 'não existe');
});
/*como acontece de forma assícrono, ele mandou verificar se o arquivo existe, enquanto isso ele 
já executou o console abaixo:*/
console.log("ola"); 
```

Veja essa pequena demonstração do uso das duas e perceba a diferença de velocidade:

[Síncrono X assíncrono](https://www.youtube.com/watch?v=-43EEc3C3cA)

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

![](http://runtimejs.org/jsconf/img/runtimejs-arch.png)

## Qual a diferença entre um sistema single para um multi-thread?

Uma Thread é um caminho de execução através do programa, e com a single thread, há sempre um único caminho
de execução e a multi-thread existem dois ou mais encadeamentos.

`Single Thread`: Essa é a característica do Node.js, pois trabalha apenas com single thread, e assim economizando muito mais memória e CPU que o sistema multi-thread, pois por exemplo você não precisa ficar criando um processo novo para cada usuário
conectado. Quem gerencia essa bruxaria é o *Event Loop* de quem já falei sobre.

`Multi Thread` : Ele tem capacidade de executar vários processos(aplicações) ao mesmo tempo, o sistema operacional por exemplo que cuida disso. O que *Multi-Thread* permite é simultaneidade dentro de um aplicativo.

####Exemplo na programação: 

*Single Thread*: 

Faça X
Faça Y
Faça Z

*Multi-Thread*:

Faça X e Y
Faça Z

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Sempre que ultrapassar ele ficará no Idle Thread esperando a libeção de alguma requisição para aí sim 
ir para a Thread Pool.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Chefe, você quer fazer algo mais rápido com menos programadores e ainda sim ter uma aplicação 2 vezes mais rápida ? 
Conhece a PaylPal não é ? Um simples sistema que roda no mundo todo (^___^), jogou todo seu sistema de java fora 
e fizeram em Node.js mas depois deram dados de que ficou 2 vezes mais rápido e com menos pessoas trabalhando no projeto
que loucura não é ? E tem várias empresas por ae trocando pro Node.js, uma das últimas ae foi a Netflix que trocou tudo pra Node. O LinkedIn, Skype, Walmart, e muitas outras usam Node.

## Qual a versão do seu `node`?

> node -v 

v5.4.1

## Qual a versão do seu `npm`?

> npm --version

3.3.12
