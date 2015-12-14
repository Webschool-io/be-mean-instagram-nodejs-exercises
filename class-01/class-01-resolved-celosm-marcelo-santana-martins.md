# Node.js - Aula 01 - Exercício
**user:** [celosm](https://github.com/celosm)
**autor:** Marcelo Santana Martins
**date:** 1450083112501

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
###Processo Síncrono
Um processo síncrono é executado sozinho, ou seja, quando a aplicação solicita a execução de vários processos, eles são executados apenas quando o seu antecessor finalizar.
```
var fs = require('fs');
var contents = fs.readFileSync('https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json').toString();
console.log(contents);
```

###Processo Assíncrono
Um processo assíncrono consegue executar mais do que uma tarefa simultaneamente. Após o processo finalizar, uma funcção de _callback_ deverá ser chamada.
```
var fs = require('fs');
fs.readFile('https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json', function(err, buf) {
  if(err)
    throw err;

  console.log(buf.toString());
});
```

<img src="https://blognti.files.wordpress.com/2010/07/requisicoes1.jpg" />


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
Ele interpreta o código JavaScript e o executa. O V8 é um interpretador escrito em C++ pelo Google no qual é possível integrá-lo em qualquer aplicativo. Assim, ele não fica restrito apenas ao navegador, e pode ser executado no servidor.

<img src="http://runtimejs.org/jsconf/img/runtimejs-arch.png" />


## Qual a diferença entre um sistema single para um multi-thread?
Um sistema _Single Thread_ é capaz de executar apenas uma tarefa por vez. Enquanto a tarefa é executada, todo o sistema aguarda que a _thread_ finalize para que possa seguir adiante.

Um sistema _Multi Thread_ consegue executar várias tarefas simultaneamente. Cada solicitação vira uma _thread_ e o servidor consegue trabalhar com ela isoladamente, sem intereferir nas outras.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Neste caso, a quinta requisição ficara no _Idle Thread_ aguardando a liberação de uma das quatro primeiras. Na sequência, ela é jogada para a _Thread Pool_ para ser executada.


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Acredito que a melhor forma de convencer a adoção do Node.Js seria expondo suas vantagens. Mostrando também quais grandes empresas utilizam a tecnologia (Walmart, Ebay, Linkedin, Paypal, etc) e como um mesmo sistema seria desenvolvido em um prazo e custo menores.


## Qual a versão do seu `node`?
```
marcelo@marcelo-VirtualBox:~$ node --version
v5.0.0
```

## Qual a versão do seu `npm`?
```
marcelo@marcelo-VirtualBox:~$ npm --version
3.3.6
```
