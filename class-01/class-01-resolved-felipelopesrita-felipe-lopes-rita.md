# Node.js - Aula 01 - Exercício
**user:** [felipelopesrita](https://github.com/felipelopesrita)
**autor:** Felipe José Lopes Rita
**date:** 1455900905381

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
Processos síncronos são processos que seguem uma sincronia, isso é, processos que seguem uma order de execução e que realiza outro processo apenas após o término de um processo. Isso significa que cria-se uma espécie de fila de execução de processos, o que além de consumir uma memórica considerável, pode ocasionar lentidão na execução e resposta, uma vez que funções podem demorar a serem executadas.
Como exemplo de função síncrona, temos:
```js
// Faz a leitura do arquivo e escreve no console de maneira sequencial
var oi = fs.readFileSync('./oi.txt', 'utf8');
console.log(oi);
```
Funções assíncronas, por sua vez, executam processos simultaneamente, executando funções e processos paralelos ao mesmo tempo. Isso significa que numa fila com 4 processos a serem executados, por exemplo, meu motor executaria os 4 processos ao mesmo tempo, o que garante uma agilidade redução do consumo da memória.
Como os processos são rodados em paralelo, para definir o que será feito depois que o processo é concluído, utilizam-se callbacks, ou seja, funções que fazem alguma coisa depois que o processo terminou.
Abaixo, segue um exemplo que função assíncrona em javascript:
```js
/* Define um callback  a ser executado depois que a função é executada */
fs.readFile('./oi.txt', (err, result) => {
  // Caso ocorra algum erro escreve ele no console
  if (err) console.log(err);
  console.log(result.toString());
});

```

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
O V8 é um motor desenvolvido pelo Google e também utilizado no Chrome que interpreta códigos de javascript e os compila para códigos nativos da máquina (instruções e comandos) para só depois executá-los.
Open source e escrito em C++, é um dos principais fatores que possibilitam a existência do Node.Js
Como demonstra a imagem abaixo, o V8 é responsável pelo eventloop, trabalhando de forma assíncrona e traduzindo o código javascript para as threads.
!['Imagem V8'](http://blog.gopivotal.com/wp-content/uploads/2012/04/NodeJS-EventedIOAsyncIO_latest.png)

## Qual a diferença entre um sistema single para um multi-thread?
Em aplicações multi-thread, diversas threads são criadas para cada processo que deseja-se executar, o que demanda considerável quantidade de memória e processamento. Visando agilizar e reduzir o consume de memória, foram criadas as aplicações single thread, que utilizam apenas uma thread para executar seus processos de maneira assíncrona.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Antes de serem enviadas à Thread Pool, as requisições ficam "presas" em um event-loop. Com isso, dado esse exemplo, enquanto as 4 requisições são executadas na Thread Pool, a requisição restante aguarda no event loop até que um "espaço" seja liberado para que sua requisição possa ser atendida.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
Acredito que a principal maneira de convencer um chefe é apresentando números e casos distintos sobre empresas que utilizam node em seus sistemas (como Netflix e Paypal, citados na aula), além de gráficos comparativos com as linguagens utilizadas na empresa em que me encontro.

## Qual a versão do seu `node`?
`v5.5.0 `
## Qual a versão do seu `npm`?
`3.6.0`