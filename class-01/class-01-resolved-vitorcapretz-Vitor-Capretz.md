# Node.js - Aula 01 - Exercício
**user:** [vitorcapretz](https://github.com/vitorcapretz)

**autor:** Vitor Capretz
**date:** 1465753167158

## 1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

No processo síncrono, há uma espera para que o processo seja finalizado antes que outros processamentos se iniciem.

```js
// Exemplo Síncrono
fs.writeFileSync('teste.txt', 'Teste de síncrono');
console.log('Função síncrona já foi executada e finalizada antes desse disparo');

```

No processo assíncrono não há uma espera para que o processo seja finalizado, o código é responsável por enviar uma requisição, por exemplo, e ficar aguardando um sinal de que o processo foi concluído. Durante este tempo de espera outros processos são executados em paralelo.

```js
// Exemplo assíncrono (Mongoose) 
Model.findOne(query, function (err, retorno){
  console.log('Função executada e callback (retorno) disparado.');
});

```

## 2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

O V8 funciona quase que como uma máquina virtual. Ele compila o código JavaScript em linguagem de máquina para ser executado de forma mais eficiente/rápida.

![exemplo_v8](https://qph.is.quoracdn.net/main-qimg-ab2a954b51c404efe66cdc7681da6b85)

## 3. Qual a diferença entre um sistema single para um multi-thread?

O sistema single-thread trabalha com uma tarefa por vez, as tarefas posteriores deverão esperar o término das anteriores para que sejam executadas.

Quanto ao sistema multi-thread, ele funciona dividindo as tarefas no processamento, de forma a executar mais delas simultaneamente.

Exemplo: 

* Single Thread (todas as tarefas no mesmo processador)
```
Tarefa 1
Tarefa 2
Tarefa 3
Tarefa 4
Tarefa 5
Tarefa 6
```

* Multi Thread (tarefas divididas no processador)
``` 
Tarefa 1
Tarefa 2

Tarefa 3
Tarefa 4
  
Tarefa 5
Tarefa 6
```    
## 4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

No caso da requisição 5 e possíveis requisições subsequentes, estas ficariam na fila de Tasks (`Task Queue`) até que uma das outras tarefas em execução seja finalizada, liberando outro espaço na Thread Pool.

## 5. Como você venderia o peixe do Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

O Node.js já começa com a vantagem de que (muito provavelmente) o desenvolvedor já conhece Javascript, seja para validações de formulário, seja por meio da biblioteca jQuery ou por alguma outra framework front-end. Muitas aplicações hoje em dia já possuem uma API REST-ful e com isso, dados em formato de JSON sendo enviados/recebidos. Dessa forma, o desenvolvedor poderia usar Node para facilitar na "tradução" desse JSON, já que server e client-side entenderiam o mesmo tipo de objeto.

Como o Node funciona com a engine V8, que compila o código em linguagem de máquina, ele é muito rápido. E além de ser rápido, o processamento assíncrono para requisições I/O favorece a execução do código de forma mais eficaz.

O Node possui o `npm`, que é um gerenciador de pacotes com vários deles desenvolvidos pela comunidade para facilitar e disponibilizar muitos recursos para o desenvolvimento mais eficiente.

Para que a facilidade de comunicação se torne ainda melhor, há a possibilidade de usar Mongo, e com isso, você terá um sistema completo usando apenas uma linguagem de programação. Ajudando na economia de tempo e dinheiro. 

## 6. Qual a versão do seu `node`?

```
vitor@vitor-ThinkPad-T440:~$ node -v 
v6.2.0
```

## Qual a versão do seu `npm`?

```
vitor@vitor-ThinkPad-T440:~$ npm -v
3.8.9
```
