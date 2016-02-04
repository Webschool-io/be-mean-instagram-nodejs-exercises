# Node.js - Aula 01 - Exercício
**user:** [augustoody](https://github.com/AugustoOdy)
**autor:** Augusto Ody
**date:** 1454431830404

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Em um processo assíncrono, a função recebe uma função callback para que após sejá executado o processo, seja chamada está função, causando assim o não travamento da aplicação pra sua execução.

```js
var fs = require("fs");

fs.readFile("myfirstexample.txt", "utf8", function(error, data) {
  console.log(data);
});
```

Já no síncrono, a execução espera para que seja feito todo aquele processo, não possibilitando outras ações. Como no exemplo, após iniciar a leitura, toda ela deve ser feita para que então seja passado para próxima linha e executado um `console.log()`.

```js
var fs = require("fs");

var data = filesystem.readFileSync("myfirstexample.txt", "utf8");

console.log(data);
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

Com a single thread do V8, é executado o Event loop, que ainda serve todos o usuários. A parte de I/O é passada para a `libeio` (susbtituida agora pela `libuv`), que pode acaba retornando os dados necessários.

![NodeJs Architecture](http://blog.pivotal.io/wp-content/uploads/2012/04/NodeJS-EventedIOAsyncIO_latest.png)

## Qual a diferença entre um sistema single para um multi-thread?

**Single Thread :** As requisições são lançadas em uma única thread, gerando uma fila para sua execução, gerando um processamento mais rápido.
**Multi Thread :** Cada requisição gera uma nova thread, diferentemente da Single, podendo assim então gerar mais processamento.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Segunda a documentação da `libuv`, o tamanho *default* da Thread Pool é 4, porem podendo ser alterado para até o máximo de 128. No caso de enviado mais requisições que o valor suportado, as requisições ficam aguardando para que uma "vaga" seja liberada, para a sua execução.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostraria os cases do Paypal e Netflix, aonde a performance, o número de programadores, e a velocidade de desenvolvimento foram melhoradas, incluindo ainda o fato da possibilidade de unir mais a equipe do front-end e do back-end, se não cabar juntando-as para um melhor aproveitamento da tecnologia.

## Qual a versão do seu `node`?
```sh
$ node -v
v5.2.0
```

## Qual a versão do seu `npm`?
```sh
$ npm -v
3.3.12
```
