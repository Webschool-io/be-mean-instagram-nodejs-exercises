# Node.js - Aula 01 - Exercício
**user:** [PabloDinella](https://github.com/PabloDinella/)
**autor:** Pablo Rocha Dinella
**date:** 1453989977071

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo síncrono é quando um conjunto de tarefas (funções) são chamadas e são executadas uma por vez, então a próxima tarefa tem que esperar a primeira terminar.

### Exemplo

```
var foo = $.getSync('//foo.com');
var bar = $.getSync('//bar.com');
var qux = $.getSync('//qux.com');

console.log(foo);
console.log(bar);
console.log(qux);
```

Já o processo assíncrono é quando um conjunto de tarefas são executadas, e o stack manda a tarefa para a webapi com um callback, e já executa a próxima sem esperar pela primeira. Quando a webapi termina a tarefa ela manda o callback para o task queue, e daí o event loop pega o callback e manda pro stack (quando este estiver vazio).

### Exemplo

```JavaScript
console.log("Isso");

setTimeout(function(){
	console.log('assíncrono');
}, 5000);

console.log('é');

// Isso
// é
// assíncrono
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 compila o JavaScript para formato nativo de máquina para rodar mais rápido.

![JavaScript](img/javascript.png)

## Qual a diferença entre um sistema single para um multi-thread?

O multi-thread cria diversos processos, o single-thread não.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição fica numa idle thread até o event loop poder mandar ela pro stack.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Apresentaria cases de grandes empresas que migraram para o nodejs.

## Qual a versão do seu `node`?

```
╭─owner@Pablos-MacBook-Air  ~/Projetos/be-mean/be-mean-instagram-nodejs ‹›
╰─$ node -v                                                                                                              v5.5.0
```

## Qual a versão do seu `npm`?

```
╭─owner@Pablos-MacBook-Air  ~/Projetos/be-mean/be-mean-instagram-nodejs ‹›
╰─$ npm -v
3.3.12
```
