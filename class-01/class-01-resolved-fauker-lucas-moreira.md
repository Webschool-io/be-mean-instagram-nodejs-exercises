# Node.js - Aula 01 - Exercício

**user:** [fauker](https://github.com/fauker)

**autor:** LUCAS DA SILVA MOREIRA

**date:** 1449700152468

## Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

**Síncrono**: No processo síncrono apenas uma função será executada por vez. Fazendo uma analogia com o mundo real, pense na fila do **Mc Donalds** que tem apenas um caixa disponível. Apenas um cliente será atendido por vez criando uma fila imensa e desagradável.

**Assíncrono**: No processo assíncrono várias funções são executadas por vez. Nunca sabemos quem terminará primeiro. Por isso, se quisermos executar algo quando uma função chegar ao seu fim, temos de fazer isso através de um **callback**. Exemplo:

```
fs.readFile('arquivo.txt', function(data) {
	// faz algo
});
```

Fazendo uma analogia com o mundo real e processos assíncronos, pense na mesma fila do **Mc Donalds** mas com vários caixas funcionando. Muitos usuários são atendidos por vez.

## Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

![v8](https://github.com/fauker/be-mean-instagram-nodejs/blob/master/images/v8-code.png)

## Qual a diferença entre um sistema single para um multi-thread?

Em um sistema que suporta apenas Single Thread, apenas uma tarefa será executada por vez, caso as tarefas sejam síncronas. E, enquanto uma tarefa está sendo executada, todo o sistema para esperando essa Thread terminar. Ou seja, o processamento é bloqueado. 

Já em um sistema Multi-Thread, se uma Thread estiver sendo executada, outra Thread pode ser criada para que o processamento não seja bloqueado.

## Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

Caso seja feita a quinta requisição ao banco, essa requisição será incluída no **Idle Thread** esperando sua vez se ser jogada no **Thread Pool** e ser executada.

## Como você venderia o peixe do **Node.js** na sua empresa para tentar convencer seu chefe da sua adoção?

Bom, eu defenderia os casos de sucesso de empresas que adotaram o **Node.js**, como o Paypal, Netflix etc. Também eu poderia fazer a mesma aplicação que hoje está em produção, só que em Nodejs e comparar os ganhos. Com o argumento da comparação de ganhos eu acho que qualquer chefe, investidor ficaria convencido.

## Qual a versão do seu `node`?

```
node -v
v5.0.0
```

## Qual a versão do seu `npm`?

```
npm -v
3.3.6
```