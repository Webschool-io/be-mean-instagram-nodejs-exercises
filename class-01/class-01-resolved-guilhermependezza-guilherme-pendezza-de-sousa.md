# Node.js - Aula 01 - Exercício

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Um processo síncrono no nodejs bloqueia a execução do programa até que a função retorne para continuar o processamento.

Ex.: 

var fs = require('fs');

var texto = fs.readFileSync('/etc/passwd');
...
outros comandos...
...

Os outros comandos depois da leitura do arquivo, terão de esperar o término da execução.

No caso de um processo assíncrono, o fluxo do programa segue e a função assíncrona recebe um callback que será executado ao término do processo.

Ex.:

var fs = require('fs');

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 compila o código JS para código da máquina, que pode sofrer otimização e re-otimização durante o tempo de execução, de acordo com as estatísticas de execução

Exemplo de execução
http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/dbd951/introduction-to-nodejs-a-ssjs-part-ii-eventloop-explaine/Images/NodeJS%20EventLoop.jpg


## Qual a diferença entre um sistema single para um multi-thread?
Um sistema multi-thread inicia um processo para cada nova requisição. Um single thread executa uma tarefa por vez. O node passa por essa limitação mantendo uma thread pool interna que se encarrega de executar o processo e disparar um evento no término. Isso reduz o overhead da criação de exclusão das threads de um sistema multi-thread.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
A quinta requisição ficara na fila de execução esperando até que um processo libere uma thread.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Para vender o node eu citaria vários pontos positivos: Comunidade ativa, ampla documentação, arquitetura que consome muito menos memória que o .net e java e, finalmente, os casos de sucesso do Netflix e PayPal.

## Qual a versão do seu `node`?
$ node -v
v5.5.0

## Qual a versão do seu `npm`?
$ npm -v
3.3.12
