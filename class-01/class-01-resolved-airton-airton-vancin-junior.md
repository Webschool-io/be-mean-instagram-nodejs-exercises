# Node.js - Aula 01 - Exercício
**user:** [airton](https://github.com/airton)
**autor:** Airton Vancin Junior
**date:** 1455241588976

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Processo síncrono espera que cada operação seja executada por completo, depois que é executado ele passa para a operação seguinte.

```js

// Código Síncrono
fs.writeFileSync('arquivo.txt', 'Hello World');
console.log('Executa a função síncrona');

```

Processo assíncrono ele executa varias tarefas ao mesmo tempo, ele nunca espera que uma operação seja concluída, mas sim executa todas as operações.

```js

// Código Assíncrono 
fs.writeFile('arquivo.txt', 'Hello World', function(error){
    console.log('Executa a função Assíncrona');
});

```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O Nodejs roda em uma JavaScript V8 VM, ou seja, JavaScript no lado do servidor. O motor JavaScript V8 compila o códigio JavaScript para código de máquina para depois executá-lo.

![nodejs](https://cloud.githubusercontent.com/assets/397832/12302385/0ca4ffce-ba0c-11e5-9ab8-7546dc52d646.png)

## Qual a diferença entre um sistema single para um multi-thread?

PHP, Ruby, ASP entre outras linguagens server-side são "multi-thread" mas o Nodejs é "single-thread"

A single-thread não tem que esperar um bloqueio síncrono ou uma operação de longa duração. O Nodejs coloca na fila de eventos e segue em frente.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Caso seja feita 5 requisição ao banco, ela aguarda até que uma Thread seja liberada, então essa requisição será incluída em uma Idle Thread esperando sua vez de ser jogada no Thread Pool e ser executada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Citaria os cases do PayPal e Netflix que mudaram a plataforma Java para Nodejs, e ambos diminuiram o tempo e quantidade de pessoas no desenvolvimento. Assim aumentaram para o dobro o número de requisições ao serviço comparado a outra plataforma.

## Qual a versão do seu `node`?

```js
~$ node -v
v5.6.0
```

## Qual a versão do seu `npm`?

```js
~$ npm -v
3.6.0
```