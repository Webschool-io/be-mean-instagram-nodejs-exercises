# Node.js - Aula 01 - Exercício:w
**user:** [sostenesfreitas](https://github.com/sostenesfreitas)
**autor:** Sóstenes Freitas de Andrade
**date:** new Date()

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Processo assíncrono é quando é executado apenas um processo por vez, onde o Node ficará limitado aquele processo ate que o mesmo termina, para só aṕos finalizar a execução daquele determinado processo, poder iniciar a execução novo processo.
EX:
```
function exemploSincrono1(){
    console.log("sicrono1");

}
function exemploSicrono2(){
    console.log("sicrono2");

}
test();
test2();
```

Já o processo assíncrono que é utilizado pelo Node por padrão, é capaz de executar vários processos de uma só vez, em 'paralelo'
mas o que acontece na verdade não é que ele executa varios processos simultaneos, ele simplesmente manda executar o processo com um callback e já vai para o próximo processo, quando qualquer um dos processos que já foi mandado executar terminar seu processo ele manda o callback de retorno para o Node finalizar aquele processo. 
EX:
```
function exemploAssicrono1(){
    console.log("Assíncrono1");

}
function exemploAssicrono2(){
    setTimeout(Assicrono, 0);
    console.log("Assíncrono");
    console.log("Assicronoo2");

}
exemploAssicrono2();
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 é o motor de renderização do javaScript que funcioná como uma máquina virtual que compila o código em js para o formato nativo de máquina antes de executá-lo, tendo como propósito aumentar o desempenho da aplicação.

(http://image.slidesharecdn.com/15fuv8js7ulf1nzuakfe-140628073041-phpapp01/95/nodejs-enterprise-middleware-25-638.jpg?cb=1403940779)

## Qual a diferença entre um sistema single para um multi-thread?
Tem mais arquiteturas além de single-thread (ST) e multi-thread (MT). Basicamente o ST só pode tratar uma requisição de cada vez, então o processamento de cada uma não pode ser demorado, nem pode bloquear (por exemplo, ficar esperando pelo banco de dados). O MT, assumindo que se crie uma thread por requisição, pode tratar várias requisições em paralelo, mesmo que demorem ou bloqueiem.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Devido ao fato de a thread pool suportar apenas 4 requisições, caso acontece de a quantidade de requisição ultrapassar o tamanho padrão da thread pool, as requisições suplentes vão para a 'Task Queue'(fila de tarefas) e aguarda até que umas das threads sejam liberadas.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Ready for real-time: O Node.js ficou popular graças aos seus frameworks que interagem em real-time entre cliente e servidor. SockJS, Socket.IO, Engine.IO são alguns exemplos disso. Eles são compatíveis com o novo protocolo WebSockets e permitem trafegar dados através de uma única conexão bi-direcional, tratando as mensagens via eventos no JavaScript.
Big players usando: LinkedIn, Wallmart, Groupon, Microsoft e Paypal são algumas das empresas usando Node.js atualmente.

## Qual a versão do seu `node`?
 miojo at corsair in ~ [19:34:13]
→ node -v
v6.2.1



## Qual a versão do seu `npm`?
miojo at corsair in ~ [19:34:45]
→ npm -v
3.9.3



```
```
```
```
