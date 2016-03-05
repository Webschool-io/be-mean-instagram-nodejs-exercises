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

## Qual a diferença entre um sistema single para um multi-thread?

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

## Qual a versão do seu `node`?

## Qual a versão do seu `npm`?
