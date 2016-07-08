# Node.js - Aula 01 - Exercício
**user:** [filipe1309](https://github.com/filipe1309)  
**autor:** Filipe Leuch Bonfim  
**date:** 1455935357730

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
O Node utiliza um mecanismo interno chamado **Event Loop**, que é a parte responsável pela característica de I/O assíncrono do Node. Mas nem sempre é desejado que uma determinada tarefa seja executada de forma assíncrona. Por isso existem diversas funções nativas do Node que possuem uma contra-parte síncrona da mesma.

### processo síncrono
Quando um processo síncrono ocorre, o próximo processo terá de esperar o atual terminar, para poder então ser executado.
```js
console.log(“Olá ”);
var fs = require('fs');
fs.readFileSync('/etc/passwd');
console.log(“Arquivo lido!”);
console.log(“mundo!!!”);

// Saída
Olá
Arquivo lido!
mundo!!!
```

### processo assíncrono
Neste caso, quando um processo é executado, o próximo já pode ser executado em seguida, não necessitando esperar o atual terminar. Desta maneira, os processos terminam não necessariamente de forma linear. Assim que um processo termina, ele executa a sua respectiva função de ``callback`` , que foi passada como parâmetro.
```js
console.log(“Olá ”);
var fs = require('fs');
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(“Arquivo lido!”);
});
console.log(“mundo!!!”);

// Saída
Olá mundo!!!
Arquivo lido!
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 interpreta o código JavaScript, e o converte em linguagem de máquina para que o mesmo possa ser executado.

![NodeJs - V8](http://blog.pivotal.io/wp-content/uploads/2012/04/NodeJS-EventedIOAsyncIO_latest.png)

Fora isto existem diversos mecanismos que foram implementados no V8 com o intuito de melhorar a *performance*, como é o caso das **hidden classes**, que são classes ocultas, contendo otimizações de código, criadas internamente para os objetos em tempo de execução, e podem ser compartilhadas entre vários objetos com a mesma estrutura.

## Qual a diferença entre um sistema single para um multi-thread?

#### Single-Thread
Um sistema *single-threaded* roda em apenas um processo no sistema operacional.

Geralmente sistemas deste tipo são mais fáceis de programar e debugar, além de terem um menor **overhead** (carga, em português) de processamento em comparação a outro *multi-threaded*, pois realizam menos trocas de contexto para executar o mesmo sistema.


#### Multi-Thread
Um sistema *multi-threaded* roda em vários processos no sistema operacional.

Neste tipo de sistema há um ganho de performance, se este for executado em uma máquina com múltiplos núcleos, pois cada thread pode ser executada em um núcleo diferente, ou seja, de maneira paralela.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Neste caso, uma das requisições ficará em uma fila de requisições, aguardando terminar a primeira das 4 requisições, que conseguiram entrar na `Thread Pool`.

Mas este limite de quantidade de `threads` pode ser alterado, através da variável de ambiente UV_THREADPOOL_SIZE, bantando alterar seu valor antes que a `Thread Pool` seja criada e utilizada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Primeiramente eu destacaria o Ganho de performance, com alguns exemplos, apresentando isto em números, e depois mostraria algum caso de uso (como o do Paypal), e destacaria as empresas que já adotam esta tecnologia, como por exemplo Netflix, Linkedin, Soundcloud, Uber, Cloud9, Yahoo, Microsoft, Trello, Pagar.me, Walmart, Rdio, etc.

Então, abordaria que o foco das aplicações desenvolvidas com Node.js é de obter alta concorrência, alta escalabilidade e de criar aplicações `real-time`. E que no Node.js o
Backend e Frontend possuem mesma linguagem, permitindo uma integração total do sistema, e facilitando o desenvolvimento.

E por fim, faria um comparativo entre as linguagens já adotas na empresa, com o Node.js, apontando as vantagens e desvantagens entre estas tecnologias.

## Qual a versão do seu `node`?
```
node -v       
v5.4.0
```
## Qual a versão do seu `npm`?
```
npm -v
3.3.12
```
