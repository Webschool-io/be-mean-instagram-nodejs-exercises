# Node.js - Aula 01 - Exercício
**autor:** Geriel Castro


## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
####Processo Assíncrono
Um processo assíncrono consegue executar tarefas simultâneas. Após o processo finalizar, uma função de _callback_ deverá ser chamada.
Um detalhe importante sobre assincronismo é que, na maioria dos casos, os callbacks possuem como parâmetro uma variável de erro, que serve para impedir a execução dos callbacks subsequentes, caso haja algum problema.
```
function bar(){
    console.log("Default: Hoegaarden");
}
function garcom(){
    setTimeout(bar, 0);
    console.log("Garçom? Me traz uma cerveja por favor!");
    console.log("...");
}
garcom();
```

####Processo Síncrono
Processo executado apenas quando o seu antecessor finalizar. Como uma fila (Primeiro a entrar é o primeiro a sair, depois é chamado o próximo) é basicamente isso.
O primeiro a ser executado precisa finalizar o processo para executar o segundo e assim sucessivamente.
```
function garcom(){
    console.log("Garçom? Me traz uma cerveja por favor!");
}
function bar(){
    console.log("Default: Hoegaarden");
}
garcom();
bar();
```

<img src="http://i.stack.imgur.com/SFYbr.jpg" />


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
Ele interpreta o código JavaScript e o executa. O V8 é um interpretador escrito em C++ pelo Google no qual é possível integrá-lo em qualquer aplicativo. Assim, ele não fica restrito apenas ao navegador, e pode ser executado no servidor.

<img src="http://runtimejs.org/jsconf/img/runtimejs-arch.png" />


## Qual a diferença entre um sistema single para um multi-thread?
Um sistema _Single Thread_ é capaz de executar apenas uma tarefa por vez. Enquanto a tarefa é executada, todo o sistema aguarda que a _thread_ finalize para que possa seguir adiante.

Um sistema _Multi Thread_ consegue executar várias tarefas simultaneamente. Cada solicitação vira uma _thread_ e o servidor consegue trabalhar com ela isoladamente, sem intereferir nas outras.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Neste caso, a quinta requisição ficara no _Idle Thread_ aguardando a liberação de uma das quatro primeiras. Na sequência, ela é jogada para a _Thread Pool_ para ser executada.


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Acredito que a melhor forma de convencer seria mostrando as vantagens que traria a empresa ao adota-lo. Mostraria tambem algumas empresas que possivelmente ja estão utilizando e como vem ajudando no desenvolvimento rapido e com menos custo.

## Qual a versão do seu `node`?
```
MacBook-Air-de-Geriel:be-mean-instagram-nodejs-exercises geriel$ node -v
v5.0.0
```

## Qual a versão do seu `npm`?
```
MacBook-Air-de-Geriel:be-mean-instagram-nodejs-exercises geriel$ npm -v
3.3.12
```
