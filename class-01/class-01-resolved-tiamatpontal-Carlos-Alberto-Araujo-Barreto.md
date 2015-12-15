# Node.js - Aula 01 - Exercício
autor: Carlos Alberto de Araujo Barreto

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Por padrão no node as funções são assíncronas, assim ele trabalha comcall backs pós finalização de processamento dos processos assíncronos.
Abaixo serão listados exemplos dos dois casos.

### Síncrono 
A tarefa é executada de maneira que deixa a thread "presa" na sua execução, enquanto não finalizar essa tarefa a thread não é liberada.
Exemplo: 
```
var arquivo = require("fs");
// Abaixo a função readFileSync lê completamente o conteúdo do arquivo e então exibe os dados via console
// Como essa função é síncrona o sistema só passa para a próxima linha de código quando terminar de ler completamente o arquivo.
var data = arquivo.readfileSync("exemplo.txt", "utf8");
console.lod(data);

```

### Assíncrono
A tarefa é executada de forma paralela, assim várias tarefas são executadas "simultaneamente". Como o node usa uma Thread somente as tarefas são executadas numa fila 
chamada event loop onde cada tarefa é executada em um determinado tempo, não deixando a thread presa a tarefa.
Exemplo: Função Assíncrona de leitura de arquivo
```
var arquivo = require("fs");
// Abaixo o módulo de sistema de arquivos pega o nome do arquivo, os dados de referencia para o callback handler
// da função anonima. Então o objeto do sistema estará apto para processar qualquer outra operação
arquivo.readFile("exemplo.txt", "utf8", function(error, data) // Aqui o módulo de sistema de arquivos
{
  console.log(data);
});
```

## Como o V8 executa JavaScript? Demonstre um exemplo com código ou imagem

O V8 compila o código de javascript para código nativo de máquina para depois executá-lo.
![Funcionamento do V8](http://image.slidesharecdn.com/sdp-nodejsfornetdev-150604162643-lva1-app6891/95/nodejs-workshop-sela-sdp-2015-19-638.jpg?cb=1433435429)

## Qual a diferença entre um sistema single thread para um multi-thread

A thread é responsável por executar tarefas, e uma thread pode apenas executar uma thread por vez(single thread).
No caso da multi-thread existem várias threads capazes de executar várias tarefas ao mesmo tempo.

## Como a thread pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Como a thread pool funciona como uma fila cíclica, a 5 requisição só será executada após uma das 4 threads terminar de executar.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Defendendo as características marcantes do node:
1 - Modularização de seus componentes
2 - Usa a javascript engine V8
3 - Possui um tempo de resposta rápido para volume de requisições entrada/saída
4 - Alta escalabilidade
5 - Alto desempenho com requisições assíncronas

## Qual a versão do seu node?
```
root@carlos-VirtualBox:/home/carlos# node -v
v5.2.0
```

## Qual a versão do seu npm?
```
root@carlos-VirtualBox:/home/carlos# npm -v
3.3.12
```
