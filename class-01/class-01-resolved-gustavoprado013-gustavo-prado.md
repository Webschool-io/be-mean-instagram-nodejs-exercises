# NodeJS - Aula 01 - Exercício
autor: Gustavo Prado

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

FORMA SÍNCRONA

Em NodeJS, os processos sincronos são bloqueantes. Portato, se existir outros processos
ou códigos a serem executados, o NodeJS aguarda o término do anterior para executar o próximo.

```js

var fs = require( 'fs' );
for (var i = 0; i <= 5; i++) {
  var file = 'sync-txt' + i + '.txt'
    , out = fs.writeFileSync(file, 'Hello Node.js!');
    console.log(out);

}
```

Esta abordagem irá parar a execução do restante dos processos até que a tarefa seja concluída.

FORMA ASSÍNCRONA

A forma assíncrona por outro lado, executa os processos de forma paralela.

```js

var fs = require( 'fs' );

for (var i = 0; i <= 5; i++) {
  var file = 'async-txt' + i + '.txt'
    , fs.writeFile(file, 'Hello Node.js!', function (err, out) {
      console.log(out);
    });
}
```

Esta abordagem voltará imediatamente para não bloquear o restante dos processos.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8, engine do NodeJS, interpreta e compila a linguagem JS para C++, convertendo para funções do V8,
permitindo a execução em código nativo.

## Qual a diferença entre um sistema single para um multi-thread?

Thread é uma forma de um processo dividir a si mesmo em duas ou mais tarefas que podem ser executadas concorrencialmente.
O suporte à thread é fornecido pelo próprio sistema operacional, ou implementada através de uma biblioteca de uma determinada linguagem.

Uma thread permite, por exemplo, que o usuário de um programa utilize uma funcionalidade do ambiente enquanto outras linhas de execução realizam outros cálculos e operações.

O node utiliza apenas uma thread para executar suas tarefas, podendo outras serem criadas, desta forma economizando memória. Portanto ele não precisa criar um novo processo para cada novo usuário poupando CPU.

Enquanto um sistema multi-thread utiliza várias threads para executar suas tarefas e desta forma acaba consumindo muito mais seus recursos computacionais, tais como: memória, cpu, etc.

Um bom exemplo é o Apache, que é um servidor HTTP multi-threaded. Para cada pedido que o servidor recebe ele cria uma thread separada que lida com esse pedido.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A quinta requisição aguarda a liberação de uma thread para ser executada.

De acordo com a  documentação  da LIBUV, o tamanho padrão da thread pool é 4, mas pode ser alterado em tempo na inicialização, definindo a variável de ambiente UV_THREADPOOL_SIZE para qualquer valor, sendo o máximo 128.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Enfatizando as principais qualidades do NodeJS, como:

Permite criar aplicações de rede rápidas e altamente escaláveis;
As aplicações em NodeJS executam em uma única thread;
É assíncrono e baseado em eventos;
Utiliza o modelo de I/O não bloqueante;
Economia de recursos, financeiros e computacionais;
É possível trabalhar com uma mesma linguagem base, o JS, o que acaba por criar profissionais fullstack;

## Qual a versão do seu NodeJS?

```
gustavo@gustavo-Inspiron-3442:~$ node -v
v5.6.0
```

## Qual a versão do seu NPM?

```
gustavo@gustavo-Inspiron-3442:~$ npm --version
3.6.0
```
