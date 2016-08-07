# Node.js - Aula 01 - Exercício
**user:** [lesilva00](https://github.com/lesilva00)
**autor:** Luís Eduardo Tenório Silva

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Um processo **síncrono** é executado seguindo uma lógica sequencial onde é necessário o término do processo para que um novo processo seja executado, similar a uma fila de execução.

### Exemplo de execução síncrona usando o NodeJS:

```js

var fs = require("fs");
var data = fs.readFileSync('/tmp/ex.txt');
console.log(data.toString());

// Executando o node no servidor
$ node sincrono.js
Arquivo txt.
```
Um processo **assíncrono** permite que novos processos sejam executados sem o término do processo atual, eliminando o comportamento de lógica sequencial. Isso significa dizer que o Node.js é uma arquitetura não bloqueante. O diferencial do Node.js a outros servidores web é que ele é projetado para funcionar principalmente de maneira assíncrona, e isso é dado através do uso da biblioteca _libuv_, uma das principais bibliotecas do Node.js. 

### Exemplo de execução assíncrona usando o NodeJS:

```js

var fs = require('fs');
// A função readFile() do módulo fs é por padrão
// assíncrona, ou seja, é executada sem bloquear
// nenhum outro processo. Após o término da 
// leitura, uma função de Callback é invocada.
var data = fs.readFile('/tmp/ex.txt', function(err,data){
   if(err)
      return console.error(err);
   console.log(data.toString());
});


// Executando o node no servidor
$ node sincrono.js
Arquivo txt.
```


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 é um motor de interpretação de JavaScript desenvolvido em C++ pela Google como motor principal do [Chrome](https://www.google.com/chrome/). Atualmente, outros projetos de browsers implementam o V8 como principal motor javascript devido a sua alta performance (Ex: Opera, Chromium, etc). Basicamente o V8 funciona compilando um código javascript em código de máquina, permitindo executar o código final como um binário, garantindo assim uma boa performance. A imagem abaixo demonstra o funcionamento de um motor de compilação do código em JavaScript para código de máquina.

![Funcionamento do motor V8](https://qph.ec.quoracdn.net/main-qimg-ab2a954b51c404efe66cdc7681da6b85?convert_to_webp=true)

## Qual a diferença entre um sistema single para um multi-thread?

Um sistema **_multi-thread_** executa cada solicitação de um cliente em uma _thread_, criando assim diversas threads (também denominada pool de _threads_) para atender diversos usuários. Alguns exemplos de servidores que utilizam o modelo de sistemas em _multi-thread_ são o Apache e JSP. Esses sistemas possuem uma arquitetura onde várias _threads_ são pré-alocadas e ficam no aguardo de solicitações de usuários. Dessa maneira recursos como memória e processamento não são bem aproveitados.

Um sistema **_single-thread_** executa as solicitações dos clientes em uma única _thread_. O Node.js é um exemplo de sistema web que trabalha de modo _single-thread_. Cada solicitação recebida gera um evento que é processado por uma única thread denominada _Event-loop_ que observa de maneira cíclica uma fila de eventos. Quando um evento ocorre, o _Event-loop_ captura-o e executa uma função de Callback definida naquele evento. Essa função é executada de maneira assíncrona (embora possa ser executada de maneira síncrona) em um _pool_ de _threads_ pré especificado. Embora existam um conjunto de _threads_ para a execução de eventos, a captura dos eventos é realizada por uma _single-thread_.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?


Embora o tamanho padrão do _Thread Pool_ seja 4, pode-se alterar o número de _threads_ utilizadas para até 128 _threads_ (através da variável de ambiente `UV_THREADPOOL_SIZE`) ou em tempo de execução através do comando `process.env.UV_THREADPOOL_SIZE`. Quando o valor de requisições é maior que o número disponível de _threads_ no _Thread Pool_, as solicitações que não foram atendidas esperam na fila de _threads_ (_Task Queue_) até que uma thread do _Thread Pool_ esteja disponível.


## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Primeiramente faria uma pequena apresentação do que é o Node.js e suas principais diferenças quando comparado com outros modelos de servidores web disponíveis no mercado.

Após isso, apresentaria números de performance em comparação a outros servidores, número de desenvolvedores necessários para realizar um determinado projeto, número de desenvolvedores necessários para manter o projeto, nível de complexidade(número de arquivos e linhas de código) e curva de aprendizado (se necessário).

Para finalizar apresentaria os casos de sucesso da implantação do Node.js e as principais empresas que migraram seus servidores para essa nova tecnologia (ex: PayPal e Netflix) e suas principais opiniões.

## Qual a versão do seu `node`?

Versão LTS (2016)
```
ubuntu@ubuntu:~$ node -v
v4.4.7

```

## Qual a versão do seu `npm`?

```
ubuntu@ubuntu:~$ npm -v
2.15.8

```

