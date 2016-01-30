# Node.js - Aula 01 - Exercício
**user:** [gkal19](https://github.com/gkal19)
**autor:** Gabriel Kalani
**date:** 1454162282817

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.
**Processo síncrono** é executado apenas uma função por vez e em um **processo assíncrono**, é possível executar várias funções por vez.

![Exemplo](https://blognti.files.wordpress.com/2010/07/requisicoes1.jpg)


## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.
Na aula do Tio Suissa, vemos que o V8 é o motor de JavaScript da Google que possui bibliotecas que ajudam no Gerenciamento dos Processos.
Ou seja ele é como um interpretador do JavaScript.
Seu código é compilado para formato nativo de máquina para rodar mais rápido.

![Exemplo](https://github.com/Webschool-io/be-mean-instagram-nodejs-exercises/blob/master/class-01/img/javascript.png)

## Qual a diferença entre um sistema single para um multi-thread?
No **Single Thread** é executado apenas uma tarefa por vez. Já no **Multi Thread** são executadas varias tarefas simultaneamente.


## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?
Em casos com este, a quinta requisição irá aguardar a liberação de uma das quatros primeiras.
Apos 1 das quatro ser executada, a quinta requisição é mandada para a **Thread Pool**, para ser executada.

## Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?
É simples, só dizer que foi o @suissa que mandou hahaha Brincadeira...
Acredito que a melhor forma seria apresentando `cases` de empresas que migraram para o Node.JS

## Qual a versão do seu `node`?
```
gkal19:~/workspace $ node --version
v4.2.4
```

## Qual a versão do seu `npm`?
```
gkal19:~/workspace $ npm --version
n2.14.12
```
