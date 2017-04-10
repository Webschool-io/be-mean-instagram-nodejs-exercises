#Node.js - Aula 01 - Exercício

##1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.


De forma geral um processamento síncrono é uma fila única de processos, ou seja, um novo processo só começa quando o atual termina.
Já no processamento assíncrono não existe essa fila única, após responder a requisição de um processo o mesmo se inicia e o próximo já é atendido e iniciada execução, trazendo ganhos enormes de desempenho e eficiência. Para que seja gerenciado o termino dos processos, que não vai ocorrer na mesma ordem que foram iniciados, cada processo possui um callback que ao terminar o dispara, seu término é tratado como se deve e é dada continuidade ao processos.

Abaixo exemplos de uma execução síncrona e uma assíncrona de leitura de arquivos.

**Síncrona:**

```js
var fs = require('fs');
var conteudo = fs.readFileSync('./arq.txt', "utf8");
console.log(conteudo);
console.log('Leitura do primeiro arquivo terminou');
console.log('Ler próximo arquivo');
```

Retorno da execução:
> "1. Primeira linha do primeiro arquivo"
> "2. Segunda linha do primeiro arquivo"
> "3. Terceira linha do primeiro arquivo"
> "4. Quarta linha do primeiro arquivo"

> "Leitura do primeiro arquivo terminou"
> "Ler próximo arquivo"

**Assíncrona**

```js
'use strict'
var fs = require('fs');
fs.readFile('./index.txt',(err, result) => { //err e result são os callbacks de falha e sucesso, respectivamente
    if(err) console.log(err);
    console.log(result.toString());
    console.log('Leitura do primeiro arquivo terminou');
})
console.log('Ler próximo arquivo');
```
Retorno da execução:
> "Ler próximo arquivo"
> "1. Primeira linha do primeiro arquivo"
> "2. Segunda linha do primeiro arquivo"
> "3. Terceira linha do primeiro arquivo"
> "4. Quarta linha do primeiro arquivo"
> "Leitura do primeiro arquivo terminou"

Como foi possível notar, na execução síncrona só foi iniciada a leitura do próximo arquivo após acabar a leitura do primeiro, já na assícrona a leitura do próximo arquivo foi iniciada antes mesmo da leitura de cada linha do primeiro.

##2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.


Application => V8 => Node API => EVENT LOOP => WORKER THREAD / Retorna o Callback => EVENT LOOP => Node API => V8 => Application.


##3. Qual a diferença entre um sistema single para um multi-thread?


**Single-thread** Apenas uma tarefa pode ser feito em um tempo e o programa espera até que uma tarefa é concluída antes de iniciar outra.

**Multi-thread** Aplicações multi-thread permitem que você execute várias threads ao mesmo tempo, cada uma executando uma etapa por exemplo.



##4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?


A quinta requisição vai para o Idle Thread, e espera até ser colocada no thread pool. Digamos que a primeira requisição foi executada, então a quinta requisição poderá ir para o thread pool.

##5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Sei do que estou falando. Faz com Node!

##6. Qual a versão do seu node?

v6.3.1

##7. Qual a versão do seu npm?

3.3.12
