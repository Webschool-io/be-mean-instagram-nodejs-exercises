# Node.js - Aula 01 - Exercício

**Autor:** Wendell Adriel Luiz Silva - [WendellAdriel](https://github.com/WendellAdriel)  
**Data:** 1454965303866


## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

- **Processo Síncrono:** Um processo síncrono mantém uma única fila de processos, sendo necessário terminar um processo
antes de se iniciar outro. Exemplo:

```js
var fs = require('fs');

// Faz leitura do primeiro arquivo por completo e escreve no console
var greeting = fs.readFileSync('./greeting.txt', 'utf8');
console.log(greeting);

// Faz leitura do segundo arquivo por completo e escreve no console
var hello = fs.readFileSync('./hello.txt', 'utf8');
console.log(hello);
```

- **Processo Assíncrono:** Um processo assíncrono não mantém uma fila única de processos e não precisa terminar um para
iniciar outro processo. Eles são executados simultaneamente, não sabendo em qual ordem serão terminados, dessa maneira os
processos precisam de um `listener` que irá disparar um `callback` quando aquele processo for concluído. Exemplo:

```js
'use strict';
var fs = require('fs');

/* Faz leitura do primeiro arquivo e define uma função de callback para ser
 * executada quando a leitura do mesmo for concluída
 */
fs.readFile('./greeting.txt', (err, result) => {
  // Caso ocorra algum erro escreve ele no console
  if (err) console.log(err);

  console.log(result.toString());
});

/* Faz leitura do segundo arquivo e define uma função de callback para ser
 * executada quando a leitura do mesmo for concluída
 */
fs.readFile('./hello.txt', (err, result) => {
  // Caso ocorra algum erro escreve ele no console
  if (err) console.log(err);

  console.log(result.toString());
});
```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 é um interpretador escrito em C++ criado pela Google e usado no Google Chrome. Sua função é melhorar o desempenho de uma aplicação JavaScript compilando o código para linguagem de máquina, fazendo assim que o mesmo rode em uma velocidade de um código binário compilado.

![V8](https://qph.is.quoracdn.net/main-qimg-ab2a954b51c404efe66cdc7681da6b85?convert_to_webp=true)

## Qual a diferença entre um sistema single para um multi-thread?

- **Single Thread:** Tem um único `caminho` de execução, porém não quer dizer que não se possa executar mais de um processo dentro da mesma `thread`. Economiza uso de memória e de processamento da CPU, pois cria apenas um único processo para todos usuários.
- **Multi Thread:** Tem diversos `caminhos` de execução, podendo executar diversos processos ao mesmo tempo. Consome mais memória e mais processamento da CPU, pois cria um processo diferente para cada usuário.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Quando são enviadas mais requisições do que a `Thread Pool` pode aguentar, as requisições restantes ficam em uma fila de espera, aguardando a liberação de um espaço na mesma.  

O valor padrão da `Thread Pool` é 4, porém esse valor pode ser alterado como podemos ver [aqui](https://github.com/joyent/libuv/blob/v0.10.19/src/unix/threadpool.c#L32).

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Mostraria casos de sucesso de grandes empresas como **Paypal** e **Netflix** e também faria uma pequena aplicação utilizando **Node.js** e a linguagem atualmente utilizada na empresa para mostrar uma comparação entre as duas.

## Qual a versão do seu node?

```
node -v
v5.0.0
```

## Qual a versão do seu npm?

```
npm -v
3.3.6
```
