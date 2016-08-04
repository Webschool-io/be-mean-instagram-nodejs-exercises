# Node.js - Aula 01 - Exercício
**user:** [yesroh](https://github.com/yesroh)
**autor:** Ronaiza Cardoso
**date:** 1469727485264

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

O processo síncrono espera a resposta de cada operação, não realizando nenhuma outra operação enquanto não recebe tal resposata.

```js

// Código Síncrono
fs.writeFileSync('arquivo.txt', 'Hello World');
console.log('Executa a função síncrona');

```
Enquanto o processo assíncrono executa várias tarefas nunca esperando a resposta da operação.

```js

// Código Assíncrono 
fs.writeFile('arquivo.txt', 'Hello World', function(error){
    console.log('Executa a função Assíncrona');
});

```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Google criou o V8 (interpretador escrito em C++) para criar classes escondidas e assim executar o JS

[Processo de execução V8](https://www.future-processing.pl/wp-content/uploads/2015/04/threads-in-node.ja_.png)


## Qual a diferença entre um sistema single para um multi-thread?

 - single-thread não esperam um bloqueio síncrono ou uma operação de longa duração
 - multi-thread colocam os eventos na fila

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Ela aguarda até que uma thread seja liberada, enquanto isso ela ficará na idle thread esperando sua vez para ser executada

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Faria uma apresentação com os case de sucesso com a susbtituição do node pelos servidores que a minha empresa usa.

## Qual a versão do seu `node`?

```js
~$ node -v
v4.4.7
```

## Qual a versão do seu `npm`?

```js
~$ npm -v
2.15.8
```