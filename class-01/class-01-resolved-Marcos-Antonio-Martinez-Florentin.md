# Node.js - Aula 01 - Exercício
**user:** [marks88martinez](https://github.com/marks88martinez)
**autor:** Marcos Antonio Martinez Florentin
**date:** 1457436489971

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

O processo Síncrono realiza uma operacao de execuca, depois da execucao pasa a siguiente operacao

```js

var fs = require('fs');
fs.writeFileSync('/path', function(err, buf) {
  console.log('Codigo Sincrono');
});


```

Processo assíncrono ele executa varias tarefas ao mesmo tempo, ele nunca espera que uma operação seja concluída, mas sim executa todas as operações.

```js

fs.writeFile('/path', function(err, buf){
    console.log('Codigo Assincrono');
});

```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O Motor de V8 do google compila o javascript en eventos nao bloqueante, 
todos os codigos se executan en un unico thread.

http://image.slidesharecdn.com/betabeers-mean-140329120323-phpapp01/95/full-stack-javascript-mean-betabeers-zgz-6-638.jpg?cb=1396094667

## Qual a diferença entre um sistema single para um multi-thread?

**single-thread** o processo de thread nao espera un bloqueio sicrono o uma operacao de duracao . o nodejs coloca na fila de eventos. 

**multi-thread** a cada requisicoes sao feitas en uma Thread pode assim entao gerar mais processos..



## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

ele va facer as 4 requisicao e o 5to fica no  _Idle Thread_  aguardando que un seja liberado das 4 primeiras, na sequencia ele e jogado no _Thread Pool_ para ser executado

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Nodejs es uma plataforma rapida utilizando tecnoligia actuais donde o crecimento en posibilidades sao amplias.
as impresa que utilizan sao de exito total como PayPal e Nexflix que ao implementar  diminuira o tempo no desenvolvimento. Assim aumentaram para o dobro o número de requisições ao serviço comparado a outra plataforma


## Qual a versão do seu `node`?

```js
~$ node -v
v5.4.1
```

## Qual a versão do seu `npm`?

```js
~$ npm -v
3.3.12
```
