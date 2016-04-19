# Node.js - Aula 01 - Exercício
**user:** [souzacristsf](https://github.com/souzacristsf)<br/>
**autor:** Michel Ferreira Souza<br/>
**date:** 1457272367278<br/>

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

**Sync:** no processo síncrono temos que aguarda a execução de um por um, nesse caso para a execução de varias tarefas, temos que aguardar o processo final de cada um.
```js
var fs = require('fs'); 
var file = "síncrono.txt"; 
fs.writeFileSync(file, "Hello Node.js!"); 
console.log("Criando arquivo sincrono: " + file);
```

**Async:** no processo assíncrono, não temos que ficar aguardando, pois enquanto a tarefa é realizada a proxima tarefa é chamada e assim por diante.
```js
var fs = require('fs'); 
var file = "síncrono.txt"; 
fs.writeFile(file, "Hello Node.js!", function(err, out) { 
    console.log("Criando arquivo assincrono: " + file); 
}); 
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
V8 é uma ferramenta desenvolvida na linguagem C++ e open source. O `v8` compila o código javaScript para o formato nativo de máquina antes de executá-lo, obtendo uma grande performance.<br/>
![V8](https://qph.is.quoracdn.net/main-qimg-ab2a954b51c404efe66cdc7681da6b85?convert_to_webp=true)

## Qual a diferença entre um sistema single para um multi-thread?
**multi-thread:** varios processos criado.<br/>
**single-thread:** apenas um processo.
## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
A `libuv` tem um tamanho de *threads pool* padrão de 4, e se dispõe de uma fila para gerenciar o acesso a thread pool. O interessante é que se você tem 5 requisição de consulta ao banco e todos indo ao mesmo tempo, um deles e qualquer outra ação assíncrona estará esperando por essas consultas para começar seu processo.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Primeiramente, mostrar quais empresas estão adotando essa nova ferramenta e em seguida comparar e implementar alguns testes de exemplo em relação ao produto da organização.

## Qual a versão do seu `node`?
```js
michel@souzacrists:~$ node -v
v5.0.0
```
## Qual a versão do seu `npm`?
```js
michel@souzacrists:~$ npm -v
3.3.6
```

