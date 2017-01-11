# Node.js - Aula 01 - Exercício
**user:** [fernandobd42](https://github.com/fernandobd42)
**autor:** Fernando Lucas
**date:** 1467347548312

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Processo assíncrono é quando é executado apenas um processo por vez, onde o Node ficará limitado aquele processo ate que o mesmo termina, para só aṕos finalizar a execução daquele determinado processo, poder iniciar a execução novo processo.
EX:
```
function test(){
    console.log("test");
}
function test2(){
    console.log("test2");
}
test();
test2();
```

Já o processo assíncrono que é utilizado pelo Node por padrão, é capaz de executar vários processos de uma só vez, em 'paralelo'
mas o que acontece na verdade não é que ele executa varios processos simultaneos, ele simplesmente manda executar o processo com um callback e já vai para o próximo processo, quando qualquer um dos processos que já foi mandado executar terminar seu processo ele manda o callback de retorno para o Node finalizar aquele processo.
EX:
```
function test(){
    console.log("Assíncrono");
}
function test2(){
    setTimeout(test, 0);
    console.log("Assíncrono");
    console.log("Foda");
}
test2();
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 é o motor de renderização do javaScript que funcioná como uma máquina virtual que compila o código em js para o formato nativo de máquina antes de executá-lo, tendo como propósito aumentar o desempenho da aplicação.
http://4.bp.blogspot.com/-_KJudoqPHLY/UdajBp74xaI/AAAAAAAAAqI/v6nk60ycZ0w/s1023/Node_Architecture.png

## Qual a diferença entre um sistema single para um multi-thread?
O single thread como o nome ja diz utiliza um único segmento para executar os processos, ou seja, executa um de cada vez. Já o multi-thread como o nome também descreve, é capaz de ter mais de um segmento sendo capaz de executar alguns processos simultaneamente, porém quanto mais segmentos, mais recursos serão utilizados.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Devido ao fato de a thread pool suportar apenas 4 requisições, caso acontece de a quantidade de requisição ultrapassar o tamanho padrão da thread pool, as requisições suplentes vão para a 'Task Queue'(fila de tarefas) e aguarda até que umas das threads sejam liberadas.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Explicando que é uma maneira mais fácil, rápida e melhor para o desenvolvimento e mostrando o seu potencial citando algumas empresas que estão utilizando o Nodejs.

## Qual a versão do seu `node`?
➜  NODE_JS git:(master) ✗ node -v
v6.0.0


## Qual a versão do seu `npm`?
➜  NODE_JS git:(master) ✗ npm -v
3.8.6
