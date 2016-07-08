# Node.js - Aula 01 - Exercício
**user:** [marks88martinez](https://github.com/marks88martinez)
**autor:** Marcos Antonio Martinez Florentin
**date:** 1457436489971

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

O processo Síncrono realiza uma operação de execução, depois da execução passa a seguinte operação

```js

var fs = require('fs');
fs.writeFileSync('/path', function(err, buf) {
  console.log('Codigo Sincrono');
});


```

Processo assíncrono executa várias tarefas ao mesmo tempo, ele nunca espera que uma operação seja concluída, mas sim executa todas as operações.


```js

fs.writeFile('/path', function(err, buf){
    console.log('Codigo Assincrono');
});

```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O Motor de V8 do google compila o javascript em eventos não bloqueante,
Todos os códigos se executam em um única thread.

http://image.slidesharecdn.com/betabeers-mean-140329120323-phpapp01/95/full-stack-javascript-mean-betabeers-zgz-6-638.jpg?cb=1396094667

## Qual a diferença entre um sistema single para um multi-thread?

**single-thread** O processo de thread não espera um bloqueio síncrono, ou uma operação de duração. O nodejs coloca na fila de eventos.


**multi-thread** A cada requisição saô feitas em uma Thread pode assim então gerar mais processos.




## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Ele vá fazer as 4 requisições e o 5to fica no _Idle Thread_ aguardando que um seja liberado das 4 primeiras, na seqüência ele e jogado no _Thread Pool_ para ser executado


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Nodejs é uma tecnología ágil e atual, possibilitando amplo crescimento.

As empresas que a utilizam são de êxito total, como PayPal e Nexflix que ao implementar diminuíram o tempo no desenvolvimento. Assim aumentaram para o dobro o número de requisições ao serviço comparado a outra plataforma.


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
